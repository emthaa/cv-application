import EditButton from "./EditButton"


function CvBuilderLocked(props){

    return(
        <div className="cv-builder">
            <div className="GeneralInfoInput">
                <h1>General Info</h1>
                <label>Name</label>
                <p>{props.personInput.general.name}</p>
                <label>Email</label>
                <p>{props.personInput.general.email}</p>
                <label>Phone</label>
                <p>{props.personInput.general.phoneNumber}</p>
            </div>

            <div className="EducationInput">
                <h1>Education Experience</h1>
                <label>Degree</label>
                <p>{props.personInput.education.degree}</p>
                <label>School</label>
                <p>{props.personInput.education.school}</p>
                <label>Start Date</label>
                <p>{props.personInput.education.startDate}</p>
                <label>End Date</label>
                <p>{props.personInput.education.endDate}</p>
            </div>

            <div className="ExperienceInput">
                <h1>Professional Experience</h1>
                <label>Job Title</label>
                <p>{props.personInput.job.jobTitle}</p>
                <label>Company</label>
                <p>{props.personInput.job.company}</p>
                <label>Start Date</label>
                <p>{props.personInput.job.startDate}</p>
                <label>End Date</label>
                <p>{props.personInput.job.endDate}</p>
            </div>
            <EditButton setEditMode={props.setEditMode} editMode={props.editMode}/>
        </div>
    )
}

export default CvBuilderLocked