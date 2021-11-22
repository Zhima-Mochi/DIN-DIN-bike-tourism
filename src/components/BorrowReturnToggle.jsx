import bike from '../assets/icon/bike.svg'
import bike_orange from '../assets/icon/bike_orange.svg'

export default function BorrowReturnToggle({ isToggleOn, handleClick }) {
    return (
        <div className={"bike-toggle select-none transition-all flex "} onClick={handleClick}>
            <img className={'bike-toggle-icon  flex-none ' + (isToggleOn ? 'return' : 'borrow')} src={isToggleOn ? bike_orange : bike} />
            <span className={`bike-toggle-word  m-auto ` + (isToggleOn ? 'return' : 'borrow')}>{isToggleOn ? "歸還模式" : "租借模式"}</span>
        </div>
    )
}

//+(isToggleOn?"flex-row-reverse":"flex-row")