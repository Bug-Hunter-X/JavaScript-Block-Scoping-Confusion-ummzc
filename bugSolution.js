function myFunction() {
  let outerX = 10;
  if (true) {
    let innerX = 20; 
    console.log(innerX); // Prints 20
  }
  console.log(outerX); // Prints 10
  console.log(innerX); //This will throw an error: innerX is not defined because its scope is limited to the if block
} 