
export function validateCommand(command) {
    let commandSet = new Set(["add", "list", "search", "delete", "help"])
    if (!command) {
        throw new Error(`Command is required`)
    }
    command.toLowerCase()
    if (!commandSet.has(command)) {
        throw new Error(`Unknown command ${command}`)
    }
}

export function validateEmail(email) {
    if (!email.includes('@')) {
        throw new Error(`Email must contain @ symbol`)
    }
    if (!email.includes('.')) {
        throw new Error(`Email must contain a . symbol`)
    }
    if (email.length < 5) {
        throw new Error(`Email must be at least 5 characters long`)
    }
}

export function validatePhone(phone) {
    if (phone.length < 10 || phone.length > 15) {
        throw new Error(`Phone number must be between 10 and 15 characters long`)
    }
    // Check if phone number contains only digits and possibly dashes
    if (isNaN(phone.replace(/-/g, ''))) {
        throw new Error(`Phone number must contain only digits`)
    }
}

export function validateName(name) {
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        throw new Error(`Contact name must contain only letters and spaces`)
    }
}

export default function validateParams(params) {

    validateCommand(params.command)

    if (params.command === "add") {
        if (!params.cname) {
            throw new Error(`Contact name is required for add command`)
        }
        validateName(params.cname)

        if (!params.email) {
            throw new Error(`Email is required for add command`)
        }
        validateEmail(params.email)

        if (!params.phone) {
            throw new Error(`Phone number is required for add command`)
        }
        validatePhone(params.phone)

    }
    else if (params.command === "search") {
        if (params.length < 2 || !params.cname) {
            throw new Error(`Contact name or email is required for ${params.command} command`)
        }
    }
    else if (params.command === 'delete') {
        if (!params.cname) throw new Error(`Contact email is required for ${params.command} command`)
            validateEmail(params.cname);
    }
}