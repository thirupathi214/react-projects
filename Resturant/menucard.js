import React from 'react'





const Menucard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {
                    menuData.map((curElmnt) => {

                        // Destructuring the curElmnt

                        const {id,category,name,description,image} = curElmnt;

                        return (

                            <>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-  subtle'>{id}</span>
                                            {/* <span className='card-author subtile' style={myStyle}>Breakfast</span> */}
                                            <span className='card-author subtile'>{category}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='card-description'>
                                                {description}
                                            </span>
                                            <div className='card-read'> Read </div>
                                        </div>

                                        <img src={image} alt="images" className='card-media' />
                                        <span className='card-tag subtle'>Order Now</span>

                                    </div>
                                </div>
                            </>

                        )

                        
                    })
                }




            </section>

        </>
    )
}

export default Menucard
