import CvBuilder from './CvBuilder'
import CvPreview from './CvPreview'
import { useState } from 'react'
import CvBuilderLocked from './CvBuilderLocked'

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
    }else if(editMode == false){
        return(
            <>
            <CvBuilderLocked personOutput={personOutput} setEditMode={setEditMode} editMode={editMode}/>
            <CvPreview personOutput={personOutput}/>
            </>
        )
    }
}

export default App
