import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, onClose, btnToPrevent = 'btnToPrevent') {
    useEffect(() => {
        function handleClickOutside(event) {
            const { value } = event.target.classList
            if (value.includes(btnToPrevent)) return
            if (ref.current && !ref.current.contains(event.target)) {
                onClose()
            }
        }
        function handleKey({ keyCode }) {
            if (ref.current && keyCode === 27) onClose()
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKey);
        };
    }, [ref, btnToPrevent, onClose]);
}

function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.onClose, props.btnToPrevent);
    return <section ref={wrapperRef}>{props.children}</section>;
}

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
};

export default OutsideAlerter;
