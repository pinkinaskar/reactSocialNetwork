import React, { useState, useRef }  from "react";
import { logout } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";


function Clocksection() {

    return ( 
						 <div className="col-lg-3">
								<aside className="sidebar static left">
									<div className="widget whitish low-opacity">
										<img src="images/time-clock.png" alt=""/>
										<div className="bg-image" ></div>
										<div className="date-time">
											<div className="realtime">
												<span id="hours">15</span>
												<span id="point">:</span>
												<span id="min">07</span>
											</div>	
											<span id="date">Thu, 17 August 2023</span>
										</div>
									</div>
									<div className="widget">
										<h4 className="widget-title">Complete Your Profile</h4>
										<span>Your Profile is missing followings!</span>
										<div data-progress="tip" className="progress__outer" data-value="0.67"><canvas width="80" height="80"></canvas>
											<div className="progress__inner">82%</div>
										</div>
										<ul className="prof-complete">
											<li><i className="icofont-plus-square"></i> <a href="https://wpkixx.com/html/socimo/#" title="">Upload Your Picture</a><em>10%</em></li>
											<li><i className="icofont-plus-square"></i> <a href="https://wpkixx.com/html/socimo/#" title="">Your University?</a><em>20%</em></li>
											<li><i className="icofont-plus-square"></i> <a href="https://wpkixx.com/html/socimo/#" title="">Add Payment Method</a><em>20%</em></li>
										</ul>
									</div>
									<div className="advertisment-box">
										<h4 className=""><i className="icofont-info-circle"></i> advertisment</h4>
										<figure>
											<a href="https://wpkixx.com/html/socimo/#" title="Advertisment"><img src="images/ad-widget2.gif" alt=""/></a>
										</figure>
									</div>
									
									<div className="widget">
										<h4 className="widget-title"><i className="icofont-flame-torch"></i> Popular Courses</h4>
										<ul className="premium-course">
											<li>
												<figure>
													<img src="images/course-5.jpg" alt=""/>
													<span className="tag">Free</span>
												</figure>
												<div className="vid-course">
													<h5><a href="https://wpkixx.com/html/socimo/course-detail.html" title="">Wordpress Online video course</a></h5>
													<ins className="price">$19/M</ins>
												</div>
											</li>
											<li>
												<figure>
													<img src="images/course-3.jpg" alt=""/>
													<span className="tag">Premium</span>
												</figure>
												<div className="vid-course">
													<h5><a href="https://wpkixx.com/html/socimo/course-detail.html" title="">Node JS Online video course</a></h5>
													<ins className="price">$29/M</ins>
												</div>
											</li>
										</ul>
									</div>
									<div className="widget">
										<h4 className="widget-title">Recent Blogs <a className="see-all" href="https://wpkixx.com/html/socimo/#" title="">See All</a></h4>
										<ul className="recent-links">
											<li>
												<figure><img alt="" src="images/recentlink-1.jpg"/></figure>
												<div className="re-links-meta">
													<h6><a title="" href="https://wpkixx.com/html/socimo/#">Moira's fade reach much farther...</a></h6>
													<span>2 weeks ago </span>
												</div>
											</li>
											<li>
												<figure><img alt="" src="images/recentlink-2.jpg"/></figure>
												<div className="re-links-meta">
													<h6><a title="" href="https://wpkixx.com/html/socimo/#">Daniel asks The voice of doomfist...</a></h6>
													<span>3 months ago </span>
												</div>
											</li>
											<li>
												<figure><img alt="" src="images/recentlink-3.jpg"/></figure>
												<div className="re-links-meta">
													<h6><a title="" href="https://wpkixx.com/html/socimo/#">The socimo over watch scandals.</a></h6>
													<span>1 day before</span>
												</div>
											</li>
										</ul>
									</div>
									<div className="widget">
										<h4 className="widget-title">Your profile has a new Experience section</h4>
										<p>
											Showcase your professional experience and education to help potential employers and collaborators find and contact you about career opportunities.
										</p>
										<a className="main-btn" href="https://wpkixx.com/html/socimo/profile.html" title="" data-ripple="">view profile</a>
									</div>
									<div className="widget web-links stick-widget">
										<h4 className="widget-title">Useful Links <a title="" href="https://wpkixx.com/html/socimo/#" className="see-all">See All</a></h4>
										<ul>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">about</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">career</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">advertise</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">socimo Apps</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">socimo Blog</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">Help</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">socimo Gifts</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">content policy</a></li>
											<li><i className="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">User Policy</a></li>
										</ul>
										<p>© Socimo 2020. All Rights Reserved.</p>
									</div>
								</aside>
							</div> 

							

    );
  }
  
  export default Clocksection;