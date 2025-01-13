import styled from 'styled-components'

export const BgContainer = styled.div`
display:flex;
flex-direction:column;
justify-contend:center;
align-items:center;
height:100vh;
background-size:cover;
`

export const Container = styled.div`
margin-top:180px;
padding:20px;
width:100%;
@media (max-width:445px){
margin-top:200px;
}
`
export const TransactionHeading = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  text-align:center;
  text-decoration:underline;
  @media (max-width: 350px) {
  font-size: 18px;
  }
`
////////////

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    font-size: 12px;
    overflow-x: auto;
    display: block;
  }
`;

export const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const StyledHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left; 
  background-color: #4caf50;
  color: white;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  overflow:auto;
  border:${props=>(props.hightlightstatus?'2px solid orange':"")};
  @media (max-width: 768px) {
    padding: 6px;
    font-size: 10px;
  }
`;

export const StatusFilters = styled.div`
position:absolute;
top:120px;
left:20px;
`
export const StatusLabel = styled.label`
font-weight:bold;
`
export const Select = styled.select``

export const DateFilter = styled.div`
@media (min-width:601px){
position:absolute;
top:120px;
right:20px;
display:flex;
flex-direction:row;
align-items:center;
}
@media (max-width:600px){
position:absolute;
top:150px;
left:20px;
display:flex;
flex-direction:row;
align-items:center;
}
@media (max-width:445px){
position:absolute;
top:150px;
left:20px;
display:flex;
align-self:start;
flex-direction:column;

}
`

export const DateContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const EndDateContainer = styled.div`
@media (max-width:445px){
margin-top:6px;
}
`

export const StartDate = styled.input``
export const StartDateLabel = styled.label`font-weight:bold;margin-right:4px;` 
export const EndDate = styled.input`` 
export const EndDateLabel = styled.label` 
margin-left:12px;
margin-right:4px;
font-weight:bold;
`

export const PaginationContainer = styled.div`
position:fixed;
display:flex;
flex-direction:row;
justify-content:center;
bottom:20px;
width:100%;

`
export const PaginationButton = styled.button`
background-color:#4267B2;
color:#ffffff;
border:solid 0px;
height:30px;
width:70px;
border-radius:4px;
`
export const PagNo = styled.span`
font-weight:bold;
margin-left:6px;
margin-right:6px;
`

export const PaginationButtonContainer = styled.div`
`
export const NoDataFound = styled.p`
color:red;
font-size:13px;
`

export const LoadingContainer = styled.div`
margin-top:200px;
`

export const DispalyErrorMsgContainer = styled.div`
margin-top:200px;
margin-left:12px;
margin-right:12px;
`

export const ErrorMessage = styled.p`
color:red;
text-align:center;
font-size:20px;
`

export const UpdateButton = styled.button`
@media (min-width:1200px){
background-color:#0073cf;
color:#ffffff;
border:solid 0px;
height:30px;
width:80px;
border-radius:8px;
font-weight:bold;
margin-right:8px;
}
@media (max-width:1199px){
background-color:#0073cf;
color:#ffffff;
border:solid 0px;
height:20px;
width:60px;
border-radius:8px;
font-weight:bold;
margin-bottom:8px;
margin-right:8px;
font-size:12px;
}
`

export const CancelButton = styled.button`
@media (min-width:1200px){
background-color:#ed1c24;
color:#ffffff;
border:solid 0px;
height:30px;
width:80px;
border-radius:8px;
font-weight:bold;
}

@media (max-width:1199px){
background-color:#ed1c24;
color:#ffffff;
border:solid 0px;
height:20px;
width:60px;
border-radius:8px;
font-weight:bold;
font-size:12px;
}
`