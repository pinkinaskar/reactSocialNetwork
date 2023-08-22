import React, { useState, useRef }  from "react";
import { logout } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";


function Navbar() {

    return (  

<nav className="sidebar">
		<ul className="menu-slide ps-container ps-theme-default" data-ps-id="a800751d-a652-dfad-9f4c-58794a7ca73d">
			<li className="active menu-item-has-children">
				<a className="" href="https://wpkixx.com/html/socimo/#" title="">
					<i><svg id="icon-home" className="feather feather-home"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" ></path><path d="M9,22L9,12L15,12L15,22" ></path></svg></i> Home
				</a>
				<ul className="submenu">
					<li><a href="https://wpkixx.com/html/socimo/index.html" title="">Newsfeed</a></li>
					<li><a href="https://wpkixx.com/html/socimo/company-home.html" title="">Company Home</a></li>
					<li><a href="https://wpkixx.com/html/socimo/profile-page2.html" title="">User Profile</a></li>
					<li><a href="https://wpkixx.com/html/socimo/profile.html" title="">Student User Profile</a></li>
					<li><a href="https://wpkixx.com/html/socimo/groups.html" title="">Groups</a></li>
					<li><a href="https://wpkixx.com/html/socimo/group-detail.html" title="">Group Detail</a></li>
					<li><a href="https://wpkixx.com/html/socimo/post-detail.html" title="">Social Post Detail</a></li>
					<li><a href="https://wpkixx.com/html/socimo/messages.html" title="">Chat/Messages</a></li>
					<li><a href="https://wpkixx.com/html/socimo/notifications.html" title="">Notificatioins</a></li>
					<li><a href="https://wpkixx.com/html/socimo/search-result.html" title="">Search Result</a></li>
				</ul>
			</li>
			<li className="menu-item-has-children">
				<a className="" href="https://wpkixx.com/html/socimo/#" title="">
					<i className=""><svg id="ab7" className="feather feather-zap"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13,2L3,14L12,14L11,22L21,10L12,10L13,2Z" ></path></svg></i> Features
				</a>
				<ul className="submenu">
					<li><a href="https://wpkixx.com/html/socimo/videos.html" title="">Videos</a></li>
					<li><a href="https://wpkixx.com/html/socimo/live-stream.html" title="">Live Stream</a></li>
					<li><a href="https://wpkixx.com/html/socimo/event-page.html" title="">Events Page</a></li>
					<li><a href="https://wpkixx.com/html/socimo/event-detail.html" title="">Event Detail</a></li>
					<li><a href="https://wpkixx.com/html/socimo/Q-A.html" title="">QA</a></li>
					<li><a href="https://wpkixx.com/html/socimo/Q-detail.html" title="">QA Detail</a></li>
					<li><a href="https://wpkixx.com/html/socimo/help-faq.html" title="">Support Help</a></li>
					<li><a href="https://wpkixx.com/html/socimo/help-faq-detail.html" title="">Support Detail</a></li>
				</ul>
			</li>
			
			<li className="menu-item-has-children">
				<a className="" href="https://wpkixx.com/html/socimo/#" title="">
					 <i className="">
<svg id="ab5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" ></path><path d="M3,6L21,6" ></path><path d="M16 10a4 4 0 0 1-8 0" ></path></svg></i> Market Place
				</a>
				<ul className="submenu">
					<li><a href="https://wpkixx.com/html/socimo/books.html" title="">Books</a></li>
					<li><a href="https://wpkixx.com/html/socimo/book-detail.html" title="">Books Detail</a></li>
					<li><a href="https://wpkixx.com/html/socimo/courses.html" title="">Course</a></li>
					<li><a href="https://wpkixx.com/html/socimo/course-detail.html" title="">course Detail</a></li>
					<li><a href="https://wpkixx.com/html/socimo/add-new-course.html" title="">Add New Course</a></li>
					<li><a href="https://wpkixx.com/html/socimo/product-cart.html" title="">Cart Page</a></li>
					<li><a href="https://wpkixx.com/html/socimo/product-checkout.html" title="">Checkout</a></li>
					<li><a href="https://wpkixx.com/html/socimo/add-credits.html" title="">Add Credit</a></li>
					<li><a href="https://wpkixx.com/html/socimo/pay-out.html" title="">Payouts</a></li>
					<li><a href="https://wpkixx.com/html/socimo/price-plan.html" title="">Pricing Plans</a></li>
					<li><a href="https://wpkixx.com/html/socimo/invoice.html" title="">Invoice</a></li>
					<li><a href="https://wpkixx.com/html/socimo/thank-you.html" title="">Thank you Page</a></li>
				</ul>
			</li>
			<li className="menu-item-has-children">
				<a className="" href="https://wpkixx.com/html/socimo/#" title="">
					 <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
						</i> Blogs
				</a>
				<ul className="submenu">
					<li><a href="https://wpkixx.com/html/socimo/blog.html" title="">Blog</a></li>
					<li><a href="https://wpkixx.com/html/socimo/blog-detail.html" title="">Blog Detail</a></li>
				</ul>
			</li>
			<li className="menu-item-has-children">
				<a className="" href="https://wpkixx.com/html/socimo/#" title="">
					<i><svg id="ab8" className="feather feather-file"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" ></path><path d="M13,2L13,9L20,9" ></path></svg></i> Featured Pages
				</a>
				<ul className="submenu">
					<li><a href="https://wpkixx.com/html/socimo/404.html" title="">Error 404</a></li>
					<li><a href="https://wpkixx.com/html/socimo/coming-soon.html" title="">Coming Soon</a></li>
					<li><a href="https://wpkixx.com/html/socimo/send-feedback.html" title="">Send Feedback</a></li>
					<li><a href="https://wpkixx.com/html/socimo/badges.html" title="">Badges</a></li>
					<li><a href="https://wpkixx.com/html/socimo/thank-you.html" title="">Thank You</a></li>
				</ul>
			</li>
			<li className="menu-item-has-children">
				<a className="" href="https://wpkixx.com/html/socimo/#" title="">
					<i className="">
					<svg id="ab9" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-lock"><path width="18" height="11" d="M3 11 L21 11 L21 22 L3 22 Z" ></path><path d="M7 11V7a5 5 0 0 1 10 0v4" ></path></svg></i> Authentications
				</a>
				<ul className="submenu">
					<li><a href="https://wpkixx.com/html/socimo/sign-in.html" title="">Sign In</a></li>
					<li><a href="https://wpkixx.com/html/socimo/signup.html" title="">Sign Up</a></li>
					<li><a href="https://wpkixx.com/html/socimo/forgot-password.html" title="">Forgot Password</a></li>
				</ul>
			</li>
			<li className="">
				<a className="" href="https://wpkixx.com/html/socimo/about-university.html" title="">
					<i><svg id="ab1" className="feather feather-users"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><path d="M5,7A4,4 0,1,1 13,7A4,4 0,1,1 5,7" ></path><path d="M23 21v-2a4 4 0 0 0-3-3.87" ></path><path d="M16 3.13a4 4 0 0 1 0 7.75" ></path></svg></i> University Profile
				</a>
			</li>
			<li className="">
				<a className="" href="https://wpkixx.com/html/socimo/messages.html" title="">
					<i className="">
<svg className="feather feather-message-square"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg" id="ab2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" ></path></svg></i> Live Chat
				</a>
			</li>
			<li className="">
				<a className="" href="https://wpkixx.com/html/socimo/privacy-n-policy.html" title=""><i className="">
<svg id="ab4" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" ></path><path d="M12,15L17,21L7,21L12,15Z" ></path></svg></i> Privacy Polices
				</a>
			</li>
			<li className="">
				<a className="" href="https://wpkixx.com/html/socimo/settings.html" title=""><i className="">

<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></i> Web Settings
				</a>
			</li>
			<li className="menu-item-has-children">
				<a className="#" href="https://wpkixx.com/html/socimo/#" title="">
					<i className="">
					<svg id="team" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-smile"><path d="M2,12A10,10 0,1,1 22,12A10,10 0,1,1 2,12" ></path><path d="M8 14s1.5 2 4 2 4-2 4-2" ></path><path d="M9,9L9.01,9" ></path><path d="M15,9L15.01,9" ></path></svg></i> Development Tools
				</a>
				<ul className="submenu">
					<li><a href="https://wpkixx.com/html/socimo/widgets.html" title="">Widgets Collection</a></li>
					<li><a href="https://wpkixx.com/html/socimo/development-component.html" title="">Web Component</a></li>
					<li><a href="https://wpkixx.com/html/socimo/development-elements.html" title="">Web Elements</a></li>
					<li><a href="https://wpkixx.com/html/socimo/loader-spiners.html" title="">Loader Spiners</a></li>
				</ul>
			</li>
			
		<div className="ps-scrollbar-x-rail"><div className="ps-scrollbar-x"  ></div></div><div className="ps-scrollbar-y-rail" ><div className="ps-scrollbar-y" ></div></div></ul>
	</nav>

    );
  }
  
  export default Navbar;