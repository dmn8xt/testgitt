setTimeout(function timeout() {
    console.log('T')
  }, 0)
  
  var p = new Promise(function(resolve, reject) {
    console.log('F');
    resolve()
  })
  
  p.then(function() {
    console.log('L')
  })
  
  console.log('G')