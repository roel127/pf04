import {BiX} from 'react-icons/bi';
import terms from '../terms.json';

function Terms( {item} ){
  return(
    <dl>
      <dt>{item.paragraph}</dt>
      <dd>{item.content}</dd>
    </dl>
  )
}

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
              <input type="text" id="coName" readOnly />
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
              <input type="date" id="aptDate" readOnly />
            </li>
            <li>
              <label htmlFor="aptTime">희망시간</label>
              <input type="time" id="aptTime" readOnly />
            </li>
          </ul>
          <p>
            <input type="submit" value="확인" />
          </p>
        </div>
        <div id='terms'>
          <p>이용약관<span></span></p>
          <div className='termsCont'>
            {terms.map((item, index)=>( <Terms key={index} item={item} /> ))}
          </div>
        </div>
        <p onClick={appointCloseClick}><BiX /></p>
      </div>
    </div>
  )
}