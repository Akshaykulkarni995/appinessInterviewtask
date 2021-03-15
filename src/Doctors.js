import React from 'react';
import docimg from '../src/Assets/docimg.png'



const Doctors = () => {
    const doctorInfo = [
        { title: "Pediatric BMT", image: { docimg }, position: "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology", name: "Dr. Vijay Agarwal", description: "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004." },
        { image: { docimg }, position: "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology", name: "Dr. Vijay Agarwal", description: "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004." },
        // { image: { docimg }, position: "pos3", name: "name3", description: "desc3" },
        // { image: { docimg }, position: "pos4", name: "name4", description: "desc4" },
    ];



    const splitCards = (card, index) => {
        return (
            <div>
                <div class="container">
                    <div className="row">
                        <div className="col-6" key={index} >
                            <div class="card doc_card" >
                                <p className="text-center doc_title">{card.title}</p>
                                <img src={docimg} class="doctorimg center" alt="..." />
                                <div class="card-body">

                                    <p className="text-center doc_name ">{card.name}</p>
                                    <p className="text-center doc_pos ">{card.position}</p>
                                    <p class="card-text text-center doc_desc">{card.description}</p>
                                    <br />
                                    <a href="#" class="btn btn_knowmore btn-primary">Know More</a>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="col-6" key={index} >
                            <div class="card doc_card" >
                                <p className="text-center doc_title">{card.title}</p>
                                <img src={docimg} class="doctorimg center" alt="..." />
                                <div class="card-body">
                                    <p className="text-center doc_name ">{card.name}</p>
                                    <p className="text-center doc_pos ">{card.position}</p>
                                    <p class="card-text text-center doc_desc">{card.description}</p>
                                    <br />
                                    <a href="#" class="btn btn_knowmore btn-primary">Know More</a>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
    return (
        <div>

            {doctorInfo.map(splitCards)}


        </div>

    )
}

export default Doctors;