import React from 'react'
import image from '../../images/slider-background-kids-no-bg.webp'

function Footer() {
    return (
        <div>
            <footer className="footer">
        <div className="brand">
            HaveFun!!!
        </div>
        <div className="about">
            we are a +10 years experienced team of multi national experts, trying to help people connect and enjoy all sorts of event & fun happining arround them.
        </div>
        <div className="tags">
            <ul>
                <li>#Party</li>
                <li>#Dance</li>
                <li>#Festivals</li>
                <li>#Sports</li>
                <li>#Tour</li>
                <li>#Club</li>
                <li>#Entertainments</li>
                <li>#Museum</li>
                <li>#Arts</li>
                <li>#Library</li>
                <li>#Cinema</li>
                <li>#Children</li>
                <li>#Concert</li>
                <li>#Local Event</li>
            </ul>
        </div>
            <div className="image">
                <img height="160" src={image} alt="Sagra" />
            </div>
        </footer>
        </div>
    )
}

export default Footer
