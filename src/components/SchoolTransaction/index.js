import { useState, useCallback } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import {
  BgContainer,
  Container,
  TransactionHeading,
  StyledTable,
  StyledRow,
  StyledHeader,
  StyledCell,
  InputContainer,
  NoDataFound,
  LoadingContainer,
  DispalyErrorMsgContainer,
  ErrorMessage,
  InputLabel,
  Input,
  SubmitButton,
} from './styledComponents';
import Header from '../Header';
import Cookies from 'js-cookie';

const SchoolTransaction = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [schoolId, setSchoolId] = useState('');
  const jwtToken = Cookies.get('jwt_token');
  const fetchSpecificSchoolTransactionDetail = useCallback(async () => {
    try {
      if (schoolId){
        setLoading(true);
        const url = `https://edviron-school-payment-backend-2.onrender.com/transaction/school/${schoolId}`;
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
        };
        const response = await fetch(url, options);
        
        const data = await response.json();
        if (response.ok) {
          setData(data.transaction);
          setError(false);
        } else {
          setError(true);
          setErrorMsg(data.message || 'Failed to fetch transactions');
        }
      }

    } catch (error) {
      setError(true);
      setErrorMsg(`Error: ${error.message} or network error..!`);
    } finally {
      setLoading(false);
    }
  }, [jwtToken, schoolId]);

  const enterSchoolId = (event) => {
    setSchoolId(event.target.value);
  };


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
        if (data.length > 0){
            return (
                <Container>
                <TransactionHeading>Transactions of a specific school</TransactionHeading>
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
                  <StyledCell>{transaction.status}</StyledCell>
                </StyledRow>
              ))}
            </tbody>
          </StyledTable>          
          </Container>     
            )
        }

        if (data.length === 0){
            return (
                <Container>
                <TransactionHeading>Transactions of a specific school</TransactionHeading>
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
              </StyledRow>
            </thead>
            <NoDataFound>No School Transaction Data found {!schoolId?'kindly enter your "school id"':`of the ${schoolId}`} </NoDataFound>
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

  return (
    <BgContainer>
      <Header />
      <InputContainer>
        <InputLabel htmlFor="schoolId">School ID:</InputLabel>
        <Input
          id="schoolId"
          type="text"
          placeholder="Enter school id"
          onChange={enterSchoolId}
        />
        <SubmitButton onClick={fetchSpecificSchoolTransactionDetail}>Submit</SubmitButton>
      </InputContainer>
      {displayAllTransaction()}
    </BgContainer>
  );
};

export default SchoolTransaction;
