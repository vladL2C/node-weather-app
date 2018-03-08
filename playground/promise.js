var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguements must be numbers');
      }
    },1500);
  });
};

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('Hey it worked!');
//     reject('Unable to fulfill promise');
//   }, 2500);
// });

// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });

asyncAdd(4,'4').then((res) => {
  console.log('Result:', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log(res);
}).catch((error) => console.log(error));