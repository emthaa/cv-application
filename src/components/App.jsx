import CvBuilder from './CvBuilder'
import CvPreview from './CvPreview'
import SaveButton from './SaveButton'
import { useState } from 'react'

function App(){

    const [person,setPerson] = useState({
        general:{
            name:'Dom',
            email:'tew',
            phoneNumber:'ger'
        }, 
        education:{
            degree:"degree",
            school:"school",
            startDate:"",
            endDate:""
        }, 
        job:{
            jobTitle:"",
            company:"",
            startDate:"",
            endDate:""
        }
    })

    // Function to update the person state
    const updatePerson = (newPerson) => {
        setPerson(newPerson);
    };

    return(
        <>
            <div className='cv-builder'> 
                <CvBuilder />
                <SaveButton updatePerson={updatePerson} /> 
            </div>
            <CvPreview person={person}/>
        </>
    )
}

export default App
