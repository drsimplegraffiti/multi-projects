const person = {
    name: "abayomi",
    age: 34,
    firstName: "joes",
    lastName: "self",
    skills: {
        stack: "backend",
        stack2: "frontend"
    }
}

//Accessing single value
console.log(person.age);

//Accessing multiple values
console.log(person.age, person.skills);

//Accessing inner values
console.log(person.skills.stack);

//Todo exercise
const todos = [{
        id: 1,
        test: "take trash out",
        isComplete: true
    },
    {
        id: 2,
        test: "read js",
        isComplete: false
    }
]

console.log(todos[1].test);
// const todosToJSON = JSON.stringify(todos);