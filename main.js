"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const personalDetail_js_1 = require("./personalDetail.js");
const businessProposal_js_1 = require("./businessProposal.js");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Prompt for login credentials
        const credentials = yield inquirer_1.default.prompt([
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
            yield myPersonalInformation();
            yield myBusinessProposal();
        }
        else {
            console.log("\n\n\n\n\n\n                              Invalid User ID or Password, Please try again...\n\n\n\n\n\n\n\n");
        }
    });
}
function myPersonalInformation() {
    return __awaiter(this, void 0, void 0, function* () {
        //  console.log("Personal Information Section:");
        yield (0, personalDetail_js_1.personalInformation)();
    });
}
function myBusinessProposal() {
    return __awaiter(this, void 0, void 0, function* () {
        //  console.log("Business Proposal Section:");
        yield (0, businessProposal_js_1.exportbusinessProposal)();
    });
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
