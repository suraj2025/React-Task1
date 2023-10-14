import React from "react";

function countWords() { 
  var text = document .getElementById("inputField").value; 
  var numWords = text.length;
  document.getElementById("show") 
      .innerHTML = "Word count: "+numWords; 
} 

function App() {
 
  return (
    
    <center><div className="box">
    <h1>Responsive Paragraph Word Counter</h1>
    <textarea id="inputField" cols="70" rows="10" onInput={countWords}></textarea>
    
    <p id="show"></p>
    </div>
    </center>
    
  );
}
export default App;
