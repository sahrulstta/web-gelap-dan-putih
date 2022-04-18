import React, {useState} from 'react'
import "./Style.css"

const Them = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        
        
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                
                    <span style={{color: darkMode ? 'blue' : 'black'}}>*</span>
                    <div className="switch-checkbox">
                        <input type="checkbox"
                            onChange={() => setDarkMode(!darkMode)}
                        />
                    </div>

                    <span style={{color: darkMode ? '#c96dfd' : 'blue'}}>B</span>

            </div>
            
        
    )
}

export default Them
