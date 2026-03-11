const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
title: {
type: String,
required: true
},

description: String,

status: {
type: String,
default: "Pending"
},

dueDate: Date,

remarks: String,

createdOn: {
type: Date,
default: Date.now
},

updatedOn: {
type: Date,
default: Date.now
}
});

module.exports = mongoose.model("Task", TaskSchema);
