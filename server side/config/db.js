const mongoose = require('mongoose');
const DB = process.env.DB;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Mongoose Connection SuccessFull")
}).catch((e) => {
    console.log(e)
})