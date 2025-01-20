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

const speakers: SpeakersProps[] = 

[
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
  

    {
      "id": "4",
      "name": "Dr. Michael Brown",
      "topic": "Exploring the Mysteries of Deep Space: The Future of Space Exploration",
      "bio": "Dr. Michael Brown is an astrophysicist and space exploration expert, working on several projects aimed at uncovering the secrets of the universe and advancing humanity's presence in space.",
      "image": "https://via.placeholder.com/150"
    },
    {
      "id": "5",
      "name": "Prof. Emily Green",
      "topic": "The Impact of Climate Change on Global Agriculture",
      "bio": "Prof. Emily Green is an expert in environmental science and agriculture, studying how climate change is affecting global food production and sustainability.",
      "image": "https://via.placeholder.com/150"
    },
    {
      "id": "6",
      "name": "Dr. David Johnson",
      "topic": "The Ethics of Artificial Intelligence and Automation",
      "bio": "Dr. David Johnson is a leading researcher in AI ethics, exploring the societal and moral implications of automation and artificial intelligence.",
      "image": "https://via.placeholder.com/150"
    },
    {
      "id": "7",
      "name": "Dr. Sara Lee",
      "topic": "Advances in Genetic Engineering and CRISPR Technology",
      "bio": "Dr. Sara Lee is a geneticist specializing in CRISPR technology, with a focus on its potential for curing genetic diseases and advancing medical research.",
      "image": "https://via.placeholder.com/150"
    },
    {
      "id": "8",
      "name": "Prof. Robert White",
      "topic": "Smart Cities: The Future of Urban Development",
      "bio": "Prof. Robert White is an urban planner and smart city expert, working on innovative technologies that are shaping the cities of tomorrow.",
      "image": "https://via.placeholder.com/150"
    },
    {
      "id": "9",
      "name": "Dr. Olivia Brown",
      "topic": "The Intersection of Neuroscience and Artificial Intelligence",
      "bio": "Dr. Olivia Brown is a neuroscientist with a focus on how AI can be used to understand and replicate brain functions, pushing the boundaries of both fields.",
      "image": "https://via.placeholde"
    }
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
