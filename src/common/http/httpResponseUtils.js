const httpCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    INTERNAL_ERROR: 500
}

const sendResponse = (res, statusCode, data = null, message = null) => {
    const payload = { 
        status: statusCode,
        ...(message && { message }),
        ...(data && { data })
    };
    return res.status(statusCode).json(payload);
}

export const responseOK = (res, data) => {
    return sendResponse(res, httpCodes.OK, data);
}

export const responseCreated = (res, data) => {
    return sendResponse(res, httpCodes.CREATED, data);
}

export const responseInternalError = (res, message, err) => {
    console.error("[FATAL] Error stacktrace: ", err);
    return sendResponse(res, httpCodes.INTERNAL_ERROR, null, message);
}

export const responseUnauthorized = (res, message) => {
    return sendResponse(res, httpCodes.UNAUTHORIZED, null, message);
}

export const responseBadRequest = (res, message) => {
    return sendResponse(res, httpCodes.BAD_REQUEST, null, message);
}
