import React, {useRef} from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton() {
        const text = messageRef.current.value
        alert(`text in input ${text}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }
    return (
        <div>
            <p >Hello, {name}</p>
            <button onClick={() => {
                console.log('Pressed button 1')
            }}>Boton 1</button>
            <button onClick={ () => pressButtonParams('hola')}>Boton 2</button>
            <button onClick={pressButton}>Boton 3</button>

            <input placeholder='Send a text to your father' onCopy={()=> {
                console.log('Text copied');
            }} onFocus={() => {
                console.log('Input Focused'); 
            }}
            ref = {messageRef}></input>

            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div className='mt-3'>
                <form onSubmit={submitName}>
                    <input placeholder='name' ref={nameRef}></input>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
