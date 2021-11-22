import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import LefSidebar from './layout/LefSidebar';
import RightSidebar from './layout/RightSidebar';

function About() {
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
                        <div className="card">
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente necessitatibus dicta consequatur culpa ex accusamus quos eum alias totam, ratione sunt. Dolorum optio vero fuga distinctio. Aliquid cumque nisi facilis.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nostrum, voluptas porro ea debitis incidunt cupiditate id quae ex esse libero iure tempore eius excepturi numquam labore odit dolore aperiam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo in accusamus ipsa consequuntur? Quas nam impedit ducimus. Libero quas a fugit necessitatibus corrupti minima culpa similique maxime pariatur magnam?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eaque? Quam et blanditiis, illo dolorum deserunt voluptatem, repudiandae qui nostrum possimus dicta laborum id accusantium labore necessitatibus delectus dolores odio?</p>
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

export default About
