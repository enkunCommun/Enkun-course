function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 3000);
  });
}
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["title of the videos","erterr","dfdfdf"]);
    }, 2000);
  })
}




loginUser('ed','erer')
  .then(user => getUserVideos(user.email))
  .then(videos => videoDetails(videos[0]))
  .then(detail => console.log(detail));


//SYNC
const youtube = new Promise(resolve => {
  setTimeout(() => {
    console.log("getting stufff from youtube");
    resolve({ videos: [1,2,3,4,5]});
  }, 2000);
});


const facebook = new Promise(resolve => {
  setTimeout(() => {
    console.log("stuff from facebook");
    resolve({ user: "tenzin"});
  }, 2000);
});

Promise.all([youtube,facebook]).then(username => console.log(username));



async function displayUser() {
  try {

    const loggedUser = await loginUser('tenzin', 343);
    const videos = await getUserVideos(loggedUser);
    const detail = await videoDetails(videos);
    console.log(loggedUser);
		console.log(videos);
    console.log(detail);
  } catch(err) {
    console.log("no working ");
  }
}


displayUser();
