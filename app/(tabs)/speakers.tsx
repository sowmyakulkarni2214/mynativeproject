import SpeakerCard from "@/components/SpeakerCard";
import { SpeakersProps } from "@/types/types";
import { Stack } from "expo-router";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ListRenderItemInfo,
} from "react-native";

const speakers: SpeakersProps[] = [
  {
    id: "1",
    name: "Dr. Jane Smith",
    topic: "The Future of Quantum Computing",
    bio: "Dr. Jane Smith is a leading expert in quantum computing with over 20 years of experience in the field.",
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
  {
    id: "2",
    name: "Prof. John Doe",
    topic: "Artificial Intelligence and the Brain",
    bio: "Prof. John Doe explores the intersection between AI and neuroscience.",
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
  {
    id: "3",
    name: "Dr. Emily White",
    topic: "Exploring Dark Matter and the Cosmos",
    bio: "Dr. Emily White is a renowned astrophysicist and cosmologist who specializes in dark matter research.",
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
  // Add more speakers as needed
];

const ConferenceSpeakers = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerTransparent: true, headerTitle: "" }}
      ></Stack.Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Science Conference Speakers</Text>
        <FlatList
          data={speakers}
          renderItem={({ item }) => <SpeakerCard speaker={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ConferenceSpeakers;
