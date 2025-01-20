// ConferenceSchedulePage.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const todayConferenceSchedule = [
  {
    id: 1,
    time: "08:30 AM",
    title: "Registration and Welcome Breakfast",
    description:
      "Join us for the morning registration and enjoy a light breakfast before the sessions begin. Meet your peers and get ready for the exciting day ahead.",
    location: "Conference Hall 1",
    speaker: "Event Coordinators",
    images: [
      "registration_breakfast.jpg",
      // "../../assets/images/registration_breakfast.jpg",
    ],
  },
  {
    id: 2,
    time: "09:30 AM",
    title: "Keynote Address: The Future of Technology",
    description:
      "Our keynote speaker, Dr. Michael Turner, will discuss the future of technology and its impact on society, industry, and daily life.",
    location: "Main Auditorium",
    speaker: "Dr. Michael Turner",
    images: [
      "keynote_address.jpg",
      // "../../assets/images/keynote_address.jpg",
    ],
  },
  {
    id: 3,
    time: "10:30 AM",
    title: "Break & Networking Session",
    description:
      "A short break to network with fellow students and industry professionals. Refreshments will be provided.",
    location: "Lobby",
    speaker: "Networking Hosts",
    images: [
      "networking_break.jpg",
      // "../../assets/images/networking_break.jpg",
    ],
  },
  // Add more sessions here...
];

const ConferenceSchedulePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todayConferenceSchedule.map((session) => (
        <View key={session.id} style={styles.sessionCard}>
          {/* Image (optional) */}
          {/* {session.images && session.images.length > 0 && (
            <Image
              source={{ uri: session.images[0] }}
              style={styles.sessionImage}
            />
          )} */}
          <View style={styles.sessionInfo}>
          <Text style={styles.sessionTime}>
            Today's Program
          </Text>
            {/* Time */}
            <Text style={styles.sessionTime}>{session.time}</Text>

            {/* Title */}
            <Text style={styles.sessionTitle}>{session.title}</Text>

            {/* Description */}
            <Text style={styles.sessionDescription}>{session.description}</Text>

            {/* Location and Speaker */}
            <View style={styles.sessionDetails}>
              <Text style={styles.sessionLocation}>{`Location: ${session.location}`}</Text>
              <Text style={styles.sessionSpeaker}>{`Speaker: ${session.speaker}`}</Text>
            </View>

            {/* More details button */}
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>More Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    sessionCard: {
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    },
    sessionImage: {
      width: '100%',
      height: 180,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      objectFit: 'cover',
    },
    sessionInfo: {
      padding: 15,
    },
    sessionTime: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007BFF',
    },
    sessionTitle: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 5,
    },
    sessionDescription: {
      fontSize: 14,
      color: '#555',
      marginVertical: 5,
    },
    sessionDetails: {
      marginVertical: 10,
    },
    sessionLocation: {
      fontSize: 14,
      color: '#777',
    },
    sessionSpeaker: {
      fontSize: 14,
      color: '#777',
    },
    moreButton: {
      marginTop: 10,
      backgroundColor: '#007BFF',
      paddingVertical: 8,
      borderRadius: 5,
    },
    moreButtonText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 14,
    },
  });
  
  export default ConferenceSchedulePage;