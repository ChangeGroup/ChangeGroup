import React, {useState} from "react";
import './career.css';


const Career = () => {
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {setIsReadMore(true)};

    const [isReadMore2, setIsReadMore2] = useState(false);
    const toggleReadMore2 = () => {setIsReadMore2(true)};

    const [isReadMore3, setIsReadMore3] = useState(false);
    const toggleReadMore3 = () => {setIsReadMore3(true)};

    return (
        <div>
            <div class="container-fluid CareerPage">
            <h3 class="text-center mt-5" style={{ color:'#395144'}}>Careers</h3>
            <div class="row mt-3 justify-content-center">
                    <div class="col-lg-10">
                        <div class="card card-margin shadow">
                            <div class="card-body">
                                <div class="row search-body">
                                    <div class="col-lg-12">
                                        <div class="search-result">
                                            <div class="result-body">
                                                <div class="table-responsive">
                                                    <table class="table widget-26">
                                                        <tbody>
                                                            <tr>
                                                                
                                                                <td>
                                                                    <div class="widget-26-job-title" id="careers-link">
                                                                        <p><u>Mid Mobile Developer (React Native)</u></p>

                                                                        { isReadMore ?  
                                                                            <ul class="" style={{textAlign:'justify', fontSize:'14px', fontWeight:'200'}}>
                                                                                <li>Atleast 1 or 2 apps published in either PlayStore/AppleStore</li>
                                                                                <li>Experience with thrid-party integrations (SDK)</li>
                                                                                <li>Translate and Build the designs and Wireframes into high quality responsive UI code.</li>
                                                                                <li>Familiarity with RESTful APIs to connect Android and iOS applications to back-end services</li>
                                                                                <li>Ability to design applications around natural user interfaces, such as "touch</li>
                                                                            </ul>:  <button
                                                                            class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                            onClick={toggleReadMore}
                                                                            >
                                                                            &nbsp;Job Requirements &nbsp; <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                                                            </button> }
                                                                        
                                                                        <p class="m-0"><span class="employer-name">Change Group Ltd.</span> <span class="text-muted time">1 months ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-info mt-5">
                                                                        <p class="type m-0 pull-center">Full-Time</p>
                                                                        <p class="text-muted m-0">at <span class="location">Remote</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-salary mt-5">Experience atleast <br/>3 years +</div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-category bg-soft-danger mt-5">
                                                                        <i class="indicator bg-warning"></i>
                                                                        <span>Mobile Developer</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                <div class="widget-26-job-info mt-5">
                                                                <a href="mailto:career@changegroup.pl?subject=My CV for Mid Mobile Developer"><button
                                                                        class="btn btn-sm rounded-pill text-primary border shadow-sm" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                        
                                                                        >
                                                                        Apply &nbsp;<span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-external-link" aria-hidden="true"></i></span>
                                                                    </button></a>
                                                                </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>
                                                                    <div class="widget-26-job-title">
                                                                        <p><u>Mid Frontend Developer (Typescript/React)</u></p>

                                                                        { isReadMore2 ?  
                                                                            <ul class="" style={{textAlign:'justify', fontSize:'14px', fontWeight:'200'}}>
                                                                                <li>Architect, build, and maintain excellent React Web apps with clean code</li>
                                                                                <li>Implement pixel perfect UI's that match designs</li>
                                                                                <li>Build Pages for Software, Web Application, Integrating the Frontend With laravel Backend</li>
                                                                                <li>Implement clean, modern, smooth animations and transitions that provide an excellent user experience</li>
                                                                                <li>Knowledge with Microservices (Microfrontend Architecture)</li>
                                                                            </ul>:  <button
                                                                            class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                            onClick={toggleReadMore2}
                                                                            >
                                                                            &nbsp;Job Requirements &nbsp; <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                                                            </button> }
                                                                        
                                                                        <p class="m-0"><span class="employer-name">Change Group Ltd.</span> <span class="text-muted time">1 months ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-info mt-5">
                                                                        <p class="type m-0">Full-Time</p>
                                                                        <p class="text-muted m-0">at <span class="location">Remote</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-salary mt-5">Experience atleast <br/>3 years +</div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-category bg-soft-base mt-5">
                                                                        <i class="indicator bg-warning"></i>
                                                                        <span>Web Developer</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                <div class="widget-26-job-info mt-5">
                                                                <a href="mailto:career@changegroup.pl?subject=My CV for Mid Frontend Developer" style={{ textDecoration: 'none'}}><button
                                                                        class="btn btn-sm rounded-pill text-primary border shadow-sm" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                        
                                                                        >
                                                                        Apply &nbsp;<span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-external-link" aria-hidden="true"></i></span>
                                                                    </button></a>
                                                                </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>
                                                                    <div class="widget-26-job-title">
                                                                        <p><u>Mid Backend Developer (.NET Core)</u></p>

                                                                        { isReadMore3 ?  
                                                                            <ul class="" style={{textAlign:'justify', fontSize:'14px', fontWeight:'200'}}>
                                                                                <li>Proficient in C#, ASP .NET, REST API</li>
                                                                                <li>Strong knowledge in document databasew (MongoDb)</li>
                                                                                <li>Proficient knowledge of data pipelines; CI/CD</li>
                                                                                <li>Distributed System/Microservices</li>
                                                                                <li>Familiarity with Elastic Search</li>
                                                                            </ul>:  <button
                                                                            class="btn btn-sm rounded-pill mt-3 mb-3 text-dark border" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                            onClick={toggleReadMore3}
                                                                            >
                                                                            &nbsp;Job Requirements &nbsp; <span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}> + </span>
                                                                            </button> }

                                                                        <p class="m-0"><span class="employer-name">Change Group Ltd.</span> <span class="text-muted time">1 months ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-info mt-5">
                                                                        <p class="type m-0">Full-Time</p>
                                                                        <p class="text-muted m-0">at <span class="location">Remote</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-salary mt-5">Experience atleast <br/>3 years +</div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-category bg-soft-info mt-5">
                                                                        <i class="indicator bg-warning"></i>
                                                                        <span>Backend Engineer</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                <div class="widget-26-job-info mt-5">
                                                                <a href="mailto:career@changegroup.pl?subject=My CV for Mid Backend Developer" style={{ textDecoration: 'none'}}><button
                                                                        class="btn btn-sm rounded-pill text-primary border shadow-sm" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                        
                                                                        >
                                                                        Apply &nbsp;<span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-external-link" aria-hidden="true"></i></span>
                                                                    </button></a>
                                                                </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>
                                                                    <div class="widget-26-job-title">
                                                                        <p><u>Senior Backend Developer (.NET Core)</u></p>
                                                                        <p class="m-0"><span class="employer-name">Change Group Ltd.</span> <span class="text-muted time">6 months ago</span></p>
                                                                        
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-info">
                                                                        <p class="type m-0">Full-Time</p>
                                                                        <p class="text-muted m-0">at <span class="location">Remote</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-salary">Experience atleast <br/>8 years +</div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-category bg-soft-warning">
                                                                        <i class="indicator bg-soft-warning"></i>
                                                                        <span>Backend Engineer</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                <div class="widget-26-job-info">
                                                                    <button
                                                                        class="btn btn-sm rounded-pill text-dark border shadow-sm disabled"  style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                        >
                                                                        Apply &nbsp;&nbsp;<span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-external-link" aria-hidden="true"></i></span>
                                                                    </button>
                                                                    <p class="text-danger mt-1">Position taken</p>
                                                                </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>
                                                                    <div class="widget-26-job-title">
                                                                        <p><u>Junior Frontend Developer (React)</u></p>
                                                                        <p class="m-0"><span class="employer-name">Change Group Ltd.</span> <span class="text-muted time">6 months ago</span></p>
                                                                        
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-info">
                                                                        <p class="type m-0">Full-Time</p>
                                                                        <p class="text-muted m-0">at <span class="location">Remote</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-salary">Experience atleast <br/>2 years +</div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-category bg-soft-danger">
                                                                        <i class="indicator bg-soft-danger"></i>
                                                                        <span>Web Developer</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                <div class="widget-26-job-info">
                                                                    <button
                                                                        class="btn btn-sm rounded-pill text-dark border shadow-sm disabled"  style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                        >
                                                                        Apply &nbsp;&nbsp;<span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-external-link" aria-hidden="true"></i></span>
                                                                    </button>
                                                                    <p class="text-danger mt-1">Position taken</p>
                                                                </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>
                                                                    <div class="widget-26-job-title">
                                                                        <p><u>Product Manager</u></p>
                                                                        <p class="m-0"><span class="employer-name">Change Group Ltd.</span> <span class="text-muted time">6 months ago</span></p>
                                                                        
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-info">
                                                                        <p class="type m-0">Full-Time</p>
                                                                        <p class="text-muted m-0">at <span class="location">Remote</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-salary">Experience atleast <br/>2 years +</div>
                                                                </td>
                                                                <td>
                                                                    <div class="widget-26-job-category bg-soft-info">
                                                                        <i class="indicator bg-soft-info"></i>
                                                                        <span>Product Manager</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                <div class="widget-26-job-info">
                                                                    <button
                                                                        class="btn btn-sm rounded-pill text-dark border shadow-sm disabled"  style={{ textDecoration: 'none' , backgroundColor:'white'}}
                                                                        >
                                                                        Apply &nbsp;&nbsp;<span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-external-link" aria-hidden="true"></i></span>
                                                                    </button>
                                                                    <p class="text-danger mt-1">Position taken</p>
                                                                </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mb-3">
                <h5>Didn't find a matching offer?</h5>
                <p class="text-muted">Send your CV to <b>career@changegroup.pl</b> anyway! <br /> We constantly seek talents so if any new opportunity arises we will contact you.</p>
                <a href="mailto:career@changegroup.pl?subject=Awaiting offers matching my CV" style={{ textDecoration: 'none'}}><button
                    class="btn btn-sm rounded-pill text-dark border shadow-sm" style={{ textDecoration: 'none' , backgroundColor:'white'}}
                    >
                    Send CV &nbsp;<span class="btn btn-sm btn-primary border-0 rounded-pill" style={{ textDecoration: 'none' , backgroundColor:'#E5D9B6'}}><i class="fa fa-external-link" aria-hidden="true"></i></span>
                </button></a>
                </div>
            </div>
        </div>
    )
}

export default Career