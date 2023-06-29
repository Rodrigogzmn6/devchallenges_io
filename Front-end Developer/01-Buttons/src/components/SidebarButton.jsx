import React, { useState } from "react";
import $ from 'jquery';

function SidebarButton(props) {
    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked)
    }

    return (
        <div id="sidebar-button" >
            <button className={isClicked ? "clicked" : ""} onClick={handleClick}>
                {props.text}
            </button>
        </div>
    );
}

export default SidebarButton;