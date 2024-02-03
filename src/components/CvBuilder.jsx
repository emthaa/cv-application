import { useState } from "react";

function CvBuilder(){


    return(
        <>
            <div className="GeneralInfoInput">
                <h1>General Info</h1>
                <label>Name</label>
                <input id="name" />
                <label>Email</label>
                <input id="email" />
                <label>Phone</label>
                <input id="phone" />
            </div>

            <div className="EducationInput">
                <h1>Education Experience</h1>
                <label>Degree</label>
                <input />
                <label>School</label>
                <input />
                    <label>Start Date</label>
                    <input type="date"/>
                    <label>End Date</label>
                    <input type="date"/>
            </div>

            <div className="ExperienceInput">
                <h1>Professional Experience</h1>
                <label>Job Title</label>
                <input />
                <label>Company</label>
                <input />
                    <label>Start Date</label>
                    <input type="date"/>
                    <label>End Date</label>
                    <input type="date"/>
            </div>

        </>
    )
}

export default CvBuilder