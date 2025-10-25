import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs } from 'react-bootstrap';
import { faArrowRight, faArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import {
    faXTwitter,
    faInstagram,
    faLinkedin,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';



const Banner = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                {/* Sidebar */}
                <div className='col-lg-2 col-12'>
                    <div className="vertical-text">
                        <h2 className='color-primary ms-0 d-md-inline d-none'>
                            EMPEROR <br />
                            <span className="seal">SEAL</span> <span className='text-white d-md-inline d-none'>|</span>{' '}
                            <span className="dao text-white">DAO</span>
                        </h2>
                        <h2 className='color-primary ms-0 d-md-none d-block'>
                            EMPEROR SEAl
                        </h2>
                        <h5 className='d-md-none d-block'>DAO</h5>
                    </div>
                     <div className='mt-232 position-relative d-md-block d-none'>
                        <h4 className='color-primary fw-bold mb-3'>Follow Us</h4>
                        <p className='text-white font-12'>
                            We are a results-driven digital agency dedicated to helping brands grow, engage, and thrive in the digital space.
                        </p>
                        <div className='d-flex gap-4'>
                            <FontAwesomeIcon className='text-white' icon={faXTwitter} size="lg" />
                            <FontAwesomeIcon className='text-white' icon={faFacebook} size="lg" />
                            <FontAwesomeIcon className='text-white' icon={faInstagram} size="lg" />
                            <FontAwesomeIcon className='text-white' icon={faLinkedin} size="lg" />
                        </div>
                        <div className='bg-banner-btn p-3 rounded-pill mt-trans position-absolute z-1'>
                            <h5 className='d-flex mb-0 align-items-center'>
                                Let’s Transform Your Ideas{' '}
                                <span className='circle-icon ms-3'>
                                    <FontAwesomeIcon icon={faArrowRight} size="sm" />
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className='col-lg-10 col-12 position-relative'>

                    {/* Background video */}
                    <div className='masked-video'>
                        <video className='w-100 video-h' autoPlay loop muted playsInline disableRemotePlayback>
                            <source src="/assets/images/bg-video.mp4" type="video/mp4" />
                        </video>

                        {/* Contact Button */}
                        <div className='position-absolute top-12 right-button d-md-block d-none'>
                            <div className='bg-banner-btn rounded-pill z-1 bg-dark-right px-5 py-3'>
                                <h5 className='d-flex mb-0 align-items-center'>
                                    Contact Us{' '}
                                    <span className='circle-icon ms-3'>
                                        <FontAwesomeIcon icon={faArrowRight} size="sm" />
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <img alt='image1' className='w-100 position-absolute start-0 h-48 top-0 d-md-block d-none' src='/assets/images/07.png' />

                    {/* Tabs Section */}
                    <div className='home-tab'>
                        <Tabs defaultActiveKey="projects" id="project-tabs" className="mb-3 custom-tabs p-2 position-absolute rounded-pill">
                            {/* Home Tab */}
                            <Tab eventKey="home" title="Home">
                                <div className="text-white px-4 pt-3 tab-1">
                                    <h3 className='font-rigmesh'>We Shape
                                        Futures</h3>
                                    <p className='text-white fw-bold w-75'>From strategic design and development to targeted marketing solutions, we craft end-to-end digital experiences that connect with audiences and deliver measurable impact. </p>
                                </div>
                            </Tab>

                            {/* Projects Tab */}

                            <Tab eventKey="projects" title="Projects">
                                <div className="text-white px-4 pt-3">
                                    <h2 className="fw-normal text-uppercase mb-4 font-rigmesh">Explore Our Projects</h2>

                                    <Swiper                                      
                                        spaceBetween={20}
                                        slidesPerView={2}
                                        loop={true}
                                        speed={4000}
                                        autoplay={{
                                          delay: 0,
                                          disableOnInteraction: false,
                                          pauseOnMouseEnter: true,
                                        }}
                                        pagination={{ clickable: true }}
                                        modules={[Autoplay]} // no FreeMode now
                                        className="swiper-width"

                                      
                                    >
                                        <SwiperSlide>
                                            {/* Bitcoin Card */}
                                            <div className="p-4 rounded-4 card1" style={{ backgroundColor: '#F6E9B9', position: 'relative' }}>
                                                <h3 className=" text-dark d-flex justify-content-between align-items-start">
                                                    BITCOIN

                                                </h3>
                                                <p className="text-dark mb-1">Cryptocurrency</p>
                                                <p className="text-dark small mb-0 position-relative z-1">
                                                    Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam accumsan libero viverra a feugiat libero molestie noincidunt diam accun.
                                                </p>
                                                <div class="go-corner" href="#">
                                                    <div class="go-arrow">
                                                        →
                                                    </div>
                                                </div>

                                                <div className="bg-overlay-5 position-absolute bottom-0 end-0 opacity-10 pe-3 pb-2">
                                                    <span style={{ fontSize: '6rem', fontWeight: 'bold', color: '#d9c8a8' }}><img alt='union1' src='/assets/images/union.svg' /></span>
                                                </div>
                                                <div class="social">
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faXTwitter} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faFacebook} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faInstagram} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faLinkedin} size="lg" />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            {/* Ethereum Card */}
                                            <div className="p-4 rounded-4 card1" style={{ backgroundColor: '#F6E9B9', position: 'relative' }}>
                                                <h3 className="text-dark d-flex justify-content-between align-items-start">
                                                    ETHEREUM

                                                </h3>
                                                <p className="text-dark mb-1">Cryptocurrency</p>
                                                <p className="text-dark small mb-0 position-relative z-1">
                                                    Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam accumsan libero viverra a feugiat libero molestie noincidunt diam accun.
                                                </p>
                                                <div class="go-corner" href="#">
                                                    <div class="go-arrow">
                                                        →
                                                    </div>
                                                </div>

                                                <div className="bg-overlay-5 position-absolute bottom-0 end-0 opacity-10 pe-3 pb-2">
                                                    <span style={{ fontSize: '6rem', fontWeight: 'bold', color: '#d9c8a8' }}><img alt='union2' src='/assets/images/union.svg' /></span>
                                                </div>
                                                <div class="social">
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faXTwitter} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faFacebook} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faInstagram} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faLinkedin} size="lg" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Ethereum Card */}
                                            <div className="p-4 rounded-4 card1" style={{ backgroundColor: '#F6E9B9', position: 'relative' }}>
                                                <h3 className=" text-dark d-flex justify-content-between align-items-start">
                                                    ETHEREUM

                                                </h3>
                                                <p className="text-dark mb-1">Cryptocurrency</p>
                                                <p className="text-dark small mb-0 position-relative z-1">
                                                    Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam accumsan libero viverra a feugiat libero molestie noincidunt diam accun.
                                                </p>
                                                <div class="go-corner" href="#">
                                                    <div class="go-arrow">
                                                        →
                                                    </div>
                                                </div>

                                                <div className="bg-overlay-5 position-absolute bottom-0 end-0 opacity-10 pe-3 pb-2">
                                                    <span style={{ fontSize: '6rem', fontWeight: 'bold', color: '#d9c8a8' }}><img alt='union3' src='/assets/images/union.svg' /></span>
                                                </div>
                                                <div class="social">
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faXTwitter} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faFacebook} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faInstagram} size="lg" />
                                                    <FontAwesomeIcon className='text-white bg-radial' icon={faLinkedin} size="lg" />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        {/* Add more SwiperSlide components as needed */}
                                    </Swiper>
                                </div>
                            </Tab>


                            {/* Collaborations Tab */}
                            <Tab eventKey="collaborations" title="Collaborations">
                                <div className="text-white px-4 pt-3 text-center collab">
                                    <h3 className='font-rigmesh mb-3'>Our Collaborations</h3>
                                    <p className='mx-auto'>We believe in building an open and collaborative ecosystem. Whether you're a developer, designer, project founder, or innovator,let's explore how we can co-create meaningful, blockchain-powered experiences.</p>
                                    <p className='mt-1 w-100'>Let’s connect and shape the decentralized future — together.</p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                    <div className='position-absolut top-12 right-button d-md-none mt-4'>
                            <div className='bg-banner-btn w-100 rounded-pill z-1 bg-dark-right px-5 py-3'>
                                <h5 className='d-flex mb-0 align-items-center justify-content-center'>
                                    Contact Us{' '}
                                    <span className='circle-icon ms-3'>
                                        <FontAwesomeIcon icon={faArrowRight} size="sm" />
                                    </span>
                                </h5>
                            </div>
                        </div>

                    <div className='mt-5 position-relative d-md-none'>
                        <img alt='mobile-img' className='mx-auto mb-3 d-md-none d-block' src='/assets/images/mobile-img.svg' />
                        <h4 className='color-primary fw-bold mb-3 text-center'>Follow Us</h4>
                        <p className='text-white font-12 text-center'>
                            We are a results-driven digital agency dedicated to helping brands grow, engage, and thrive in the digital space.
                        </p>
                        <div className='d-flex gap-4 justify-content-center'>
                            <FontAwesomeIcon className='text-white' icon={faXTwitter} size="lg" />
                            <FontAwesomeIcon className='text-white' icon={faFacebook} size="lg" />
                            <FontAwesomeIcon className='text-white' icon={faInstagram} size="lg" />
                            <FontAwesomeIcon className='text-white' icon={faLinkedin} size="lg" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
