
import inquirer from "inquirer";
import { personalInformation } from "./personalDetail.js";
import { exportbusinessProposal } from "./businessProposal.js";

async function main() {
    // Prompt for login credentials
    const credentials = await inquirer.prompt([
        {
            type: "input",
            name: "login",
            message: "\n                                      Enter Your Login ID  : "
        },
        {
            type: "input",
            name: "password",
            message: "\n                                      Enter Password       : "
        }
    ]);

    // Check the credentials
    if (credentials.login === "Akram.Qureshi" && credentials.password === "********") {
        console.log("\n\n                                    Welcome to Portal of Governor House Sindh");
        console.log("\n                                     --------------------------------------\n");
        await myPersonalInformation();
        
        await myBusinessProposal();
    } else {
        console.log("\n\n\n\n\n\n                              Invalid User ID or Password, Please try again...\n\n\n\n\n\n\n\n");
    }
}

async function myPersonalInformation() {
    //  console.log("Personal Information Section:");
    await personalInformation();
}

async function myBusinessProposal() {
  //  console.log("Business Proposal Section:");
    await exportbusinessProposal();
}

main();


/*

import inquirer from "inquirer";

    const credentials = await inquirer.prompt([
        {
            type: "input",
            name: "login",
            message: "Enter Your Login ID: "
        },
        {
            type: "input",
            name: "password",
            message: "Enter Password: "
        }
    ]);



    // Check the credentials

    if (credentials.login === "akram" && credentials.password === "1234") {
        console.log(credentials.login, "Welcome to Governor House Sindh Portal");
    } 

   else {
    console.log("Invalid User ID or Password, Please try again...");
}

import { personalInformation } from "./personalDetail.js";
import { exportbusinessProposal } from "./businessProposal.js";

async function main() {
    await myPersonalInformation();
    console.log("\n------------------------------------\n");
    await myBusinessProposal();
}

async function myPersonalInformation() {
    console.log("Personal Information Section:");
    await personalInformation();
}

async function myBusinessProposal() {
    console.log("Business Proposal Section:");
    await exportbusinessProposal();
}

main();

*/


/*
import { personalInformation } from "./personalDetail.js";
async function main() {
    await personalInformation();
}
main();


import { exportbusinessProposal } from "./businessProposal.js";
async function mybusinessProposal() {
    await exportbusinessProposal();
}
main();

*/

/*
import { login } from "./login.js";
import { personalInformation } from "./personalDetail.js";

async function main() {
    await mylogin();
    console.log("\n------------------------------------\n");
    await myPersonalInformation();
}

async function mylogin() {
    console.log("Login Section:");
    await login();
}

async function myPersonalInformation() {
    console.log("Personal Information Section:");
    await personalInformation();
}

main();
*/