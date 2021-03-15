import React from 'react';
import Banner from '../src/Assets/banner1.png'
import BnImg from '../src/Assets/img1.png'
import Doctors from './Doctors';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Warnings from './Warnings'



const Base = ({


}) => (
    <div >


        <div className="container-fluid row center " >
            <img src={Banner} className="img content-pos" alt="..." />
            <div className="container-fluid">

                <div class="row ">
                    <div class="col-1"></div>
                    <div class="col-6">
                        <h1 className="text-white mainheading">
                            Appiness
                          </h1>
                        <div className="row"></div>
                        <h1 className="text-white">
                            ADULT & PAEDIATRIC BONE MARROW TRANSPLANT PROGRAMME
                         </h1>
                        <h2 className="text3">Haematology | Oncology | Immunology</h2>
                        <button className="appt-btn">Book An Appointment</button>
                    </div>
                    <div class="col-4">
                        <form className="bg-white login-form">
                            <h3>Enquire Now</h3>
                            <div className="form-group bg-white">
                                <input type="text" class="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group bg-white">
                                <input type="email" class="form-control" placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <input type="number" class="form-control" placeholder="Phone number" />
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Your Message" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-bg">Submit</button>
                        </form>
                    </div>
                    <div class="col-1"></div>
                </div>

                <br />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* //base2 */}
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <img src={BnImg} alt="..." />
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5">
                            <br />
                            <div class="card" >
                                <div className="card-body rect-text-bg ">
                                    <p className="card-text rect-text ">Bone Marrow Transplant (BMT) better known as
                                 haematopoietic stem cell transplant(HSCT) as bone marrow cells are transplanted</p>
                                </div>
                            </div>
                            <br />
                            <div class="card rect-text-bg1" >
                                <div className="card-body ">
                                    <p className="card-text rect-text ">Replacement of diseased or defective marrow with marrow from a healthy donor</p>
                                </div>
                            </div>
                            <br />
                            <div class="card rect-text-bg1" >
                                <div className="card-body  ">
                                    <p className="card-text rect-text ">Medicines and in certain situations radiotherapy as well is given to get rid of diseased marrow and bone marrow cells from healthy donor is given to replace it.</p>
                                </div>
                            </div>
                            <br />
                            <div class="card rect-text-bg1" >
                                <div className="card-body ">
                                    <p className="card-text rect-text ">IN autologous bone marrow transplant, high dose chemotherapy is given to kill cancer cells and child own marrow cells are given back</p>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />

                <Doctors />
                <br></br>
                <Warnings />

                <Testimonials />
                <br />
                <Footer />






            </div>

        </div>

    </div>

)


export default Base;