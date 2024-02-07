import { useState } from "react";

function SaveButton(props){

    const changeDateFormat = (dateString) => {
        if (!dateString) return ''; // Handle empty date string or other falsy values
    
        const [year, month, day] = dateString.split('-').map(Number);
        const newDate = new Date(year, month - 1, day);
    
        if (isNaN(newDate.getTime())) {
            return ''; // Invalid Date
        }
    
        const monthName = newDate.toLocaleString('default', { month: 'long' });
        const formattedDate = monthName + ' ' + newDate.getFullYear();
    
        return formattedDate;
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

        props.setUserInputOnce(true)

        props.setEditMode(false)

    };

    if(props.fieldsEmpty == false){

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