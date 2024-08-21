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
exports.login = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield inquirer_1.default.prompt([
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
    });
}
exports.login = login;
