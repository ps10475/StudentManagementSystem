import React from 'react'; 
import {useHistory} from "react-router-dom";
import classes from './Logo.module.scss';
const index = React.memo(props => {
    let history = useHistory();
    return (
        <div className={classes.Logo} onClick={()=>history.push('/')}>
            {!props.collapsed? 'ProQ' : 'P'}
        </div>
    );
});

export default index;
