////TASK ONE///////

// function delay(ms) {
//     console.log(`waiting... for ${ms} ms`);
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }

// let promise = new Promise((resolve, reject) => {
//     var myTest = 2;
//     let success = (myTest > 0); 
//     if (success) {
//      resolve("Operation completed successfully.");
//     } else {
//       reject("Operation failed.");
//     }
//   });
//   console.log("Let's do something immediately after creating the promise");
//   promise.then((message) => {
//     delay(2000);
//     console.log(message);
//   }).catch((error) => {
//     delay(2000);
//     console.log(error);
//   });

///TASK TWO////

// let promise = new Promise((resolve, reject) => {
//     resolve(1);
//   });
  
//   promise.then(result => {
//     console.log(result);
//     return result * 2;
//   }).then(result => {
//     console.log(result);
//     return result + 3;
//   }).then(result => {
//     console.log(result); 
//     return result / 2;
//   }).then(result => {
//     console.log(`The final result will be ${result}`); 
// });

///TASK THREE///

function sim() {
    return new Promise((resolve, reject) => {
      const check = Math.random() > 0.5;  
  
      setTimeout(() => {
        if (check) {
          resolve("Operation succeeded!");
        } else {
          reject("Operation failed!");
        }
      }, 3000); 
    });
  }
  
//   sim()
//     .then(result => {
//       console.log(result);  
//     })
//     .catch(error => {
//       console.log(error); 
//     });

////TASK FOUR////
async function callPromise() {
    try {
      const result = await sim(); 
      console.log(result); 
    } catch (error) {
      console.log(error); 
    }
  }
  
  callPromise();

  async function callPromiseWithErrorHandling() {
    try {
      const result = await sim();
      console.log(result); 
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  callPromiseWithErrorHandling();
  
  