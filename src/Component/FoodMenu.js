import React from 'react'

const FoodMenu = ({menuData}) => {
    return (
        <>
            <section className="main-card--cointainer">
                {
                    menuData.map((currelm)=>{
                        console.log(currelm)
                        return (
                        <div className="card-container" key={currelm.id}>
                        <div className="card">
                            <div className="card-body">
                                
                                <h2 className="card-title"> {currelm.name}</h2>
                                <span className="card-description subtle">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, adipisci maxime. Dolorum?
                                </span>
                               
                            </div>
                            <img src={currelm.image} alt="img" className="card-media" />

                            <span className="order">Order Now</span>
                        </div>
                    </div>
                        )
                    })
                }
            </section> 
        </>
    )
}

export default FoodMenu;
