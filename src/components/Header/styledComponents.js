import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
export const Container = styled.div`
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0px;
  padding:8px;
  border-bottom: solid 1px lightgrey;
  background-color: #f8f9f9;
  z-index: 1000;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;

`

export const UserIcon = styled(FaCircleUser)`
display: none;
@media (min-width: 700px){
display: block;
height: 30px;
width: 30px;
}
`


export const UserEmail = styled.p`
  @media (max-width: 400px) {
    font-size: 12px; 
  }
`



export const Title = styled.p`
  display: none;

  @media (max-width: 699px) {
    display: block;
    font-weight: bold;
    text-decoration: underline;
    font-size: 16px; /* Base font size */
  }

  @media (max-width: 400px) {
    font-size: 12px; 
  }
;
`

export const School = styled(IoSchool)`
height: 30px;
width: 30px;
@media (max-width: 500px) {
  display: none;
}
`



export const ProfileError = styled.p`
color: red;
`



export const ProfileContainer = styled.div`
margin-right:8px;
`



export const Heading = styled.p`
display: none;
@media (min-width: 700px){
display: block;
font-weight:bold;
text-decoration:underline;
}
`



export const NavigationContainer = styled.ul`
display: none;
@media (min-width: 400px){
position:absolute;
bottom:0px;
right:10px;
display:flex;
flex-direction:row;
list-style-type:none;
font-size:12px;
}
@media (min-width: 450px){
position:absolute;
bottom:0px;
right:10px;
display:flex;
flex-direction:row;
list-style-type:none;
font-size:14px;
}

`


export const ListItem = styled.li`
margin-left:6px;
margin-right:6px;
cursor:pointer;
text-decoration:${props=>(props.location?'underline':'')};
font-weight:${props=>(props.location?"bold":'')};
color:${props=>(props.location?'#4267B2':'')}
`




export const NavigationIconContainer = styled.ul`
display: none;
@media (max-width: 399px){
position:absolute;
bottom:0px;
right:10px;
display:flex;
flex-direction:row;
list-style-type:none;
font-size:18px;
}
`


export const ListIconItem = styled.li`
  margin-left: 18px;
  margin-right: 18px;
  text-decoration: outline;
  cursor: pointer;
  text-decoration: ${(props) => (props.location ? 'underline' : 'none')};
  font-weight: ${(props) => (props.location ? 'bold' : 'normal')};
  color: ${(props) => (props.location ? '#4267B2' : 'inherit')};
`;



export const NavigateLink = styled(Link)`
text-decoration:none;
color:black;
`



export const LogoutButton = styled.button`
background-color: #4267B2;
color:#ffffff;
border:solid 0px;
width:60px;
border-radius:8px;
font-weight:bold;
cursor:pointer;
`




export const SmallLogoutButton = styled(GrLogout)`
margin-left:8px;
color:#4267B2;
cursor:pointer;
`
