function takeShower() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("take shuwer");
      resolve("you took shuwer");
    }, 2000);
  });
}

function dowork() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("do work");
      resolve("you complete work");
    }, 1000);
  });
}

function play() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("play");
      resolve("you played what you like");
    }, 3000);
  });
}

takeShower()
  .then((result) => {
    console.log(result);
    return dowork();
  })
  .then((result) => {
    console.log(result);
    return play();
  })
  .then((result) => {
    console.log(result);
    console.log("All done");
  });
