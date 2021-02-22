const fibonacci = function(x) {
  //F[1] = 1, F[2] = 1
  //F[n] = F[n-1] + F[n-2]
  //F[1] = F[1-1] + F[1-2] = F[0] + F[-1]
  return 1 + fibonacci(x++)

  if(a > 3) return;
  
}
fibonacci(3);

module.exports = fibonacci
