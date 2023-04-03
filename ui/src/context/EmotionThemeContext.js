import { createContext, useState, useEffect } from "react";

import { emotions } from '../components/consts';

const EmotionThemeContext = createContext();
export default EmotionThemeContext;

export const EmotionThemeProvider = ({children}) => {
    const [ storageEmotions, setStorageEmotions ] = useState(
        () => localStorage.getItem('storageEmotions') ? JSON.parse(localStorage.getItem('storageEmotions')) : emotions);
    
    const updateEmotions = (emotionData) => {
        console.log('Setting emotionData ...')
        console.debug(emotionData);
        localStorage.setItem('storageEmotions', JSON.stringify(emotionData));
        setStorageEmotions(emotionData);
    }

    let contextData = {
        storageEmotions: storageEmotions,
        updateEmotions: updateEmotions,
    }

    return (
        <EmotionThemeContext.Provider value={contextData}>
            {children}
        </EmotionThemeContext.Provider>
    );
}
