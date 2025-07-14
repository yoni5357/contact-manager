//validate each argument
//add validate all args function

function validateAction(command){
    let commandSet = new Set(["add", "list", "search", "delete", "help"])
    command.toLowerCase()
    if(!commandSet.has(command)){
        throw new Error(`Unknown command ${command}`)
    }
}

function validateEmail(email){
    let parsedEmail = new Set(email.split(''))
    if(!parsedEmail.has("@")){
        throw new Error(`Email must contain @ symbol`)
    }
    if(!parsedEmail.has(".")){
        throw new Error(`Email must contain a . symbol`)
    }
    //TODO: check that email contains more than just the @ and . symbols
}

function validatePhone(phone){
    if(phone.length < 10 || phone.length > 15){
        throw new Error(`Phone number must be between 10 and 15 characters long`)
    }
    // Check if phone number contains only digits and possibly dashes
    if(isNaN(phone.replace(/-/g, ''))){
        throw new Error(`Phone number must contain only digits`)
    }
}

export default function validateParams(params){
    if(!params.action){
        throw new Error(`Action is required`)
    }
    validateAction(params.action)

    if(params.action === "add"){
        if(!params.cname){
            throw new Error(`Contact name is required for add action`)
        }
        if(!params.email){
            throw new Error(`Email is required for add action`)
        }
        validateEmail(params.email)

        if(!params.phone){
            throw new Error(`Phone number is required for add action`)
        }
        validatePhone(params.phone)
    } else if (params.action === "search" || params.action === "delete") {
        if(!params.cname){
            throw new Error(`Contact name is required for ${params.action} action`)
        }
    }
}
