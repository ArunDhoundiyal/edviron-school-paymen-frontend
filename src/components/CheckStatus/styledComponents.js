import styled from 'styled-components'

export const BgContainer = styled.div`
display:flex;
flex-direction:column;
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
  @media (max-width: 450px) {
  font-size: 18px;
  }
  @media (max-width: 350px) {
  font-size: 15px;
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
  border:${props=>(props.hightLightStatus?'2px solid orange':"")};
  @media (max-width: 768px) {
    padding: 6px;
    font-size: 10px;
  }
`;

export const InputContainer = styled.div`
position:absolute;
top:120px;
left:20px;
display:flex;
flex-direction:row;
align-items:center;
@media (max-width: 400px) {
display:flex;
flex-direction:column;
align-items:start;
  }
`

export const InputLabel = styled.label`
font-weight:bold;
margin-right:4px;
cursor:pointer;
@media (max-width: 350px) {
margin-bottom:4px;
}


`
export const Input = styled.input`
height:30px;
border-radius:8px;
border:solid 1px;
padding-left:8px;
font-size: 15px;
&:focus {
  outline: none; /* Removes default focus outline */
  border: solid 2px #4f46e5;
}
@media (max-width: 450px) {
  font-size: 18px;
  width:150px;
  margin-bottom:4px;
  }

  @media (max-width: 350px) {
  font-size: 18px;
  width:150px;
  margin-bottom:6px;
  }
`

export const SubmitButton = styled.button`
margin-left:4px;
background-color: #4267B2;
color:white;
border:solid 0px;
height:30px;
width:80px;
border-radius:8px;
font-weight:bold;
cursor:pointer;
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



