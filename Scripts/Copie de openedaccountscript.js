var pagetitle = document.getElementsByTagName("title")[0]
var pagetitle2 = document.getElementById("title2");
pagetitle.innerHTML= localStorage.currentuser +"'s Journal!"
pagetitle2.innerHTML= "Welcome back "+localStorage.currentuser.charAt(0).toUpperCase()+localStorage.currentuser.substring(1).toLowerCase()+"!";
//Anyway this is acting weird, try to fix it later

//First, let's access  User in localStorage,and then the name of the account opened:
var loadUser2 = JSON.parse(localStorage.Users),
accountopened=localStorage.currentuseropened,
openedhere = loadUser2[accountopened];


//--------------------------------------------------------------For posting entries-------------------------------------------------------------

var body= document.getElementsByTagName("body")[0];
var date= document.getElementById("date")
var title= document.getElementById("title")
var entry= document.getElementById("entry");
var save= document.getElementById("save");
var postList=document.getElementById("postList");






//Post Counting starts at 0
var postCount = 0;
//If the user never wrote an entry or if he did
if(!openedhere.posts){
openedhere.posts = {},
postCount=0;
}
else if(openedhere.posts["Post"+0]){
for (var i in openedhere.posts){
postCount+=1;
var add = document.createElement("li");
add.innerHTML = openedhere.posts[""+i+""].title;

add.addEventListener("click",function(e){
var postreader= document.getElementById("postreader");
var postBeingRead
var modifyButton = document.createElement("button")
    modifyButton.innerHTML = "Modify entry";
var saveModif = document.createElement("button");
    saveModif.innerHTML = "Save modification"
//Getting the post in question and its content. and checkLater, make it imp to have two posts of same name
for(var i in openedhere.posts){
//This is to obtain the clicked post as an actual object, and store it for reading and modification.
if(openedhere.posts[i].title.toUpperCase()===e.target.innerHTML.toUpperCase()){
postBeingRead = openedhere.posts[i];
}
}

//Adding the events listeners to the modify and saving modif button:
modifyButton.addEventListener("click",function(){
title.value = postBeingRead.title
entry.value = postBeingRead.entry
save.removeEventListener("click",savePost,false)
})

//Reading the post:
postreader.innerHTML= "<center><h1 style='font-size:2vw;font-family:Arial;'>Entry Reader</h1></center>"
+"</br><center style='font-size:2vw;font-family:Kristen ITC;'> <b>" 
+ postBeingRead.title + "</b></br>"+ postBeingRead.entry +"</center>";

postreader.appendChild(modifyButton)

alert(postBeingRead.entry)
},false);


postList.appendChild(add)
}

}

var saveModif= function(){
alert("Saving")
var currentTitle = title.value;
var currentEntry= entry.value;

currentPost.title=currentTitle
currentPost.entry=currentEntry

if(title.value==""|| entry.value==""){
alert("Empty or incomplete posts won't save")
}
else{
alert("Your post name is: "+currentPost.title+ " with this content: "+ currentPost.entry);

var lii= document.createElement("li");
lii.innerHTML = currentPost.title;

lii.addEventListener("click",function(e){
var postreader= document.getElementById("postreader");
var tempentry = ""
//Getting the post content,later,add Box to close. Later, make it imp to have two posts of same name
for(var i in openedhere.posts){
if(openedhere.posts[i].title.toUpperCase()===e.target.innerHTML.toUpperCase()){
tempentry = openedhere.posts[i].entry;
}
}
postreader.innerHTML= "<center><h1 style='font-size:2vw;font-family:Arial;'>Entry Reader</h1></center>"
+"</br><center style='font-size:2vw;font-family:Kristen ITC;'> <b>" 
+ e.target.innerHTML + "</b></br>"+ tempentry +"</center>";
},false)

postList.appendChild(lii)

}
loadUser2[accountopened].posts["Post"+postCount]=currentPost;
localStorage.Users = JSON.stringify(loadUser2);

}




//****************************Journal Post Object and methods****************************************************************************************
function journalPost(date,title,entry){
this.date=date;
this.title=title;
this.text=entry;
}

journalPost.prototype.addDate = function(){
this.date =new Date().toJSON().slice(0,10);
}
date.innerHTML += new Date().toJSON().slice(0,10);
var currentPost = new journalPost(); //Current should get empty after journal entry is saved

var savePost = function(){
alert("Saving")
var currentTitle = title.value;
var currentEntry= entry.value;

currentPost.title=currentTitle
currentPost.entry=currentEntry

if(title.value==""|| entry.value==""){
alert("Empty or incomplete posts won't save")
}
else{
alert("Your post name is: "+currentPost.title+ " with this content: "+ currentPost.entry);

var lii= document.createElement("li");
lii.innerHTML = currentPost.title;

lii.addEventListener("click",function(e){
var postreader= document.getElementById("postreader");
var tempentry = ""
//Getting the post content,later,add Box to close. Later, make it imp to have two posts of same name
for(var i in openedhere.posts){
if(openedhere.posts[i].title.toUpperCase()===e.target.innerHTML.toUpperCase()){
tempentry = openedhere.posts[i].entry;
}
}
postreader.innerHTML= "<center><h1 style='font-size:2vw;font-family:Arial;'>Entry Reader</h1></center>"
+"</br><center style='font-size:2vw;font-family:Kristen ITC;'> <b>" 
+ e.target.innerHTML + "</b></br>"+ tempentry +"</center>";
},false)

postList.appendChild(lii)

}
loadUser2[accountopened].posts["Post"+postCount]=currentPost;
localStorage.Users = JSON.stringify(loadUser2);
};
save.addEventListener("click",savePost,false)



//********************************************************************************************************************************************

//To do next, make sure the postList keeps the lists of postsalways there..; doneeeeeeeeeeeeeeeee
//When you click on old post itopens a mini windowwhere post is showed, you can read and edit.

//Website wrting should be in vw!
//Logging out empties current user, and post list too



//***********************************************************FOR LOGGING OUT******************************************************************

var logOutButton = document.getElementById("logoutbutton")
logOutButton.addEventListener("click",function(){
if(confirm("Do you really want to leave now? I will miss you :(")){
//Insert function that opens inital login and sign up page.
alert("Come back soon!")
var html = document.getElementsByTagName("html")[0];
window.location.assign("file:///C:/Users/hp/Desktop/Nouveau%20dossier%20(3)/idesign/Website/Learning/Ma%20stuff!/Myjournal/MyJournal.html");
localStorage.currentuser ="";
localStorage.currentuseropened="";
};
},false)

//******************************************************************************FOR MODIFYING ENTRIES****************************************

//It creates modify button when the entries get listed, and next to the reading box when the entry is being read. Don't forget the new posts made.

// How to restore the entry and all
localStorage.Users[accountopened] = JSON.stringify(loadUser2[accountopened])





