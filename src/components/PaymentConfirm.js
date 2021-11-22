import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import LefSidebar from './layout/LefSidebar';
import RightSidebar from './layout/RightSidebar';
import styles from './styles/payment-confirm.module.css'

function PaymentConfirm() {
    return (
        <div>
            <Header />
            <main className="main">
                <LefSidebar />
                <article className="article">
                    <div className="div list-header">
                        <h3>Thanks for booking your ticket</h3>
                    </div>
                    <div className="list" style={{width: '1103px'}}>
                        <div className="card">
                            <div className="body">
                                <p>Your ticket details has been sent to your registerd email.</p>
                            </div>
                        </div>
                        <div className={styles.action}>
                            <h4>You can the links below to make your tranportation booking, its totally optional</h4>
                            <div className="body">
                                <button>Bolt</button>
                                <button>Uber</button>
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

export default PaymentConfirm
