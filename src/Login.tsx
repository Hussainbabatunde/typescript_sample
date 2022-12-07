import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';
import imglogo from "./component/imgwhole.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAuth } from './state/auth';
import { AppDispatch, useAppSelector } from './state/store';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@mui/material";

function Login() {

  const person = {
    first: "Kunzy",
    last: "Mayana"
  }

  const PersonLis= [
    {
      first: "Kunzy",
      last: "Mayana"
    },
    {
    first: "Samson ",
    last: "Okeji"
  },
  {
    first: "Jerry ",
    last: "Agba"
  }
  ]

  const [email, setEmail] = useState({
    email: '',
    password:""
  })
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>): void =>{
    setEmail({...email, [e.target.name]:e.target.value})
  }

  const [loading, setLoading]= useState(false)

  interface Iroot {
    authReducer: {
      success: boolean,
      error: boolean
    }
  }

  

  const dispatch = useDispatch<AppDispatch>()
  const checking: any= useSelector<Iroot>((state)=> state.authReducer.success)
  const navigate= useNavigate()

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (checking) navigate("/dashboard");
  }, [navigate, checking]);

  const handleSubmit = async(e:  React.FormEvent<HTMLFormElement>)=>{
    setLoading(true)
    e.preventDefault()
    console.log(email)
    await dispatch(RegisterAuth(email))
    setLoading(false)
  }
  return (
    <div className="App">
      {/* <Greet name=" Hussain Babatunde" messageCount={20} isLoggedIn={false}/>
      <Person name={person}/>
      <PersonList names={PersonLis}/> */}
      <div className='loginformside'>
        <div className='formside'>
          <h1 className='welcome_text'>Welcome back</h1>
          <p className='text_form'>The faster you fill up, the faster you get a ticket</p>
          <form onSubmit={handleSubmit} className='text_input'>
          <p className='email_text'>Email</p>
          <input type="text" className='email_input' name="email" value={email.email} onChange={handleChange} placeholder='Input your email' />
          <p className='email_text'>Password</p>
          <input type="password" className='email_input' name="password" value={email.password} onChange={handleChange} placeholder='Input your password' />

          {/* <p className='email_text'>Device name</p>
          <input type="password" className='email_input' name="device_name" value={email.device_name} onChange={handleChange} placeholder='Input your password' /> */}
          <button type="submit" className='login_button'>{loading ? <><CircularProgress/></> : "Login"}</button>
          </form>
        </div>
      </div>
      <div className='imgside'>
        {/* <img src={imglogo} width="100%" className='imageshown'/> */}
      </div>
    </div>
  );
}

export default Login;
