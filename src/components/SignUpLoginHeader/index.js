import {Container, SignUpButton, LoginButton} from './styledComponents' 
import {useNavigate} from 'react-router-dom'
const SignUpLoginHeader = () => {
    const navigate = useNavigate()
    return(
        <Container>
            <SignUpButton onClick={()=>{navigate('/sign-up')}}>Sign up</SignUpButton>
            <LoginButton onClick={()=>{navigate('/login')}}>Login</LoginButton>
        </Container>
    )
}

export default SignUpLoginHeader