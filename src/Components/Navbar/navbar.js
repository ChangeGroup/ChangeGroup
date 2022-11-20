import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <div class="navbar navbar-light navbar-expand-md bg-faded justify-content-center shadow-sm">
                <div class="container mt-1">
                    <div class="navbar-brand d-flex w-50 me-auto">
                        <img className="logo ml-5" src={require('../../Images/GROUP.png')} alt="logo" />
                                         
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                        <ul class="navbar-nav w-100 justify-content-center">
                            <li class="nav-item p-3">
                                <div class="nav-link" onClick={() => {
                                const anchor = document.querySelector('#services-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}> Services</div>
                            </li>
                            <li class="nav-item p-3">
                                <div class="nav-link " onClick={() => {
                                const anchor = document.querySelector('#about-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}> About Us</div>
                            </li>
                            <li class="nav-item p-3">
                                <div class="nav-link" onClick={() => {
                                const anchor = document.querySelector('#careers-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>Careers</div>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                            <li class="nav-item p-3">
                            <button
                                class="btn btn-md rounded-pill btn-outline contactlist text-muted"
                                onClick={() => {
                                const anchor = document.querySelector('#contact-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }} 
                                >
                                Contact
                                </button>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar