import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const useStyle = makeStyles(()=>({
    typographyStyle: {
       FontSize: '15px',
       background: '#000',
       color: '#fff',
       textDecoration: 'none',
    }
}));

const Header = () => {
    const classes = useStyle();
    return (
       <AppBar position="static">
           <Toolbar>
               <Link to="/">
                    <Button  className={classes.typographyStyle}>Home</Button>
               </Link>
           </Toolbar>
       </AppBar>
    );
};

export default Header;