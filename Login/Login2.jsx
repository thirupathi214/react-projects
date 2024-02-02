import React,{useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login2 = () => {

const[value,setvalue]=useState({
    email:"",
    password:""
})

const[error,seterror]=useState({})

  return (
    <div className='gotha'>
        <div className="name">
            <h3 className='logo'>Login</h3>
        </div>
      <form >
        <div className="email">
         <label htmlFor="email" className='email'>email:</label>
         <input type="email" placeholder='Enter your email' className='input' />
         <span><p></p></span>
         </div>
         <div className="password">
            <label htmlFor="password" className='email'>password:</label>
            <input type="password"className='input' placeholder='Enter your password' />
            <span><p></p></span>
         </div>
            <h4>please create your account</h4>
            <button>create account</button>

            {/* <Link to={"/Signup2"} className='create '> create account</Link> */}
            
      </form>
       

    </div>
  )
}

export default Login2
