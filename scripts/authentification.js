var Users,loadUsers,currentuser,currentuseropened;

function authen(){
	
	if(!localStorage.Users){	//Checking if local storage already has a user item
		localStorage.setItem("Users","{}");
		Users=localStorage.Users
	}
	else{
		Users=localStorage.Users
	}

	//Placing the boxes in place for login and signup
	result.appendChild(authenBox);

	//Two options from now on: user logs in or creates account
	//If there's a match, it launches account == so make a new function for that, if no match, asks them to try again(can do that later)
	//Users[i]["userName"].toUpperCase()===userNameBox.value.toUpperCase() && Users[i].password.toUpperCase()=== passWordBox.value.toUpperCase()
	//What happens when you click on login
	loginButton.addEventListener("click",function(){

		if(userNameBox.value && passWordBox.value){
	loadUsers = JSON.parse(Users) //You reload the object as an actual Object
	var wrongsomething =true;
		for(var i in loadUsers){
	if(userNameBox.value.toUpperCase() === loadUsers[i].userName.toUpperCase() && passWordBox.value.toUpperCase() === loadUsers[i].password.toUpperCase() )
	//Make sure only one user can have a particular username. To check pls
	{
	currentuser= userNameBox.value.toUpperCase(); 
	currentuseropened = i;
	localStorage.setItem("currentuser",currentuser);
	localStorage.setItem("currentuseropened",currentuseropened)

	loadAccountPage();
	//Load function to open your private page
	//Session storage holds you open 
	wrongsomething=false;
	}
	}
	if(wrongsomething===true){
	alert("Wrong username or password")
	}

	}
	else{
	alert("Wrong username and password combination, or you didn't write anything.")

	}
	},false)


							//When you click on Sign Up:
	signUpButton.addEventListener("click",function(){
	//**************************  The form itself ***************************************
		//Creating the sign up form elements
			var createUserNameBox = document.createElement("input");
				createUserNameBox.className="prettyinput";
				createUserNameBox.placeholder = "New username"
			var createPasswordBox = document.createElement("input");
				createPasswordBox.setAttribute("type","password")
				createPasswordBox.className="prettyinput";
				createPasswordBox.placeholder = "New password"

			var signUpBox = document.createElement("div")
				signUpBox.style.marginTop="3vw"
		
			
				
				
				

		//Appending the form elements
			//signUpBox.appendChild(loginIcon)
			signUpBox.appendChild(createUserNameBox);
			//signUpBox.appendChild(passwordIcon);
			signUpBox.appendChild(createPasswordBox);
			authenBox.appendChild(signUpBox)

		//Creating the Submit Account Button :)
			var submitAccount = document.createElement("button");
			submitAccount.innerHTML = "Create my account!";
			submitAccount.className="prettybutton"
		//Appending the submit button
			result.appendChild(submitAccount)

	//**************************  Clicking the submit button ***************************************
	//When you click the submit button to create your account
	submitAccount.addEventListener("click",function(){
		if(createUserNameBox.value && createPasswordBox.value){

			loadUsers = JSON.parse(Users)
			var countUsers = 1; var make;

			//If accounts are already there vs first time account is made
			if(!loadUsers["User1"]){
				loadUsers["User1"] = {}
				loadUsers["User1"].userName = createUserNameBox.value;
				loadUsers["User1"].password = createPasswordBox.value;
				localStorage.setItem("Users",JSON.stringify(loadUsers))
				currentuser= createUserNameBox.value.toUpperCase();
				currentuseropened = "User1" 
				localStorage.setItem("currentuseropened",currentuseropened)
				localStorage.setItem("currentuser",currentuser)
				loadAccountPage();
			}
			else{
				for(var i in loadUsers){
					if(loadUsers[i].userName.toUpperCase()!= createUserNameBox.value.toUpperCase() && loadUsers[i].password.toUpperCase() != createPasswordBox.value.toUpperCase()
					|| loadUsers[i].userName.toUpperCase()!= createUserNameBox.value.toUpperCase()){
						make=true;
						countUsers+=1;
						currentuser= createUserNameBox.value.toUpperCase();
						currentuseropened = "User"+countUsers;
					}
					else{
					alert("This combination is already taken. Please change either your username or password") //Got to fix something here
					}
				}

				if(make){
					localStorage.setItem("currentuseropened",currentuseropened)
					localStorage.setItem("currentuser",currentuser)

					loadUsers["User"+countUsers] = {};
					loadUsers["User"+countUsers].userName = createUserNameBox.value;
					loadUsers["User"+countUsers].password = createPasswordBox.value;
					localStorage.setItem("Users",JSON.stringify(loadUsers))

					loadAccountPage();//Here is where the account it opened!
					
				}

			}

		}
		else{alert("You did not type in anything. Please do that.")}

	},false)

	},false)

}

authen();


