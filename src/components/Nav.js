// IMPORTED HOOKS
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

// IMPORTED COMPONENTS
import CreateForm from './CreateForm';
import MySheets from './MySheets';
import SubjectSearch from './SubjectSearch';



function Nav(props) {

    //STATES 
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    	// HANDLE SUBMIT 
	function submitHandler(event){
		event.preventDefault();
        console.log(title)
        console.log(subject)
        console.log(content)
	}
    
	// HANDLE CHANGE 
	function handleChange(event){
        const inputTitle = (document.querySelector('#input-title').value);
        const inputSubject = (document.querySelector('#input-subject').value);
        const inputContent = (document.querySelector('#input-content').value); 

        //SET STATES
		setTitle((inputTitle))
        setSubject((inputSubject))
        setContent((inputContent))
	}

    return (
        <div>
           
            <Link to='/MySheets'>
            <h3>My Sheets</h3>
            </Link>
            <Link to='/create'>
            <h3>Create Sheet</h3>
            </Link>

            <Routes>
                <Route path='/MySheets' element={<MySheets/>}/>
                <Route path='/subjectsearch' element={<SubjectSearch/>}/>
                <Route path='/create' element ={<CreateForm title={title} subject={subject} content={content}handleChange={handleChange} submitHandler={submitHandler}/>}/>
                {/* <Route path='/form/:id' element={<Form title={title} subject={subject} body={body}/>}/> */}
            </Routes>
           
        </div>
    );
}

export default Nav;