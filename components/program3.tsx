import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { DateTime } from 'luxon';  // For easy date manipulation

const MyAgenda = () => {
  const [items, setItems] = useState({});

  // Create the 3-day range (Today + 2 days)
  const today = DateTime.now();
  const endDate = today.plus({ days: 2 });
  const startDate = today;

  // Format the dates for minDate and maxDate
  const minDate = startDate.toISODate(); // ISO format (yyyy-mm-dd)
  const maxDate = endDate.toISODate();

  // Initialize some sample events (can be dynamic)
  useEffect(() => {
    // You can fetch events dynamically here or hardcode for testing
    const data:any = {};
    for (let i = 0; i <= 2; i++) {
      const date:any = today.plus({ days: i }).toISODate();
      data[date] = [{ name: `Event on ${date}`, height: 50 }];
    }
    setItems(data);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        minDate="2025-02-19"
        maxDate="2025-02-21"
        renderItem={(item:any) => (
          <View style={{ padding: 10, backgroundColor: 'lightblue', marginBottom: 10 }}>
            <Text>{item.name}</Text>
          </View>
        )}
        renderEmptyDate={() => <View style={{ height: 30, backgroundColor: 'lightgrey' }} />}
      />
    </View>
  );
};

export default MyAgenda;
