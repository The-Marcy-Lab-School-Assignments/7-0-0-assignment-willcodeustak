import { useState } from 'react'
import FontSizeControls from "./components/FontSizeControls.jsx"
import GreetingDisplay from "./components/GreetingDisplay.jsx";
import LanguageSelector from "./components/LanguageSelector.jsx"
import "./App.css"

//The useState hook in React returns an array with two elements:

//useState hook allows you to define state variables and specify how they should change when updated, based on the functions you provide

//the array takes in 2 elements. CurrentState, UpdaterFunction


// Root Component of the Application
//renders three child components: FontSizeControls, GreetingDisplay, and LanguageSelector.
function App() {
  // 'text' stores the current greeting text. In general that fir
  // Initializes with 'Good Morning' as the default value
  const [text, setText] = useState('Good Morning');

  // State to store the current font size of the greeting text
  // Initializes with '16px' as the default font size
  const [fontSize, setFontSize] = useState('16px');

  // Function to update the greeting text based on language selection
  // Receives a new greeting text and updates the `text` state
  const handleLanguageChange = (newGreeting) => {
    setText(newGreeting); // Sets the `text` state to the new greeting
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => { // `prevSize` is the current font size as a string (e.g., '16px').
      const newSize = parseInt(prevSize, 10) + 2; // Convert `prevSize` to an integer (e.g., '16px' becomes 16) and add 2.
      return `${newSize}px`; // Convert `newSize` back to a string with 'px' (e.g., 18 becomes '18px').
    });
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => { // `prevSize` is the current font size as a string (e.g., '16px').
      const newSize = Math.max(parseInt(prevSize, 10) - 2, 8); // Convert `prevSize` to an integer and subtract 2. Ensure the result is at least 8.
      return `${newSize}px`; // Convert `newSize` back to a string with 'px' (e.g., 14 becomes '14px').
    });
  };

  return (
    <main>
      <FontSizeControls
        onDecrease={decreaseFontSize}
        onIncrease={increaseFontSize}
      />
      <GreetingDisplay
        text={text}
        fontSize={fontSize}
      />
      <LanguageSelector
        onLanguageChange={handleLanguageChange}
      />
    </main>
  );
}


export default App