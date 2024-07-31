const { z } = require("zod");

// creating an object schema
const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required"})
        .trim()
        .email({ message: "Invalid email address"})
        .min(3, {message:"Email must be at least of 3 chars."})
        .max(255, {message: "Email must not be more than 255 characters."}),
    password: z
        .string({ required_error: "Password is required"})
        .min(7, {message:"Password must be at least of 7 chars."})
        .max(1024, {message: "Password must not be more than 1024 characters."}),
});
const signupSchema = loginSchema.extend({
    username: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(3, { message: "Name must be at lest of 3 chars. " })
      .max(255, { message: "Name must not be more than 255 characters" }),
  
    phone: z
      .string({ required_error: "Phone is required" })
      .trim()
      .min(10, { message: "Phone must be at least of 10 characters" })
      .max(20, { message: "Phone must not be more than 20 characters" }),
  });

//   const validUserData = {
//     username: "vedant",
//     email: "vedantavhad9888@gmail.com",
//     phone:"9876541320",
//     password:"abcd1234"
// }
// const myUser = signupSchema.parse(validUserData);
// console.log(myUser);

module.exports = {signupSchema, loginSchema};