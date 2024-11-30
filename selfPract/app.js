import readline from "readline-sync"
import { registerUser } from "./user/index.js";

async function main(params) {
    console.log("--------------------------");
    console.log("----------TODO------------");
    console.log("--------------------------");



    let options = ["exit",
        "register",
        "login",
        "add task",
        "edit task",
        "delete task",
        "delete user"

    ]


    options.map((element, index) => console.log(`${element} : ${index}`));
    const userinput = readline.questionInt("choose your option: ")

    switch (userinput) {
        case 0:
            console.log("exit");
            break;
        case 1:
            console.log("register");
            await registerUser()
            break
        case 2:
            console.log("login");
            break
        case 3:
            console.log("add task ");
            break
        case 4:
            console.log("edit task");
            break
        case 5:
            console.log("delete task");
            break
        case 6:
            console.log("delete user");
            break
        default:
            console.log("invalid option");
            break
    }

}
main()