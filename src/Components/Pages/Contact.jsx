import React, { useRef } from 'react'
import './Contact.css'
import emailjs, { send } from '@emailjs/browser';
import Header from '../Header/Header';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ef73aqs', 'template_b4afpsn', form.current, {
                publicKey: 'u5e4bvDgQjQzCORK_',
            })
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED...', error.text);
                }
            );
    };
    return (
        <>
        <Header/>
            <section className="contact" id='contact'>
                <div className="contact-form">
                    <form action="" ref={form} onSubmit={sendEmail} className='text-light'>
                        <div className="inputs">
                            <label htmlFor="">UserName</label>
                            <input type="text" required placeholder='Enter your Name :' name='from_name'  className='form-control'/>
                        </div>
                        <div className="inputs">
                            <label htmlFor="">Email</label>
                            <input type="email" required placeholder='Enter your Email :' name='from_name'  className='form-control'/>
                        </div>
                        <div className="inputs">
                            <label htmlFor="">Description</label>
                            <textarea name="message" required id="" placeholder='How can we help you?' className='form-control'></textarea>
                        </div>
                        <div className=''>
                            <button className="btn btn-success w-100" type='submit' value={send}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact