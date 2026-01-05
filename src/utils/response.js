module.exports = async ({ res, message = "Success", data = null, code = 200 }) => {
    return res
        .status(code)
        .json({
            success: code < 300,
            message,
            ...(data !== null ? { data } : {})
        })
        .end();
};


// return response({ res, data: user, code: 200, message: "success" })