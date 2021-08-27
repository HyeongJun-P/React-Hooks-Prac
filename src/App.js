// import React, {useState} from 'react';

// const App = () => {
//   const [item, setItem] = useState(1);
//   const incremnetItem = () => setItem(item + 1);
//   const decrementItem = () => setItem(item - 1);
//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={incremnetItem}>Increment</button>
//       <button onClick={decrementItem}>Decrement</button>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react';

const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if(willUpdate){
      setValue(value);
    }
    setValue(value)
  }
  return {value, onChange};
}

const App = () => {
    const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}/>
    </div>
  );
}

export default App;