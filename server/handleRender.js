const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../src/js/containers/app/App.jsx');
const { StaticRouter } = require('react-router-dom');
const configStore = require('../src/js/actions/store');
const { Provider } = require('react-redux');
const serialize = require('serialize-javascript');
import root from 'window-or-global';

function handleRender (req, res) {
  const { store } = configStore();
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route, match}) => {
    const { fetchData} = route.component;

    if (!(fetchData instanceof Function)) {
      return Promise.resolve(null);
    }
    return fetchData(store.dispatch, match);
  });
  
  return Promise.all(promises)
    .then(() => {
      const context = {};
      const app = (
        `<Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>`
      );
      const markup = renderToString(app);
  
      if (context.url) {
        return res.redirect(context.url);
      }

      const preloadedState = store.getState();
      res.send(renderPage(markup, preloadedState));
  });
}

function renderPage (template, preloadedState) {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Movies</title>
      </head>
      <body>
        <div id="root"> ${template}</div>
        <script src="../public/main.js"></script>
        <script>root.__INITIAL_DATA__ = ${serialize(preloadedState)}</script>
      </body>
    </html>
  `);
}

module.exports = handleRender;