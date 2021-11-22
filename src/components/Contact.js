import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import LefSidebar from './layout/LefSidebar';
import RightSidebar from './layout/RightSidebar';
import styles from './styles/contact.module.css'

function Contact() {
    return (
        <div>
            <Header />
            <main className="main">
                <LefSidebar />
                <article className="article">
                    <div className="div list-header">
                        <h3>Who we are?</h3>
                    </div>
                    <div className="list" style={{width: '1103px'}}>
                        <div className="card">
                            <div className="body">
                                <p>Welcome to our information section, feel free to raise your query on our contact us page.</p>
                            </div>
                        </div>
                        <div className={styles.cardContact}>
                            <div className={styles.contact}>
                                <label for="name">Name</label>
                                <input type="text" id="name" placeholder="enter you name" />
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="enter you email" />
                                <label for="query">Query</label>
                                <textarea rows="10" cols="80" name="query" placeholder="query"></textarea>
                            </div>
                            <div className="action">
                                <button>Submit</button>
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

export default Contact

