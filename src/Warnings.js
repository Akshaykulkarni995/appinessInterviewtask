import React from 'react';

const Warnings = () =>{
    return(
        <div>
            <div className="container">
                <h2 className="heading">What are the types of Bone Marrow Transplant?</h2>
                <div className="subpoints">
                <p>Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.</p>
                <p>Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.</p>
                <p>Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.</p>
                <p>Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.</p>
                </div>
            </div>
        </div>
    )
}

export default Warnings;