import React, { useState, useRef }  from "react";
import { logout } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";


function Listcontent(props) {

	//console.log(props.content);

    return (  
								<div className="main-wraper">
									<div className="user-post">
										<div className="friend-info">
											<figure>
												<em>
 <svg  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg></em>
												<img alt="" src={props.content.image} />
											</figure>
											<div className="friend-name">
												<div className="more">
													<div className="more-post-optns">
														<i className="">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
														<ul>
															<li>
																<i className="icofont-pen-alt-1"></i>Edit Post
																<span>Edit This Post within a Hour</span>
															</li>
															<li>
																<i className="icofont-ban"></i>Hide Post
																<span>Hide This Post</span>
															</li>
															<li>
																<i className="icofont-ui-delete"></i>Delete Post
																<span>If inappropriate Post By Mistake</span>
															</li>
															<li>
																<i className="icofont-flag"></i>Report
																<span>Inappropriate content</span>
															</li>
														</ul>
													</div>
												</div>
												<ins>
													<a title="verified" >{props.content.title}</a></ins>
												<span><i className="icofont-globe"></i> published: Sep,15 2020</span>
											</div>
											<div className="post-meta">
												<p>
												{props.content.body}
												</p>
												
												<div className="we-video-info">
													<ul>
														<li>
															<span title="views" className="views">
																<i>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
																<ins>1.2k</ins>
															</span>
														</li>
														<li>
															<span title="Comments" className="Recommend">
																<i>
<svg className="feather feather-message-square"    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></i>
																<ins>54</ins>
															</span>
															
														</li>
														<li>
															<span title="follow" className="Follow">
																<i>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
															<ins>5k</ins>	
															</span>
														</li>
														<li>
															<span className="share-pst" title="Share">
																<i>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
															<ins>205</ins>
															</span>	
														</li>
													</ul>
													<a href="https://wpkixx.com/html/socimo/post-detail.html" title="" className="reply">Reply <i className="icofont-reply"></i></a>
												</div>
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
													<a title="" href="https://wpkixx.com/html/socimo/#" className="comment-to"><i className="icofont-comment"></i> Comment</a>
													<a title="" href="https://wpkixx.com/html/socimo/#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
													{/* <div className="emoji-state">
														
													</div> */}
													{/* <div className="new-comment" style="display: none;">
														
													</div> */}
												</div>
											</div>
										</div>
									</div>
								</div>
					
    );
  }
  
  export default Listcontent;