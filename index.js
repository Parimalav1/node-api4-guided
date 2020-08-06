require("dotenv").config();

const server = require("./api/server.js");

server.get('/', (req,res) => {
  const message = process.env.MESSAGE || "Hello from guided project";
  res.status(200).json({message, database: process.env.DB_NAME});
});

const port = process.env.PORT || 5000;
  
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
