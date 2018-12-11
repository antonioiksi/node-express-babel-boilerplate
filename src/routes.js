import {app} from './consts';


app.get('/', (req, res) => {
  const tag = "<p>I'm here!</p>";
  res.send('Hello world node.js es6 app.'+tag);
});
