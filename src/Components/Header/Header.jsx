import React from 'react'
import './Header.css'
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineAddIcCall } from "react-icons/md";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section id='sec-nav'>
            <nav class="navbar navbar-expand-lg shadow text-dark p-3 ">
                <div class="container-fluid">
                    <Link to={'/home'} className="navbar-brand">GoingMary  <GiCommercialAirplane /></Link>               
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to={'/home'} className='nav-link'>Home</Link>
                            <Link to={'/booking'} className='nav-link'>Booking</Link>
                            {/* <Link to={'/destination'} className='nav-link'>Top Destinations</Link> */}
                            <Link to={'/contact'} className='nav-link'>Contact <MdOutlineAddIcCall/></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header