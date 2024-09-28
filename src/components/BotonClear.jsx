import React from "react";
import '../style-sheet/BotonClear.css'

const BotonClear = (props) => (
        <div className='button-clear' onClick={props.clearManagement}>
            {props.children}
        </div>
    );

export default BotonClear;