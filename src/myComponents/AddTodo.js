import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    
    const [title, setTitle]= useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Either Title or Description is empty. Please fill.");
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container'>
            <h3 className='text-center'>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="title" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-sm btn-warning">Submit</button>
            </form>
        </div>
    )
}
