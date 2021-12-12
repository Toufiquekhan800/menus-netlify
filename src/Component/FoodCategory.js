import React from 'react'

const FoodCategory = ({navData, filterMenu}) => {
    return (
        <div>
            <nav className="navbar">
                <div className="food-category-group">
                    {
                    navData.map((currElm) =>{
                        return(
                           <button className="food-category-item color-2" onClick= { ()=> filterMenu(currElm)} key={currElm}> {currElm} </button>
                        )
                        })
                    }
                </div>
            </nav>
        </div>
    )
}

export default FoodCategory;
