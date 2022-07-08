const Joi = require('joi');
// validateCourse = (course)=>{
//         const courseSchema = {
//             courseName: Joi.string().required().min(3),
//             cHour: Joi.number().required()
//         }
//         const result = Joi.validate(course, courseSchema)
// }
validateUser = (user)=>{
    const schema = Joi.object({
        fullName: Joi.string().min(3).max(10).required(),
        email: Joi.string().min(3).required().email(),
        address: Joi.string().required(),
        roles: Joi.string().min(3).max(10).required(),
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().min(6).max(500).required()
    })
    return schema.validate(user)
}
exports.validateUser=validateUser