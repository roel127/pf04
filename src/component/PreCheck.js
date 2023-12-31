import { useEffect, useState } from "react"
import Button from "./Button";

function ResultCheck( {checkToggle, selDate, selTime, able, openModal} ){
  if(checkToggle){
    return null;
  }
  return(
    <section className="result">
      <p>{selDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selTime}</p>
      <p>{able}</p>
      <Button onClick={openModal}>예약하기</Button>
    </section>
  )
}

function AddList( {checkToggle, list, toggleHandler, filterClick} ){
  const [drop, setDrop] = useState(false);
  if(!checkToggle){
    return null;
  }
  function DropDown(){
    if(!drop){
      return null;
    }
    return(
      <ul className="filterDrop">
        <li onClick={()=>{ filterClick('All'); setDrop(!drop); }}>All</li>
        <li onClick={()=>{ filterClick('KT'); setDrop(!drop); }}>KT</li>
        <li onClick={()=>{ filterClick('SKT'); setDrop(!drop); }}>SKT</li>
        <li onClick={()=>{ filterClick('LG'); setDrop(!drop); }}>LG</li>
      </ul>
    )
  }
  function List({item}){
    return(
      <li>
        <dl>
          <dt>{item.coName}</dt>
          <dd>{item.aptDate.slice(0,10)}</dd>
          <dd>{item.aptDate.substr(11)}</dd>
        </dl>
      </li>
    )
  }
  return(
    <section id="list">
      <h4>예약현황</h4>
      <Button onClick={()=>{setDrop(!drop)}}>Filter</Button>
      <DropDown drop={drop}/>
      <ul className="aptList">
        {list.map((item)=>{return <List key={item.id} item={item}/>})}
      </ul>
      <p>
        <Button onClick={toggleHandler}>닫기</Button>
      </p>
    </section>
  )
}

export default function PreCheck( {list, selCo, selDate, selTime, able, checkClick, filterClick, toggleHandler, checkToggle} ){
  // const [checkToggle, setCheckToggle] = useState(false);
  // function toggleHandler(){
  //   setCheckToggle(!checkToggle);
  // }
  function openModal(){
    document.getElementById('modal').style.display = 'block';
  }
  return(
    <article>
      <section className="search">
        <form onSubmit={(e)=>{checkClick(e)}}>
          <p>
            <label>통신사</label>
            <select defaultValue={selCo} name="desCo">
              <option>KT</option>
              <option>SKT</option>
              <option>LG</option>
            </select>
          </p>
          <p>
            <label htmlFor="desDate">희망날짜</label>
            <input type="date" id="desDate" name="desDate" required />
          </p>
          <p>
            <label htmlFor="desTime">희망시간</label>
            <select defaultValue={selTime} name="desTime">
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
            </select>
          </p>
          <p>
            <input type="submit" value="확인하기" />
            <Button onClick={toggleHandler}>예약현황</Button>
          </p>
        </form>
      </section>
      <ResultCheck 
        checkToggle={checkToggle} 
        selDate={selDate} 
        selTime={selTime} 
        able={able}
        openModal={openModal}
      />
      <AddList 
        checkToggle={checkToggle} 
        list={list}
        openModal={openModal}
        toggleHandler={toggleHandler}
        filterClick={filterClick}
      />
    </article>
  )
}