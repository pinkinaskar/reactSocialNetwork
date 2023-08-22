import React, { useState, useRef }  from "react";
import Header from "./Header";
import Menu from "./Menu"; 
import Navbar from "./Navbar"; 

import Sections from "./Sections"; 


function Dashboard() {


    return (  
      <div>




<div className="theme-layout">
	
	<Header/>

	{/* <Navbar/> */}	
	
	
	{/* <Menu/> */}
	
	<Sections/>
	
	
	<figure className="bottom-mockup"><img src="images/footer.png" alt=""/></figure>
	<div className="bottombar">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<span className="">© copyright All rights reserved by socimo 2020</span>
				</div>
			</div>
		</div>
	</div>
	
	<div className="wraper-invite">
		<div className="popup">
			<span className="popup-closed"><i className="icofont-close"></i></span>
			<div className="popup-meta">
				<div className="popup-head">
					<h5><i>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></i> Invite Colleagues</h5>
				</div>
				<div className="invitation-meta">
					<p>
						Enter an email address to invite a colleague or co-author to join you on socimo. They will receive an email and, in some cases, up to two reminders.
					</p>
					<form method="post" className="c-form">
						<input type="text" placeholder="Enter Email"/>
						<button type="submit" className="main-btn">Invite</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<div className="popup-wraper">
		<div className="popup">
			<span className="popup-closed"><i className="icofont-close"></i></span>
			<div className="popup-meta">
				<div className="popup-head">
					<h5><i>
<svg className="feather feather-message-square"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></i> Send Message</h5>
				</div>
				<div className="send-message">
					<form method="post" className="c-form">
						<input type="text" placeholder="Enter Name.."/>
						<input type="text" placeholder="Subject"/>
						<textarea placeholder="Write Message"></textarea>
						<div className="uploadimage">
							<i className="icofont-file-jpg"></i>
							<label className="fileContainer">
								<input type="file"/>Attach file
							</label>
						</div>
						<button type="submit" className="main-btn">Send</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<div className="side-slide">
		<span className="popup-closed"><i className="icofont-close"></i></span>
		<div className="slide-meta">
			<ul className="nav nav-tabs slide-btns">
				 <li className="nav-item"><a className="active" href="https://wpkixx.com/html/socimo/#messages" data-toggle="tab">Messages</a></li>
				 <li className="nav-item"><a className="" href="https://wpkixx.com/html/socimo/#notifications" data-toggle="tab">Notifications</a></li>
			</ul>
			<div className="tab-content">
				<div className="tab-pane active fade show" id="messages">
					<h4><i className="icofont-envelope"></i> messages</h4>
					<a href="https://wpkixx.com/html/socimo/#" className="send-mesg" title="" data-toggle="tooltip" data-original-title="New Message"><i className="icofont-edit"></i></a>
					<ul className="new-messages">
						<li>
							<figure><img src="images/user1.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Ibrahim Ahmed</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">Helo dear i wanna talk to you</a>
							</div>
						</li>
						<li>
							<figure><img src="images/user2.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Fatima J.</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">Helo dear i wanna talk to you</a>
							</div>
						</li>
						<li>
							<figure><img src="images/user3.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Fawad Ahmed</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">Helo dear i wanna talk to you</a>
							</div>
						</li>
						<li>
							<figure><img src="images/user4.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Saim Turan</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">Helo dear i wanna talk to you</a>
							</div>
						</li>
						<li>
							<figure><img src="images/user5.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Alis wells</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">Helo dear i wanna talk to you</a>
							</div>
						</li>
					</ul>
					<a href="https://wpkixx.com/html/socimo/#" title="" className="main-btn" data-ripple="">view all</a>
				</div>
				<div className="tab-pane fade" id="notifications">
					<h4><i className="icofont-bell-alt"></i> notifications</h4>
					<ul className="notificationz">
						<li>
							<figure><img src="images/user5.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Alis wells</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">recommend your post</a>
							</div>
						</li>
						<li>
							<figure><img src="images/user4.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Alis wells</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">share your post <strong>a good time today!</strong></a>
							</div>
						</li>
						<li>
							<figure><img src="images/user2.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Alis wells</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">recommend your post</a>
							</div>
						</li>
						<li>
							<figure><img src="images/user1.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Alis wells</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">share your post <strong>a good time today!</strong></a>
							</div>
						</li>
						<li>
							<figure><img src="images/user3.jpg" alt=""/></figure>
							<div className="mesg-info">
								<span>Alis wells</span>
								<a href="https://wpkixx.com/html/socimo/#" title="">recommend your post</a>
							</div>
						</li>
					</ul>
					<a href="https://wpkixx.com/html/socimo/#" title="" className="main-btn" data-ripple="">view all</a>
				</div>
			</div>
		</div>
	</div>
	
	{/* <create post modal> */}

	<div className="post-new-popup">
		<div className="popup" >
			<span className="popup-closed"><i className="icofont-close"></i></span>
			<div className="popup-meta">
				<div className="popup-head">
					<h5><i>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>Create New Post</h5>
				</div>
				<div className="post-new">
					<div className="post-newmeta">
						<ul className="post-categoroes">
							<li><i className="icofont-camera"></i> Photo / Video</li>
							<li><i className="icofont-google-map"></i> Post Location</li>
							<li><i className="icofont-file-gif"></i> Post Gif</li>
							<li><i className="icofont-ui-tag"></i> Tag to Friend</li>
							<li><i className="icofont-users"></i> Share in Group</li>
							<li><i className="icofont-link"></i> Share Link</li>
							<li><i className="icofont-video-cam"></i> Go Live</li>
							<li><i className="icofont-sale-discount"></i> Post Online Course</li>
							<li><i className="icofont-read-book"></i> Post A Book</li>
							<li><i className="icofont-globe"></i> Post an Ad</li>
						</ul>
						<form method="post" className="dropzone dz-clickable" action="https://wpkixx.com/upload-target">
							
						<div className="dz-default dz-message"><button className="dz-button" type="button">Drop files here to upload</button></div></form>
					</div>	
					<form method="post" className="c-form">
						<div className="activity-post">
							<div className="checkbox">
								<input type="checkbox" id="checkbox" checked=""/>
								<label ><span>Activity Feed</span></label>
							</div>
							<div className="checkbox">
								<input type="checkbox" id="checkbox2" checked=""/>
								<label ><span>My Story</span></label>
							</div>
						</div>
						<div className="select-box">
							<div className="select-box__current" >
								<div className="select-box__value"><input className="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked"/>
									<p className="select-box__input-text"><i className="icofont-globe-alt"></i> Public</p>
								</div>
								<div className="select-box__value"><input className="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked"/>
									<p className="select-box__input-text"><i className="icofont-lock"></i> Private</p>
								</div>
								<div className="select-box__value"><input className="select-box__input" type="radio" id="2" value="3" name="Ben" checked="checked"/>
									<p className="select-box__input-text"><i className="icofont-user"></i> Specific Friend</p>
								</div>
								<div className="select-box__value"><input className="select-box__input" type="radio" id="3" value="4" name="Ben" checked="checked"/>
									<p className="select-box__input-text"><i className="icofont-star"></i> Only Friends</p>
								</div>
								<div className="select-box__value"><input className="select-box__input" type="radio" id="4" value="5" name="Ben" checked="checked"/>
									<p className="select-box__input-text"><i className="icofont-users-alt-3"></i> Joined Groups</p>
								</div>
								<img className="select-box__icon" src="images/arrow-down.svg" alt="Arrow Icon" aria-hidden="true"/>
							</div>
							<ul className="select-box__list">
								<li><label className="select-box__option" ><i className="icofont-globe-alt"></i> Public</label></li>
								<li><label className="select-box__option" ><i className="icofont-lock"></i> Private</label></li>
								<li><label className="select-box__option" ><i className="icofont-user"></i> Specific Friend</label></li>
								<li><label className="select-box__option" ><i className="icofont-star"></i> Only Friends</label></li>
								<li><label className="select-box__option" ><i className="icofont-users-alt-3"></i> Joined Groups</label></li>
							</ul>
						</div>
						<input className="schedule-btn" type="text" id="datetimepicker" />
						<input type="text" placeholder="https://www.youtube.com/watch?v=vgvsuiFlA-Y&amp;t=56s"/>
						<button type="submit" className="main-btn">Publish</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	{/* <div className="new-question-popup">
		<div className="popup">
			<span className="popup-closed"><i className="icofont-close"></i></span>
			<div className="popup-meta">
				<div className="popup-head">
					<h5><i>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></i> Ask Question</h5>
				</div>
				<div className="post-new">
					<form method="post" className="c-form">
						
						<input type="text" placeholder="Question Title">
						<textarea placeholder="Write Question"></textarea>
						
						<select style="display: none;">
							<option>Select Your Question Type</option>
							<option>Article</option>
							<option>Book</option>
							<option>Chapter</option>
							<option>Code</option>
							<option>conference Paper</option>
							<option>Cover Page</option>
							<option>Data</option>
							<option>Exprement Finding</option>
							<option>Method</option>
							<option>Poster</option>
							<option>Preprint</option>
							<option>Technicial Report</option>
							<option>Thesis</option>
							<option>Research</option>
						</select><div className="chosen-container chosen-container-single" style="width: 185px;" title=""><a className="chosen-single"><span>Select Your Question Type</span><div><b></b></div></a><div className="chosen-drop"><div className="chosen-search"><input type="text" autocomplete="off"></div><ul className="chosen-results"></ul></div></div>
						<div className="uploadimage">
							<i className="icofont-eye-alt-alt"></i>
							<label className="fileContainer">
								<input type="file">Upload File
							</label>
						</div>
						
						<button type="submit" className="main-btn">Post</button>
					</form>
				</div>
			</div>
		</div>
	</div> */}
	
	{/* <div className="auto-popup closed" style="display: block;">
		<div className="popup-innner">
			<div className="popup-head">
				<h4>We want to hear from you!</h4>
			</div>
			<div className="popup-meta">
				<span>What are you struggling with right now? what we can help you with?</span>
				<form method="post" className="inquiry-about">
					<input type="text" placeholder="Your Answer">
					<h5>How did you hear about us?</h5>
					<label><input type="radio" name="hear"> Facebook</label>
					<label><input type="radio" name="hear"> instagram</label>
					<label><input type="radio" name="hear"> Google Search</label>
					<label><input type="radio" name="hear"> Twitter</label>
					<label><input type="radio" name="hear"> Whatsapp</label>
					<label><input type="radio" name="hear"> Other</label>
					<input type="text" placeholder="Writh Other">
					<button type="submit" className="primary button">Submit</button>
					<button className="canceled button outline-primary" type="button">Cancel</button>
				</form>
			</div>
		</div>
	</div> */}
	
	<div className="share-wraper">
		<div className="share-options">
			<span className="close-btn"><i className="icofont-close-circled"></i></span>
			<h5><i>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg></i>Share To!</h5>
			<form method="post">
				<textarea placeholder="Write Something"></textarea>
			</form>
			<ul>
				<li><a title="" href="https://wpkixx.com/html/socimo/#">Your Timeline</a></li>
				<li className="friends"><a title="" href="https://wpkixx.com/html/socimo/#">To Friends</a></li>
				<li className="socialz"><a className="active" title="" href="https://wpkixx.com/html/socimo/#">Social Media</a></li>
			</ul>
			<div >
				<ul>
					<li><a title="" href="https://wpkixx.com/html/socimo/#" className="facebook"><i className="icofont-facebook"></i></a></li>
					<li><a title="" href="https://wpkixx.com/html/socimo/#" className="twitter"><i className="icofont-twitter"></i></a></li>
					<li><a title="" href="https://wpkixx.com/html/socimo/#" className="instagram"><i className="icofont-instagram"></i></a></li>
					<li><a title="" href="https://wpkixx.com/html/socimo/#" className="pinterest"><i className="icofont-pinterest"></i></a></li>
					<li><a title="" href="https://wpkixx.com/html/socimo/#" className="youtube"><i className="icofont-youtube"></i></a></li>
					<li><a title="" href="https://wpkixx.com/html/socimo/#" className="dribble"><i className="icofont-dribbble"></i></a></li>
					<li><a title="" href="https://wpkixx.com/html/socimo/#" className="behance"><i className="icofont-behance-original"></i></a></li>
				</ul>
			</div>
			<div className="friends-to">
				<div className="follow-men">
					<figure><img className="mCS_img_loaded" src="images/user1.jpg" alt=""/></figure>
					<div className="follow-meta">
						<h5><a href="https://wpkixx.com/html/socimo/#" title="">Jack Carter</a></h5>
						<span>family member</span>
					</div>
					<a href="https://wpkixx.com/html/socimo/#" title="">Share</a>
				</div>
				<div className="follow-men">
					<figure><img className="mCS_img_loaded" src="images/user2.jpg" alt=""/></figure>
					<div className="follow-meta">
						<h5><a href="https://wpkixx.com/html/socimo/#" title="">Xang Ching</a></h5>
						<span>Close Friend</span>
					</div>
					<a href="https://wpkixx.com/html/socimo/#" title="">Share</a>
				</div>
				<div className="follow-men">
					<figure><img className="mCS_img_loaded" src="images/user3.jpg" alt=""/></figure>
					<div className="follow-meta">
						<h5><a href="https://wpkixx.com/html/socimo/#" title="">Emma Watson</a></h5>
						<span>Matul Friend</span>
					</div>
					<a href="https://wpkixx.com/html/socimo/#" title="">Share</a>
				</div>
			</div>
			<button type="submit" className="main-btn">Publish</button>
		</div>
	</div>
	
	<div className="cart-product">
		<a href="https://wpkixx.com/html/socimo/product-cart.html" title="" data-toggle="tooltip" data-original-title="View Cart"><i className="icofont-cart-alt"></i></a>
		<span>03</span>
	</div>
	
	<div className="chat-live">
		<a className="chat-btn" href="https://wpkixx.com/html/socimo/#" title="" data-toggle="tooltip" data-original-title="Start Live Chat"><i className="icofont-facebook-messenger"></i></a>
		<span>07</span>
	</div>


	
	{/* <div className="chat-box">
		<div className="chat-head">
			<h4>New Messages</h4>
			<span className="clozed"><i className="icofont-close-circled"></i></span>
			<form method="post">
				<input type="text" placeholder="To..">
			</form>
		</div>
		<div className="user-tabs">
			<ul className="nav nav-tabs">
			<li className="nav-item"><a className="active" href="https://wpkixx.com/html/socimo/#link1" data-toggle="tab">All Friends</a></li>
			<li className="nav-item"><a className="" href="https://wpkixx.com/html/socimo/#link2" data-toggle="tab">Active</a><em>3</em></li>
			<li className="nav-item"><a className="" href="https://wpkixx.com/html/socimo/#link3" data-toggle="tab">Groups</a></li>
		</ul>
	
		<div className="tab-content">
			<div className="tab-pane active fade show " id="link1">
				<div className="friend ps-container ps-theme-default ps-active-y" data-ps-id="0725ff6c-3e49-6805-76d5-504fe844c037">
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user1.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>Oliver</span>
						<i className=""><img src="images/user1.jpg" alt=""/></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user2.jpg" alt=""/>
							<span className="status away"></span>
						</figure>
						<span>Amelia</span>
						<i className="icofont-check-circled"></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user3.jpg" alt=""/>
							<span className="status offline"></span>
						</figure>
						<span>George</span>
						<i className=""><img src="images/user3.jpg" alt=""/></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user4.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>Jacob</span>
						<i className="icofont-check-circled"></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user5.jpg" alt=""/>
							<span className="status away"></span>
						</figure>
						<span>Poppy</span>
						<i className="icofont-check-circled"></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user6.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>Sophia</span>
						<i className=""><img src="images/user6.jpg" alt=""/></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user7.jpg" alt=""/>
							<span className="status away"></span>
						</figure>
						<span>Leo king</span>
						<i className=""><img src="images/user7.jpg" alt=""/></i>
					</a>
				<div className="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div className="ps-scrollbar-x"  style="left: 0px; width: 0px;"></div></div><div className="ps-scrollbar-y-rail" style="top: 0px; height: 300px; right: 0px;"><div className="ps-scrollbar-y"  style="top: 0px; height: 217px;"></div></div></div>
			</div>
			<div className="tab-pane fade" id="link2">
				<div className="friend ps-container ps-theme-default" data-ps-id="793f8a4c-ca8f-6e0b-d47d-ca596f9a336d">
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user1.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>Samu Jane</span>
						<i className=""><img src="images/user1.jpg" alt=""/></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user6.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>Tina Mark</span>
						<i className=""><img src="images/user6.jpg" alt=""/></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure>
							<img src="images/user7.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>Ak William</span>
						<i className=""><img src="images/user7.jpg" alt=""/></i>
					</a>
				<div className="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div className="ps-scrollbar-x"  style="left: 0px; width: 0px;"></div></div><div className="ps-scrollbar-y-rail" style="top: 0px; right: 0px;"><div className="ps-scrollbar-y"  style="top: 0px; height: 0px;"></div></div></div>
			</div>
			<div className="tab-pane fade" id="link3">
				<div className="friend ps-container ps-theme-default" data-ps-id="decff56a-c5f8-7c8e-764e-8462189b8ac2">
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure className="group-chat">
							<img src="images/user5.jpg" alt=""/>
							<img className="two" src="images/user3.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>Boys World</span>
						<i className="icofont-check-circled"></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure className="group-chat">
							<img src="images/user2.jpg" alt=""/>
							<img className="two" src="images/user3.jpg" alt=""/>
							<span className="status online"></span>
						</figure>
						<span>KK university Fellows</span>
						<i className="icofont-check-circled"></i>
					</a>
					<a href="https://wpkixx.com/html/socimo/#" title="">
						<figure className="group-chat">
							<img src="images/user3.jpg" alt=""/>
							<img className="two" src="images/user2.jpg" alt=""/>
							<span className="status away"></span>
						</figure>
						<span>Education World</span>
						<i className="icofont-check-circled"></i>
					</a>
				<div className="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div className="ps-scrollbar-x"  style="left: 0px; width: 0px;"></div></div><div className="ps-scrollbar-y-rail" style="top: 0px; right: 0px;"><div className="ps-scrollbar-y"  style="top: 0px; height: 0px;"></div></div></div>
			</div>
		</div>
		</div>
		<div className="chat-card">
			<div className="chat-card-head">
				<img src="images/user13.jpg" alt=""/>
				<h6>George Floyd</h6>
				<div className="frnd-opt">
					<div className="more">
						<div className="more-post-optns">
						
							<ul>
								<li>
									<i className="icofont-pen-alt-1"></i>Edit Post
									<span>Edit This Post within a Hour</span>
								</li>
								<li>
									<i className="icofont-ban"></i>Hide Chat
									<span>Hide This Post</span>
								</li>
								<li>
									<i className="icofont-ui-delete"></i>Delete Chat
									<span>If inappropriate Post By Mistake</span>
								</li>
								<li>
									<i className="icofont-flag"></i>Report
									<span>Inappropriate Chat</span>
								</li>
							</ul>
						</div>
					</div>
					<span className="close-mesage"><i className="icofont-close"></i></span>
				</div>
			</div>
			<div className="chat-list">
				<ul className="ps-container ps-theme-default ps-active-y" data-ps-id="fb59e6a5-6bf2-a524-ff7e-53b9caffe05f">
					<li className="me">
						<div className="chat-thumb"><img src="images/chatlist1.jpg" alt=""/></div>
						<div className="notification-event">
							<div className="chat-message-item">
								<figure><img src="images/album5.jpg" alt=""/></figure>
								<div className="caption">4.5kb <i className="icofont-download" title="Download"></i></div>
							</div>
							<span className="notification-date">
								<time datetime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
								<i><img src="images/d-tick.png" alt=""/></i>
							</span>
						</div>
					</li>
					<li className="me">
						<div className="chat-thumb"><img src="images/chatlist1.jpg" alt=""/></div>
						<div className="notification-event">
							<span className="chat-message-item">
								Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
							</span>
							<span className="notification-date">
								<time datetime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
								<i><img src="images/d-tick.png" alt=""/></i>
							</span>
						</div>
					</li>
					<li className="you">
						<div className="chat-thumb"><img src="images/chatlist2.jpg" alt=""/></div>
						<div className="notification-event">
							<span className="chat-message-item">
								Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
							</span>
							<span className="notification-date">
								<time datetime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
								<i><img src="images/d-tick.png" alt=""/></i>
							</span>
						</div>
					</li>
					<li className="me">
						<div className="chat-thumb"><img src="images/chatlist1.jpg" alt=""/></div>
						<div className="notification-event">
							<span className="chat-message-item">
								Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
							</span>
							<span className="notification-date">
								<time datetime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
								<i><img src="images/d-tick.png" alt=""/></i>
							</span>
						</div>
					</li>
					
				<div className="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div className="ps-scrollbar-x"  style="left: 0px; width: 0px;"></div></div><div className="ps-scrollbar-y-rail" style="top: 0px; height: 325px; right: 0px;"><div className="ps-scrollbar-y"  style="top: 0px; height: 163px;"></div></div></ul>
				<form className="text-box">
					<textarea placeholder="Write Mesage..."></textarea>
					<div className="add-smiles">
						<span><img src="images/happy-3.png" alt=""/></span>
					</div>
					<div className="smiles-bunch">
						<i><img src="images/thumb.png" alt=""/></i>
						<i><img src="images/angry-1.png" alt=""/></i>
						<i><img src="images/angry.png" alt=""/></i>
						<i><img src="images/bored-1.png" alt=""/></i>
						<i><img src="images/confused-1.png" alt=""/></i>
						<i><img src="images/wink.png" alt=""/></i>
						<i><img src="images/weep.png" alt=""/></i>
						<i><img src="images/tongue-out.png" alt=""/></i>
						<i><img src="images/suspicious.png" alt=""/></i>
						<i><img src="images/crying-1.png" alt=""/></i>
						<i><img src="images/crying.png" alt=""/></i>
						<i><img src="images/embarrassed.png" alt=""/></i>
						<i><img src="images/emoticons.png" alt=""/></i>
						<i><img src="images/happy-2.png" alt=""/></i>
					</div>
					<button type="submit"><i className="icofont-paper-plane"></i></button>
				</form>
			</div>
		</div>
	</div> */}

	
	{/* <div className="createroom-popup">
		<div className="popup">
			<span className="popup-closed"><i className="icofont-close"></i></span>
			<div className="popup-meta">
				<div className="popup-head text-center">
					<h5 className="only-icon"><i className="icofont-video-cam"></i></h5>
				</div>
				<div className="room-meta">
					<h4>Create Your Room</h4>
					<ul>
						<li>
							<i className="icofont-hand"></i>
							<div>
								<h6>Room Activity</h6>
								<span>Jack's Room</span>
							</div>
							<div className="checkbox">
								<input type="checkbox" id="checkbox3">
								<label ></label>
							</div>
						</li>
						<li>
							<i className="icofont-clock-time"></i>
							<div>
								<h6>Start Time</h6>
								<span>Now</span>
							</div>
							<div className="checkbox">
								<input type="checkbox" id="checkbox4">
								<label ></label>
							</div>
						</li>
						<li>
							<i className="icofont-users-alt-4"></i>
							<div>
								<h6>Invite to All Friends</h6>
								<span>Allow All friends to see this room</span>
							</div>
							<div className="checkbox">
								<input type="checkbox" id="checkbox5">
								<label ></label>
							</div>
						</li>
					</ul>
					<span>Your room isn't visible until you invite people after you've created it.</span>
					<a href="https://wpkixx.com/html/socimo/#" title="" className="main-btn full-width">Create Room</a>
				</div>
			</div>
		</div>
	</div> */}
	
	<div className="modal fade" id="img-comt">
		<div className="modal-dialog">
		  <div className="modal-content">

		
			<div className="modal-header">
			  <button type="button" className="close" data-dismiss="modal">×</button>
			</div>

			<div className="modal-body">
				<div className="row merged">


					{/* <div className="col-lg-9">
						<div className="pop-image">
							<div className="pop-item">
								<div className="action-block">
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                    </a>
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </a>
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                                    </a>
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </a>
                                </div>
								<figure><img src="images/blog-detail.jpg" alt=""/></figure>
								<div className="stat-tools">
									<div className="box">
									  <div className="Like"><a className="Like__link"><i className="icofont-like"></i> Like</a>
										<div className="Emojis">
										  <div className="Emoji Emoji--like">
											<div className="icon icon--like"></div>
										  </div>
										  <div className="Emoji Emoji--love">
											<div className="icon icon--heart"></div>
										  </div>
										  <div className="Emoji Emoji--haha">
											<div className="icon icon--haha"></div>
										  </div>
										  <div className="Emoji Emoji--wow">
											<div className="icon icon--wow"></div>
										  </div>
										  <div className="Emoji Emoji--sad">
											<div className="icon icon--sad"></div>
										  </div>
										  <div className="Emoji Emoji--angry">
											<div className="icon icon--angry"></div>
										  </div>
										</div>
									  </div>
									</div>
									<div className="box">
										<div className="Emojis">
										  <div className="Emoji Emoji--like">
											<div className="icon icon--like"></div>
										  </div>
										  <div className="Emoji Emoji--love">
											<div className="icon icon--heart"></div>
										  </div>
										  <div className="Emoji Emoji--haha">
											<div className="icon icon--haha"></div>
										  </div>
										  <div className="Emoji Emoji--wow">
											<div className="icon icon--wow"></div>
										  </div>
										  <div className="Emoji Emoji--sad">
											<div className="icon icon--sad"></div>
										  </div>
										  <div className="Emoji Emoji--angry">
											<div className="icon icon--angry"></div>
										  </div>
										</div>
									  </div>
									<a title="" href="https://wpkixx.com/html/socimo/#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
									<div className="emoji-state">
										<div className="popover_wrapper">
											<a className="popover_title" href="https://wpkixx.com/html/socimo/#" title=""><img alt="" src="images/thumb.png"/></a>
											<div className="popover_content">
												<span><img alt="" src="images/thumb.png"/> Likes</span>
												<ul className="namelist">
													<li>Jhon Doe</li>
													<li>Amara Sin</li>
													<li>Sarah K.</li>
													<li><span>20+ more</span></li>
												</ul>
											</div>
										</div>
										<div className="popover_wrapper">
											<a className="popover_title" href="https://wpkixx.com/html/socimo/#" title=""><img alt="" src="images/heart.png"/></a>
											<div className="popover_content">
												<span><img alt="" src="images/heart.png"/> Love</span>
												<ul className="namelist">
													<li>Amara Sin</li>
													<li>Jhon Doe</li>
													<li><span>10+ more</span></li>
												</ul>
											</div>
										</div>
										<div className="popover_wrapper">
											<a className="popover_title" href="https://wpkixx.com/html/socimo/#" title=""><img alt="" src="images/smile.png"/></a>
											<div className="popover_content">
												<span><img alt="" src="images/smile.png"/> Happy</span>
												<ul className="namelist">
													<li>Sarah K.</li>
													<li>Jhon Doe</li>
													<li>Amara Sin</li>
													<li><span>100+ more</span></li>
												</ul>
											</div>
										</div>
										<div className="popover_wrapper">
											<a className="popover_title" href="https://wpkixx.com/html/socimo/#" title=""><img alt="" src="images/weep.png"/></a>
											<div className="popover_content">
												<span><img alt="" src="images/weep.png"/> Dislike</span>
												<ul className="namelist">
													<li>Danial Carbal</li>
													<li>Amara Sin</li>
													<li>Sarah K.</li>
													<li><span>15+ more</span></li>
												</ul>
											</div>
										</div>
										<p>10+</p>
									</div>
								</div>
							</div>
						</div>
					</div> */}


					{/* <div className="col-lg-3">
						<div className="commentbar">
							<div className="user">
								<figure><img src="images/user1.jpg" alt=""/></figure>
								<div className="user-information">
									<h4><a href="https://wpkixx.com/html/socimo/#" title="">Danile Walker</a></h4>
									<span>2 hours ago</span>
								</div>
								<a href="https://wpkixx.com/html/socimo/#" title="Follow" data-ripple="">Follow</a>
							</div>
							<div className="we-video-info">
								<ul>
									<li>
										<span title="Comments" className="liked">
											<i>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></i>
											<ins>52</ins>
										</span>
									</li>
									<li>
										<span title="Comments" className="comment">
											<i>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></i>
											<ins>52</ins>
										</span>
									</li>

									<li>
										<span>
											<a title="Share" href="https://wpkixx.com/html/socimo/#" className="">
												<i>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
											</a>
											<ins>20</ins>
										</span>	
									</li>
								</ul>
								<div className="users-thumb-list">
									<a href="https://wpkixx.com/html/socimo/#" title="" data-toggle="tooltip" data-original-title="Anderw">
										<img src="images/userlist-1.jpg" alt=""/>  
									</a>
									<a href="https://wpkixx.com/html/socimo/#" title="" data-toggle="tooltip" data-original-title="frank">
										<img src="images/userlist-2.jpg" alt=""/>  
									</a>
									<a href="https://wpkixx.com/html/socimo/#" title="" data-toggle="tooltip" data-original-title="Sara">
										<img src="images/userlist-1.jpg" alt=""/>  
									</a>
									<a href="https://wpkixx.com/html/socimo/#" title="" data-toggle="tooltip" data-original-title="Amy">
										<img src="images/userlist-2.jpg" alt=""/>  
									</a>
									<span><strong>You</strong>, <b>Sarah</b> and <a title="" href="https://wpkixx.com/html/socimo/#">24+ more</a> liked</span>
								</div>
							</div>
							<div className="new-comment" style="display: block;">
								<form method="post">
									<input type="text" placeholder="write comment">
									<button type="submit"><i className="icofont-paper-plane"></i></button>
								</form>
								<div className="comments-area ps-container ps-theme-default" data-ps-id="34bb89f3-4983-e069-62f2-3bfdee3bd3f1">
									<ul>
										<li>
											<figure><img alt="" src="images/user1.jpg"></figure>
											<div className="commenter">
												<h5><a title="" href="https://wpkixx.com/html/socimo/#">Jack Carter</a></h5>
												<span>2 hours ago</span>
												<p>
													i think that some how, we learn who we really are and then live with that decision, great post!
												</p>
												<span>you can view the more detail via link</span>
												<a title="" href="https://wpkixx.com/html/socimo/#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
											</div>
											<a title="Like" href="https://wpkixx.com/html/socimo/#"><i className="icofont-heart"></i></a>
											<a title="Reply" href="https://wpkixx.com/html/socimo/#" className="reply-coment"><i className="icofont-reply"></i></a>
										</li>
										<li>
											<figure><img alt="" src="images/user2.jpg"></figure>
											<div className="commenter">
												<h5><a title="" href="https://wpkixx.com/html/socimo/#">Ching xang</a></h5>
												<span>2 hours ago</span>
												<p>
													i think that some how, we learn who we really are and then live with that decision, great post!
												</p>
											</div>
											<a title="Like" href="https://wpkixx.com/html/socimo/#"><i className="icofont-heart"></i></a>
											<a title="Reply" href="https://wpkixx.com/html/socimo/#" className="reply-coment"><i className="icofont-reply"></i></a>
										</li>
										<li>
											<figure><img alt="" src="images/user3.jpg"></figure>
											<div className="commenter">
												<h5><a title="" href="https://wpkixx.com/html/socimo/#">Danial Comb</a></h5>
												<span>2 hours ago</span>
												<p>
													i think that some how, we learn who we really are and then live with that decision, great post!
												</p>
											</div>
											<a title="Like" href="https://wpkixx.com/html/socimo/#"><i className="icofont-heart"></i></a>
											<a title="Reply" href="https://wpkixx.com/html/socimo/#" className="reply-coment"><i className="icofont-reply"></i></a>
										</li>
										<li>
											<figure><img alt="" src="images/user4.jpg"></figure>
											<div className="commenter">
												<h5><a title="" href="https://wpkixx.com/html/socimo/#">Jack Carter</a></h5>
												<span>2 hours ago</span>
												<p>
													i think that some how, we learn who we really are and then live with that decision, great post!
												</p>
											</div>
											<a title="Like" href="https://wpkixx.com/html/socimo/#"><i className="icofont-heart"></i></a>
											<a title="Reply" href="https://wpkixx.com/html/socimo/#" className="reply-coment"><i className="icofont-reply"></i></a>
										</li>
									</ul>
								<div className="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div className="ps-scrollbar-x"  style="left: 0px; width: 0px;"></div></div><div className="ps-scrollbar-y-rail" style="top: 0px; right: 0px;"><div className="ps-scrollbar-y"  style="top: 0px; height: 0px;"></div></div></div>
							</div>
						</div>
					</div> */}


				</div>
			</div>
		  </div>
		</div>
    </div>
	
	
</div>
	

	
			
























      </div>
    );
  }
  
  export default Dashboard;