import PreCheck from "./component/PreCheck";
import Modal from "./component/Modal";
import { useEffect, useCallback ,useState } from "react";
import data from './data.json';

function App() {
  const [list, setList] = useState(data);

  // const fetchData = useCallback(()=>{
  //   fetch('./data.json')
  //   .then(response => response.json())
  //   .then(data => setList(data));
  // })
  // useEffect(fetchData, [fetchData]);

  return (
    <div id="wrap">
      <div id="container">
        <PreCheck list={list} />
        <Modal />
      </div>
    </div>
  );
}

export default App;

// 날짜, 시간 > toLowerCase
// coName === dropdown(e.target.value)