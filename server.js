const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))