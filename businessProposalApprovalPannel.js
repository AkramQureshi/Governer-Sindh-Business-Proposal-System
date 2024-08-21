"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mybusinessProposal = void 0;
exports.mybusinessProposal = {
    currentStatus: "Job", // Example value, replace with actual data
    businessExp: "Yes", // Example value, replace with actual data
    businessType: "Freelancing / Online Business", // Example value, replace with actual data
    spaceToRun: "Yes", // Example value, replace with actual data
    amountRequired: 500000 // Example value, replace with actual data
};
// Business Proposal Pannel for Decision ..... Condition 01
if (exports.mybusinessProposal.currentStatus == "Job" && exports.mybusinessProposal.businessExp == "Yes" && exports.mybusinessProposal.businessType == "Freelancing / Online Business" && exports.mybusinessProposal.spaceToRun == "Yes") {
    console.log("Congratulation Your Business Proposal is Approved");
    let amountApproved = exports.mybusinessProposal.amountRequired - exports.mybusinessProposal.amountRequired * 60 / 100;
    console.log("Your Business Proposal (40 %) Amount Approved : ", amountApproved);
}
// Business Proposal Pannel for Decision ..... Condition 02
else if (exports.mybusinessProposal.currentStatus == "Business" && exports.mybusinessProposal.businessExp == "Yes" && exports.mybusinessProposal.businessType == "Land/Property" && exports.mybusinessProposal.spaceToRun == "Yes") {
    console.log("Congratulation Your Business Proposal is Approved");
    let amountApproved = exports.mybusinessProposal.amountRequired - exports.mybusinessProposal.amountRequired * 50 / 100;
    console.log("Your Business Proposal (50 %) Amount Approved : ", amountApproved);
}
else 
// Business Proposal Pannel for Decision ..... Condition 03
if (exports.mybusinessProposal.currentStatus == "Student" && exports.mybusinessProposal.businessExp == "No" && exports.mybusinessProposal.businessType == "Freelancing / Online Business" && exports.mybusinessProposal.spaceToRun == "No") {
    console.log("Congratulation Your Business Proposal is Approved");
    let amountApproved = exports.mybusinessProposal.amountRequired - exports.mybusinessProposal.amountRequired * 80 / 100;
    console.log("Your Business Proposal (20 %) Amount Approved : ", amountApproved);
}
else 
// Business Proposal Pannel for Decision ..... Condition 04
if (exports.mybusinessProposal.currentStatus == "Jobless" && exports.mybusinessProposal.businessExp == "Yes" && exports.mybusinessProposal.businessType == "Retailer & Whole seller" && exports.mybusinessProposal.spaceToRun == "Yes") {
    console.log("Congratulation Your Business Proposal is Approved.");
    let amountApproved = exports.mybusinessProposal.amountRequired - exports.mybusinessProposal.amountRequired * 70 / 100;
    console.log("Your Business Proposal (30 %) Amount Approved : ", amountApproved);
}
else {
    console.log("Sorry, Your Business Proposal is Not Approved !");
}
