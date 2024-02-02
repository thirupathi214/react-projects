import React , { useState } from 'react'
import './style.css'
import Menucard from './menucard'
import Menu from './menuitem'
import Navbar from './components/Navbar'


// creating the unique list of all categories which are present in menuitems.js

const uniqueList = [...new Set(Menu.map((curElmnt) => {
                                            return curElmnt.category
                                        }
                            )),"All"];

console.log(uniqueList)

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === "All")
        {
            setMenuData(Menu)
            return;
        }
        const updatedList = Menu.filter((curElmnt) => {
            return curElmnt.category === category;
        });

        setMenuData(updatedList)
    };


    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <Menucard menuData={menuData} />

            <img src="" alt="" />
            
        </>
    )
}

export default Resturant
