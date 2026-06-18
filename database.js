const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB")

.then(() => {
    console.log("MongoDB Connected Successfully");
})

.catch((error) => {
    console.log(error);
});