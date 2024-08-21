export let mybusinessProposal = {
    currentStatus: "Job", // Example value, replace with actual data
    businessExp: "Yes",   // Example value, replace with actual data
    businessType: "Freelancing / Online Business", // Example value, replace with actual data
    spaceToRun: "Yes",    // Example value, replace with actual data
    amountRequired: 500000 // Example value, replace with actual data
};

// Business Proposal Pannel for Decision ..... Condition 01

if(mybusinessProposal.currentStatus == "Job" && mybusinessProposal.businessExp == "Yes" && mybusinessProposal.businessType == "Freelancing / Online Business" && mybusinessProposal.spaceToRun == "Yes")
    {
console.log("Congratulation Your Business Proposal is Approved")
let amountApproved = mybusinessProposal.amountRequired - mybusinessProposal.amountRequired * 60 /100
console.log("Your Business Proposal (40 %) Amount Approved : ", amountApproved)   
} 

// Business Proposal Pannel for Decision ..... Condition 02

else

if(mybusinessProposal.currentStatus == "Business" && mybusinessProposal.businessExp == "Yes" && mybusinessProposal.businessType == "Land/Property" && mybusinessProposal.spaceToRun == "Yes")
    {
console.log("Congratulation Your Business Proposal is Approved")
let amountApproved = mybusinessProposal.amountRequired - mybusinessProposal.amountRequired * 50 /100
console.log("Your Business Proposal (50 %) Amount Approved : ", amountApproved)   
} 

else


// Business Proposal Pannel for Decision ..... Condition 03

if(mybusinessProposal.currentStatus == "Student" && mybusinessProposal.businessExp == "No" && mybusinessProposal.businessType == "Freelancing / Online Business" && mybusinessProposal.spaceToRun == "No")
    {
console.log("Congratulation Your Business Proposal is Approved")
let amountApproved = mybusinessProposal.amountRequired - mybusinessProposal.amountRequired * 80 /100
console.log("Your Business Proposal (20 %) Amount Approved : ", amountApproved)   
}

else
// Business Proposal Pannel for Decision ..... Condition 04

if(mybusinessProposal.currentStatus == "Jobless" && mybusinessProposal.businessExp == "Yes" && mybusinessProposal.businessType == "Retailer & Whole seller" && mybusinessProposal.spaceToRun == "Yes")
    {
console.log("Congratulation Your Business Proposal is Approved.")
let amountApproved = mybusinessProposal.amountRequired - mybusinessProposal.amountRequired * 70 /100
console.log("Your Business Proposal (30 %) Amount Approved : ", amountApproved)   
}



else
{
    console.log("Sorry, Your Business Proposal is Not Approved !")
}
 