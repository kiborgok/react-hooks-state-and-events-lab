import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState(false);

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setAppClass(appClass => !appClass)}>{appClass ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
