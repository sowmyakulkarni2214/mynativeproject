import React, {Component, useState} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import { Card } from 'react-native-paper';


const program1 = () => {
    const [items, setItems] = useState<any>({})

    const timeToString = (time: number) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }

      const loadItems = (day: DateData) => {        
    
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
    
            if (!items[strTime]) {
              items[strTime] = [];
              
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                  day: strTime
                });
              }
            }
          }
          
          const newItems: AgendaSchedule = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(
            newItems
          );
        }, 1000);
      };
        
    const renderItem = (item:any) => {
        const fontSize =  16 
        const color = 'black' 
    
        return (
          <TouchableOpacity> 
            <Card>
         
              <View>
            <Text style={{fontSize, color}}> {item.name}</Text>
            </View>
          
            </Card> 
          </TouchableOpacity>
        );
      };

  return (
    <View style={{flex:1}}>
     <Agenda      
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2025-02-19'}
        renderItem={renderItem}
         />
    </View>
  )
}

export default program1

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    },
    customDay: {
      margin: 10,
      fontSize: 24,
      color: 'green'
    },
    dayItem: {
      marginLeft: 34
    }
  });