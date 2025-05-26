export const responseOK = (res, resultData) => {
    const response = res.status(200);

    if (resultData != null || resultData != undefined) {
        return response.json({data: resultData});
    }

    return response;
}

export const responseCreated = (res, resultData) => {
    const response = res.status(201).json({data: resultData});

    return response;
}

export const responseInternalError = (res, message, err) => {
    console.log("[FATAL] Error stacktrace: ", err)
    const response = res.status(500).json({errorMessage: message});

    return response;
}

export const responseUnauthorized = (res, unauthorizedMsg) => {
    const response = res.status(401).json({unauthorizedMessage: unauthorizedMsg});

    return response;
}

export const responseBadRequest = (res, badMsg) => {
    const response = res.status(400).json({badRequestMessage: badMsg});

    return response;
}