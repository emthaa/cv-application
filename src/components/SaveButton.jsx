import { useState } from "react";

//make two separete people, one for the input, one for output

function SaveButton(props){

    const handleButtonClick = () => {
        props.setPersonOutput(props.personInput)
        props.setEditMode(false)
    };

    return(
        <button className="save-button" role="button" onClick={handleButtonClick}>Save</button>
    )

}

export default SaveButton