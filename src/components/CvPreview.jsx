const CvPreview = (props) => {

    return(
        <div className="cv-preview">
            <div className="cv-preview-general-info">
                <h1 className="full-name">Name</h1>
                <div className="email-and-phone">
                    <p className="email">Email</p>
                    <p className="phone-number">PhoneNumber</p>
                </div>
            </div>
            <div>
                <h2 className="education-preview-header">Education</h2>
                <div className="education-content">
                    <p>Degree, School</p>
                    <div className="right-education-content">
                        <p>Jan,2024 - Feb,2024</p>
                        <p className="city-country-preview">City, Country</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="experience-preview-header">Professional Experience</h2>
                <div className="experience-content">
                    <div className="left-experience-content">
                        <p>Job Title, Company</p>   
                        <p className="description-job-preview">Descrption of job</p>
                    </div>
                    <p>Jan,2024 - Feb,2024</p>
                </div>
            </div>
        </div>
    )

}

export default CvPreview