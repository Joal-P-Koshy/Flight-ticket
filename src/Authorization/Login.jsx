import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import aircraft from '../Components/Assets/aircraft.png'

function Login() {
  return (
    <section className="sec-log">
      <div className="log-img">
        <img src={aircraft} alt="" />
      </div>

      <div className="log-form w-100 ms-5">
        <form action="/home" className='d-flex flex-column p-3 gap-2'>
          <div className="">
            <h4 className="">Login</h4>
          </div>

          <div className="">
            <label htmlFor="">Email</label>
            <input type="email" required placeholder='Enter your Email :'
              className='form-control w-75' />
          </div>

          <div className="">
            <label htmlFor="">Password</label>
            <input type="password" required
              className='form-control w-75' placeholder='Create a Password :' />
          </div>

          <div className="">
            <button className="btn btn-success" type='submit'>Login</button>
          </div>
        </form>
        <div className="">
        <span className='ms-3'>Create a new Account ?<Link to={'/'} className='ms-2 text-light'>Register</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Login