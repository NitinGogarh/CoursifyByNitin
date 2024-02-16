import React, { useEffect, useState } from 'react'
import './form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoginHandle from '../store/Thunks/LoginHandle'
import { emptyState } from '../store/Slices/RegisterSlice'
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {user,msg,loading} = useSelector(state=>state.RegisterSlice)
  const [loginForm, setLoginForm] = useState({
     email: "",
    password: "",
  });

  const submitLogin = (e) => {

    dispatch(LoginHandle(loginForm));
 
    e.preventDefault();
    
  };


  const updateForm = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };
  useEffect(()=>{
      
       const navigateFun = ()=>{
        dispatch(emptyState())
        if(user)
        navigate('/Home')
       }
       setTimeout(navigateFun,500)
  },[user,msg])
  return (

    

    <div className='Container'>
    {user ? (
        <div className="alert alert-success founded" role="alert">
          {msg}
        </div>
      ) : null
      }
      {!user && !loading ? (
        <div className="alert alert-danger founded" role="alert">
          {msg}
        </div>
      ) : null
      }
        
    <div className='formContainer'>
    <form action="" onSubmit={submitLogin}>
       <h1>Login</h1>
       <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={updateForm}
            className="input"
          />
          <input
            type="password"
            name="password"
            value={loginForm.password}
            placeholder="password"
            onChange={updateForm}
            className="input"
          />
        <button type='submit' className='button'>Log In</button>
        <Link to={'/'} className='link'>Create Account</Link>
    </form>
    </div>
   </div>

  )
}

export default Login