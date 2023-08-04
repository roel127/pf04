import PreCheck from "./component/PreCheck";
import Modal from "./component/Modal";
import { useEffect, useCallback ,useState } from "react";
import data from './data.json';

function App() {
  const [list, setList] = useState(data);
  const [selCo, setSelCo] = useState('KT');
  const [selDate, setSelDate] = useState('희망날짜');
  const [selTime, setSelTime] = useState('희망시간');
  const [able, setAble] = useState('날짜와 시간을 정해주세요');

  function submitClick(e){
    e.preventDefault();
    const desCo = e.target.desCo.value;
    const desDate = e.target.desDate.value;
    const desTime = e.target.desTime.value;
    setSelCo(desCo);
    setSelDate(desDate);
    setSelTime(desTime);
    const newList = list.filter(item=>{
      return (item.coName === desCo && item.aptDate === desDate)
    });
    if(newList.filter(item=>item.aptTime === desTime).length === 0){
      setAble('예약이 가능합니다')
    } else{setAble('예약이 불가합니다')}
  }

  return (
    <div id="wrap">
      <div id="container">
        <PreCheck 
          list={list} 
          selCo={selCo}
          selDate={selDate}
          selTime={selTime}
          able={able}
          submitClick={submitClick}
        />
        <Modal 
          sleCo={selCo}
          selDate={selDate}
          selTime={selTime}
        />
      </div>
    </div>
  );
}

export default App;

// 날짜, 시간 > toLowerCase
// coName === dropdown(e.target.value)