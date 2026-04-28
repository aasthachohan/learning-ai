const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const chatRoute = require('./routes/chat');

dotenv.config();

const express_server_app = express();
express_server_app.use(express.json());
express_server_app.use(cors());

express_server_app.post("/api/chat", chatRoute);

const PORT = process.env.PORT || 3000;
express_server_app.listen(PORT, () => {
    console.log("server started...");
})


