import React from 'react';
import Bitmap from '../src/Assets/Bitmap.png';

const Testimonials = () => {

    const testimonialsData = [
        {
            image: { Bitmap },
            name: "John Doe",
            post: "Softwere Engineer",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            image: { Bitmap },
            name: "John Doe",
            post: "Softwere Engineer",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            image: { Bitmap },
            name: "John Doe",
            post: "Softwere Engineer",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            image: { Bitmap },
            name: "John Doe",
            post: "Softwere Engineer",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            image: { Bitmap },
            name: "John Doe",
            post: "Softwere Engineer",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
    ]

    const testimonialsCards = (card, Index) => {
        return (
            <div class="card test_card" key={Index}>
                <div class="card-body">
                    <h5 class="card-title">{card.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{card.post}</h6>
                    <p class="card-text">{card.desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container">
            <a className="test_heading">Testimonials</a>
                <div className="row scroll_card" >
                    <div className="col-1 col1dmy" ></div>

                    {testimonialsData.map(testimonialsCards)}
                </div>
                <div className="row">
                    <div className="col-2 bookbtn">
                <button className="btn btn-primary bookappt">Book An Appointment</button>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials;