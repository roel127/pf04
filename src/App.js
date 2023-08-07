import PreCheck from "./component/PreCheck";
import Modal from "./component/Modal";
import { useEffect, useState } from "react";
import data from './data.json';

function App() {
  const [list, setList] = useState(data);
  const [selCo, setSelCo] = useState('');
  const [selDate, setSelDate] = useState('희망날짜');
  const [selTime, setSelTime] = useState('희망시간');
  const [able, setAble] = useState('날짜와 시간을 정해주세요');
  const [sortList , setSortList] = useState(list);
  console.log(list);

  useEffect(()=>{setSortList(list)}, [list]);

  function filterClick(sortBy){
    setSortList(list);
    if(sortBy === 'All'){
      setSortList(list);
    } else{
      setSortList(list.filter(item=>{return item.coName === sortBy}).sort((a,b)=>{
        return a.aptDate.replace(/-/g, "") < b.aptDate.replace(/-/g, "") ? -1 : 1
      }))
    }
  }
  function checkClick(e){
    e.preventDefault();
    const desCo = e.target.desCo.value;
    const desDate = e.target.desDate.value;
    const desTime = e.target.desTime.value;
    setSelCo(desCo);
    setSelDate(desDate);
    setSelTime(desTime);
    const newList = list.filter(item => (item.coName === desCo));
    if(newList.filter(item=>item.aptDate === desDate + " " + desTime).length === 0){
      setAble('예약이 가능합니다')
      document.querySelector('.result>button').style.display = 'inline-block';
    } else{
      setAble('예약이 불가합니다');
      document.querySelector('.result>button').style.display = 'none';
    }
  }
  function submitClick(e){
    e.preventDefault();
    const aptName = e.target.userName.value;
    const aptTel = e.target.userTel.value;
    const aptTelForm = aptTel.slice(0,3) + '-' + aptTel.slice(3,7) + '-' + aptTel.slice(7,11);
    const lastId = list.sort((a,b)=>{
      return Number(a.id) < Number(b.id) ? -1 : 1
    })[list.length-1].id
    const pushData = {
      id: String(Number(lastId)+1),
      coName: selCo,
      aptDate: selDate + " " + selTime,
      userName: aptName,
      userTel: aptTelForm
    }
    if(list.filter(item=>{
      return item.aptDate === selDate
    }).length === 0){setList([...list, pushData])} else{
      alert('해당 일정은 불가합니다')
    }
  }

  return (
    <div id="wrap">
      <div id="container">
        <PreCheck 
          list={sortList} 
          selCo={selCo}
          selDate={selDate}
          selTime={selTime}
          able={able}
          checkClick={checkClick}
          filterClick={filterClick}
        />
        <Modal 
          selCo={selCo}
          selDate={selDate}
          selTime={selTime}
          submitClick={submitClick}
        />
      </div>
    </div>
  );
}

export default App;

// 날짜, 시간 > toLowerCase
// coName === dropdown(e.target.value)