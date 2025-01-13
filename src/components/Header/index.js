import 
{
    Container, 
    UserIcon, 
    ProfileError, 
    ProfileContainer, 
    Heading, 
    School, 
    NavigationContainer, 
    ListItem, 
    UserEmail, 
    Title, 
    NavigationIconContainer, 
    ListIconItem, 
    NavigateLink, 
    LogoutButton, 
    SmallLogoutButton
} 
from 
'./styledComponents' 
import {useLocation, useNavigate} from 'react-router-dom'
import { GrTransaction } from "react-icons/gr";
import { BiSolidSchool } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Toggle from '../Toggle'
import {useEffect, useState} from 'react'
import Cookies from 'js-cookie' 

const Header = () =>{
    const [userProfile, setUserProfile] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const jwtToken = Cookies.get('jwt_token')
    useEffect(()=>{
        const fetchUserProfile = async() => {
            try {
                setLoading(true)
                const url = 'https://edviron-school-payment-backend-2.onrender.com/user/profile'
                const options = {
                    method:'GET', 
                    headers:{
                        "Content-Type":"application/json",
                        Authorization:`Bearer ${jwtToken}`
                    }
                }
                const response = await fetch(url, options)
                const data = await response.json()
                const {user_detail, error} = data
                if (response.ok){
                    setUserProfile(user_detail.email)
                }
                else{
                    setError(true)
                    setErrorMsg(error)
                }

            } catch (error) {
                setError(true)
                setErrorMsg(`Error: ${error.message}`)                
            }
            finally{
                setLoading(false)
            }
        }
        fetchUserProfile()

    },[jwtToken])

    const location = useLocation()
    const navigate = useNavigate()
    const onClickLogoutButton = () => {
        navigate('/login', {replace:true})
        Cookies.remove('jwt_token')
    }

    const navigationItems = [
        { id: 1, label: "All Transactions", icon: <GrTransaction />, path:'/' },
        { id: 2, label: "School Transactions", icon: <BiSolidSchool />, path:'/school-transactions' },
        { id: 3, label: "Check Status", icon: <IoMdCheckmarkCircleOutline />, path:'/check-status' },
      ];


    return(
        <Container>
            <ProfileContainer>
                <Title>School Payment & Transaction Dashboard <School/></Title>
            {loading?<p>Loading...</p>:""}
            {error && <ProfileError>{errorMsg}</ProfileError>}
            {userProfile && (
                <>
                <UserIcon />
                <UserEmail>{userProfile}</UserEmail>
                </>
            )}
            </ProfileContainer>
            <Heading>
                School Payment & Transaction Dashboard <School/>
            </Heading>
            <Toggle />
            <NavigationContainer>
                {navigationItems.map((item) => (
                    <NavigateLink to={item.path} key={item.id}>
                    <ListItem location={location.pathname===item.path} >{item.label}</ListItem>
                    </NavigateLink>
                    ))}
                    <LogoutButton onClick={onClickLogoutButton}>Logout</LogoutButton>
            </NavigationContainer>
            <NavigationIconContainer>
                {navigationItems.map((item) => (
                    <NavigateLink to={item.path} key={item.id}>
                    <ListIconItem location={location.pathname===item.path} >{item.icon}</ListIconItem>
                    </NavigateLink>
                    ))}
                    <SmallLogoutButton onClick={onClickLogoutButton} />
            </NavigationIconContainer>
        </Container>

    )
}

export default Header