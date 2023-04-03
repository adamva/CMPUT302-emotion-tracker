import React, { useState, useContext } from 'react'

import Button from '@mui/material/Button';
import EmotionThemeContext from '../../context/EmotionThemeContext';

const CustomizeEmotions = () => {
    const [ newEmotions, setNewEmotions ] = useState({});
    const { updateEmotions, storageEmotions } = useContext(EmotionThemeContext);

    const handleUpdate = (e) => {
        let emotionToUpdate = 'anger';
        let inputEmotionData = { color: 'blue' };
        let newEmotionData = {...storageEmotions[emotionToUpdate], ...inputEmotionData};
        let newStorageEmotions = {...storageEmotions, [emotionToUpdate]: newEmotionData};
        updateEmotions(newStorageEmotions);
    }

    return (
        <>
        <Button onClick={handleUpdate}>Click me</Button>
        <Button onClick={() => console.log(storageEmotions)}>Current Emotions</Button>
        </>
    )
}

export default CustomizeEmotions
