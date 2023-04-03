import { createContext, useState, useEffect } from "react";

import { emotions } from '../components/consts';

const EmotionThemeContext = createContext();
export default EmotionThemeContext;

export const EmotionThemeProvider = ({children}) => {
    const [ storgaeEmotions, setStorageEmotions ] = useState(
        () => localStorage.getItem('storgaeEmotions') ? JSON.parse(localStorage.getItem('storgaeEmotions')) : emotions);
    
    let contextData = {
        storgaeEmotions: storgaeEmotions,
    }

    return (
        <EmotionThemeContext.Provider value={contextData}>
            {children}
        </EmotionThemeContext.Provider>
    );
}
