import styled from 'styled-components'
export const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
width:100%;
height:50px;
position:fixed;
top:0px;
width:100%;
padding:20px;
border-bottom:solid 1px lightgrey;
`
export const SignUpButton = styled.button`
background-color: #FF0000;
color:white;
border:solid 0px;
font-weight:bold;
font-size:15px;
height:30px;
width:80px;
border-radius:18px;
margin-right:8px;
`

export const LoginButton = styled.button`
background-color: #4267B2;
color:white;
border:solid 0px;
font-weight:bold;
font-size:15px;
height:30px;
width:80px;
border-radius:18px;
margin-right:8px;
`