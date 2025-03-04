import React, { useState } from 'react';
import './notes.css';

const Notes = () => {
    const [activity, set_activity] = useState("");
    const [listdata, set_listdata] = useState([]);
    const [editpos, set_editpos] = useState(null); 
    const add_save_activity = () => {
        if (editpos!==null) {
            const updatedlist=listdata.map((data, i) =>
                i===editpos?activity:data
            );
            set_listdata(updatedlist);
            set_editpos(null); 
        } else {
            if (activity.trim() !== "") {
                set_listdata([...listdata, activity]);
            }
        }
        set_activity(''); 
    };
    const remove_activity = (i) => {
        const updatedlist = listdata.filter(
            (_, id)=>id!==i);
        set_listdata(updatedlist);
    };
    const edit_activity = (i) => {
        set_editpos(i); 
        set_activity(listdata[i]);
    };
    const cancel_edit = () => {
        set_editpos(null);
        set_activity('');
    };

    return (
        <div className="notes-app">
<div className="header"><h1 className='app-heading'>Notes App</h1></div>
 <div className="input-tag">
 <input  className='add_notes' type="text" placeholder='Add a note'value={activity}onChange={(e)=>set_activity(e.target.value)}/>
   <button class='confirm_notes_btn btn' onClick={add_save_activity}>{editpos!==null?"Save":"Add"}</button>
{editpos!==null&&(<button class='cancel_btn btn' onClick={cancel_edit}>Cancel</button>)}
  </div>
  <div className="container">
  <h2 className="list-heading">My Notes:</h2>
 {listdata.length>0 && listdata.map((data,i)=>(<div key={i} className="list-item"><div className='listdata'>{data}
   <div className="buttons">
    <button  className="btn remove-btn" onClick={() => remove_activity(i)}>Remove</button>
    <button  className="btn" onClick={() => edit_activity(i)}>Edit</button>
    </div>
    </div>
    </div>
            ))}
        </div>
        </div>
    );
}

export default Notes;