import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import LefSidebar from './layout/LefSidebar';
import RightSidebar from './layout/RightSidebar';
import styles from './styles/book.module.css';
import MapContainer from './MapContainer';
import {Link} from 'react-router-dom';

function Booking() {
    return (
        <div>
            <Header />
            <main className="main">
                <LefSidebar />
                <article className="article">
            <div className="div list-header">
                <h3>Booking Options</h3>
            </div>
            <div className="list" style={{width: '1103px'}}>
                <div className="card">
                    <div className="title">
                        <h3>Culture Theater</h3>
                        <h5>03.12.2021 | 08:00 - 00:00</h5>
                        <small>Tallinn, Hobojaama</small>
                    </div>
                    <div className="body">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ab saepe quidem hic excepturi officia quas quo. Consequatur neque fugiat perspiciatis quia. Sapiente exercitationem atque amet placeat ut asperiores impedit!</p>
                    </div>
                </div>
                    <div className={styles.options}>
                        <div className={styles.option}>
                            <label className={styles.container}>05:00 AM - 07:45
                                <input type="radio" name="option" />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        <div className={styles.option}>
                            <label className={styles.container}>08:00 AM - 10:45
                                <input type="radio" name="option" />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        <div className={styles.option}>
                            <label className={styles.container}>11:00 AM - 13:45
                                <input type="radio" name="option" />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        <div className={styles.option}>
                            <label className={styles.container}>14:00 - 17:45
                                <input type="radio" name="option" />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        <div className={styles.option}>
                            <label className={styles.container}>18:00 - 21:45
                                <input type="radio" name="option" />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        <div className={styles.option}>
                            <label className={styles.container}>22:00 - 00:45
                                <input type="radio" name="option" />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                        </div>
                            <div id="map_1">
                                <MapContainer />
                            </div>
                            <div className={styles.button}>
                                <Link to="/payment"><button type="submit">Proceed to Payment</button></Link>
                                <label>€ 4.40</label>
                            </div>
                    </div>
                </article>
                <RightSidebar />
            </main>
            <Footer />
        </div>
    )
}

export default Booking
