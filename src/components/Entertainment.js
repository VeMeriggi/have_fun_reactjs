import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import LefSidebar from './layout/LefSidebar';
import RightSidebar from './layout/RightSidebar';
import {Link} from 'react-router-dom'

function Entertainment() {
    return (
        <div>
            <Header />
            <main className="main">
                <LefSidebar />
                <article className="article" style={{paddingTop: '2rem'}}>
            <div className="div list-header">
                <h3>Available Events</h3>
            </div>
            <div className="list" style={{width: '1103px'}}>
                <div className="card">
                    <div className="title">
                        <h3>Culture Theater</h3>
                        <h5>03.12.2021 | 08:00 - 00:00</h5>
                        <small>Tallinn, Hobojaama</small>
                    </div>
                    <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <Link to="/booking">Book</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <h3>Movie Night</h3>
                        <h5>07.01.2022 | 08:00 - 00:00</h5>
                        <small>Tallinn, Keliskivi</small>
                    </div>
                    <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <Link to="/booking">Book</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <h3>Table Tennis Match</h3>
                        <h5>05.11.2021 | 08:00 - 00:00</h5>
                        <small>Tallinn, Old town</small>
                    </div>
                    <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <Link to="/booking">Book</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <h3>Chees Weekend</h3>
                        <h5>31.11.2021 | 08:00 - 00:00</h5>
                        <small>Tallinn, TLU</small>
                    </div>
                    <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <Link to="/booking">Book</Link>
                    </div>
                </div>
                    <div className="card">
                        <div className="title">
                            <h3>Chrismas Package Events</h3>
                            <h5>17.12.2021 | 08:00 - 00:00</h5>
                            <small>Tallinn, City Center</small>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <Link to="/booking">Book</Link>
                        </div>
                    </div>
                </div>
                </article>
                <RightSidebar />
            </main>
            <Footer />
        </div>
    )
}

export default Entertainment
