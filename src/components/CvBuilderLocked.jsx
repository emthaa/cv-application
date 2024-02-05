import EditButton from "./EditButton"


function CvBuilderLocked(props){

    return(
        <div className="cv-builder">
            <div className="GeneralInfoInput">
                <h1>General Info</h1>
                <label>Name</label>
                <p>{props.personOutput.general.name}</p>
                <label>Email</label>
                <p>{props.personOutput.general.email}</p>
                <label>Phone</label>
                <p>{props.personOutput.general.phoneNumber}</p>
            </div>

            <div className="EducationInput">
                <h1>Education Experience</h1>
                <label>Degree</label>
                <p>{props.personOutput.education.degree}</p>
                <label>School</label>
                <p>{props.personOutput.education.school}</p>
                <label>Start Date</label>
                <p>{props.personOutput.education.startDate}</p>
                <label>End Date</label>
                <p>{props.personOutput.education.endDate}</p>
            </div>

            <div className="ExperienceInput">
                <h1>Professional Experience</h1>
                <label>Job Title</label>
                <p>{props.personOutput.job.jobTitle}</p>
                <label>Company</label>
                <p>{props.personOutput.job.company}</p>
                <label>Start Date</label>
                <p>{props.personOutput.job.startDate}</p>
                <label>End Date</label>
                <p>{props.personOutput.job.endDate}</p>
            </div>
            <EditButton setEditMode={props.setEditMode} editMode={props.editMode}/>
        </div>
    )
}

export default CvBuilderLocked