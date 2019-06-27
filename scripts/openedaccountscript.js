var pagetitle = document.getElementsByTagName("title")[0]
var pagetitle2 = document.getElementById("title2");
pagetitle.innerHTML= localStorage.currentuser +"'s Journal!"
pagetitle2.innerHTML= localStorage.currentuser.charAt(0).toUpperCase()+localStorage.currentuser.substring(1).toLowerCase()+"'s Journal";
//Anyway this is acting weird, try to fix it later

//First, let's access  User in localStorage,and then the name of the account opened:
var loadUser2 = JSON.parse(localStorage.Users),
accountopened=localStorage.currentuseropened,
openedhere = loadUser2[accountopened];


//--------------------------------------------------------------For posting entries-------------------------------------------------------------
//Defining my global variables
var body= document.getElementsByTagName("body")[0];
var date= document.getElementById("date")
var title= document.getElementById("title")
var entry= document.getElementById("entry");
var save= document.getElementById("save");
var postList=document.getElementById("postList");
var postreader= document.getElementById("postreader");
var postBeingRead;
var modifyButton = document.createElement("button")
    modifyButton.innerHTML = "Modify";
var saveModif = document.createElement("button");
    saveModif.innerHTML = "Save modification"
var modif = false;
var entry2 = document.getElementById("entry2")
var writePostButton = document.getElementById("writePostButton")
var readPostButton = document.getElementById("readPostButton")
var writeBookSection= document.getElementById("writeBookSection")
var readBookSection= document.getElementById("readBookSection")
var loadInBook = false;
//LoadInBook to decide if the posts should be written in readingbooklet



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
var loadInBook = true;
var add = document.createElement("li");
add.innerHTML = openedhere.posts[""+i+""].title;

add.addEventListener("click",function(e){

//Getting the post in question and its content. and to check later, make it impossible to have two posts of same name
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
writeBookSection.style.visibility="visible";
readBookSection.style.visibility="hidden";
modif=true;

})
//Reading the post:
postreader.innerHTML= "<center><h1 style='font-size:2vw;font-family:Arial;'>Entry Reader</h1></center>"
+"</br><center style='font-size:2vw;font-family:Kristen ITC;'> <b>" 
+ postBeingRead.title + "</b></br>"+ postBeingRead.entry +"</center>";

postreader.appendChild(modifyButton)


},false);


postList.appendChild(add)
}

}
//Setting up the event listeners of the read post and write post button to display correct booklet:
writePostButton.addEventListener("click",function(){
writeBookSection.style.visibility="visible";
readBookSection.style.visibility="hidden";
})
readPostButton.addEventListener("click",function(){
readBookSection.style.visibility = "visible";
writeBookSection.style.visibility="hidden";
})
//In order for the modif not to save if book is closed /user does something else
if(modif==true){
var removeValue = function(){
title.value="";
entry.value="";
modif=false;
alert("removing")
}
writePostButton.addEventListener("click",function(){alert("Heloo")})
readPostButton.addEventListener("click",removeValue)
}
else if(modif==false){
writePostButton.removeEventListener("click",removeValue)
readPostButton.removeEventListener("click",removeValue)
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
if(entry2.value!==null){
       var currentEntry =  entry.value + " "+ entry2.value;
		}
if(modif === false){
   
var currentTitle = title.value;
var currentEntry= entry.value;

   

currentPost.title=currentTitle
currentPost.entry=currentEntry

if(title.value==""|| entry.value==""){
alert("Empty or incomplete posts won't save")
}
else{
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
+"</br><center style='font-size:2vw;font-family:Kristen ITC;'> <b> " 
+ e.target.innerHTML + "</b></br></br>"+ tempentry +"</center>";
},false)

postList.appendChild(lii)

}
loadUser2[accountopened].posts["Post"+postCount]=currentPost;
localStorage.Users = JSON.stringify(loadUser2)
location.reload();
}
else if(modif===true){
postBeingRead.title=title.value;
postBeingRead.entry=entry.value;

localStorage.Users = JSON.stringify(loadUser2);
title.value="";
entry.value="";

location.reload();
}
}
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
window.location.assign("./index.html");
localStorage.currentuser ="";
localStorage.currentuseropened="";
};
},false)

//******************************************************************************FOR MODIFYING ENTRIES****************************************

//It creates modify button when the entries get listed, and next to the reading box when the entry is being read. Don't forget the new posts made.

// How to restore the entry and all
localStorage.Users[accountopened] = JSON.stringify(loadUser2[accountopened])





