function LoginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the date");
    callback({useremail: email});
  }, 5000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}

function getUserImages(email, callback){
  setTimeout(() => {
    callback(["img1","img2","img3"]);
  }, 1000);
}


const user = LoginUser("tenzin@gmail.com", 2323, user => {
  console.log(user);
  getUserVideos(user.useremail, videos => {
    console.log(videos);
  });

  getUserImages(user.useremail, images => {
    console.log(images);
  });

});


console.log("Finish");

function myDisplay(some) {
	console.log("hiii" + some);
}

function myFirst() {
	myDisplay("tenzin");
}

function mySecond() {
	myDisplay("dolma");
}


myFirst();
mySecond();


