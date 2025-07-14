//validate each argument
//add validate all args function

export function validateAction(command){
    let commandSet = new Set(["add", "list", "search", "delete", "help"])
    command.toLowerCase()
    if(!commandSet.has(command)){
        throw new Error(`Unknown command ${command}`)
    }
}

function validateEmail(email){
    
}
