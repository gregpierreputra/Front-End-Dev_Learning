let Person = {
    name: "Greg",
    age: 26,
    country: "Indonesia",

    logData: function() 
    {
        console.log("%s is %i years old and lives in %s", Person.name, Person.age, Person["country"])
    },

    logInArray: function()
    {
        console.log([Person["name"], Person["age"], Person["country"]])
    }
}

console.log(Person.logData()); // Prints an undefined on a new line (??)

console.log(Person.logInArray()); // Prints an undefined on a new line (??)

function trainDiscountChecker(age)
{
    if (age <= 0)
    {
        return console.log("An age cannot be 0 or a negative value");
    }
    else if (age < 6)
    {
        return console.log("Free");
    }
    else if (age >= 6 && age <= 17)
    {
        return console.log("Child Discount");
    }
    else if (age >= 18 && age <= 26)
    {
        return console.log("Student Discount");
    }
    else if (age >= 27 && age <= 66)
    {
        return console.log("Full Price");
    }
    else if (age > 66)
    {
        return console.log("Senior Citizen Discount");
    }
    else
    {
        console.error("null");
    }
}

trainDiscountChecker(Person.age);


let largestCountries = ["China", "India", "United States of America", "Indonesia", "Pakistan"];

for (let i = 0 ; i < largestCountries.length ; i++)
{
    console.log("The no. %i largest country is %s", (i + 1), largestCountries[i]);
}

let messedUpLargestCountries = ["Tuvalu", "India", "United States of America", "Indonesia", "Monaco"];

console.log("Before array operations: " + messedUpLargestCountries);

messedUpLargestCountries.pop();
messedUpLargestCountries.push("Pakistan");

messedUpLargestCountries.shift();
messedUpLargestCountries.unshift("China");

console.log("After array operations: " + messedUpLargestCountries);



let handOptions = ["Rock", "Paper", "Scissors"];

function randomRPSChoice()
{
    return handOptions[Math.floor((Math.random() * handOptions.length))];
}

console.log(randomRPSChoice());