import React from 'react'
import desktopImage from '../images/image-web-3-desktop.jpg'
import retroImage from '../images/image-retro-pcs.jpg'
import laptops from '../images/image-top-laptops.jpg'
import gaming from '../images/image-gaming-growth.jpg'

function MainPage() {
    return (
        body{
            <div className="main">
            <div className="hero-container">
                <div className="hero-section">
                    <div className="hero-one">
                        <img src={desktopImage} alt="hero image" />
                    </div>
                    <div className="hero-two">
                        <h1 className="text">The Bright Future of Web 3.0?</h1>
                        <div className="article">
                            <p>
                                We dive into the next evolution of the web that claims to put
                                the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <button className="btnReadMore">Read more</button>
                        </div>
                    </div>
                    <div className="news-three">
                        <h2>New</h2>
                        <div className="news-card">
                            <h3>Hydrogen VS Electric Cars</h3>
                            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>
                        <div className="news-card">
                            <h3>The Downsides of AI Artistry</h3>
                            <p>
                                What are the possible adverse effects of on-demand AI image
                                generation?
                            </p>
                        </div>
                        <div className="news-card">
                            <h3>Is VC Funding Drying Up?</h3>
                            <p>
                                Private funding by VC firms is down 50% YOY. We take a look at
                                what that means.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-section">
                <div className="highlights">
                    <img src={retroImage}/>
                    <div className="text">
                        <span>01</span>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className="highlights">
                    <img src={laptops} />
                    <div className="text">
                        <span>02</span>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="highlights" id="highlights-three">
                    <img src={gaming} />
                    <div className="text">
                        <span>03</span>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
        }
        
    );
}

export default MainPage

