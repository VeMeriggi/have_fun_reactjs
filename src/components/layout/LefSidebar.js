import React from 'react'
import image1 from '../../images/Firmapeod-ja-vastuv-tud-1440x960.jpg';
import image2 from '../../images/fun-in-Life-and-Enjoy-Life.png';
import image3 from '../../images/images sd.jpg';

function LefSidebar() {
    return (
        <div>
            <aside className="nav">
            <h1>Recent Events</h1>
            <div className="events">
                <div className="card">
                    <img height="160" src={image1} alt="firmapeod" />
                    <h6><a href="#">Read More</a></h6>
                </div>
                <div className="card">
                    <img height="160" src={image2} alt="fun-in-lief" />
                    <h6><a href="#">Read More</a></h6>
                </div>
                <div className="card">
                    <img height="140" src={image3} alt="fun-in-lief" />
                    <h6><a href="#">Read More</a></h6>
                </div>
            </div>
            </aside>
        </div>
    )
}

export default LefSidebar
