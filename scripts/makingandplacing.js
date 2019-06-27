//Fun backgrounds:
var body=document.getElementsByTagName("body")[0]
var welcomebacks=["1.jpg","b.jpg","back.jpg","to.jpg"]
var backscount =1;
setInterval(function(){
if(backscount<=3){
body.style.backgroundImage="url('./pics/"+welcomebacks[backscount]+"')"
body.style.backgroundSize=150+"%"
backscount+=1;
}
else{backscount=0}

},6000)




//**********************************************************FOR Login and Sign Up!**************************************************************//

// Puts login and password box on screen. If person types and both match a created account, opens page of user.
//Users are saved in namespaces.

//Making boxes and fields

//This is where everything ultimately gets appended to:
var result = document.getElementById("result")

var userNameBox = document.createElement("input");
userNameBox.className="prettyinput";

//Icons
var loginIcon = document.createElement("img")
loginIcon.src = "./pics/loginicon.png";
loginIcon.style.width=19+"%"
var passwordIcon = document.createElement("img")
passwordIcon.src = "./pics/passwordicon.png"
passwordIcon.style.width=19+"%"



var passWordBox =document.createElement("input");
passWordBox.setAttribute("type","password")
passWordBox.className="prettyinput";
var authenBox =document.createElement("div");

//Creating login button
var loginButton = document.createElement("button")
loginButton.innerHTML = "Login";
loginButton.className="prettybutton"

//Creating Signup button
var signUpButton = document.createElement("button")
signUpButton.innerHTML = "Sign Up"
signUpButton.className="prettybutton"

//

authenBox.appendChild(loginIcon)
authenBox.appendChild(userNameBox)
var br1 = document.createElement("br")
authenBox.appendChild(br1)
authenBox.appendChild(passwordIcon)
authenBox.appendChild(passWordBox)
authenBox.appendChild(loginButton)
authenBox.appendChild(signUpButton)


//Now we will add stuff to each user information:
//First thing that happens once combination is right (either from entering login or sgining up):*



//**********************************************************FOR OPENED ACCOUNT!**************************************************************//

function loadAccountPage(){
	window.location.assign("./OpenedAccount.html")
}


//**********************************Reading posts*************
function readPost(){
var iframer= document.getElementById("iframer");
var iframe= document.createElement("iframe");
iframe.width=300+"px"
iframer.appendChild(iframe);
alert("works")
}











