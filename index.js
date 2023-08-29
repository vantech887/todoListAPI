const express = require('express');
const path = require('path');

const app = express();

//body parser middleware
app.use(express.json());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//items api route
app.use('/api/items', require('./routes/api/items'));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running at port: ${PORT}`));

