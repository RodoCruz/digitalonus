import React, { useState, useRef, useEffect } from 'react';
import Logo from '../resources/logo.png';
import StylesPage from '../styles/Page.module.css';
import StylesImage from '../styles/Image.module.css';

const Mainpage = () => {
    const [heightDiv, setHeightDiv] = useState(0);
    const [widthDiv, setWidthDiv] = useState(0);
    const [actualHeight, setActualHeight] = useState(0);
    const [actualWidth, setActualWidth] = useState(0);
    const [positionX, setPositionX] = useState("");
    const [positionY, setPositionY] = useState("");
    const [upStatus, setUpStatus] = useState(false);
    const [downStatus, setDownStatus] = useState(false);
    const [leftStatus, setLeftStatus] = useState(false);
    const [rightStatus, setRightStatus] = useState(false);
    const ref = useRef(null);
    var check = 0;

    useEffect(() => {
        setParameters();
        return () => {
        }
    }, []);

    // NOTE Set parameters of window
    const setParameters = () => {
        const x = ref.current.clientWidth;
        const y = ref.current.clientHeight;
        setHeightDiv(y);
        setWidthDiv(x);
        setActualHeight(((y / 2) - 50).toFixed(0));
        setActualWidth(((x / 2) - 50).toFixed(0));
        setPositionX(((x / 2) - 50).toFixed(0) + "px")
        setPositionY(((y / 2) - 50).toFixed(0) + "px")
    }

    // NOTE Function button up
    const Up = () => {
        ChangeBorder("Up");
        check = parseInt(actualHeight) - 10;
        if (actualHeight >= 9) {
            setActualHeight(check);
            setPositionY(check + "px");
        } else {
            setActualHeight(0);
            setPositionY(0 + "px");
        }
    }

    // NOTE Function button down
    const Down = () => {
        ChangeBorder("Down");
        check = parseInt(actualHeight) + 10
        if (actualHeight <= (heightDiv - 109)) {
            setActualHeight(check);
            setPositionY(check + "px");
        } else {
            setActualHeight(heightDiv - 100);
            setPositionY((heightDiv - 100) + "px");
        }
    }

    // NOTE Function button left
    const Left = () => {
        ChangeBorder("Left");
        check = parseInt(actualWidth) - 10;
        if (actualWidth >= 9) {
            setActualWidth(check);
            setPositionX(check + "px")
        } else {
            setActualWidth(0);
            setPositionX(0 + "px");
        }
    }

    // NOTE Function button right
    const Right = () => {
        ChangeBorder("Right");
        check = parseInt(actualWidth) + 10;
        if (actualWidth <= (widthDiv - 109)) {
            setActualWidth(check);
            setPositionX(check + "px")
        } else {
            setActualWidth(widthDiv - 100);
            setPositionX((widthDiv - 100) + "px");
        }
    }

    // NOTE Function modify border buttons
    const ChangeBorder = (typeButton) => {
        setUpStatus(false);
        setDownStatus(false);
        setLeftStatus(false);
        setRightStatus(false);
        switch (typeButton) {
            case 'Up':
                setUpStatus(true);
                break;
            case 'Down':
                setDownStatus(true);
                break;
            case 'Left':
                setLeftStatus(true);
                break;
            case 'Right':
                setRightStatus(true);
                break;
            default:
                break;
        }
    }

    return (
        <div className={StylesPage["page"]}>
            <div className={StylesPage["up"]} onClick={Up}>
                <div style={{ borderColor: upStatus ? "white" : "black" }} className={StylesPage["button"]}>
                    <br />
                </div>
            </div>
            <div className={StylesPage["left"]} onClick={Left}>
                <div style={{ borderColor: leftStatus ? "white" : "black" }} className={StylesPage["button"]}>
                    <br />
                </div>
            </div>
            <div className={StylesPage["right"]} onClick={Right}>
                <div style={{ borderColor: rightStatus ? "white" : "black" }} className={StylesPage["button"]}>
                    <br />
                </div>
            </div>
            <div className={StylesPage["down"]} onClick={Down}>
                <div style={{ borderColor: downStatus ? "white" : "black" }} className={StylesPage["button"]}>
                    <br />
                </div>
            </div>
            <div className={StylesPage["image"]} ref={ref}>
                <img src={Logo} alt="" style={{ top: `${positionY}`, left: `${positionX}` }} className={StylesImage["position"]} />
            </div>
        </div>
    );
}

export default Mainpage;