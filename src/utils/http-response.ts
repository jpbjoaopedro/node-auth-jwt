import { HttpResponse } from "../types/HttpResponse";

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
};

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "successful"
        }
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}

export const unauthorized = async (): Promise<HttpResponse> => {
    return {
        statusCode: 401,
        body: {
            message: "Unauthorized"
        }
    }
}

export const forbidden = async (): Promise<HttpResponse> => {
    return {
        statusCode: 403,
        body: {
            message: "Forbidden"
        }
    }
}

export const notFound = async (): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: {
            message: "Not Found"
        }
    }
}

export const conflict = async (): Promise<HttpResponse> => {
    return {
        statusCode: 409,
        body: {
            message: "Conflict"
        }
    }
}

export const internalServerError = async (error?: any): Promise<HttpResponse> => {
    return {
        statusCode: 500,
        body: {
            message: "Internal Server Error",
            error: error?.message || error || null
        }
    }
}
