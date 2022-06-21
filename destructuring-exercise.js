// OBJECT DESTRUCTURING
// 1
// numPlanets = 8, yearNeptuneDiscovered 1846

// 2
// {yearMarsDiscovered: 1659, yearNeptuneDiscovered: 1846}

// 3
// 'Your name is Alejandro, and you like purple'
// 'Your name is Melissa, and you like green'
// 'Your name is undefined and you like green'

// ARRAY DESTRUCTURING
// 1
// 'Maya', 'Marisa', 'Chi'

// 2
// 'Raindrops on roses', 'whiskers on kittens', ['Bright copper kettles','warm woolen mittens','brown paper packages tied up with strings']

// 3
// [10, 30, 20]

// Assigning variables to object properties
let obj = {
    numbers: {
        a : 1,
        b : 2
    }
}

const {numbers:{a, b}} = obj

// Array swap
let arr = [1,2]
[arr[0],arr[1]] = [arr[1], arr[0]]

// Race results
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
