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

    return(
        <button className="save-button" role="button" onClick={handleButtonClick}>Save</button>
    )

}

export default SaveButton