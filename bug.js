function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This x is only in the scope of the if block
    console.log(x); // Prints 20
  }
  console.log(x); // Prints 10, because the inner 'x' is different from the outer 'x'
}