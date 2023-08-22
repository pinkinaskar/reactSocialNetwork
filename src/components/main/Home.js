import React, { useState, useRef }  from "react";
import { login, authenticate, isAuthenticated } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {

	const checkLogin = () => {
		if (isAuthenticated()) 
		{
			return <Navigate to="/home" />;
		}
};

	const homeContent = () => (
      
		<div className="theme-layout">
	
	<div className="responsive-header">
		<div className="logo res">
      <img src="images/logo.png" alt=""/><span>Socimo</span></div>
		<div className="user-avatar mobile">
			<a href="profile.html" title="View Profile"><img alt="" src="images/resources/user.jpg"/></a>
			<div className="name">
				<h4>Danial Cardos</h4>
				<span>Ontario, Canada</span>
			</div>
		</div>
		<div className="right-compact">
			<div className="sidemenu">
				<i>
<svg id="side-menu2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></i>
			</div>
			<div className="res-search">
				<span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
			</div>
			
		</div>
		<div className="restop-search">
			<span className="hide-search"><i className="icofont-close-circled"></i></span>
			
		</div>
	</div>
	
	<header className="transparent">
		<div className="topbar">
			<div className="logo"><img src="images/logo.png" alt=""/><span>Socimo</span></div>
			<div className="searches">
				<form method="post">
					<input type="text" placeholder="Search..."/>
					<button type="submit"><i className="icofont-search"></i></button>
					<span className="cancel-search"><i className="icofont-close"></i></span>
					<div className="recent-search">
						<h4 className="recent-searches">Your's Recent Search</h4>
						<ul className="so-history">
							<li>
								<div className="searched-user">
									<figure><img src="images/resources/user1.jpg" alt=""/></figure>
									<span>Danial Carabal</span>
								</div>
								<span className="trash"><i className="icofont-close-circled"></i></span>
							</li>
							<li>
								<div className="searched-user">
									<figure><img src="images/resources/user2.jpg" alt=""/></figure>
									<span>Maria K</span>
								</div>
								<span className="trash"><i className="icofont-close-circled"></i></span>
							</li>
							<li>
								<div className="searched-user">
									<figure><img src="images/resources/user3.jpg" alt=""/></figure>
									<span>Fawad Khan</span>
								</div>
								<span className="trash"><i className="icofont-close-circled"></i></span>
							</li>
							<li>
								<div className="searched-user">
									<figure><img src="images/resources/user4.jpg" alt=""/></figure>
									<span>Danial Sandos</span>
								</div>
								<span className="trash"><i className="icofont-close-circled"></i></span>
							</li>
							<li>
								<div className="searched-user">
									<figure><img src="images/resources/user5.jpg" alt=""/></figure>
									<span>Jack Carter</span>
								</div>
								<span className="trash"><i className="icofont-close-circled"></i></span>
							</li>
						</ul>
					</div>
				</form>
			</div>
			<ul>
				<li><a className="join-butn" href="feed.html" title="">Today's Newsfeed</a></li>
				<li><a href="#" title="">help</a></li>
				<li><a href="#" title=""><img src="images/flags/US.png" alt=""/></a></li>
				<li><a href="/sign-in" title="">Login / Register</a></li>
			</ul>
		</div>
	</header>
	
	
	<section>
		<div className="gap overlap nogap mate-black low-opacity">
			<div className="bg-image" className="home-zoom" ></div>
			<div className="feature-meta">
				<h1>Discover Your <span>Scientific</span> Knowledge</h1>
				<h3>and stay connected with <span></span></h3>
				<a href="sign-in" title="" className="main-btn" data-ripple="">Join Free</a>
			</div>
		</div>	
	</section>
	
	
	<div className="bottombar">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					{/* <span className="">&copy; copyright All rights reserved by SBE 2023</span> */}
				</div>
			</div>
		</div>
	</div>
	
</div>
			
			);


    return (
      <div>
		{homeContent()} {checkLogin()}
      </div>
    );
  }
  
  export default Home;