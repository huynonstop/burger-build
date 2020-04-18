import React from 'react'
import ModalStyle from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"

const Modal = props => {
    return (
        <>
            <Backdrop show={props.show} clicked={props.cancel} />
            <div className={ModalStyle.Modal}
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: props.show ? "1" : "0"
                }}>
                {props.children}
            </div>
        </>
    )
}

export default React.memo(Modal, (prev, next) => {
    return next.show === prev.show && next.children === prev.children
});
