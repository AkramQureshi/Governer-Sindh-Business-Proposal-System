
// Business Proposal Pannel for Decision ..... Condition 01
if (businessProposal.currentStatus == "Job" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Freelancing / Online Business" && businessProposal.spaceToRun == "Yes") {
    console.log("Congratulation Your Business Proposal is Approved");
    let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 60 / 100;
    console.log("Your Business Proposal (40 %) Amount Approved : ", amountApproved);
}
else 


// Business Proposal Pannel for Decision ..... Condition 02
if (businessProposal.currentStatus == "Business" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Land/Property" && businessProposal.spaceToRun == "Yes") {
    console.log("Congratulation Your Business Proposal is Approved");
    let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 50 / 100;
    console.log("Your Business Proposal (50 %) Amount Approved : ", amountApproved);
}
else 


// Business Proposal Pannel for Decision ..... Condition 03
if (businessProposal.currentStatus == "Student" && businessProposal.businessExp == "No" && businessProposal.businessType == "Freelancing / Online Business" && businessProposal.spaceToRun == "No") {
    console.log("Congratulation Your Business Proposal is Approved");
    let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 80 / 100;
    console.log("Your Business Proposal (20 %) Amount Approved : ", amountApproved);
}else 


// Business Proposal Pannel for Decision ..... Condition 04
if (businessProposal.currentStatus == "Jobless" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Retailer & Whole seller" && businessProposal.spaceToRun == "Yes") {
    console.log("Congratulation Your Business Proposal is Approved.");
    let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 70 / 100;
    console.log("Your Business Proposal (30 %) Amount Approved : ", amountApproved);
}
else  {
    console.log("Sorry, Your Business Proposal is Not Approved !");
}

