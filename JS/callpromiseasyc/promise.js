const promise = new Promise((resolve, reject) =>  {
  setTimeout(() => {
    console.log("got the user");
    resolve({ user: "ed" });
  }, 200);
});

const pop = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    reject(new Error("user not logged in"));
  }, 200);
});


pop.catch(err => console.log(err.message));

promise.then(user => {
  console.log(user);
});


