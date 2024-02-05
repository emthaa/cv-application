import { useState } from "react";

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