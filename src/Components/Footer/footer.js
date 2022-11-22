import React from "react";
import './footer.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Eupol from '../../Images/eupolska.png';
import Eunion from '../../Images/kisspng-european-regional-development-fund-european-union-eu-5ae832777717e0.7794268515251667114878.png';
import Logo from '../../Images/GROUP (1).png';

const Footer = () => {
    return (
        <div>
            <MDBFooter className='text-center text-lg-start text-muted' id="contact-link" style={{backgroundColor:'#222222'}}>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block text-white'>
            <span>Get connected with us on social networks:</span>
            </div>

            <div>
            <span className='me-4 text-white'>
            <a href="https://www.linkedin.com/company/changegrouppl" style={{textDecoration:'none', color:'#eee'}}><i class="fa fa-linkedin"></i></a>
            </span>

            </div>
        </section>

        <section className=''>
            <MDBContainer className='text-center text-md-start mt-5 text-white'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <img src={Logo} alt="" class="img-fluid mx-auto d-block pr-4" style={{width: 'auto', height: '50px'}} />
                <p class="p-3">
                We build startups from scratch. <br />
                We build startups that lasts.
                </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Technologies</h6>
                <p>
                    <p className='text-reset'>
                    React
                    </p>
                </p>
                <p>
                    <p className='text-reset'>
                    Typescript
                    </p>
                </p>
                <p>
                <p className='text-reset'>
                    .NET Core
                    </p>
                </p>
                <p>
                <p className='text-reset'>
                    React Native
                    </p>
                </p>
                <p>
                <p className='text-reset'>
                    Kubernetes
                    </p>
                </p>
                <p>
                <p className='text-reset'>
                    Cloud
                    </p>
                </p>
                
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                <p className='text-reset'>
                    <u class="implinks" onClick={() => {
                                const anchor = document.querySelector('#services-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>Services</u>
                    </p>
                </p>
                <p>
                <p className='text-reset'>
                    <u class="implinks" onClick={() => {
                                const anchor = document.querySelector('#about-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>About Us</u>
                    </p>
                </p>
                <p>
                <p className='text-reset'>
                    <u class="implinks" onClick={() => {
                                const anchor = document.querySelector('#careers-link')
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>Careers</u>
                    </p>
                </p>
                
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                    <MDBIcon icon="home" className="me-2" />
                    Ursynow, Warsaw, Poland
                </p>
                <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    contact@changegroup.pl
                </p>
                <p>
                    <MDBIcon icon="phone" className="me-3" />
                    + 48 739 534 738
                </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center text-muted p-4 bg-light'>
        
            © 2022 Copyright: &nbsp; 
            <span className='text-reset fw-bold text-center'>
            <u>Change Group</u>
            </span>
            <img src={Eunion} alt="" class="img-fluid mx-auto d-block pull-left " style={{width: 'auto', height: '25px'}} />
            <img src={Eupol} alt="" class="img-fluid mx-auto d-block pull-left pl-1" style={{width: 'auto', height: '23px'}} />
            
        </div>
        </MDBFooter>
        </div>
    )
}

export default Footer