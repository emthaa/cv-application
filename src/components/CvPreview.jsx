const CvPreview = (props) => {

    console.log(props)

    return(
        <div className="cv-preview">
            <div className="cv-preview-general-info">
                <h1 className="full-name">{props.person.general.name}</h1>
                <div className="email-and-phone">
                    <p className="email">{props.person.general.email}</p>
                    <p className="phone-number">{props.person.general.phoneNumber}</p>
                </div>
            </div>
            <div>
                <h2 className="education-preview-header">Education</h2>
                <div className="education-content">
                    <p>{props.person.education.degree}, {props.person.education.school}</p>
                    <p>{props.person.education.startDate} - {props.person.education.endDate}</p>
                </div>
            </div>
            <div>
                <h2 className="experience-preview-header">Professional Experience</h2>
                <div className="experience-content">
                    <p>{props.person.job.jobTitle}, {props.person.job.company}</p>   
                    <p>{props.person.job.startDate} - {props.person.job.endDate}</p>
                </div>
            </div>
        </div>
    )

}

export default CvPreview