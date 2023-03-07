import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import Details from '../details/Details'
import './home.css'
import Menuicons from '../sidebar/Menuicons'


const Home = () => {

    const [menu, setMenu] = useState(false);
    const reducer = (state, action) => {
        switch(action) {
            case 1:
                return "ceo-connect"
            case 2:
                return "unit-news"
            default:
            return state;
        }
    }

    /* reducer function */
    const [state, dispatch] = useReducer(reducer, <Home />)

   

    const handleMenu = (e) => {
        e.preventDefault();
        setMenu(!menu);
    }

    return (
        <>
            <div className="main-section maincarousel">
                <nav className="navbar navbar-expand-lg bg-success">
                    <ul className="mainul d-flex">
                        <li>
                            <button className="text-white bg-success" onClick={handleMenu}>
                                ≣
                            </button>
                        </li>
                        <li>
                            <Link to="/" className="text-white " style={{ textDecoration: 'none' }} onClick={dispatch('home')}>Home</Link>
                        </li>
                        <li>
                            <Link to="/ceo-connect" className="text-white " style={{ textDecoration: 'none' }} onClick={dispatch('ceo-connect')}>CEO-Connect</Link>
                        </li>
                        <li>
                            <Link to="/unit-news" className="text-white " style={{ textDecoration: 'none' }} onClick={dispatch('unit-news')}>Unit-News</Link>
                        </li>

                    </ul>
                </nav>


                <div id="carouselExampleFade" class="maincarousel carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="maincarousel1 carousel-inner">
                        <div class="carousel-item active">
                            <img src={'https://th.bing.com/th/id/R.e685e3760457872205229d3c3af653a3?rik=aSaJnXhl%2fmLrhw&pid=ImgRaw&r=0'} className="d-block w-100 darkenbackground" alt="carousel-1" />
                        </div>
                        <div className="carousel-item">
                            <img src={'https://th.bing.com/th/id/OIP.MX7BOWoIpYD4WHuD-2F9GwHaE8?pid=ImgDet&w=750&h=500&rs=1'} className="d-block w-100 darkenbackground" alt="carousel-1" />
                        </div>
                        <div className="carousel-item">
                            <img src={'https://th.bing.com/th/id/OIP.9fd_WR1qpNn2JikodOx93AHaCx?pid=ImgDet&w=1600&h=600&rs=1'} className="d-block w-100 darkenbackground" alt="carousel-1" />
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
                <div className="menuicons">
                    {
                        menu && <Menuicons />
                    }
                </div>
                <div>{state}</div>
                <Details />
                <footer className="footer expand-lg h-4 bg-success">
                    <div>Copyright © 2023 Design Shack</div>
                </footer>
            </div>

        </>
    )
}

export default Home
