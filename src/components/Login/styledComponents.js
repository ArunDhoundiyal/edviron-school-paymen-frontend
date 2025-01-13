import styled from 'styled-components'
export const BgContainer = styled.div`
height:100vh;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const LoginUpPageCardContainer = styled.div`
dispaly:flex;
flex-direction:column;
background-size:cover;
align-items:center;
height:40%;
width:500px;
border:solid 1px darkgrey;
border-radius:18px;
background-color:#ffffff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media (max-width:550px){
width:90%;
overflow:auto;
}
`
export const Heading = styled.h1`
font-family:Roboto;
text-align:center;
@media (max-width:400px){
font-size:25px;
}
`
export const CardContainer = styled.form`
height:85%;
width:100%;
// border:solid 1px red;
padding-left:18px;
padding-right:18px;
`
export const InputContainer = styled.div`
width:100%;
// border:solid 1px green;
dispaly:flex;
flex-direction:column;
background-size:cover;
margin-top:15px;
`
export const Label = styled.label`
// border:solid 1px blue;
width:100%;
cursor:pointer;
`

export const Input = styled.input`
width:100%;
height:40px;
margin-top:8px;
border-radius: 6px;
border: solid 1px #64748b;
outline: none;
font-size:18px;
padding-left:12px;
`

export const CheckBoxContainer = styled.div`
width:100%;
// border:solid 1px yellow;
dispaly:flex;
flex-direction:row;
align-items:center;
margin-top:12px;
margin-bottom:12px;
`
export const CheckBox = styled.input`
cursor:pointer;
height:15px;
width:15px;
margin-right:8px;
`
export const CheckBoxLabel = styled.label`
cursor:pointer;
`
// color:#4267B2

export const Button = styled.button`
width:100%;
background-color:${(props)=>props.loader?"#aeaeae":"#4267B2"};
color:${(props)=>props.loader?"black":"#ffffff"};
border:solid 0px;
height:50px;
font-weight:bold;
border-radius: 6px;
cursor:pointer;
`

export const MessageContainer = styled.div`
margin:12px;
text-align:center;
`



export const ErrorMsg = styled.p`
color:red;
`

