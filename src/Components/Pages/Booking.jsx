import React from 'react'
import './Booking.css'
import terminal from '../Assets/terminal.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Booking() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            <section className="sec-book">
                <div className="booking">
                    <div className="booking-img">
                        <img src={terminal} alt="" width={'500px'} />
                    </div>
                    <div className="booking-list">
                        <form action="#" className='text-light form-wrap'>
                            <div className="form-book">
                                <div className="drops">
                                    <label htmlFor="" className='me-2'>From</label>
                                    <select name="from" id="from" className='rounded p-2 border-light'>
                                        <option value="delhi">Delhi</option>
                                        <option value="cochin">Cochin</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="chenni">Chenni</option>
                                        <option value="karnataka">Karnataka</option>
                                    </select>
                                </div>
                                <div className="drops">
                                    <label htmlFor="" className='me-2'>Departure</label>
                                    <input type="date" className='p-2 rounded border-light' />
                                </div>
                                <div className="drops">
                                    <label htmlFor="" className='me-2'>Travel Class</label>
                                    <select name="travel-class" id="travel-class" className='rounded p-2 border-light'>
                                        <option value="economy">Economy</option>
                                        <option value="business">Business</option>
                                        <option value="fast">Fast</option>
                                    </select>
                                </div>
                                <div className="drops">
                                    <label htmlFor="" className='me-2'>Travellers</label>
                                    <input type="number" value={'1'} className='p-2 rounded border-light' />
                                </div>
                                <div className="mt-4">
                                    <button className="btn btn-success w-75" onClick={handleShow}>Check</button>
                                </div>
                            </div>
                        </form>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Available Flights</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <table className='table table-bordered shadow table-striped'>
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Airline</th>
                                            <th>Take off</th>
                                            <th>Landing</th>
                                            <th>Book</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-center'>
                                            <td>1</td>
                                            <td>Air India Express 1</td>
                                            <td>9:30Am</td>
                                            <td>10:00Am</td>
                                            <td>
                                                <Link >
                                                    <button className="btn btn-success">Book Now</button>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr className='text-center'>
                                            <td>2</td>
                                            <td>Air India Express 2</td>
                                            <td>10:30Am</td>
                                            <td>11:00Am</td>
                                            <td><button className="btn btn-success">Book Now</button></td>
                                        </tr>
                                        <tr className='text-center'>
                                            <td>3</td>
                                            <td>Air India Express 3</td>
                                            <td>11:30Am</td>
                                            <td>12:00Pm</td>
                                            <td><button className="btn btn-success">Book Now</button></td>
                                        </tr>
                                        <tr className='text-center'>
                                            <td>3</td>
                                            <td>Air India Express 4</td>
                                            <td>12:30Pm</td>
                                            <td>1:00Pm</td>
                                            <td><button className="btn btn-success">Book Now</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Booking