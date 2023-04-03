import React, { useContext } from 'react'
import EmotionThemeContext from '../../context/EmotionThemeContext';
const CustomizeEmotions = () => {
    const { storgaeEmotions } = useContext(EmotionThemeContext);
    console.log('xxx')
    console.log(storgaeEmotions)
    return (
        <div>CustomizeEmotions</div>
    )
}

export default CustomizeEmotions
