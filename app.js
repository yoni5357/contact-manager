import { getFileData, updateFile } from "./utils/fileUtils.js"
import validateParams from "./utils/validation.js"

const params = {
    command: process.argv[2],
    cname: process.argv[3],
    email: process.argv[4],
    phone: process.argv[5],
}

function run(){
    try{
        validateParams(params)
    } catch(err){
        console.log(`❌ Error: ${err.message}`)
    }

    if(params.command === "help"){
        displayHelp()
    }

    let contacts = getFileData()

    switch(params.command){
        case "add":
            addContact(contacts, params)
            updateFile(contacts)
            break;
        case "list":
            listContacts(contacts)
            break;
        case "search":
            searchContacts(contacts, params.cname)
            break;
        case "delete":
            deleteContact(contacts, params.cname)
            updateFile(contacts)
            break;
    }
}


run()
