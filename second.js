  
//   console.log('1')

// setTimeout(function timeout() {
//     console.log('2')
//   }, 0)
//   // Promise.resolve().then(()=>console.log('3'))
//   var p = new Promise(function(resolve, reject) {
//     // console.log('4');
//     resolve()
//   })
  
//   p.then(function() {
//     console.log('5')
//   })
  
//   console.log('6')

// const obj = {
//   id: 42,
//   counter: function() {
//     setTimeout(() => {
//       console.log(this.id); // `this` корректно ссылается на obj, так как стрелочная функция наследует `this` из окружения
//     }, 1000);
//   }
// };

// const obj1 = {
//   id: 52,
//   counter: function() {
//     setTimeout(function() {
//       console.log(this.id); // this ссылается на глобальный объект или undefined в строгом режиме, а не на obj
//     }, 1000);
//   }
// };
function exampleFunction() {
  var localVar = "Я локальная переменная";
  console.log(localVar); // Доступна только внутри функции
}

exampleFunction();
console.log(localVar); 