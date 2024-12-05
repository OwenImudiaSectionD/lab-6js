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
  