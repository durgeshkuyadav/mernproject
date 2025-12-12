

function App() {
  const count = 0;
  const para =document.createElement('p');
  para.textContent="Count is: 0";

  return (
    <>

      <h1>Vite + React</h1>
      <p>Count is: {count}</p>
      <button  >Increment</button>
    </>
  )
}

export default App
