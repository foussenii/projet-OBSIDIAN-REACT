import React from 'react';
import img1 from './profil2.jpg'
import img2 from './image/img1.jpg'
import img3 from './image/img2.jpg'
import img4 from './image/img3.jpg'
import img5 from './image/img4.jpg'
import img6 from './image/img5.jpg'
import img7 from './image/img6.jpg'
import img8 from './image/img7.jpg'
import img9 from './image/img8.jpg'
import img10 from './image/img10.jpg'
import img11 from './image/img9.jpg'
import img12 from './image/album-03.jpg'
import logo1 from './logo/twitter.svg'
import logo2 from './logo/facebook.svg'
import logo3 from './logo/insta.svg'
import logo4 from './logo/YouTube.png'
import logo5 from './logo/vimeo.png'
import logo6 from './logo/amazon.png'
import logo7 from './logo/Apple.svg'
import logo8 from './logo/soundcloud.svg'
class Photo extends React.Component {
    render() {

        return (

            <div className="titre">

                <div className="top">

                    <h3>PHOTOS</h3>
                </div>
                <div className="trace">
                    <hr></hr>
                </div>

                <div className="container">
                    <img className="img-1" src={img2}/>
                    <img className="img-2" src={img3}/>
                    <img className="img-3" src={img4}/>
                    <img className="img-4" src={img5}/>
                    <img className="img-5" src={img6}/>
                    <img className="img-6" src={img7}/>
                </div>
                <div className="container-2">
                    <img className="img-7" src={img8}/>
                    <img className="img-9" src={img9}/>
                    <img className="img-10" src={img10}/>
                    <img className="img-11" src={img11}/>
                    <hr></hr>
                </div>

                <div className="parallax">
                    <div className="framework">

                        <div className="framework-four-text">
                            <div className="text-framework">
                                <div className="text-block-framwork">
                                    <h4>
                                        <strong>ABOUT OBSIDIAN
                                        </strong>
                                    </h4>
                                    <h4 id="grey">the OBSIDIAN theme, like the naturally ocuppation volcanic glassofthe same name, possesses an inherent allure that's stylish in appaerence and pratical purpose. with distinctive background options and various customisation posibilities, OBSIDIAN makes it easy to create the ultimate hub for you online identity .
                                    </h4>
                                </div>
                                <div className="text-block-framwork">
                                    <h4>
                                        <strong>VIVIENNE'S OMITTED LINE
                                        </strong>
                                    </h4>
                                    <img className="img-12" src={img12}/>
                                </div>
                                <div className="text-block-framwork">
                                    <h4>
                                        <strong>RECENT POSTS</strong>
                                    </h4>

                                    <h5>
                                        Welcome to our redesigned website</h5>
                                    <h6>April 1, 2015</h6>

                                    <h5>
                                        New tour dates posted</h5>
                                    <h6>December 16, 2014</h6>

                                    <h5>
                                        History of popular Music
                                    </h5>
                                    <h6>December 15, 2014</h6>
                                </div>

                            </div>

                        </div>
                        <hr></hr>
											

                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook-square fa-2x" aria-hidden="false"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram fa-2x" aria-hidden="false"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-vimeo fa-2x" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-soundcloud fa-2x" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-apple fa-2x" aria-hidden="true"></i></a>
                            </li>
														<li>
																<a href="#"><i className="fa fa-spotify fa-2x" aria-hidden="true"></i></a>
														</li>


                        </ul>
												<h4 className="end">OBSIDIAN MUSIC THEME BY AUDIOTHEME.</h4>
												<br></br>
                    </div>

                </div>

            </div>

        )
    }
}

export default Photo;
