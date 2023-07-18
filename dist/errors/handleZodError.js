"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    const errors = error.issues.map((issue) => {
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[issue.path.length - 1],
            message: issue === null || issue === void 0 ? void 0 : issue.message,
        };
    });
    const statusCode = 400;
    //   console.log(error.issues.map(issue => issue.path));
    return {
        statusCode,
        message: 'validation Error',
        errorMessages: errors,
    };
};
exports.default = handleZodError;
