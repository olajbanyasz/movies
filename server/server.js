const express = require('express');
const React = require('react');
const handleRender = require('./handleRender.js');
const port = 8000;
const app = express();
app.use(express.static('public'));
app.get('/*', handleRender)
app.listen(port, () => `App listening on port ${port}`);