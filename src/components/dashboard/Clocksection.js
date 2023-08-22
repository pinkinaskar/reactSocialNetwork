import React, { useState, useRef }  from "react";
import { logout } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";


function Clocksection() {

    return ( 
						 <div class="col-lg-3">
								<aside class="sidebar static left">
									<div class="widget whitish low-opacity">
										<img src="images/time-clock.png" alt=""/>
										<div class="bg-image" ></div>
										<div class="date-time">
											<div class="realtime">
												<span id="hours">15</span>
												<span id="point">:</span>
												<span id="min">07</span>
											</div>	
											<span id="date">Thu, 17 August 2023</span>
										</div>
									</div>
									<div class="widget">
										<h4 class="widget-title">Complete Your Profile</h4>
										<span>Your Profile is missing followings!</span>
										<div data-progress="tip" class="progress__outer" data-value="0.67"><canvas width="80" height="80"></canvas>
											<div class="progress__inner">82%</div>
										</div>
										<ul class="prof-complete">
											<li><i class="icofont-plus-square"></i> <a href="https://wpkixx.com/html/socimo/#" title="">Upload Your Picture</a><em>10%</em></li>
											<li><i class="icofont-plus-square"></i> <a href="https://wpkixx.com/html/socimo/#" title="">Your University?</a><em>20%</em></li>
											<li><i class="icofont-plus-square"></i> <a href="https://wpkixx.com/html/socimo/#" title="">Add Payment Method</a><em>20%</em></li>
										</ul>
									</div>
									<div class="advertisment-box">
										<h4 class=""><i class="icofont-info-circle"></i> advertisment</h4>
										<figure>
											<a href="https://wpkixx.com/html/socimo/#" title="Advertisment"><img src="images/ad-widget2.gif" alt=""/></a>
										</figure>
									</div>
									
									<div class="widget">
										<h4 class="widget-title"><i class="icofont-flame-torch"></i> Popular Courses</h4>
										<ul class="premium-course">
											<li>
												<figure>
													<img src="images/course-5.jpg" alt=""/>
													<span class="tag">Free</span>
												</figure>
												<div class="vid-course">
													<h5><a href="https://wpkixx.com/html/socimo/course-detail.html" title="">Wordpress Online video course</a></h5>
													<ins class="price">$19/M</ins>
												</div>
											</li>
											<li>
												<figure>
													<img src="images/course-3.jpg" alt=""/>
													<span class="tag">Premium</span>
												</figure>
												<div class="vid-course">
													<h5><a href="https://wpkixx.com/html/socimo/course-detail.html" title="">Node JS Online video course</a></h5>
													<ins class="price">$29/M</ins>
												</div>
											</li>
										</ul>
									</div>
									<div class="widget">
										<h4 class="widget-title">Recent Blogs <a class="see-all" href="https://wpkixx.com/html/socimo/#" title="">See All</a></h4>
										<ul class="recent-links">
											<li>
												<figure><img alt="" src="images/recentlink-1.jpg"/></figure>
												<div class="re-links-meta">
													<h6><a title="" href="https://wpkixx.com/html/socimo/#">Moira's fade reach much farther...</a></h6>
													<span>2 weeks ago </span>
												</div>
											</li>
											<li>
												<figure><img alt="" src="images/recentlink-2.jpg"/></figure>
												<div class="re-links-meta">
													<h6><a title="" href="https://wpkixx.com/html/socimo/#">Daniel asks The voice of doomfist...</a></h6>
													<span>3 months ago </span>
												</div>
											</li>
											<li>
												<figure><img alt="" src="images/recentlink-3.jpg"/></figure>
												<div class="re-links-meta">
													<h6><a title="" href="https://wpkixx.com/html/socimo/#">The socimo over watch scandals.</a></h6>
													<span>1 day before</span>
												</div>
											</li>
										</ul>
									</div>
									<div class="widget">
										<h4 class="widget-title">Your profile has a new Experience section</h4>
										<p>
											Showcase your professional experience and education to help potential employers and collaborators find and contact you about career opportunities.
										</p>
										<a class="main-btn" href="https://wpkixx.com/html/socimo/profile.html" title="" data-ripple="">view profile</a>
									</div>
									<div class="widget web-links stick-widget">
										<h4 class="widget-title">Useful Links <a title="" href="https://wpkixx.com/html/socimo/#" class="see-all">See All</a></h4>
										<ul>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">about</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">career</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">advertise</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">socimo Apps</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">socimo Blog</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">Help</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">socimo Gifts</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">content policy</a></li>
											<li><i class="icofont-dotted-right"></i> <a title="" href="https://wpkixx.com/html/socimo/#">User Policy</a></li>
										</ul>
										<p>© Socimo 2020. All Rights Reserved.</p>
									</div>
								</aside>
							</div> 

							

    );
  }
  
  export default Clocksection;