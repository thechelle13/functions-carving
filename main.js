const createWoodBlock = () => {
    const woodenObject = {
		type: "Wooden Block",
		length: "10",
		material: "pine",
		purpose: "Flute"
        // Return an object with 4 properties.
}
return woodenObject
}
const createBeautifulCarving = (woodObject) => {
    const woodString = `The ${woodObject.length} inch, ${woodObject.material} woodblock was carved into a wooden ${woodObject.purpose}`
    // Return a string representation of the object
    return woodString
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)

// In the createWoodBlock function, return an object with the following properties
// A type property with a value of "wood block"
// A length property with a value of 10
// A material property with a value of "pine"
// A purpose property with a value of "flute"
// In the createBeautifulCarving function, return a string that looks like the following template.
