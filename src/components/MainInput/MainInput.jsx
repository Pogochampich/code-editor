import './MainInput.scss'

const MainInput = () => {
    return <div className='input'>
        <textarea id="left-input" cols="40" rows="5" onInput = {(event) => {console.log(event.data)} } />
        <textarea id="right-input" cols="40" rows="5" readOnly/>
    </div>
}

export default MainInput;