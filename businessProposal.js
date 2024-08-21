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
exports.exportbusinessProposal = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
function exportbusinessProposal() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n\n");
        console.log("                        ** ***************************************************************** **");
        console.log("                        **          B U S I N E S S  P R O P O S A L  D E T A I L            **");
        console.log("                        ******************************************************************** **");
        console.log("\n\n");
        let businessProposal = yield inquirer_1.default.prompt([
            {
                "type": "list",
                "name": "currentStatus",
                "message": "\n     1. Your current status : ",
                "choices": ['Student', 'Job', 'Business', 'Jobless'],
            },
            {
                "type": "list",
                "name": "businessExp",
                "message": "\n     2. Do you have an experience of any type of business: ",
                "choices": ['Yes', 'No'],
            },
            {
                "type": "list",
                "name": "businessType",
                "message": "\n     3. Type of Business: ",
                "choices": ['Manufacturer', 'Retailer & Whole seller', 'Land/Property', 'Digital Business', 'Freelancing / Online Business'],
            },
            {
                "type": "list",
                "name": "sameBusiness",
                "message": "\n     4. Currently doing the same Business : ",
                "choices": ['Yes', 'No'],
            },
            {
                "type": "input",
                "name": "businessProposal",
                "message": "\n     5. What is your current Business Proposal : ",
            },
            {
                "type": "input",
                "name": "scopeBusiness",
                "message": "\n     6. What would be the scope of this business in next 5-10 years : ",
            },
            {
                "type": "number",
                "name": "amountRequired",
                "message": "\n     7. How much amount you think will require to run this business : ",
            },
            {
                "type": "list",
                "name": "runBusiness",
                "message": "\n     8. How to Run your Business: ",
                "choices": ['Digital Marketing', 'Door to Door', 'Referral', 'others'],
            },
            {
                "type": "list",
                "name": "spaceToRun",
                "message": "\n     9. Do you have own space to run this business :",
                "choices": ['Yes', 'No'],
            },
            {
                "type": "number",
                "name": "profit",
                "message": "\n     10. How many monthly profit will you expect to earn :",
            },
            {
                "type": "number",
                "name": "manpower",
                "message": "\n     11. How many manpower will be required to run this business :",
            },
            {
                "type": "input",
                "name": "people",
                "message": "\n     12. How do you help the people when your business will be successful :",
            },
            {
                "type": "input",
                "name": "cnic",
                "message": "\n     13. Enter CNIC # for Checking Criminal Record :",
            },
        ]);
        console.log("\n\n");
        console.log("                        ** ***************************************************************** **");
        console.log("                        **      Y O U R  B U S I N E S S  P R O P O S A L  D E T A I L       **");
        console.log("                        ******************************************************************** **");
        console.log("\n\n");
        console.log("");
        console.log("\n             Current Status :", businessProposal.currentStatus, "                                    Business Experience :", businessProposal.businessExp);
        //console.log("Business Experience :", businessProposal.businessExp)
        console.log("\n           Type of Business :", businessProposal.businessType, "                 Business       :", businessProposal.sameBusiness);
        //console.log("Same Business    :", businessProposal.sameBusiness)
        console.log("\n         Business Proposal  :", businessProposal.businessProposal, "               Scope of Business    :", businessProposal.scopeBusiness);
        //console.log("Scope of Business :", businessProposal.scopeBusiness)
        console.log("\n            Amount Required :", businessProposal.amountRequired, "                                  How To Run :", businessProposal.runBusiness);
        //console.log("How To Run :", businessProposal.runBusiness)
        console.log("\n          Your Space to Run :", businessProposal.spaceToRun, "                                       Monthly Profit :", businessProposal.profit);
        //console.log("Monthly Profit :", businessProposal.profit)
        console.log("\n          Manpower Required :", businessProposal.manpower, "                                       How to Support People :", businessProposal.people);
        console.log("\n\n\n");
        // Business Proposal Pannel for Decision ..... Condition 01
        if (businessProposal.currentStatus == "Job" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Freelancing / Online Business" && businessProposal.spaceToRun == "Yes" && businessProposal.cnic == "42201-1234567-8") {
            console.log("\n\n                        ** ***************************************************************** **");
            console.log("                        **        Congratulations Your Business Proposal is Approved.        **");
            console.log("                        ******************************************************************** **");
            let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 60 / 100;
            console.log("\n\n                        ** ***************************************************************** **");
            console.log("                        **     Your Business Proposal (40 %) Amount Approved : ", amountApproved, "       **");
            console.log("                        ******************************************************************** **");
        }
        // Business Proposal Pannel for Decision ..... Condition 02
        else if (businessProposal.currentStatus == "Business" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Land/Property" && businessProposal.spaceToRun == "Yes" && businessProposal.cnic == "42201-1234567-8") {
            console.log("\n\n                        ** ***************************************************************** **");
            console.log("                        **        Congratulations Your Business Proposal is Approved.        **");
            console.log("                        ******************************************************************** **");
            let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 50 / 100;
            console.log("\n\n                          ** ***************************************************************** **");
            console.log("                        **     Your Business Proposal (50 %) Amount Approved : ", amountApproved, "       **");
            console.log("                        ******************************************************************** **");
            console.log("\n\n\n\n");
        }
        else 
        // Business Proposal Pannel for Decision ..... Condition 03
        if (businessProposal.currentStatus == "Student" && businessProposal.businessExp == "No" && businessProposal.businessType == "Freelancing / Online Business" && businessProposal.spaceToRun == "No" && businessProposal.cnic == "42201-1234567-8") {
            console.log("\n\n                        ** ***************************************************************** **");
            console.log("                        **        Congratulations Your Business Proposal is Approved.        **");
            console.log("                        ******************************************************************** **");
            let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 80 / 100;
            console.log("\n\n                        ** ***************************************************************** **");
            console.log("                        **     Your Business Proposal (20 %) Amount Approved : ", amountApproved, "       **");
            console.log("                        ******************************************************************** **");
        }
        else 
        // Business Proposal Pannel for Decision ..... Condition 04
        if (businessProposal.currentStatus == "Jobless" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Retailer & Whole seller" && businessProposal.spaceToRun == "Yes" && businessProposal.cnic == "42201-1234567-8") {
            console.log("\n\n                        ** ***************************************************************** **");
            console.log("                        **        Congratulations Your Business Proposal is Approved.        **");
            console.log("                        ******************************************************************** **");
            let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 70 / 100;
            console.log("\n\n                        ** ***************************************************************** **");
            console.log("                        **     Your Business Proposal (30 %) Amount Approved : ", amountApproved, "       **");
            console.log("                        ******************************************************************** **");
        }
        else {
            console.log("\n\n                    ** ***************************************************************** **");
            console.log("                        **            Sorry, Your Business Proposal is  Rejected !           **");
            console.log("                        ******************************************************************** **");
            console.log("\n\n");
        }
    });
}
exports.exportbusinessProposal = exportbusinessProposal;
