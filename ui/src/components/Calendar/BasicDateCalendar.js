import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

import EmotionThemeContext from '../../context/EmotionThemeContext';



/*
This code is modified from an example of using dynamic data in MUI's date-calendar component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/x/react-date-pickers/date-calendar/#dynamic-data
*/

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3, 4, 5, 6, 7].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs('2023-04-17');

function ServerDay(props) {
  const { storageEmotions } = useContext(EmotionThemeContext);
  const { highlightedDays = [], day, outsideCurrentMonth, selectingPeriod, selectedDates, ...other } = props;

  const isSelected = !selectingPeriod && !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0;
  const withinSelectedRange = selectedDates.startDate && selectedDates.endDate && day.isBetween(selectedDates.startDate, selectedDates.endDate, null, '[]');

  let emotionSelection;
  let emotionSelectionValue;

  if (isSelected) {
    emotionSelection = getRandomNumber(0, Object.keys(storageEmotions).length - 1);
    emotionSelectionValue = Object.keys(storageEmotions)[emotionSelection];
  }

  const backgroundColor = withinSelectedRange ? 'lightblue' : (isSelected ? storageEmotions[emotionSelectionValue].color : undefined);

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? storageEmotions[emotionSelectionValue].icon : undefined}
    >
      <PickersDay 
        {...other} 
        outsideCurrentMonth={outsideCurrentMonth} 
        day={day} 
        sx={{ backgroundColor }}
      />
    </Badge>
  );
}

function EmotionLegend({ storageEmotions, onEmotionClick }) {
  const emotionKeys = Object.keys(storageEmotions);
  const navigate = useNavigate(); // Add this line to use the navigate hook

  const handleButtonClick = (emotionKey) => {
    onEmotionClick(emotionKey);
    navigate(`/emotion-definition/${emotionKey}`); // Update the path here
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
      {emotionKeys.map((emotionKey) => (
        <Button
          key={emotionKey}
          variant="outlined"
          sx={{
            borderColor: storageEmotions[emotionKey].color,
            color: "black",
            borderWidth: 2,
            m: 1,
            minWidth: 'auto',
            width: 'fit-content',
          }}
          onClick={() => handleButtonClick(emotionKey)} // Update the onClick handler
        >
          {storageEmotions[emotionKey].icon} {emotionKey}
        </Button>
      ))}
    </Box>
  );
}

export default function BasicDateCalendar() {
  const navigate = useNavigate();
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const [selectingPeriod, setSelectingPeriod] = useState(false);
  const [selectedDates, setSelectedDates] = useState({ startDate: null, endDate: null });
  const { storageEmotions } = useContext(EmotionThemeContext);

  const handleSelect = () => {
    if (selectingPeriod) {
      setSelectedDates({ startDate: null, endDate: null });
    }
    setSelectingPeriod(!selectingPeriod);
  };

  console.log('selectedDates', selectedDates);
  console.log('selectingPeriod', selectingPeriod);
 
  const handleEmotionClick = (emotionKey) => {
    console.log('Clicked emotion:', emotionKey);
    // Perform any additional actions on emotion click
  };

  const handleGenerateSummary = () => {
    if (selectedDates.startDate && selectedDates.endDate) {
      console.log('Generating summary for', selectedDates);
      // Call a function or navigate to another page for generating summary
    } else {
      console.log('Please select a time period first.');
    }
  };

  const handleDateChange = (date) => {
    if (selectingPeriod) {
      if (!selectedDates.startDate) {
        setSelectedDates({ ...selectedDates, startDate: date });
      } else if (!selectedDates.endDate || selectedDates.endDate.isSameOrBefore(selectedDates.startDate)) {
        setSelectedDates({ ...selectedDates, endDate: date });
      } else {
        setSelectedDates({ startDate: date, endDate: null });
      }
    } else {
      handleChange(date);
    }
  };


  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleChange = (date) => {
    console.log(date.toISOString());
    navigate('/graph', {state: { date: date.toISOString() }});
  }
  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Emotion Calendar
          </Typography>
        </Toolbar>
      </AppBar>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          onChange={handleDateChange}
          onMonthChange={handleMonthChange}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
              selectedDates,
              selectingPeriod,
            },
          }}
        />
  
  <Typography variant="subtitle1" textAlign="center">
          {selectedDates.startDate && selectedDates.endDate
            ? `${selectedDates.startDate.format("YYYY-MMMM-DD")} ---- ${selectedDates.endDate.format("YYYY-MMMM-DD")}`
            : ""}
        </Typography>
        {!selectingPeriod && (
          <Typography variant="subtitle1" textAlign="center" color={'gray'}>
            Want to select a time period to <br />see the Custom Summary?
          </Typography>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button onClick={handleSelect} variant="contained" color="primary" sx={{ mr: 1 }}>
            {selectingPeriod ? 'Cancel' : 'Select'}
          </Button>
          <Button onClick={handleGenerateSummary} variant="contained" color="secondary">
            Generate Summary
          </Button>
        </Box>
        <Typography variant="subtitle1" textAlign="center" color={'gray'}>
          <br/>------------------- Definitions -------------------
        </Typography>
        <EmotionLegend storageEmotions={storageEmotions} onEmotionClick={handleEmotionClick} />
      </LocalizationProvider>
    </Box>
  );
}