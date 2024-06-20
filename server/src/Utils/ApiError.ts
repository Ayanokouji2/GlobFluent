class ApiError extends Error{
    constructor(name : string, message : string, stack : string){
        super(message)
        this.name = name
        this.message = message
        this.stack = stack
        
        Error.captureStackTrace(this, this.constructor)
    }
}

export default ApiError