"use strict";

document.querySelector("body > button").addEventListener("click", checkuserinput);


function checkuserinput() {

    let userinput = document.getElementById("myInput").value;

    var choices = document.getElementById("userchoices");
    var currentuserchoice = choices.options[choices.selectedIndex].value;

    console.log(userinput)


    if (currentuserchoice === "firstuppercase" && userinput !== "") {
        console.log("If input is a first name: Make the first character in a name uppercase, and the rest lowercase");

        let firstletter = userinput.slice(0, 1);
        let firstletteruppercase = firstletter.toUpperCase();

        let firstspace = userinput.indexOf(" ");

        let restofthename = userinput.slice(1, firstspace)
        let lowercasetherestofthename = restofthename.toLowerCase();

        let fullname = firstletteruppercase + lowercasetherestofthename

        document.querySelector("body > div").textContent = fullname

    } else if (currentuserchoice === "firstname" && userinput !== "") {
        console.log("If input is a full name: Find the first name");

        let firstspace = userinput.indexOf(" ");

        let firstname = userinput.slice(0, firstspace)


        document.querySelector("body > div").textContent = firstname


    } else if (currentuserchoice === "length" && userinput !== "") {
        console.log("If input is a full name: Find the length of the first name");
        let firstspace = userinput.indexOf(" ");
        let firstname = userinput.slice(0, firstspace)
        let length = firstname.length
        // console.log(length)
        document.querySelector("body > div").textContent = `First name is  ${length} characters long`
    } else if (currentuserchoice === "findmiddlename" && userinput !== "") {
        console.log("If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string");
        let firstspace = userinput.indexOf(" ");
        let firstName = userinput.slice(0, firstspace);
        let start = firstspace + 1;
        console.log(start)
        let secondspace = userinput.indexOf(" ", start);
        let middleName = userinput.slice(start, secondspace);
        console.log(middleName);
        let end = secondspace - 1;
        console.log(end)
        document.querySelector("body > div").textContent = `Middle name is ${middleName}, starts at ${start}th character and ends at ${end} th character`
    } else if (currentuserchoice === "checkifpng" && userinput !== "") {
        console.log("If input is a filename: Check if a filename is .png or .jpg");

        if (userinput.includes(".png")) {
            document.querySelector("body > div").textContent = "Filename is .png";
        } else if (userinput.includes(".jpg")) {
            document.querySelector("body > div").textContent = "Filename is .jpg";
        } else {
            document.querySelector("body > div").textContent = "This is not a valid filename";
        }



    } else if (currentuserchoice === "hidepassword" && userinput !== "") {
        console.log("If input is a password: Hide a password with the correct number of *s");

        let length = userinput.length;

        let password = '*'.repeat(length)

        document.querySelector("body > div").textContent = password;

    } else if (currentuserchoice === "thirduppercase" && userinput !== "") {
        console.log("With any input: Make the third character in a name uppercase");

        let firsttwo = userinput.slice(0, 2);
        let thirdcharacter = userinput.slice(2, 3);
        let thirduppercase = thirdcharacter.toUpperCase();
        let restofthename = userinput.slice(3);

        // console.log(firsttwo)
        // console.log(thirdcharacter)
        // console.log(restofthename)

        let newname = firsttwo + thirduppercase + restofthename

        document.querySelector("body > div").textContent = newname;

    } else if (currentuserchoice === "uppercase" && userinput !== "") {
        console.log("With any input: Make a character uppercase, if it follows a space or a hyphen");
        let arr = userinput.split("");
        console.log(arr)
        arr.forEach((letter, i) => {
            if (arr[i - 1] === " " || arr[i - 1] === "-") {
                arr[i] = letter.toUpperCase();

            } else {
                arr[i] = letter.toLowerCase();

            }
        })
        let newname = arr.join("");
        console.log(newname);
        document.querySelector("body > div").textContent = newname;

    }


}