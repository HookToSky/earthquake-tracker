import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';
const app = express();
const port = 3000;
app.use(express.static('public'));

const generateHtml = () => {
    const content = renderToString(React.createElement(App));
    console.log('content', content);

    return `
      <html>
        <head></head>
        <body>
          <div id="root">${content}</div>
          <script src="../dist/app.js"></script>
        </body>
      </html>
      `;
};

app.get('/', (req, res) => {
    res.send(generateHtml());
});
app.listen(process.env.PORT || port, () => {
    return console.log(`server is running on ${port}`);
});
