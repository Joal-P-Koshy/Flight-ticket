import React from 'react'
import airplane from '../Assets/airplane_front.png'
import sky from '../Assets/sky.jpg'
import './Home.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'


function Home() {
    return (
        <>
        <Header/>
            <section className="sec-home">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="runway-img">
                        <img src={sky} alt="runway" />
                    </div>
                    <img src={airplane} className='airplane' alt="airplane" />
                </div>
                <div className="mt-3">
                    <p className="para" >When everything seems to be going against you,<br />
                        remember that the airplane takes off against the wind,<br />
                        not with it. - Henry Ford</p>
                </div>
                <div className="">
                    <Link to={'/booking'}>
                        <button className="btn btn-success">Get Started</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Home