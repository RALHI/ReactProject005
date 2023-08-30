import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Model.module.css';

const BackDrop = props => {
    return(
        <div className={classes.backdrop} onClick={props.onHideCart}/>
    );
};
const ModelOverlay = props => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

export default function Model(props){
    return(
        <Fragment>
                {ReactDOM.createPortal(<BackDrop onHideCart={props.onHideCart} />, portalElement)}
                {ReactDOM.createPortal( <ModelOverlay>{props.children}</ModelOverlay> , portalElement)}
            </Fragment>
    );
};