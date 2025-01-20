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
// import Video from "react-native-video";
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

  const blogData: BlogPostProps[] = 
[
  {
    id: 1,
    title: "Advancements in Medical Research",
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
    title: "The Future of Artificial Intelligence",
    author: "Dr. Emily Clark",
    date: "February 5, 2025",
    content:
      "This session will discuss the future of AI and machine learning, and how it will shape industries such as healthcare, education, and transportation.",
    images: [
      "ai_future.jpg",
      // "../../assets/images/ai_future.jpg",
    ],
    // videoUrl: "", // Example video URL
  },
  {
    id: 3,
    title: "Sustainable Solutions for a Better Tomorrow",
    author: "Professor James Adams",
    date: "March 10, 2025",
    content:
      "In this session, global experts will address the importance of sustainability and the need for innovative solutions in industries such as energy, waste management, and agriculture.",
    images: [
      "sustainability.jpg",
      // "../../assets/images/sustainability.jpg",
    ],
    // videoUrl: "", // Example video URL
  },
  {
    id: 4,
    title: "Innovations in Space Exploration",
    author: "Dr. Maria Gonzalez",
    date: "April 12, 2025",
    content:
      "This talk will explore the latest discoveries in space exploration, including Mars missions, new space telescopes, and private space ventures.",
    images: [
      "space_exploration.jpg",
      // "../../assets/images/space_exploration.jpg",
    ],
    // videoUrl: "", // Example video URL
  },
  {
    id: 5,
    title: "Revolutionizing the Future of Education",
    author: "Dr. Mark Johnson",
    date: "May 25, 2025",
    content:
      "This conference session will focus on the impact of digital transformation in education, from online learning to virtual classrooms and AI-powered tools.",
    images: [
      "education_future.jpg",
      // "../../assets/images/education_future.jpg",
    ],
    // videoUrl: "", // Example video URL
  },
  {
    id: 6,
    title: "Blockchain and the Future of Finance",
    author: "Sarah Lee",
    date: "June 7, 2025",
    content:
      "This session will dive into the revolutionary changes blockchain technology is bringing to finance, including decentralized finance (DeFi) and blockchain's potential for security and transparency.",
    images: [
      "blockchain_finance.jpg",
      // "../../assets/images/blockchain_finance.jpg",
    ],
    // videoUrl: "", // Example video URL
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
