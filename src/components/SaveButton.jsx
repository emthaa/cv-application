import { useState } from "react";

function SaveButton(props){

    const changeDateFormat = (j) => {
        const newDate = new Date(j)
        const month = newDate.toLocaleString('default', { month: 'long' });

        const formattedDate = month + ' ' + newDate.getFullYear()

        if(formattedDate == "Invalid Date NaN"){
            return ''
        }

        return(formattedDate)

    }

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

    const handleButtonClick = () => {

        console.log(changeDateFormat())

        props.setPersonOutput({
            general:{
                name: props.personInput.general.name,
                email: props.personInput.general.email,
                phoneNumber: props.personInput.general.phoneNumber
            }, 
            education:{
                degree: props.personInput.education.degree,
                school: props.personInput.education.school,
                startDate: changeDateFormat(props.personInput.education.startDate),
                endDate: changeDateFormat(props.personInput.education.endDate)
            }, 
            job:{
                jobTitle: props.personInput.job.jobTitle,
                company: props.personInput.job.company,
                startDate: changeDateFormat(props.personInput.job.startDate),
                endDate: changeDateFormat(props.personInput.job.endDate)
            }
        })

        props.setEditMode(false)

    };

    if(props.saveButtonMode == false){

        return(
            <button className="save-button" role="button" onClick={handleButtonClick}>Save</button>
        )
    }else{
        return(
            <button className="save-button-disabled">Save</button>
        )
    }

}

export default SaveButton