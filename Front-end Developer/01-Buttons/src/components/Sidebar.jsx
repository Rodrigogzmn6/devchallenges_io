import React from "react";
import SidebarTitle from "./SidebarTitle";
import SidebarButton from "./SidebarButton";
import sidebarButtons from "./const/sidebarButtons"; 
import { v4 as uuidv4 } from 'uuid';
import $ from 'jquery';

function Sidebar() {
    function createSidebarButtons(sidebarButton) {
        const buttonKey = uuidv4();
        return(
            <SidebarButton id={buttonKey} key={buttonKey} text={sidebarButton.name}/>
        );
    }

    return (
        <div id="sidebar">
            <SidebarTitle />
            {sidebarButtons.map(createSidebarButtons)}
        </div>
    );
}

export default Sidebar;
