import {useState, useEffect} from 'react' 
import SignUpLoginHeader from '../SignUpLoginHeader'
import Cookies from 'js-cookie'
import {useNavigate, Navigate} from 'react-router-dom'
import {ThreeCircles} from 'react-loader-spinner'
import {
    BgContainer, 
    LoginUpPageCardContainer, 
    Heading, 
    CardContainer, 
    InputContainer, 
    Label, 
    Input, 
    CheckBoxContainer, 
    CheckBox, 
    CheckBoxLabel, 
    Button,
    MessageContainer,
    ErrorMsg
} from './styledComponents'
const Login = () =>{
    const [togglePassword, setTogglePassword] = useState(false)
    const [userLoginDetails, setUserLoginDetails] = useState({ userEmail:'', userPassword:''})
    const [updatedLoginDetail, setUpdatedLoginDetail] = useState(null)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [loader, setLoader] = useState(false)
    const onSubmitLoginDetails = (event) => {
        event.preventDefault();
        const newLoginUserDetails = {
            email: userLoginDetails.userEmail,
            password: userLoginDetails.userPassword,
        };
        setUpdatedLoginDetail(newLoginUserDetails);
    };
    
    const userSignUpDetails = (event) => {
        const {name, value} = event.target
        setUserLoginDetails((preState)=>({
            ...preState, [name]:value
        }))
    }
    const navigate = useNavigate()
    useEffect(()=>{
        const submitUserSignUpDetail = async() => {
            try {
                if (updatedLoginDetail){
                    console.log(updatedLoginDetail)
                    setLoader(true)
                    const url = 'https://edviron-school-payment-backend-2.onrender.com/login'
                    const options = {
                        method:'POST',
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify(updatedLoginDetail)
                    }
                    const response = await fetch(url, options)
                    const data = await response.json()
                    const {jwt_token, error} = data
                    console.log(jwt_token, error)
                    if (response.ok){
                        setUserLoginDetails({userEmail:'', userPassword:''})
                        Cookies.set('jwt_token', jwt_token, {expires:30, path:'/'})
                        navigate('/', {replace:true})
                    }
                    else{
                        setError(true)
                        setErrorMsg(error)
                    }                    
                }
            } catch (error) {
                setError(true)
                setErrorMsg(`Error caught: ${error.message}` )
            }
            finally{
                setLoader(false)
            }
        }
        submitUserSignUpDetail()
    },[updatedLoginDetail, navigate])
    const displayMessage = () => {
        if (loader){
            return(<ThreeCircles
                visible={true}
                height="30"
                width="30"
                color="#4267B2"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />)
        }
        if (error){
            return(
                <>
                <ErrorMsg>{errorMsg}</ErrorMsg>
                </>
            )
        }
    }
    if (Cookies.get('jwt_token')){
        return <Navigate to='/' />
      }

    return(
       <BgContainer>
        <SignUpLoginHeader/>
        <MessageContainer>
        {displayMessage()}
        </MessageContainer>
        <LoginUpPageCardContainer>
        <Heading>
            Login:🚀
        </Heading>
        <CardContainer onSubmit={onSubmitLoginDetails}>
            <InputContainer>
            <Label htmlFor='email'>Email:</Label>
            <Input 
            type='email' 
            id='email' 
            name='userEmail' 
            placeholder='Email' 
            value={userLoginDetails.userEmail} 
            onChange={userSignUpDetails} 
            required
            />
            </InputContainer> 
            <InputContainer>
            <Label htmlFor='password'>Password:</Label>
            <Input 
            type={togglePassword?"text":'password'} 
            id='password' 
            name='userPassword' 
            placeholder='Password'
            value={userLoginDetails.userPassword} 
            onChange={userSignUpDetails} 
            required
            />
            </InputContainer>  
            <CheckBoxContainer>
                <CheckBox 
                onChange={(event)=>{setTogglePassword(event.target.checked)}}
                 id='checkbox' 
                 type='checkbox' />
                <CheckBoxLabel htmlFor='checkbox'>
                    Show password..?
                </CheckBoxLabel>
            </CheckBoxContainer>  
            <Button loader={loader} type='submit'>{loader? "Loging..!":"Login"}</Button>                    
        </CardContainer>
        </LoginUpPageCardContainer>
       </BgContainer> 
    )
}

export default Login 
