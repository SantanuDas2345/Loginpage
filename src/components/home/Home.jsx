import React from 'react'
import Details from '../details/Details'
import './home.css'


const Home = () => {

    return (
        <>
            <div className="main-section bg-dark">
                <nav className="navbar navbar-expand-lg bg-success">
                    <div className="container-fluid">
                        <ul className="mainul navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly">

                            <li className="nav-item d-flex">
                                <span className="icons nav-link postion-relativ mx-4 text-white">≣</span>
                                <div className="nav-link active text-white mx-4">Home</div>
                                <div className="nav-link text-white mx-4">CEO Connect</div>
                                <div className="nav-link text-white mx-4">Unit News</div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="carouselExampleFade" class="maincarousel carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="maincarousel1 carousel-inner">
                        <div class="carousel-item active">
                            <img src={'https://th.bing.com/th/id/OIP.UYV_bihup-y039M8_Dk0KQHaFP?pid=ImgDet&rs=1'} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://th.bing.com/th/id/OIP.kGmuLIMjc1TVVqyC43yAZgHaEK?pid=ImgDet&rs=1'} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg'} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    {/* <button clasNames="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button> */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Details/>
            </div>
            
        </>
    )
}

export default Home
