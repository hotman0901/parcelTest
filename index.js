import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './src/routers/AppRouter';

// const App = () => {
//   return <h1>Hello World!</h1>;
// };

const jsx = (
    <div>
        <AppRouter />
    </div>
);


ReactDOM.render(jsx, document.getElementById("root"));