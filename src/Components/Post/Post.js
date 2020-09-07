import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      marginTop: 12,
      height: '100%',
    },
  });
const Post = (props) => {
    const classes = useStyles();
    const {title,body,id} = props.post;
    return (
        <Card raised={true} className={classes.root}>
            <CardHeader
                title={title}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            {props.mainPost && <CardActions>
                <Link to={`/Post_Details/${id}`}>
                    <Button size="small" varient='outlined' color='primary'>Read More</Button>
                </Link>
            </CardActions>}
        </Card>
    );
};

export default Post;