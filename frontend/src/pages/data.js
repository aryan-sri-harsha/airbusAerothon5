import React, { useState } from 'react'

export const Protected = React.createContext();
function Data(props) {
    const [logged,SetLogged]= useState(false);
    return (
        <div>
            <Protected.Provider value={[logged,SetLogged]}>
                {props.children}
            </Protected.Provider>
        </div>
    )
}

export default Data
