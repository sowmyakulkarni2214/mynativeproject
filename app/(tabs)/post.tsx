// BlogPost.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import Video from "react-native-video";
import { router, Stack } from "expo-router";

// Type for the blog post data (optional but helpful for large apps)
interface BlogPostProps {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  images: string[]|undefined;
  // videoUrl: string;
}

const BlogPost = () => {
  const { width } = Dimensions.get("window"); // Get screen width to adjust image size

  const blogData: BlogPostProps[] = [
    {
      id: 1,
      title: "Advancements in Medical Research:",
      author: "John Doe",
      date: "January 18, 2025",
      content:
        "The conference will explore the latest developments in medical science, including gene editing, immunotherapy, and personalized medicine.",
      images: [
        "conference.jpg",
        // "../../assets/images/conference.jpg",
      ],
      // videoUrl: "", // Example video URL
    },
    {
      id: 2,
      title: "Climate Change and Sustainability:",
      author: "John Doe",
      date: "January 19, 2025",
      content:
        "Experts will discuss the most recent research on climate change, environmental degradation, and sustainable solutions to protect the planet.",
      images: ["conference2.jpg"],

      // videoUrl: "https://www.w3schools.com/html/movie.mp4", // Example video URL
    },
  ];
  return (
    <>
    <Stack.Screen
            options={{ headerTransparent: true, headerTitle: "" }}
          ></Stack.Screen>
    
    <FlatList
      data={blogData} // Array of blog posts
      keyExtractor={(item) => item.id.toString()} // Unique key for each item
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          {/* Blog Title */}
          <Text style={styles.title}>{item.title}</Text>

          {/* Blog Author & Date */}
          <Text style={styles.author}>
            By {item.author} - {item.date}
          </Text>

          {/* Blog Content - Text Section */}
          <Text style={styles.content}>{item.content}</Text>

          {/* Image(s) */}
          {item?.images?.map((imageUrl: string, index: number) => (
            
                  <Image
                    key={index}
                    source={require("../../assets/images/conference.jpg")}
                    style={[styles.image, { width: width - 20 }]} // Make image responsive based on screen width
                  />
                
            
            
          ))}

          {/* Video */}
          {/* {item?.videoUrl ? (
            <View style={styles.videoContainer}>
              <Video
                source={{ uri: "" }}
                style={styles.video}
                controls={true} // Video controls (play/pause)
                resizeMode="contain"
              /> 
            </View>
          ) : (
            ""
          )} */}
        </View>
      )}
    />
    </>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  author: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 10,
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  videoContainer: {
    width: "100%",
    height: 220,
    marginBottom: 20,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default BlogPost;
