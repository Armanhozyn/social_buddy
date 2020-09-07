import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';


const PostDetail = () => {
    const [post,setPost] = useState([]);
    const [comment,setComment] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComment(data));
    }, [id]);
    return (
        <Grid container direction="column" spacing={4}>
            <Grid item><Post post={post}></Post></Grid>
            <Typography component="h4">Comments:</Typography>
           
               
                {
                   comment.map(c => <Grid key={c.id} item><Comment comment={c}/></Grid>)
                }
                

        </Grid>
    );
};

export default PostDetail;