import React, { useState, useRef }  from "react";
// import Product from './Product'



function Home() {


    return (
      <div>

{/* 
<div class="page-loader" id="page-loader">

  <div class="loader"><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span></div>

</div> */}
<div class="theme-layout">
	
	<div class="responsive-header">
		<div class="logo res">
      <img src="images/logo.png" alt=""/><span>Socimo</span></div>
		<div class="user-avatar mobile">
			<a href="profile.html" title="View Profile"><img alt="" src="images/resources/user.jpg"/></a>
			<div class="name">
				<h4>Danial Cardos</h4>
				<span>Ontario, Canada</span>
			</div>
		</div>
		<div class="right-compact">
			<div class="sidemenu">
				<i>
<svg id="side-menu2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></i>
			</div>
			<div class="res-search">
				<span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
			</div>
			
		</div>
		<div class="restop-search">
			<span class="hide-search"><i class="icofont-close-circled"></i></span>
			
		</div>
	</div>
	
	<header class="transparent">
		<div class="topbar">
			<div class="logo"><img src="images/logo.png" alt=""/><span>Socimo</span></div>
			<div class="searches">
				<form method="post">
					<input type="text" placeholder="Search..."/>
					<button type="submit"><i class="icofont-search"></i></button>
					<span class="cancel-search"><i class="icofont-close"></i></span>
					<div class="recent-search">
						<h4 class="recent-searches">Your's Recent Search</h4>
						<ul class="so-history">
							<li>
								<div class="searched-user">
									<figure><img src="images/resources/user1.jpg" alt=""/></figure>
									<span>Danial Carabal</span>
								</div>
								<span class="trash"><i class="icofont-close-circled"></i></span>
							</li>
							<li>
								<div class="searched-user">
									<figure><img src="images/resources/user2.jpg" alt=""/></figure>
									<span>Maria K</span>
								</div>
								<span class="trash"><i class="icofont-close-circled"></i></span>
							</li>
							<li>
								<div class="searched-user">
									<figure><img src="images/resources/user3.jpg" alt=""/></figure>
									<span>Fawad Khan</span>
								</div>
								<span class="trash"><i class="icofont-close-circled"></i></span>
							</li>
							<li>
								<div class="searched-user">
									<figure><img src="images/resources/user4.jpg" alt=""/></figure>
									<span>Danial Sandos</span>
								</div>
								<span class="trash"><i class="icofont-close-circled"></i></span>
							</li>
							<li>
								<div class="searched-user">
									<figure><img src="images/resources/user5.jpg" alt=""/></figure>
									<span>Jack Carter</span>
								</div>
								<span class="trash"><i class="icofont-close-circled"></i></span>
							</li>
						</ul>
					</div>
				</form>
			</div>
			<ul>
				<li><a class="join-butn" href="feed.html" title="">Today's Newsfeed</a></li>
				<li><a href="#" title="">help</a></li>
				<li><a href="#" title=""><img src="images/flags/US.png" alt=""/></a></li>
				<li><a href="/sign-in" title="">Login / Register</a></li>
			</ul>
		</div>
	</header>
	
	
	<section>
		<div class="gap overlap nogap mate-black low-opacity">
			<div class="bg-image" className="home-zoom" ></div>
			<div class="feature-meta">
				<h1>Discover Your <span>Scientific</span> Knowledge</h1>
				<h3>and stay connected with <span></span></h3>
				<a href="sign-in" title="" class="main-btn" data-ripple="">Join Free</a>
			</div>
		</div>	
	</section>
	
	
	<div class="bottombar">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					{/* <span class="">&copy; copyright All rights reserved by SBE 2023</span> */}
				</div>
			</div>
		</div>
	</div>
	
</div>
	
	





      </div>
    );
  }
  
  export default Home;