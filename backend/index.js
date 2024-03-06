const express = require("express");
const morgan = require("morgan");
const {mongoose} = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const {totalInfoRouter} = require("./routers/totalInfo");

const {goodsRouter} = require("./routers/goodsRouter.js");
const {shopsRouter} = require("./routers/shopsRouter.js");
const {menuRouter} = require("./routers/menuRouter.js");
const {historyRouter} = require("./routers/historyRouter");


const port = process.env.PORT || 3050;
const app = express();

app.use(morgan('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
dotenv.config();

mongoose.connect(process.env.URL_MONGO,{dbName: process.env.DATABASE}).then(() => {
    console.log("Mongo is connected!");
});


app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/goods", goodsRouter);
app.use("/shops", shopsRouter);
app.use("/history", historyRouter);


const start = async () => {
    try {

        app.listen(port, (err) => {
            console.log("Server has been started!");
        });
    } catch (err) {
        console.error(`Error on server startup: ${err.message}`);
    }
};

start();
app.use(errorHandler);
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || "String";
    res.status(status).json({ message });
}


