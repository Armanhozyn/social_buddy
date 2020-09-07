import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Post from '../Post/Post';



const Posts = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    
    return (
        <Grid container spacing={4}>
            {
                post.map(p => <Grid key={p.id} item sm={12} md={6}><Post mainPost={true} post={p}></Post></Grid>)
            }

        </Grid>
    );
};

export default Posts;