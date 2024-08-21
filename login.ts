
import inquirer from "inquirer";

export async function login()
{
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
}