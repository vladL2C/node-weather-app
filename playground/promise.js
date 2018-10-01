let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguements must be numbers");
      }
    }, 1500);
  });
};

asyncAdd(4, "4")
  .then(res => {
    console.log("Result:", res);
    return asyncAdd(res, 33);
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => console.log(error));
