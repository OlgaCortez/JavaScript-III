/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Open's up global window and shows all of the JS.
* 2. the use of dot notation to invoke the function.
* 3. return the info of a new bond function
* 4. being able to use the call or apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const artist = {
    name: 'Lady Gaga',
    location: 'Hollywood',
    rich: function(){
        console.log(`${this.name} is super rich and lives in ${this.location}!`);
    }
}
artist.rich();

// Principle 3

// code example for New Binding

function Artist(music){
    this.noise = music;
}
let oldArtist = new Artist(`Taylor Swift is cool too!`);
console.log(oldArtist.noise);

// Principle 4

// code example for Explicit Binding

function dog(){
    console.log(this.bark);
}
const myDog = {
    name: 'Phoebe',
    bark: 'Woof Woof',
}
dog.call(myDog);