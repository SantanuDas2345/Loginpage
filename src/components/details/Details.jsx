import React from 'react'
import './details.css'

const Details = () => {

  return (
    <section className="details-section">
      <div className="flex-container">
        <div className="image">
            <img src={'https://th.bing.com/th/id/R.6aa084b444de3cf490c499bada91f869?rik=f8L7TZBSNgXLLA&pid=ImgRaw&r=0'} alt="image" />
        </div>
        <div className="flex-details text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex odit beatae distinctio, esse tempora quo! Nulla veniam culpa eius maxime architecto accusamus tempore sequi praesentium.
        </div>
      </div>
    </section>
  )
}

export default Details
