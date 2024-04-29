const arr = [
    {name:'Alex',age:12,budget:4000},
    {name:'Sam',age:34,budget:3000},
    {name:'Rene',age:44,budget:5000}
]

arr.forEach(person=>console.log(person))

const newPeople = arr.map(person => `${person.name} -  ${person.age}`)
console.log(newPeople)

const agePeople = arr.filter(person => person.age>=18)
console.log(agePeople)