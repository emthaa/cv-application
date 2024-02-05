const CvPreview = (props) => {

 

    return(
        <div className="cv-preview">
            <div className="cv-preview-general-info">
                <h1 className="full-name">{props.personOutput.general.name}</h1>
                <div className="email-and-phone">
                    <p className="email">{props.personOutput.general.email}</p>
                    <p className="phone-number">{props.personOutput.general.phoneNumber}</p>
                </div>
            </div>
            <div>
                <h2 className="education-preview-header">Education</h2>
                <div className="education-content">
                    <p>{props.personOutput.education.degree}, {props.personOutput.education.school}</p>
                    <p>{props.personOutput.education.startDate} - {props.personOutput.education.endDate}</p>
                </div>
            </div>
            <div>
                <h2 className="experience-preview-header">Professional Experience</h2>
                <div className="experience-content">
                    <p>{props.personOutput.job.jobTitle}, {props.personOutput.job.company}</p>   
                    <p>{props.personOutput.job.startDate} - {props.personOutput.job.endDate}</p>
                </div>
            </div>
        </div>
    )

}

export default CvPreview