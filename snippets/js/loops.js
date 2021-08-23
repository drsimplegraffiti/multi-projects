//For loops

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Dynamic values in loops
for (let i = 0; i < 10; i++) {
    console.log(` for loop number: ${i}`)
}
//While loops
let i = 0;
while (i < 10) {
    console.log(` While loop Number ${i}`);
    i++;

}

//Ex 4
const names = ['ed', 'nua', 'tye']
for (name of names) {
    console.log(`hello there ${name}`);
}