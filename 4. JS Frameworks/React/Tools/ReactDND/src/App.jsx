import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Components
import Sortable from "./components/Sortable.jsx";

function App() {
 return (
  <div className="App">
   <DndProvider backend={HTML5Backend}>
    <Sortable />
   </DndProvider>
  </div>
 );
}

export default App;
