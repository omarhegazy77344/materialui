import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Authentication from './pages/Authentication/Authentication';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions.js';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "authentication",
//         element: <Authentication />,
//       },
//       {
//         path: "database",
//         element: <Database />,
//       },
//       {
//         path: "functions",
//         element: <Functions />,
//       },
//       {
//         path: "hosting",
//         element: <Hosting />,
//       },
//       {
//         path: "machine-learning",
//         element: <MachineLearning />,
//       },
//       {
//         path: "storage",
//         element: <Storage />,
//       },
//     ],
// },
  
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="authentication" element={<Authentication />} />
      <Route path="database" element={<Database />} />
      <Route path="functions" element={<Functions />} />
      <Route path="hosting" element={<Hosting />} />
      <Route path="machine-learning" element={<MachineLearning />} />
      <Route path="storage" element={<Storage />} />
    </Route>
  </Routes>
</BrowserRouter>,
document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
