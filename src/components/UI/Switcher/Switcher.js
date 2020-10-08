import React from 'react'


const Switcher = (props) => {
    return <>
        <div class="switch">
            <label>
                {props.oF}
                <input type="checkbox" />
                <span class="lever"></span>
                {props.oN}
            </label>
        </div>
    </>

}

export default Switcher