import { Link } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Page3.css'
function Login() {
  return (
    <> 
   <div>
   <Navbar />
   </div>
    <div className='login'> 
    <img src="https://www.licious.in/img/rebranding/logo-white.png" alt="" />
    <div className='login2'>
        <div>
            <h1>Sign In/Sign Up</h1>
             <br />
              <input type="text" placeholder='Enter Mobile No' />
              
              <br />
              <br />
              <Link href="http://localhost:3000/">
                <br />
                
              <button onClick={()=> alert("sucessfully OTP Vai")}>Proceed Vai OTP</button>
              <br />
              <h1>By signing in you agree to our terms and conditions</h1>  
                 
              </Link>
          

            
            
        </div>
    </div>
    </div>
    </>
  )
}

export default Login;