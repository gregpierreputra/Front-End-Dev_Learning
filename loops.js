let total = 0, count = 1;

// For loops
// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//      START          FINISH      STEP SIZE
for (let count = 1 ; count < 11 ; count += 2)
{
    console.log(count);
}

function count1to20()
{
    // Example for syntax for a for loop - counting 1 to 20
    for (let count = 1 ; count <= 20 ; count++)
    {
        console.log(count)
    }
}



function count10to20()
{
    // Example for syntax for a for loop - counting 10 to 20
    for (let count = 10 ; count <= 20 ; count++)
    {
        console.log(count)
    }
}


function count10to100()
{
    // Example for syntax for a for loop - counting from 10 to 100 in steps of 10
    for (let i = 10 ; i <= 100 ; i += 10)
    {
        console.log(i)
    }
}


// For loops with Arrays

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "Well I'll see you again later! Good bye!"
]

for (let i = 0 ; i < messages.length ; i++)
{
    console.log(messages[i])
}



function beforePopFunction()
{
    for (let i = 0 ; i < messages.length ; i++)
    {
        console.log("Messages BEFORE the pop function: " + messages[i]);
    }
}


function afterPopFunction()
{
    messages.pop();
    
    for (let i = 0 ; i < messages.length ; i++)
    {
        console.log("Messages AFTER the pop function: " + messages[i]);
    }
}


function howManyTimesToPrint(times)
{
    for (let i = 1 ; i <= times ; i += 10)
    {
        console.log("I am printing for the " + i + " time");
    }
}

howManyTimesToPrint(100)

// While loops

// Example syntax for a while loop

function firstWhileLoop()
{
    while (count <= 10)
    {
        total += count;
        console.log("This is total: ", total)
        count += 1;
        console.log("This is count: ", count)
    }
}


