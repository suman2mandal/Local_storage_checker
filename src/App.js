import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');

  const addNewData= (e) => {
    // console.log(e.target.value);
    setNewData(e.target.value);
  }
  const addData = () => {
    setData([...data, newData])

    localStorage.setItem('data', [localStorage.getItem('data'),JSON.stringify(data)]);
    console.log("called");
  }
  const showData = () => {
    let tData =  localStorage.getItem("data");
    console.log(tData);
    // .map((item, index) => {
    //   return <h1 key={index}>{item}</h1>
    // })
  }
  const clearData = () => {
    localStorage.clear();
  }

  return (
    <div className="App">
      <input type="text" onChange={addNewData} placeholder="Enter your name" />
      <button onClick={addData}>Submit</button>
      <button onClick={clearData}>Clear</button>
      {showData()}
    </div>
  );
}

export default App;
