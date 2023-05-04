import React, { useState } from "react";
import Fab from '@mui/material/Fab';


import AddCommentIcon from '@mui/icons-material/AddComment';


function CreateArea(props) {
  const {expand,setExpand}=useState(true)
  const [note, setNote] = useState({
    title: "",
    content: ""
  })
  function handleChange(event) {
    const { name, value } = event.target;
    
   
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }
  function submitNote(event) {
   
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  
  return (
  <>
    <div>
      <form className="create-note">
     <input  name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content"  onChange={handleChange} value={note.content} placeholder="Take a note..." rows={expand?3:1} />
        <Fab onClick={submitNote}><AddCommentIcon/></Fab>
      </form>
    </div>
    </>
  );
}

export default CreateArea;
