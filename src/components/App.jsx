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

    const [fieldsEmpty,setFieldsEmpty] = useState(false)

    const [userInputOnce, setUserInputOnce] = useState(false)

    if(editMode == true){
        return(
            <>
            <CvBuilder setUserInputOnce={setUserInputOnce} fieldsEmpty={fieldsEmpty} setFieldsEmpty={setFieldsEmpty}personInput={personInput} setPersonInput={setPersonInput} personOutput={personOutput} setPersonOutput={setPersonOutput} setEditMode={setEditMode}/>
            <CvPreview userInputOnce={userInputOnce} personOutput={personOutput}/>
            </>
        )
    }else if(editMode == false){
        return(
            <>
            <CvBuilderLocked personInput={personInput} setEditMode={setEditMode} editMode={editMode}/>
            <CvPreview userInputOnce={userInputOnce} personOutput={personOutput}/>
            </>
        )
    }
}

export default App
