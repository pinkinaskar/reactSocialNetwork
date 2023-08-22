import React, { useState, useRef }  from "react";
import { login, authenticate, isAuthenticated } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";


function Signin() {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
        username: "pinki@mailinator.com",
        password: "12345678"
      });

	const [redirectToDashboard, SetRedirectToDashboard]  = useState(false);

	const handleChange = (e) => {	//console.log(e.target.name, e.target.value);
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

	const submitButton = (e) => {
        e.preventDefault();
		//console.log(formData);

		login(formData).then((res) => {

			console.log('res : ',res);
			if (res.status === 201) 
			{

				authenticate(res, () => {
						SetRedirectToDashboard(true);
						redirectUser();
					  });

			 // setValues({ ...values, error: data.error, loading: false });
			} 
			else {
			//   authenticate(data, () => {
			// 	setValues({
			// 	  ...values,
			// 	  redirectToDashboard: true,
			// 	});
			//   });
			}
		  });

       
      };


	const redirectUser = () => {		//console.log('--------------------------------->');

	//	if (redirectToDashboard) {	console.log('---------------------------------');
	  //	return <Navigate to="/home" />;
		
	//}
	//else
	//{
	//	return alert('Invalid Credential');
	//}
			if (isAuthenticated()) 
			{
				navigate("/home");
			}
			// else
			// {
			// 	navigate("/home");
			// }
	};

	const checkLogin = () => {
				if (isAuthenticated()) 
				{
					return <Navigate to="/home" />;
				}
		};

	const loginFrom = () => (
      
<div className="theme-layout login-main">
	
	<div className="authtication bluesh high-opacity">
		{/* <div className="bg-image" style="background-image: url(images/resources/login-bg3.jpg)"></div> */}
		<div className="bg-image"></div>
	</div>
	<div className="auth-login">
		<div className="logo"><a href="/"><img src="images/logo.png" alt="" /><span>Socimo</span></a></div>
		<div className="mockup left-bottom"><img src="images/mockup.png" alt="" /></div>
		<div className="verticle-center">
			<div className="login-form">
				<h4><i className="icofont-key-hole"></i> Login</h4>
				<form method="post" className="c-form">
					<input type="text" placeholder="User Name @" name="username" value={formData.username} onChange={handleChange} />
					<input type="password" placeholder="xxxxxxxxxx" name="password" value={formData.password} onChange={handleChange}  />
					<div className="checkbox1">
						<input type="checkbox" id="checkbox" checked="" name="remember" onChange={handleChange}/>
						<label><span>Remember Me</span></label>
					</div>
					<button className="main-btn" type="button" onClick={submitButton}><i className="icofont-key"></i> Login</button>
				</form>
			</div>
		</div>
		<div className="mockup right"><img src="images/star-shape.png" alt=""/></div>
	</div>
	
</div>
	
    );


	return (
      
		<div className="theme-layout login-main">
			{loginFrom()} {checkLogin()}
		</div>
			
			);
  }
  
  export default Signin;