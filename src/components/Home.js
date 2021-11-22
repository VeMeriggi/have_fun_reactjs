import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import LefSidebar from './layout/LefSidebar';
import RightSidebar from './layout/RightSidebar';

function Home() {
    return (
        <div>
            <Header />
            <main className="main">
                <LefSidebar />
                <article className="article">
                    <iframe width="1103" height="435" src="https://www.youtube.com/embed/afhAqMeeQJk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="thumnails">
                        <iframe width="250" height="150" src="https://www.youtube.com/embed/KosN7wAN2jw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="250" height="150" src="https://www.youtube.com/embed/7MFKy7DJsCY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                
                        <iframe width="250" height="150" src="https://www.youtube.com/embed/gae6KnW1e5k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>   
                </article>
                <RightSidebar />
            </main>
            <Footer />
        </div>
    )
}

export default Home
