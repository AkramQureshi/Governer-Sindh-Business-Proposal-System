
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


   
 
 
    let personalDetail = await inquirer.prompt ([
       
      
       
       {
   
       "type":"input",
       "name":"applicantName",
       "message":"Enter Your Name : "
   },
   
   {
       "type":"input",
       "name":"fatherName",
       "message":"Enter Father Name : "
   
   },
   
   {
       "type":"input",
       "name":"fatherName",
       "message":"Enter Father Name : "
   
   },
   
   {
       "type":"number",
       "name":"age",
       "message":"Enter Your Age : "
   
   },
   
   {
       "type":"input",
       "name":"gender",
       "message":"Enter Your Gender : "
   
   },
   
   {
       "type":"input",
       "name":"nic",
       "message":"Enter Your NIC # "
   
   },
   
   {
       "type":"number",
       "name":"mobile",
       "message":"Enter Your Mobile # "
   
   },
   
   {
       "type":"input",
       "name":"education",
       "message":"Enter Your Education : "
   
   },
   
   {
       "type":"input",
       "name":"email",
       "message":"Enter Your Email Adress : "
   
   },
   
   {
       "type":"input",
       "name":"address",
       "message":"Enter Permanent Adress : "
   
   },
   
   
   
   
   
   ]) 
   
   console.log("")
   console.log("                   P E R S O N A L  D E T A I L                 ")
   console.log("****************************************************************")      
   
   console.log("")
   console.log("")
   console.log("Applican Name :", personalDetail.applicantName)
   console.log("Fater Name :", personalDetail.fatherName)
   console.log("Age :", personalDetail.age)
   console.log("Gender :", personalDetail.gender)
   console.log("NIC # ", personalDetail.nic)
   console.log("Mobile #", personalDetail.mobile)
   console.log("Email Address :", personalDetail.email)
   console.log("Education :", personalDetail.education)
   console.log("Permanant Address :", personalDetail.address)
   
   
   

   let businessProposal = await inquirer.prompt ([
   {
   
       "type":"list",
       "name":"currentStatus",
       "message":"1.  Your current status: : ",
       "choices":['Student', 'Job', 'Business', 'Jobless'],
   },
   {
       "type":"list",
       "name":"businessExp",
       "message":"2.	Do you have an experience of any type of business: ",
       "choices":['Yes', 'No'],
   },
   {
       "type":"list",
       "name":"businessType",
       "message":"3.	Type of Business: ",
       "choices":['Manufacturer', 'Retailer & Whole seller', 'Land/Property', 'Digital Business', 'Freelancing / Online Business'],
   },
   {
       "type":"list",
       "name":"sameBusiness",
       "message":"4.	Currently doing the same Business : ",
       "choices":['Yes', 'No'],
   },
   {
       "type":"input",
       "name":"businessProposal",
       "message":"5.	What is your current Business Proposal : ",
   },
   {
       "type":"input",
       "name":"scopeBusiness",
       "message":"6.	What would be the scope of this business in next 5-10 years : ",
   },
   {
       "type":"number",
       "name":"amountRequired",
       "message":"7.	How much amount you think will require to run this business : ",
   },
   {
       "type":"list",
       "name":"runBusiness",
       "message":"8.	How to Run your Business: ",
       "choices":['Digital Marketing', 'Door to Door', 'Referral', 'others'],
   },
   {
       "type":"list",
       "name":"spaceToRun",
       "message":"9.	Do you have own space to run this business :",
       "choices":['Yes', 'No'],
   },
   {
       "type":"number",
       "name":"profit",
       "message":"10.	How many monthly profit will you expect to earn :",
   },
   {
       "type":"number",
       "name":"manpower",
       "message":"11.	How many manpower will be required to run this business :",
   },
   {
       "type":"input",
       "name":"people",
       "message":"12.	How do you help the people when your business will be successful :",
   },
   
   ]) 
   
   console.log("")
   console.log("                 B U S I N E S S   P R O P O S A L                ")
   console.log("******************************************************************")      
   
   console.log("")
   console.log("")
   console.log("Current Status :", businessProposal.currentStatus)
   console.log("Business Experience :", businessProposal.businessExp)
   console.log("Type of Business :", businessProposal.businessType)
   console.log("Same Business    :", businessProposal.sameBusiness)
   console.log("Amount Required  :", businessProposal.businessProposal)
   console.log("Scope of Business :", businessProposal.scopeBusiness)
   console.log("Amount Required :", businessProposal.amountRequired)
   console.log("How To Run :", businessProposal.runBusiness)
   console.log("Your Space to Run :", businessProposal.spaceToRun)
   console.log("Monthly Profit :", businessProposal.profit)
   console.log("Manpower Required :", businessProposal.manpower)
   console.log("how to Support People :", businessProposal.people)
   
   // Business Proposal Pannel for Decision ..... Condition 01
   
   if(businessProposal.currentStatus == "Job" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Freelancing / Online Business" && businessProposal.spaceToRun == "Yes")
       {
   console.log("Congratulation Your Business Proposal is Approved")
   let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 60 /100
   console.log("Your Business Proposal (40 %) Amount Approved : ", amountApproved)   
   } else
   
   // Business Proposal Pannel for Decision ..... Condition 02
   
   if(businessProposal.currentStatus == "Business" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Land/Property" && businessProposal.spaceToRun == "Yes")
       {
   console.log("Congratulation Your Business Proposal is Approved")
   let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 50 /100
   console.log("Your Business Proposal (50 %) Amount Approved : ", amountApproved)   
   } else
   
   // Business Proposal Pannel for Decision ..... Condition 03
   
   if(businessProposal.currentStatus == "Student" && businessProposal.businessExp == "No" && businessProposal.businessType == "Freelancing / Online Business" && businessProposal.spaceToRun == "No")
       {
   console.log("Congratulation Your Business Proposal is Approved")
   let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 80 /100
   console.log("Your Business Proposal (20 %) Amount Approved : ", amountApproved)   
   }
   
   // Business Proposal Pannel for Decision ..... Condition 04
   
   if(businessProposal.currentStatus == "Jobless" && businessProposal.businessExp == "Yes" && businessProposal.businessType == "Retailer & Whole seller" && businessProposal.spaceToRun == "Yes")
       {
   console.log("Congratulation Your Business Proposal is Approved.")
   let amountApproved = businessProposal.amountRequired - businessProposal.amountRequired * 70 /100
   console.log("Your Business Proposal (30 %) Amount Approved : ", amountApproved)   
   }
   
   
       
   
   
   
   else
   {
       console.log("Sorry, Your Business Proposal is Not Approved !")
   }

