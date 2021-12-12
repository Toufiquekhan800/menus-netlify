import React, {useState, useEffect} from 'react';
import "./style.css";
import Menu from './MenuApi';
//import MenuCard from './MenuCard';
//import Navbar from './Navbar';
import FoodMenu from './FoodMenu';
import FoodCategory from './FoodCategory';

const uniqueList = [ 
    ...new Set ( Menu.map((currElm)=> {
        return currElm.category;
    })
    ),"All"
]
console.log(uniqueList)
const FoodContainer = () => {  
    const [navData, setNavData] = useState(uniqueList);
    useEffect(() => {
        setNavData(uniqueList);
    }, [])
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);

    const filterMenu = (category)=>{
        if (category !== "All") {
            const updatedList = Menu.filter((currElm) =>{
                return currElm.category === category ;
            });
            setMenuData(updatedList);
        }
        else{
            setMenuData(Menu)
        }
    };

    return (
        <>
        <FoodCategory navData={navData} filterMenu={filterMenu} />
        <FoodMenu menuData={menuData}/>
        </>
    )
}

export default FoodContainer;
