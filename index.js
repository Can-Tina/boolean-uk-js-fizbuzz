/* Forgot to upload before, sorry */

document.getElementById("app").innerHTML = `
<h1>FizzBuzz</h1>
<p>The first FizzBuzzFishBus is 840</p>
`;

for (let i = 1; i < 1001; i++) {

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 8 === 0) {
            console.log("FizzBuzzFishBus")
        }

    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz")
    }

    else if (i % 3 === 0) {
        console.log("Fizz")
    }

    else if (i % 5 === 0) {
        console.log("Buzz")
    }

    else if (i % 7 === 0) {
        console.log("Fish")
    }

    else if (i % 8 === 0) {
        console.log("Bus")
    }

    else {
        console.log(i)
    }
}
