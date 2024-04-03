  
  console.log('1')

setTimeout(function timeout() {
    console.log('2')
  }, 0)
  // Promise.resolve().then(()=>console.log('3'))
  var p = new Promise(function(resolve, reject) {
    // console.log('4');
    resolve()
  })
  
  p.then(function() {
    console.log('5')
  })
  
  console.log('6')