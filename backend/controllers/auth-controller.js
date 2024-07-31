const express = require('express');
const User = require("../models/user-model");
const Blog = require("../models/blog-model");
const bcrypt = require("bcryptjs")

const home = async(req,res)=>{
    try {
        res.status(200).send("Welcome using authcontroller");
    } catch (error) {
        console.log(error);
    }
};


// user registeration logic

const register = async(req,res, next)=>{
    try {
        // console.log(req.body);
        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message: "email already exists"});
        }
        // hash the password 
        const userCreated = await User.create({username, email, phone, password});

        res.status(201).json({msg: "registeration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString()});
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
};

// user login logic

const login = async(req,res, next)=>{
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }
        const user = await bcrypt.compare(password, userExist.password);
        if(user){
            res.status(201).json({msg: "login successful", token: await userExist.generateToken(), userId: userExist._id.toString()});
        }
        else{
            res.status(401).json({message:"Invalid email or password"});
        }
    } catch (error) {
        res.status(500).json("internal server error");
        next(error);
    }
}

const user = async(req,res)=>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`error from the user route: ${user}`)
    }
}

const getBlogById = async (req, res, next) => {
    try {
        const { id } = req.params; // Ensure that id is correctly extracted from req.params
        console.log("Blog ID:", id); // Add a log to check the received id
        const data = await Blog.findOne({ _id: id });
        if (!data) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        next(error);
    }
};


module.exports = {home,register,login, user, getBlogById};