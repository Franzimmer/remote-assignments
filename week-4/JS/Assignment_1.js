function delayedResult(n1, n2, delayTime, callback) {
  const result = n1 + n2;
  setTimeout(callback, delayTime, result); 
}