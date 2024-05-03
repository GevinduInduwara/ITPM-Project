import React, { useState } from "react";
// import logo from '../assets/logo.png';
import './sideNavBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
//import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
//import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import LocalShippingIcon from '@mui/icons-material/LocalShipping';
//import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LogoutIcon from '@mui/icons-material/Logout';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { NavLink } from 'react-router-dom';



const SideNavBar=()=> {
    const [isExpanded, setExpandState] = useState(false);
    const menuItems = [
        {
            path: "#",
            text: "My Account",
            icon: <AccountCircleIcon />,
        },
        {
            path: "/admin_orders_view",
            text: "Package Management",
            icon: <ShoppingCartIcon />,
        },
        // {
        //     path: "/admin_menu_view",
        //     text: "Menu Management",
        //     icon: <RestaurantMenuIcon />,
        // },
        {
            path: "/admin_employee_list",
            text: "User Handling",
            icon: <PeopleAltIcon />,
        },
        // {
        //     path: "/admin_employee_list",
        //     text: "Delivery Handling",
        //     icon: <DeliveryDiningIcon />,
        // },
        // {
        //     path: "/Supplier",
        //     text: "Package Handling",
        //     icon: <LocalShippingIcon />,
        // },
        {
            path: "#",
            text: "Chat Support",
            icon: <SupportAgentIcon />,
        },
        {
            path: "#",
            text: "Offer Management",
            icon: <CelebrationIcon />,
        },
        // {
        //     path: "/admin_feedback_view",
        //     text: "Feedback Management",
        //     icon: <InsertEmoticonIcon />,
        // },
        {
            path: "/admin_sales_view",
            text: "Payment Records",
            icon: <AssessmentIcon />,
        },
    ];        
    return (
            <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
                <div className="nav-upper">
                    <div className="nav-heading">
                        {isExpanded && ( 
                            <div className="nav-brand">
                                {/* <img src="logo.png" alt="navbrand" /> */}
                                <h3 className="sidenav-heading">Dashboard</h3>
                            </div>
                        )}
                        <button className={isExpanded ? "burger burger-in" : "burger burger-out"}
                        onClick={() => setExpandState(!isExpanded)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="nav-menu">
                       

                        {
                            menuItems.map((item, index) => (
                                <NavLink to={item.path} key={index} className={isExpanded ? "menu-items" : "menu-items menu-items-NX"} activeclassName="active">
                                    <div className="menu-item-icon">{item.icon}</div>
                                    <div style={{display: isExpanded ? "block" : "none"}} className="menu-items-text" id="menu-items-text">{item.text}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
                <div className="nav-footer">
                    
                    <div className="logout-icon" alt="logout"><LogoutIcon /></div>
            
                </div>
            </div>
        );
};


export default SideNavBar;