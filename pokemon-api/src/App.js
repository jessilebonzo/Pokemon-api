import './App.css';
import { useState } from 'react';
import Pokemon from './Pokemon';

const Array = [
  {
   name: "Jessile",
   Expertise: "FrontEnd Developer",
   Experience: "3 year" 
  },
  {
    name: "Joyce",
    Expertise: "BackEnd Developer",
    Experience: "2 year" 
   },
   {
    name: "Yanah",
    Expertise: "DevOps Engineer",
    Experience: "1 year" 
   }
]
function App() {
  return (
    <>
      <h1>Personal Information</h1>
      {Array.map((element) => {
        return element.name;
      })}
    </>
  );
}
// Using array.map() inside JSX elements
export default App;
// Array.map(currentvalue,index,array)