import CvBuilder from './CvBuilder'
import CvPreview from './CvPreview'
import SaveButton from './SaveButton'
import { useState } from 'react'

function App(){

    const [personInput,setPersonInput] = useState({
        general:{
            name:'',
            email:'',
            phoneNumber:''
        }, 
        education:{
            degree:"",
            school:"",
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

    const [personOutput,setPersonOutput] = useState({
        general:{
            name:'',
            email:'',
            phoneNumber:''
        }, 
        education:{
            degree:"",
            school:"",
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

    const [editMode, setEditMode] = useState(true)

    if(editMode == true){
        return(
            <>
            <CvBuilder personInput={personInput} setPersonInput={setPersonInput} personOutput={personOutput} setPersonOutput={setPersonOutput} setEditMode={setEditMode}/>
            <CvPreview personOutput={personOutput}/>
            </>
        )
    }else{
        return(
            <>
            
            <CvPreview personOutput={personOutput}/>
            </>
        )
    }
}

export default App
