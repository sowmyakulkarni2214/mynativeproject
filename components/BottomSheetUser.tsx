import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { userType } from '@/app/(admin)/users'



const {height: SCREEN_HEIGHT } = Dimensions.get('window')
const MAX_TRANSLATE_Y = SCREEN_HEIGHT / 1.5
const MIN_TRANSLATE_Y = SCREEN_HEIGHT / 5

export default function BottomsheetUser({userData, setUserData, setShowModal }:{userData:userType[], setUserData:Function, setShowModal:Function}) {
    const translateY = useSharedValue(0)
    const [newUser, setNewUser] = useState<userType>({
      id: '',
      name: '',
      imageUrl: '',
      country: '',
      age: '',
      rating: 3,
      sports: [],
      isBlocked: false,
    });
 
    const context = useSharedValue({y: 0})  

    const gesture = Gesture.Pan()
    .onStart(e => {
        context.value = {y: translateY.value}
    })
    .onUpdate(e => {
        translateY.value = e.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y)
    })
    .onEnd(e => {
        if(translateY.value > -MIN_TRANSLATE_Y){
            translateY.value = withSpring(SCREEN_HEIGHT)
        }
        if(translateY.value < -MIN_TRANSLATE_Y){
            translateY.value = withSpring(-MAX_TRANSLATE_Y)
        }
    })

    /**
     * Animated style for the bottom sheet
     */
    const reanimatedBottomStyle = useAnimatedStyle( () => {
        return {
            transform: [ {translateY: translateY.value} ]
        }
    })
    
    /**
     * Scrolls to a specific destination
     * @param {number} destination - The destination to scroll to
     */
    const scrollTo = ( destination:any ) => {
        'worklet'
        translateY.value = withSpring(destination, {damping: 50})
    }

    useEffect(() => {
        // Initial scroll to show the bottom sheet partially
        scrollTo(-SCREEN_HEIGHT / 3)
    }, []);

    // const addNewUser = () => {
    //   if (!newUser.name || !newUser.country || !newUser.age || !newUser.imageUrl) {
    //     alert('Please fill in all fields');
    //     return;
    //   }
    //   setUserData((prev:any) => [...prev, newUser]);
    //   setShowModal(false);
    //   const newUser: userType = {
    //     ...newUser,
    //     id: (userData.length + 1).toString(),
    //   };
  
    
    //   setNewUser({
    //     id: '',
    //     name: '',
    //     imageUrl: '',
    //     country: '',
    //     age: '',
    //     rating: 3,
    //     sports: [],
    //     isBlocked: false,
    //   });
    // };

      
  return (
    <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomsheet_container, reanimatedBottomStyle]}>
            <View style={styles.line} />
              <View >
                      <View>
                        <Text style={styles.modalTitle}>Add New User</Text>
            
                        {/* User Form */}
                        <TextInput
                          style={styles.input}
                          placeholder="Name"
                          value={newUser.name}
                          onChangeText={(text) => setNewUser({ ...newUser, name: text })}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="Country"
                          value={newUser.country}
                          onChangeText={(text) => setNewUser({ ...newUser, country: text })}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="Age"
                          value={newUser.age}
                          onChangeText={(text) => setNewUser({ ...newUser, age: text })}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="Image URL"
                          value={newUser.imageUrl}
                          onChangeText={(text) => setNewUser({ ...newUser, imageUrl: text })}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="Sports (comma separated)"
                          value={newUser.sports.join(', ')}
                          onChangeText={(text) => setNewUser({ ...newUser, sports: text.split(',').map(sport => sport.trim()) })}
                        />
            
                        {/* Submit Button */}
                        {/* <Button title="Add User" onPress={addNewUser} /> */}
            
                        {/* Close Modal Button */}
                        <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
                          <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
        </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
    bottomsheet_container: {
        width: '100%',
        height: SCREEN_HEIGHT,
        backgroundColor: "white",
        position: 'absolute',
        top: SCREEN_HEIGHT / 1.5,
        zIndex: 12000,
        borderRadius: 25,
        paddingHorizontal: 10
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
      },
      input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 5,
        fontSize: 16,
      },
      closeButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      closeButtonText: {
        color: '#fff',
        fontSize: 16,
      },
})