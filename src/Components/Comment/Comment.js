import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Avatar, Typography } from '@material-ui/core';


const Comment = (props) => {
    const {name,email,body} = props.comment
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                        <img src="https://source.unsplash.com/random/user" alt=""/>
                    </Avatar>
                }
                title={name}
                subheader={email}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comment;