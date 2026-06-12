const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Mbeya Phones Backend Running");
});

app.post("/buy", (req, res) => {
    const { phone } = req.body;

    console.log("Customer ordered:", phone);

    res.json({
        success: true,
        message: `${phone} order received`
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});