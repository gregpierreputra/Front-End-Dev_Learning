const passwordDisplayElement = document.querySelectorAll(".password-element");
const changePasswordLengthElement = document.getElementById("change-password-length-input");
const generatePasswordButton = document.getElementById("generate-password-button");


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// Generate 2 random passwords of at minimum 15 characters in length
function generatePassword(min = 6)
{
    const passwordArray = [];

    for (let j)
}


generatePasswordButton.addEventListener("click", function()
{
    let password1 = [];
    let password2 = [];
    let password3 = [];
    let password4 = [];

    for (let i = 1 ; i < 16 ; i++)
    {
        password1.push(characters[Math.floor(Math.random() * characters.length)]);
        password2.push(characters[Math.floor(Math.random() * characters.length)]);
        password3.push(characters[Math.floor(Math.random() * characters.length)]);
        password4.push(characters[Math.floor(Math.random() * characters.length)]);
    }

    password_1_element.textContent = password1.join();
    password_2_element.textContent = password2.join();
    password_3_element.textContent = password3.join();
    password_4_element.textContent = password4.join();
})