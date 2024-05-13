// import Button from "./Button";
// import styles from"./App.module.css";

//import { useEffect } from "react";

// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text={"Continue"}/>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";

// function App() {
//     const [toDo, setToDo] = useState("");
//     const [toDos, setToDos] = useState([]);
//     const onChange = (event) => setToDo(event.target.value);
//     const onSubmit = (event) => {
//         event.preventDefault();
//     if (toDo === "") {
//         return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//     }; 
//     console.log(toDos);
//     console.log(toDos.map((item, index) => 
//         <li key={index}>{item}</li>
//      ));
//     return (
//     <div>
//         <h1>My To Dos ({toDos.length})</h1>
//        <form onSubmit={onSubmit}> 
//         <input 
//         onChange={onChange} 
//         value={toDo} 
//         type="text" 
//         placeholder="Write your to do..." 
//         />
//         <button>Add To Do</button>
//         </form>
//         <hr />
//         <ul> 
//             {toDos.map((item, index) => (
//             <li key={index}>{item}</li>
//          ))}
//         </ul>
       
//     </div>
//     );
// }
// export default App;


// import { useEffect, useState } from "react";
// function App() {
//     const [loading, setLoading] = useState(true);
//     const [coins, setCoins] = useState([])
//     useEffect(() => {
//         fetch("https://api.coinpaprika.com/v1/tickers")
//         .then((response) => response.json())
//         .then((json) => {
//             setCoins(json);
//             setLoading(false);
//         });
//     }, []);
//     return (
//     <div>
//         <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//         {loading ? <strong>Loading...</strong> : 
//         (<select>
//             {coins.map((coin) => (
//             <option>
//                 {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//             </option>
//             ))}
//         </select>
//         )}
        
//     </div>
//     );
// }

// export default App;


// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Detail from "./routes/Detail";
// import Home from "./routes/Home";

// function App() {
//     return (
//     <Router>
//         <Switch>
//             <Route path="/hello">
//                 <h1>Hello</h1>
//                 </Route>
//                 <Route path="/movie/:id">
//                 <Detail />
//             </Route>
//             <Route path="/">
//                 <Home />
//             </Route>
//         </Switch>
//     </Router>
//     );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Switch -> Routes 로 대체 (ver 5 -> ver6)

import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
