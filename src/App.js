import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import NoMatch from './NoMatch'
import BackButton from "./BackButton";
import ForwardButton from "./FowardButton";
import GoHomeButton from "./GoHomeButton";

// function App() {
//   return (
//     <Router>
//       <div className="App"></div>
//     </Router>
//   );
// }


function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <Router>
      < BackButton/>
      < ForwardButton/>
      < GoHomeButton/>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route  exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route>
              <NoMatch/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import "../src/App.css";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import UserProfile from "./UserProfile";

// function Home() {
//   return <p>Home</p>;
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div>
//           <Link to="/">Home</Link>
//         </div>
//         {Array(10)
//           .fill()
//           .map((ignoredValue, index) => index + 1)
//           .map((id) => (
//             <div key={id}>
//               <Link to={`/user/${id}`}>User {id}</Link>
//             </div>
//           ))}
//         <Switch>
//           <Route exact={true} path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;