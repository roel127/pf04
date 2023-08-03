import {BiX} from 'react-icons/bi';

export default function Modal(){
  function appointCloseClick(){
    document.getElementById('modal').style.display = 'none';
  }

  return(
    <div id="modal">
      <div id="view">
        <div id="cont">      
          <ul>
            <li>
              <label htmlFor="coName">통신사</label>
              <input type="text" id="coName" defaultValue=""/>
            </li>
            <li>
              <label htmlFor="userName">이름</label>
              <input type="text" id="userName" />
            </li>
            <li>
              <label htmlFor="userNumber">전화번호</label>
              <input type="text" id="userNumber" />
            </li>
            <li>
              <label htmlFor="aptDate">희망날짜</label>
              <input type="date" id="aptDate" />
            </li>
            <li>
              <label htmlFor="aptTime">희망시간</label>
              <input type="time" id="aptTime" />
            </li>
          </ul>
          <p>
            <input type="submit" />
          </p>
        </div>
        <p onClick={appointCloseClick}><BiX /></p>
      </div>
    </div>
  )
}