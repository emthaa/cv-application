import { useState } from "react";

function EditButton(props){

    const handleButtonClick = () => {
        props.setEditMode(true)
    };

    return(
        <button className="edit-button" role="button" onClick={handleButtonClick}>Edit</button>
    )

}

export default EditButton