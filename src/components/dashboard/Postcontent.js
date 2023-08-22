import React, { useState, useRef, useEffect }  from "react";
import { getContentList } from "../../services/content";
import { Navigate, useNavigate } from "react-router-dom";
import Listcontent from "./Listcontent"; 


function Postcontent() {

	const [content, setContent] = useState([]);

	useEffect(() => {

		getContentList().then((res) => {

			//console.log('res : ',res.status);
			console.log('content : ',res.data.data);

			if (res.status === 200) 
			{		
						setContent(res.data.data);
			}

		  });

	  }, []);

    return (  
							<div className="col-lg-6">
								<ul className="filtr-tabs">
									<li><a className="active" href="https://wpkixx.com/html/socimo/#" title="">Home</a></li>
									<li><a href="https://wpkixx.com/html/socimo/#" title="">Recent</a></li>
									<li><a href="https://wpkixx.com/html/socimo/#" title="">Favourit</a></li>
								</ul>
								<div className="main-wraper">
									<span className="new-title">Create New Post</span>
									<div className="new-post">
										<form method="post">
											<i className="icofont-pen-alt-1"></i>
											<input type="text" placeholder="Create New Post"/>
										</form>
										<ul className="upload-media">
											<li>
												<a href="https://wpkixx.com/html/socimo/#" title="">
													<i><img src="images/image.png" alt=""/></i>
													<span>Photo/Video</span>
												</a>	
											</li>
											<li>
												<a href="https://wpkixx.com/html/socimo/#" title="">
													<i><img src="images/activity.png" alt=""/></i>
													<span>Feeling/Activity</span>
												</a>	
											</li>
											<li>
												<a href="https://wpkixx.com/html/socimo/live-stream.html" title="">
													<i><img src="images/live-stream.png" alt=""/></i>
													<span>Live Stream</span>
												</a>	
											</li>
										</ul>
									</div>
								</div>

								{/* recent stories */}

								{/* <div className="story-card">
									
								</div> */}


								{/* chat room */}

								{/* <div className="main-wraper">
									</div> */}


								{/* suggested */}

								{/* <div className="main-wraper">
									
								</div> */}



						{/* user's post start */}

						{content.map(item => (	
							<Listcontent content={item} />	
						))}
							
						{/* user's post end */}



							
								{/* loadmore */}

								{/* <div className="loadmore">
									<div className="sp sp-bars"></div>
									<a href="https://wpkixx.com/html/socimo/#" title="" data-ripple="">Load More..</a>
								</div> */}
							</div>

    );
  }
  
  export default Postcontent;