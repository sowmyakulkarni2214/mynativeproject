import React, {useRef, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';

import {agendaItems, getMarkedDates} from '@/components/agendaItems';

// import {getTheme, themeColor, lightThemeColor} from '../mocks/theme';
import AgendaItem from '@/components/AgendaItem';

// const leftArrowIcon = require('../img/previous.png');
// const rightArrowIcon = require('../img/next.png');
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const ExpandableCalendarScreen = (props: Props) => {
  const {weekView} = props;
  const marked = useRef(getMarkedDates());
//   const theme = useRef(getTheme());
//   const todayBtnTheme = useRef({
//     todayButtonTextColor: themeColor
//   });

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item}/>;
  }, []);

  return (
    <CalendarProvider
      date={ITEMS[1]?.title}
      // onDateChanged={onDateChanged}
      // onMonthChange={onMonthChange}
      showTodayButton
      // disabledOpacity={0.6}
    //   theme={todayBtnTheme.current}
      // todayBottomMargin={16}
    >
      {/* {weekView ? ( */}
        {/* <WeekCalendar firstDay={1} markedDates={marked.current}/> */}
      {/* ) : ( */}
        <ExpandableCalendar
        minDate='2025-01-29'
        maxDate='2025-01-31'
        //   testID={testIDs.expandableCalendar.CONTAINER}
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.header} // for horizontal only
          // disableWeekScroll
        //   theme={theme.current}
          // disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={marked.current}
        //   leftArrowImageSource={leftArrowIcon}
        //   rightArrowImageSource={rightArrowIcon}
          // animateScroll
          // closeOnDayPress={false}
        />
      {/* ) */}
      {/* } */}
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id} 
        // scrollToNextEvent
        sectionStyle={styles.section}
        // dayFormat={'yyyy-MM-d'}
      />
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: 'lightgrey'
  },
  section: {
    backgroundColor: "white",
    color: 'grey',
    textTransform: 'capitalize'
  }
});