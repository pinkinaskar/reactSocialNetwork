import React, { useState, useRef }  from "react";
import { logout } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Clocksection  from "./Clocksection"; 
import Postcontent from "./Postcontent"; 


function Sections() {

    return (  
<section>
		<div className="gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div id="page-contents" className="row merged20">

							{/* clock section */}

							{/* <Clocksection/> */}

							

							<Postcontent/>

							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

    );
  }
  
  export default Sections;