import React from 'react'; 
import classes from './Logo.module.scss'
const index = (props) => {
    return (
        <div className={classes.Logo}>
            {!props.collapsed? 'ProQ' : 'P'}
        </div>
    );
}

export default index;
