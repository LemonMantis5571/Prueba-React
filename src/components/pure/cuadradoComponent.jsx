import React, {useState} from 'react';




const CuadradoComponent = () => {
    let red = 0;
    let green = 200;
    let blue = 150;

    const [mouseHovering, setmouseHovering] = useState(false);

    const mouseEnter = () => {
        setmouseHovering(true);
    }

    const mouseLeave = () => {
        setmouseHovering(false);
    }
 
    const colorOnHover = {
        height: '255px',
        width: '255px',
        backgroundColor: mouseHovering ? `rgb(${red}, ${green}, ${blue} )` : 'black'
    }

    return (
        <div>
            <div className='cuadrado'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onDoubleClick={mouseLeave}
            style={colorOnHover}>
                
            </div>
        </div>
    );
}

export default CuadradoComponent;
