import React from 'react'
import Menu1 from '../list-items'



const listMatter = (data) => {
<section className='section '>

  {
    Menu1.map((elements)=>{


      const {id,name,category,image,description}=elements;


      return(

        <div className='enna-da'>

          <div className='divclass'>

            <div className='list-id'>
              <span className='span-id'>{id}</span>
            </div>
            <h2 className='list-name'>{name}</h2>
            <span className='list-category'>{category}</span>

           <span className='list-image'>{image}</span>

           <p className='list-description'>{description}</p>

           <button className='play-button'>Play Now</button>
          </div>


        </div>
      )

       
    })
  }

</section>

}


export default listMatter
