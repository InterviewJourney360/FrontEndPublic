import React, {useState,useEffect} from 'react'
import '../css/Login.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import google from '../assets/google.webp'
import linkedin from '../assets/linkedin.webp'
import github from '../assets/github.png'

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [validUsernameFlag, setValidUsernameFlag] = useState(null);
    const [validPasswordFlag, setValidPasswordFlag] = useState(null);

    const usernameRegEx = /^(?=.{1,100}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // basic email validation and email should have max length 100.
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    // password should be of 8-16 char and should contain atleast one lowercase,uppercase,numeric and special char.

    const handleUsernameInputChange =(e) =>{
        const value = e.target.value;
        setUsername(value);
        if(usernameRegEx.test(value)){
            setValidUsernameFlag(true);
        }else{
            setValidUsernameFlag(false);
        }
        console.log(validUsernameFlag);
    }

    const handlePasswordInputChange =(e) =>{
        const value = e.target.value;
        setPassword(value);
        if(passwordRegEx.test(value)){
            setValidPasswordFlag(true);
        }else{
            setValidPasswordFlag(false);
        }
        console.log(validPasswordFlag);
    }

  return (
    <div id='login-screen' className='centered-flex'>
        <div id='login-outer-div'>
            <div className='login-inner-div centered-flex'>
                <div className='login-header-div centered-flex horizontal-flex'>
                    <div>
                        <h2>Log in</h2>
                    </div>
                </div>
                <div className='creds-input-outer-div centered-flex horizontal-flex'>
                    <div className='creds-input-inner-div centered-flex'>
                        <div className='input-outer-div centered-flex'>
                            <input 
                                className={`input-text ${validUsernameFlag === null ? '' : validUsernameFlag?' valid-input':' invalid-input'}`}
                                type="email" 
                                placeholder="inter.prep@gmail.com"
                                value={username}
                                onChange={(e)=>handleUsernameInputChange(e)}
                                required/>
                        </div>  
                        <div className='input-outer-div centered-flex'>
                            <input 
                                type="password" 
                                className={`input-text ${validPasswordFlag === null ? '' : validPasswordFlag?' valid-input':' invalid-input'}`}
                                placeholder="*********" 
                                required 
                                value={password}
                                onChange={(e)=>handlePasswordInputChange(e)}
                                />
                        </div>
                    </div>
                    <div className='login-btn-outer-div centered-flex input-outer-div'>
                        <div className='input-outer-div centered-flex'>
                            <input
                                type='button'
                                className='input-btn'
                                value='Log in' 
                                />
                        </div>
                    </div>
                    <div className='register-link-outer-div'>
                        <div>
                            <p>New user? Register here <span><MdOutlineArrowOutward /></span></p>
                        </div>
                    </div>
                </div>
                <div className='oauth-outer-div '> 
                    <div className='oauth-inner-div'>
                        <div className='google-oauth-outer-div'>
                            <div className='google-oauth-inner-div'>
                                <p className='brand-name'><span><img src={google} height={25} width={25}/></span><span>Google</span></p>
                            </div>
                        </div>
                        <div className='other-oauth-outer-div'>
                            <div className='other-oauth-inner-div'>
                                <div className='linkedin-oauth-div'>
                                    <p className='brand-name'><span><img src={linkedin} height={25} width={25}/></span><span>LinkedIn</span></p>
                                </div>
                                <div className='x-oauth-div'>
                                <p className='brand-name'><span><img src={github} height={25} width={25}/></span><span>GitHub</span></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='guest-link-outer-div'>
                        <div>
                            <p>Continue as a guest user <span><MdOutlineArrowOutward /></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login