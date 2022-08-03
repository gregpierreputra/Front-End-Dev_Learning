// Arrays - ordered lists of items - composite / complex data types

let name = ["Gregorius", "Pierre", "Putra"]
let age = [23]
let doILikePizza = [true]
let allThreeCombined = ["Gregorius Pierre Putra", 23, true]

console.log(allThreeCombined)


let featuredPosts = [
                    "Check out my Netflix clone",
                    "Here's code for my project",
                    "We launched my new portofolio"]
let experience = [
    "Sekolah Pelita Harapan",
    "University of Birmingham"
]
let skills = [
    "Java",
    "Python",
    "Microsoft Office",
    "Human Resources"
]

let perExperience = ["CEO at Scrimba", "Frontend Dev at Xeneta", "People counter for Norst"]
console.log(perExperience[0] + perExperience[1] + perExperience[2])

console.log(perExperience[1])
console.log(perExperience[2])
console.log(perExperience[0])

console.log(featuredPosts.length)

// Operations on JavaScript arrays

let cards = [6, 4]
console.log("Before push: ", cards)


// push() - A method - a function on an object (Arrays)
cards.push(7)
console.log("After push: ", cards)

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here"

console.log("Before the message push: ", messages)
messages.push(newMessage);
console.log("After the message push: ", messages)
messages.pop()
console.log("After the pop function, wheere the last element is removed", messages)
