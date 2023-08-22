import React, { useState, useRef }  from "react";
import { logout } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";


function Menu() {

    return (  


<section>
<div className="white-bg">
	<div className="container-fluid">
		<div className="menu-caro">
			<div className="row">
				<div className="col-lg-2">
					<div className="sidemenu">
						<i>
<svg id="side-menu" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-menu"><path d="M3,12L21,12" ></path><path d="M3,6L21,6" ></path><path d="M3,18L21,18" ></path></svg></i>
					</div>
				</div>
				<div className="col-lg-8">
					<div className="page-caro owl-carousel owl-theme owl-responsive-1000 owl-loaded">
						
					<div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item cloned" ><div className="link-item">
							<a className="active" href="https://wpkixx.com/html/socimo/feed.html" title="">
								<i className="">
									<svg className="feather feather-zap"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
								</i>
								<p>Newsfeed</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/videos.html" title="">
								<i className="">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
								</i>
								<p>Videos</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/courses.html" title="">
								<i className="">
									<svg className="feather feather-airplay"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></i>
								<p>Courses</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/books.html" title="">
								<i className="">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></i>
								<p>Books</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/blog.html" title="">
								<i className=""><svg className="feather feather-layout"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect ry="2" rx="2" height="18" width="18" y="3" x="3"></rect><line y2="9" x2="21" y1="9" x1="3"></line><line y2="9" x2="9" y1="21" x1="9"></line></svg></i>
								<p>Blog</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/groups.html" title="">
								<i className="">
									<svg className="feather feather-users"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle r="4" cy="7" cx="9"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
								</i>
								<p>Groups</p>
							</a>
						</div></div><div className="owl-item active" ><div className="link-item">
							<a className="active" href="https://wpkixx.com/html/socimo/feed.html" title="">
								<i className="">
									<svg className="feather feather-zap"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
								</i>
								<p>Newsfeed</p>
							</a>
						</div></div><div className="owl-item active" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/videos.html" title="">
								<i className="">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
								</i>
								<p>Videos</p>
							</a>
						</div></div><div className="owl-item active" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/courses.html" title="">
								<i className="">
									<svg className="feather feather-airplay"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></i>
								<p>Courses</p>
							</a>
						</div></div><div className="owl-item active" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/books.html" title="">
								<i className="">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></i>
								<p>Books</p>
							</a>
						</div></div><div className="owl-item active"><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/blog.html" title="">
								<i className=""><svg className="feather feather-layout"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect ry="2" rx="2" height="18" width="18" y="3" x="3"></rect><line y2="9" x2="21" y1="9" x1="3"></line><line y2="9" x2="9" y1="21" x1="9"></line></svg></i>
								<p>Blog</p>
							</a>
						</div></div><div className="owl-item active" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/groups.html" title="">
								<i className="">
									<svg className="feather feather-users"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle r="4" cy="7" cx="9"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
								</i>
								<p>Groups</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a className="active" href="https://wpkixx.com/html/socimo/feed.html" title="">
								<i className="">
									<svg className="feather feather-zap"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
								</i>
								<p>Newsfeed</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/videos.html" title="">
								<i className="">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
								</i>
								<p>Videos</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/courses.html" title="">
								<i className="">
									<svg className="feather feather-airplay"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></i>
								<p>Courses</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/books.html" title="">
								<i className="">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></i>
								<p>Books</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/blog.html" title="">
								<i className=""><svg className="feather feather-layout"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect ry="2" rx="2" height="18" width="18" y="3" x="3"></rect><line y2="9" x2="21" y1="9" x1="3"></line><line y2="9" x2="9" y1="21" x1="9"></line></svg></i>
								<p>Blog</p>
							</a>
						</div></div><div className="owl-item cloned" ><div className="link-item">
							<a href="https://wpkixx.com/html/socimo/groups.html" title="">
								<i className="">
									<svg className="feather feather-users"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle r="4" cy="7" cx="9"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
								</i>
								<p>Groups</p>
							</a>
						</div></div></div></div><div className="owl-controls"><div className="owl-nav"><div className="owl-prev" >prev</div><div className="owl-next" >next</div></div><div className="owl-dots" ></div></div></div>
				</div>
				<div className="col-lg-2">
					<div className="user-inf">
						<div className="folowerz">Followers: 204</div>
						<ul className="stars">
							<li><i className="icofont-star"></i></li>
							<li><i className="icofont-star"></i></li>
							<li><i className="icofont-star"></i></li>
							<li><i className="icofont-star"></i></li>
							<li><i className="icofont-star"></i></li>
						</ul>
					</div>	
				</div>
			</div>
		</div>	
	</div>
</div>	
</section>

    );
  }
  
  export default Menu;