//the arrow of functions, is a function that allows us to have an alternative function.
//in this case we have particularities, we have a better way to see a function, we use a constructor, and we use some reserved words

// a convencional function
function square(num) {
    return num * num;
}

//arrow function
const square = (num) => {
    return num * num;
}

//is a simple way to do the same code that another functions square
const square = num => num * num;

//If we have to do a structure or a several code lines, is better usa a convencional function