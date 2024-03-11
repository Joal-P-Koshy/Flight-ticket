import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import aircraft from '../Components/Assets/aircraft.png'

function Register() {
  return (
    <section className="sec-reg">
      <div className="reg-img">
        <img src={aircraft} alt="" />
      </div>

      <div className="reg-form w-100 ms-5">
        <form action="/home" className='d-flex flex-column p-3 gap-2' >
          <div className="">
            <h4 className="">Register</h4>
          </div>

          <div className="">
            <label htmlFor="">User Name</label>
            <input type="text" required placeholder='Enter your Name :'
              className='form-control w-75' />
          </div>

          <div className="">
            <label htmlFor="">Email</label>
            <input type="email" required placeholder='Enter your Email :'
              className='form-control w-75' />
          </div>

          <div className="d-flex gap-4 align-items-center">
            <div className="">
              <label htmlFor="">Date of Birth</label>
              <input type="date" required
                className='form-control' />
            </div>
            <div className="">
              <label htmlFor="">Gender</label><br />
              <div className="d-flex gap-2">
                <div className="">
                  <input type="radio" required name="gender" value={'male'} id="" />
                  <label htmlFor="">Male</label>
                </div>
                <div className="">
                  <input type="radio" required name="gender" value={'female'} id="" />
                  <label htmlFor="">Female</label>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <label htmlFor="">Password</label>
            <input type="password" required
              className='form-control w-75' placeholder='Create a Password :' />
          </div>

          <div className="">
            <button className="btn btn-success mt-2" type='submit'>Register</button>
          </div>
        </form>
        <div className="">
          <span className='ms-3'>Already logged in ?<Link to={'/login'} className='ms-2 text-light'>Login</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Register