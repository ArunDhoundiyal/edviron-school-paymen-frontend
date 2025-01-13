import {useState, useEffect, useCallback, useContext} from 'react' 
import {ThreeCircles} from 'react-loader-spinner' 
import { ToggleContext } from '../ToggleContext'; 
import { FaEdit } from "react-icons/fa"; 
import {
    BgContainer, 
    Container, 
    TransactionHeading, 
    StyledTable, 
    StyledRow, 
    StyledHeader, 
    StyledCell, 
    StatusFilters, 
    Select, 
    StatusLabel, 
    DateFilter,
    StartDateLabel,
    StartDate, 
    EndDateLabel,
    EndDate, 
    PaginationContainer, 
    PaginationButton, 
    PagNo, 
    PaginationButtonContainer, 
    NoDataFound, 
    LoadingContainer, 
    DispalyErrorMsgContainer, 
    ErrorMessage, 
    DateContainer, 
    EndDateContainer, 
    UpdateButton, 
    CancelButton
} from './styledComponents'
import Header from "../Header"
import Cookies from 'js-cookie'
const AllTransaction = () => {
    const { toggle} = useContext(ToggleContext);
    const [date, setDate] = useState({startDate:'', endDate:''}) 
    const [updateStatus, setUpdateStatus] = useState({id:'', value:''}) 
    const [currentStatus, setCurrentStatus] = useState('')
    const [status, setStatus] = useState('')
    const [pageNo, setPageNo] = useState(1)
    const [data, setData] = useState([])
    const[error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingMsg, setLoadingMsg]= useState('')
    const jwtToken = Cookies.get('jwt_token')
    const onClickUpdateStatus = useCallback(async()=>{
        try {
            setLoadingMsg("Loading..!")
            if (updateStatus.id && updateStatus.value){
                if (updateStatus.value.toLocaleLowerCase() !== currentStatus.toLocaleLowerCase()){
                    const updateStatusValue = `${updateStatus.value[0].toUpperCase()}${updateStatus.value.slice(1, updateStatus.value.length).toLowerCase()}`
                    if (!['Pending','Success','Failed'].includes(updateStatusValue)){
                        alert('Before updating the status, kindly make sure it must be either "Pending," "Success," or "Failed." Apart from this, the rest of the others are not accepted..!')
                    }
                    else{
                        const url = `https://edviron-school-payment-backend-2.onrender.com/transactions/status-update/${updateStatus.id}?status=${updateStatusValue}`
                        const options = {
                            method:'PUT',
                            headers:{
                                "Content-Type":'application/json',
                                Authorization:`Bearer ${jwtToken}`
                            }
                            
                        }
                        const response = await fetch(url, options)
                        if(response.ok){
                            alert(await response.json()) 
                            window.location.reload(true);
                        }
                        else{
                            alert('Error while updating table..!')
                        }
                        
                    }
                }
            }

            
        } catch (error) {
            alert(`Error: ${error.message} or network error..!`)            
        }
        finally{
            setLoadingMsg("")

        }
    },[updateStatus, currentStatus, jwtToken])

    useEffect(()=>{
        const fetchAllTransaction = async() => {
            try {
                setLoading(true)
                const url = `https://edviron-school-payment-backend-2.onrender.com/transaction?status=${status}&startDate=${date.startDate&&date.endDate?date.startDate:''}&endDate=${date.startDate&&date.endDate?date.endDate:''}&pageNo=${pageNo}`
                const options = {
                    method:'GET',
                    headers:{
                        "Content-Type":'application/json',
                        Authorization:`Bearer ${jwtToken}`
                    }
                }
                const response = await fetch(url, options)
                const data = await response.json()
                if (response.ok){
                    const {transactions} = data
                    setData(transactions)
                    setSuccess(true)
                }
                else{
                    setError(true)
                    setErrorMsg(data.message || "Failed to fetch transactions");
                } 
            } catch (error) {
                setError(true)
                setErrorMsg(`Error: ${error.message} or network error..!`);
            }
            finally{
                setLoading(false)
            }
        }
        fetchAllTransaction()
    },[jwtToken,date,status,pageNo])
    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }
    const checkTrasactionBasedOnDate = (event) => {
        const {name, value} = event.target
        setDate((preDate)=>({...preDate, [name]:value}))
    }


    const displayAllTransaction = () => {
        if (loading){
            return(
                <LoadingContainer>
                    <ThreeCircles 
                    visible={true}
                    height="30"
                    width="30"
                    color="#4caf50"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
                </LoadingContainer>
                )
        }
        if (success){
            return (data.length > 0)?(
                <Container toggle={toggle}>
                <TransactionHeading>All Transactions</TransactionHeading>
                <StyledTable>
            <thead>
              <StyledRow>
                <StyledHeader>ID</StyledHeader>
                <StyledHeader>Collect ID</StyledHeader>
                <StyledHeader>Custom Order ID</StyledHeader>
                <StyledHeader>School ID</StyledHeader>
                <StyledHeader>Gateway</StyledHeader>
                <StyledHeader>Order Amount</StyledHeader>
                <StyledHeader>Transaction Amount</StyledHeader>
                <StyledHeader>Date</StyledHeader>
                <StyledHeader>Status</StyledHeader>
                <StyledHeader>Edit Status</StyledHeader>
              </StyledRow>
            </thead>
            <tbody>
              {data.map((transaction) => (
                <StyledRow key={transaction.id}>
                  <StyledCell>{transaction.id}</StyledCell>
                  <StyledCell>{transaction.collect_id}</StyledCell>
                  <StyledCell>{transaction.custom_order_id}</StyledCell>
                  <StyledCell>{transaction.school_id}</StyledCell>
                  <StyledCell>{transaction.gateway}</StyledCell>
                  <StyledCell>{transaction.order_amount}</StyledCell>
                  <StyledCell>{transaction.transaction_amount}</StyledCell>
                  <StyledCell>{transaction.date}</StyledCell>
                  <StyledCell 
                  hightLightStatus={transaction.id===updateStatus.id} 
                  contentEditable={(transaction.id===updateStatus.id)?"true":"false"} 
                  onInput={(event)=>(setUpdateStatus(preState => 
                  ({...preState, value:event.target.textContent})))}>
                    {transaction.status}
                    </StyledCell>
                  <StyledCell>{
                  (transaction.id===updateStatus.id)
                  ?
                  (
                    loadingMsg ? loadingMsg
                     : (
                        <>
                  <UpdateButton onClick={onClickUpdateStatus}>
                    Update
                    </UpdateButton>
                    <CancelButton 
                    onClick={()=>{setUpdateStatus(preState => ({...preState, id:'', value:''})); 
                    setCurrentStatus('');}}>
                        Cancel
                        </CancelButton>
                    </>
                     )
                  
                    )
                    :
                    (
                    <FaEdit style={{cursor:"pointer"}} 
                    onClick={()=>{setUpdateStatus(preState => ({...preState, id:transaction.id})); 
                    alert('Before updating the status, kindly make sure it must be either "Pending," "Success," or "Failed." Apart from this, the rest of the others are not accepted..!'); 
                    setCurrentStatus(transaction.status)}} />
                    )}
                    </StyledCell>
                </StyledRow>
              ))}
            </tbody>
          </StyledTable>          
          </Container>     
            ):(
                <Container toggle={toggle}>
                <TransactionHeading>All Transactions</TransactionHeading>
                <StyledTable>
                <thead>
              <StyledRow>
                <StyledHeader>ID</StyledHeader>
                <StyledHeader>User ID</StyledHeader>
                <StyledHeader>Collect ID</StyledHeader>
                <StyledHeader>Custom Order ID</StyledHeader>
                <StyledHeader>School ID</StyledHeader>
                <StyledHeader>Gateway</StyledHeader>
                <StyledHeader>Order Amount</StyledHeader>
                <StyledHeader>Transaction Amount</StyledHeader>
                <StyledHeader>Date</StyledHeader>
                <StyledHeader>Status</StyledHeader>
              </StyledRow>
            </thead>
            <NoDataFound>No School Transaction Data found </NoDataFound>
            <NoDataFound>Kindly back to the previous pages..!</NoDataFound>
                </StyledTable> 
                </Container> 
            )
        }
        if (error){
            return(
                <DispalyErrorMsgContainer>
                    <ErrorMessage>{errorMsg}</ErrorMessage>
                </DispalyErrorMsgContainer>
            )
        }
    }
    return(
        <BgContainer toggle={toggle}>
        <Header />
        <StatusFilters>
        <StatusLabel htmlFor="status">Status: </StatusLabel>
        <Select id="status" value={status} onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Success">Success</option>
          <option value="Failed">Failed</option>
        </Select>
      </StatusFilters>
      <DateFilter>
        <DateContainer>
        <StartDateLabel>Start Date:</StartDateLabel>
        <StartDate type='date' name='startDate' value={date.startDate} onChange={checkTrasactionBasedOnDate} required /> 
        </DateContainer>
        <EndDateContainer>
        <EndDateLabel>End Date:</EndDateLabel>
        <EndDate type='date' name='endDate' value={date.endDate} onChange={checkTrasactionBasedOnDate} required />
        </EndDateContainer>
      </DateFilter>
      {displayAllTransaction()}
      <PaginationContainer>
        <PaginationButtonContainer>
        <PaginationButton onClick={()=>{setPageNo(prePageNo => Math.max(1,(prePageNo - 1)))}} type='button'>Back</PaginationButton>
        <PagNo>{pageNo}</PagNo>
        <PaginationButton type='button' onClick={()=>{setPageNo(prePageNo => (prePageNo + 1))}}>Next</PaginationButton>
        </PaginationButtonContainer>
        </PaginationContainer>
        </BgContainer>
    )
}

export default AllTransaction