const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

function fakeAI() {
    return "မင်္ဂလာပါ Moon Subtitle AI";
}

function toSRT(text) {
    return `1\n00:00:01,000 --> 00:00:05,000\n${text}\n`;
}

app.post("/transcribe", upload.single("file"), (req, res) => {
    const text = fakeAI();
    const srt = toSRT(text);
    res.json({ text, srt });
});

app.listen(5000, () => console.log("Server running"));
