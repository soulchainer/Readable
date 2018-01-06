import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import routes from 'routes';

const App = () => (
  <Router>
    <div className="Root">
      <Switch>
        {routes.map(args => <Route key={args.path} {...args} />)}
      </Switch>
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            max-width: 100%;
            min-height: 100vh;
            overflow-x: hidden;
            width: 100vw;
          }

          /* For this quick input CSS reset, I look at https://codepen.io/terkel/pen/dvejH */
          input[type="submit"],
          input[type="reset"] {
            background: none;
            border: 0;
            color: inherit;
            font: inherit;
            line-height: normal;
            overflow: visible;
            padding: 0;
            -webkit-appearance: button; /* for input */
              -moz-user-select: none;
                -ms-user-select: none;
          }
          input::-moz-focus-inner {
            border: 0;
            padding: 0;
          }

          #root {
            display: flex;
            justify-content: center;
            min-height: 100vh;
          }

          .Root {
            display: flex;
            font-family: 'Exo', sans-serif;
            height: 100%;
            justify-content: center;
            width: 100vw;
          }

          .Screen {
            display: flex;
            flex-direction: column;
            width: 100vw;
          }

          .icon {
            height: 100%;
          }
        `}
      </style>
    </div>
  </Router>
);

export default App;
