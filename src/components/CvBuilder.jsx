import { useState } from "react";
import SaveButton from "./SaveButton";

function CvBuilder(props){

     function checkForEmptyFields(data) {
        for (let key in data) {
            if (typeof data[key] === 'object') {
                if (checkForEmptyFields(data[key])) {
                    return true;
                }
            } else {
                if (data[key] === '') {
                    return true;
                }
            }
        }
        return false;
    }

    const handleInputChange = (event, section, field) => {
        const value = event.target.value;
        props.setPersonInput(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));

        
        
    };

    props.setFieldsEmpty(checkForEmptyFields(props.personInput))

    return(
        <div className="cv-builder">
            <div className="GeneralInfoInput">
                <h1>General Info</h1>
                <label>Name</label>
                <input id="name" value={props.personInput.general.name} onChange={(e) => handleInputChange(e, 'general', 'name')} />
                <label>Email</label>
                <input id="email" value={props.personInput.general.email} onChange={(e) => handleInputChange(e, 'general', 'email')} />
                <label>Phone</label>
                <input id="phone" value={props.personInput.general.phoneNumber} onChange={(e) => handleInputChange(e, 'general', 'phoneNumber')} />
            </div>

            <div className="EducationInput">
                <h1>Education Experience</h1>
                <label>Degree</label>
                <input value={props.personInput.education.degree} onChange={(e) => handleInputChange(e, 'education', 'degree')} />
                <label>School</label>
                <input value={props.personInput.education.school} onChange={(e) => handleInputChange(e, 'education', 'school')} />
                <label>Start Date</label>
                <input type="date" value={props.personInput.education.startDate} onChange={(e) => handleInputChange(e, 'education', 'startDate')} />
                <label>End Date</label>
                <input type="date" value={props.personInput.education.endDate} onChange={(e) => handleInputChange(e, 'education', 'endDate')} />
            </div>

            <div className="ExperienceInput">
                <h1>Professional Experience</h1>
                <label>Job Title</label>
                <input value={props.personInput.job.jobTitle} onChange={(e) => handleInputChange(e, 'job', 'jobTitle')} />
                <label>Company</label>
                <input value={props.personInput.job.company} onChange={(e) => handleInputChange(e, 'job', 'company')} />
                <label>Start Date</label>
                <input type="date" value={props.personInput.job.startDate} onChange={(e) => handleInputChange(e, 'job', 'startDate')} />
                <label>End Date</label>
                <input type="date" value={props.personInput.job.endDate} onChange={(e) => handleInputChange(e, 'job', 'endDate')} />
            </div>
            <SaveButton setUserInputOnce={props.setUserInputOnce} fieldsEmpty={props.fieldsEmpty}setPersonInput = {props.setPersonInput} personInput={props.personInput} personOutput={props.personOutput} setPersonOutput={props.setPersonOutput} setEditMode={props.setEditMode}/> 
        </div>
    )
    
}

export default CvBuilder