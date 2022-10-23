import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Content({sessionPosts, editPost, setCurrentEditPost, setDeletePost}) {
    const {id} = useParams(); // grabs the ID from the URL
    const [post, setPost] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        fetchById()
    },[])

    // GET LAST POST BY ID
    function fetchById(){
        let url = 'https://cheatsheetmern.herokuapp.com/cheatsheets/'+id;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setPost(response);
            });
    }

    function editBtnClick(){
        setCurrentEditPost(post);
        editPost(id);
    }

    function deleteBtnClick(){
        setDeletePost(post);
        navigate('/delete/' + id)
    }

    return (
        <div>
            <h1>Hello from Get Post By ID</h1>
            <h2>{post.title}</h2>
            <h3>{post.subject}</h3>
            <p>{post.body}</p>
            <button onClick={editBtnClick}>Edit</button>
            <button onClick={deleteBtnClick}>Delete</button>
        </div>
    );
}

export default Content;
