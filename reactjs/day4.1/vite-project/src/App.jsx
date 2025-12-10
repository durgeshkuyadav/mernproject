export default function App() {

let count=0;


  function increment(){
   count++;
    console.log(count)
  }

  return (
       <>
    
    <p>Counter:{count}</p>
    <button onClick={increment}>Increment</button>
    
    </>


  )
}
