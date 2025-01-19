import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpeakersProps } from "@/types/types";

const SpeakerCard = ({speaker}: {speaker:SpeakersProps}) => {
  return (
    <View style={styles.speakerCard}>
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.speakerImage} // Make image responsive based on screen width
      />
      {/* <Image source={require{"../../assests/images/profile.png"}} style={styles.speakerImage} /> */}

      <View style={styles.speakerDetails}>
        <Text style={styles.speakerName}>{speaker.name}</Text>
        <Text style={styles.speakerTopic}>{speaker.topic}</Text>
        <Text style={styles.speakerBio}>{speaker.bio}</Text>
      </View>
    </View>
  );
};

export default SpeakerCard;

const styles = StyleSheet.create({
  speakerCard: {
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
  },
  speakerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  speakerDetails: {
    flex: 1,
  },
  speakerName: {
    fontSize: 18,
    fontWeight: "600",
  },
  speakerTopic: {
    fontSize: 16,
    color: "#888",
  },
  speakerBio: {
    fontSize: 14,
    color: "#555",
  },
});
