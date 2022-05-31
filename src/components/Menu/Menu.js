import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/use-windowDimensions';
import MenuItem from './MenuItem';
import './Menu.css';



const Menu = ({ isMenuOpen }) => {
    const dimensions = useWindowDimensions();
    const [menuItems, setMenuItems] = useState(["existing inventory", "used inventory", "trade-in", "cybertruck", "roadster", "semi", "charging", "powerwall", "commercial solar", "test drive", "find us", "support", "careers", "united states"]);

    useEffect(() => {
        if (dimensions.width <= 1100) {
            setMenuItems(["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels", "existing inventory", "used inventory", "trade-in", "cybertruck", "roadster", "semi", "charging", "powerwall", "commercial solar", "test drive", "find us", "support", "careers", "shop", "united states"]);
        } else {
            setMenuItems(["existing inventory", "used inventory", "trade-in", "cybertruck", "roadster", "semi", "charging", "powerwall", "commercial solar", "test drive", "find us", "support", "careers", "united states"])
        }
    }, [dimensions.width])


    return (
        <>

            <div className={`menu ${isMenuOpen && 'showMenu'}`}>

                {menuItems.map((item, index) => <MenuItem title={item} key={index} />)}
            </div>
        </>
    )
}

export default Menu
