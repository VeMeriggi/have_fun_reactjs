import React from 'react'

function RightSidebar() {
    return (
        <div>
            <aside className="aside">
            <h1>Recent News</h1>
            <hr />
            <div className="blogs">
                <div className="card">
                    <h4>Opening Dance Ceremony, <small style={{fontSize:10}}>late september 2021</small></h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repellendus nam accusantium fugit inventore pariatur eligendi, alias excepturi laboriosam enim ut, similique eius dolorem ipsum provident vitae laborum repudiandae omnis!</p>
                    <h6><a href="#">Read More</a></h6>
                </div>
            </div>
            <br />
            <div className="blogs">
                <div className="card">
                    <h4>In House Food Festival, <small style={{fontSize:10}}>mid november 2021</small></h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repellendus nam accusantium fugit inventore pariatur eligendi, alias excepturi laboriosam enim ut, similique eius dolorem ipsum provident vitae laborum repudiandae omnis!</p>
                    <h6><a href="#">Read More</a></h6>
                </div>
            </div>
            </aside>   
        </div>
    )
}

export default RightSidebar
