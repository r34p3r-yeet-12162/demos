const myPromise = new Promise((resolve, reject) => {
  let a = 11,
    b = 10;
  setTimeout(() => {
    if (a < b) {
      resolve(true);
    } else {
      reject(false);
    }
  }, 300);
});

function runThisFunctionIfPromiseHasBeenResolvedWhichMeansFullfilled() {
  console.log("fullfilled");
}
function runThisFunctionIfPromiseHasNotBeenResolvedWhichMeansRejected() {
  console.log("rejected");
}
myPromise.then(
  runThisFunctionIfPromiseHasBeenResolvedWhichMeansFullfilled,
  runThisFunctionIfPromiseHasNotBeenResolvedWhichMeansRejected
);
