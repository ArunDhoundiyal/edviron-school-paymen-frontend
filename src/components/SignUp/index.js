import {useState, useEffect} from 'react' 
import {Navigate} from 'react-router-dom'
import {ThreeCircles} from 'react-loader-spinner' 
import SignUpLoginHeader from '../SignUpLoginHeader'
import Cookies from 'js-cookie'

import {
    BgContainer, 
    SignUpPageCardContainer, 
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
    SuccessMsg, 
    ErrorMsg
} from './styledComponents'
const SignUp = () =>{
    const [togglePassword, setTogglePassword] = useState(false)
    const [userRegistrationDetails, setUserRegistrationDetails] = useState({userName:'', userEmail:'', userPassword:''})
    const [updatedSignUpDetail, setUpdatedSignUpDetail] = useState(null)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const [loader, setLoader] = useState(false)
    const onSumbitSignUpDetails = (event) => {
        event.preventDefault()
        const newSignUpUserDetails = {
            name:userRegistrationDetails.userName,
            email:userRegistrationDetails.userEmail,
            password:userRegistrationDetails.userPassword
        }
        setUpdatedSignUpDetail(newSignUpUserDetails)
    }
    const userSignUpDetails = (event) => {
        const {name, value} = event.target
        setUserRegistrationDetails((preState)=>({
            ...preState, [name]:value
        }))
    }
    useEffect(()=>{
        const submitUserSignUpDetail = async() => {
            try {
                if (updatedSignUpDetail){
                    setLoader(true)
                    const url = 'https://edviron-school-payment-backend-2.onrender.com/registration'
                    const options = {
                        method:'POST',
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify(updatedSignUpDetail)
                    }
                    const response = await fetch(url, options)
                    const data = await response.json()
                    console.log(data)
                    if (response.ok){
                        setSuccess(true)
                        setSuccessMsg(data.message)
                        setUserRegistrationDetails({userName:'', userEmail:'', userPassword:''})
                    }
                    else{
                        setError(true)
                        setErrorMsg(data.error)
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
    },[updatedSignUpDetail])
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
        if (success){
            return(
                <>
                <SuccessMsg>{successMsg}</SuccessMsg>
                </>
            )
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
        <SignUpLoginHeader />
        <MessageContainer>
        {displayMessage()}
        </MessageContainer>
        <SignUpPageCardContainer>
        <Heading>
            SignUp:🚀
        </Heading>
        <CardContainer onSubmit={onSumbitSignUpDetails}>
            <InputContainer>
            <Label htmlFor='username'>Username:</Label>
            <Input 
            type='text' 
            id='username' 
            name='userName' 
            placeholder='Username'
            value={userRegistrationDetails.userName} 
            onChange={userSignUpDetails} 
            required
            />
            </InputContainer>
            <InputContainer>
            <Label htmlFor='email'>Email:</Label>
            <Input 
            type='email' 
            id='email' 
            name='userEmail' 
            placeholder='Email' 
            value={userRegistrationDetails.userEmail} 
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
            value={userRegistrationDetails.userPassword} 
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
            <Button loader={loader} type='submit'>{loader? "Signing..!":"Sign Up"}</Button>                    
        </CardContainer>
        </SignUpPageCardContainer>
       </BgContainer> 
    )
}

export default SignUp 
