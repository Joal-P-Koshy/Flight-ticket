import React from 'react'
import Header from '../Header/Header'
import './Ticket.css'
import { GiCommercialAirplane } from "react-icons/gi";


function Ticket() {
  return (
    <>
      <Header />
      <section className="sec-tic">
        <div className="tic-wrap">
          <div className="main-tic">
            <header className='tic-head ps-4'>
              <div className="tic-logo">
                <GiCommercialAirplane />
              </div>
              <div className="logo-head">
                Online Ticket
              </div>
            </header>
            <div className="tic-content">
              <div className="user-logo">
                <div className="">
                  <i class="fa-solid fa-user us-lg"></i>
                </div>
                <div className="barcode">
                  <i class="fa-solid fa-barcode"></i>
                  <i class="fa-solid fa-barcode"></i>
                  <i class="fa-solid fa-barcode"></i>
                </div>
              </div>
              <div className="user-details">
                
              </div>
            </div>
            <footer className='tic-foot'></footer>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ticket