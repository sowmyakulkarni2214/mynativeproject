import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";

// NewPostForm inside the modal
const NewPostForm = ({ onSave }: { onSave: (newPost: any) => void }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const handleSavePost = () => {
    // Validate input fields
    if (!title || !author || !content || !date) {
      setError('Please fill in all fields');
      return;
    }

    const newPost = {
      id: Date.now(), // Unique ID based on timestamp
      title,
      author,
      date,
      content,
      images, // For simplicity, only adding text input for one image
    };

    onSave(newPost); // Call onSave to add the new post
    setTitle('');
    setAuthor('');
    setContent('');
    setDate('');
    setImages([]);
    setError('');
  };

  return (
    <View style={styles.formContainer}>
      {error && <Text style={styles.error}>{error}</Text>}
      
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (e.g., January 18, 2025)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={images[0] || ''}
        onChangeText={(text) => setImages([text])} // Adding one image for simplicity
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSavePost}>
        <Text style={styles.buttonText}>Save Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const Posts = () => {
  const [blogData, setBlogData] = useState([
    {
      id: 1,
      title: "Advancements in Medical Research",
      author: "John Doe",
      date: "January 18, 2025",
      content:
        "The conference will explore the latest developments in medical science, including gene editing, immunotherapy, and personalized medicine.",
      images: ["conference2.jpg"],
    },
    // Add your other posts here...
  ]);

  const [isModalVisible, setModalVisible] = useState(false);

  const addNewPost = (newPost: any) => {
    setBlogData((prevState) => [newPost, ...prevState]);
    setModalVisible(false); // Close the modal after saving the post
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Button to open the modal */}
      <Button title="Add New Post" onPress={() => setModalVisible(true)} />

      {/* Displaying Blog Posts */}
      <FlatList
        data={blogData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>
              By {item.author} - {item.date}
            </Text>
            <Text style={styles.content}>{item.content}</Text>

            {item?.images?.map((image: string, index: number) => (
              <Image
                key={index}
                source={{ uri: `path_to_image/${image}` }} // Adjust the image URL as needed
                style={styles.image}
              />
            ))}
          </View>
        )}
      />

      {/* Modal to add new post */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on back press
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Post</Text>
            <NewPostForm onSave={addNewPost} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)} // Close the modal
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
    color: Colors.skyBlue,
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

  // Modal styles
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.skyBlue,
    textAlign: "center",
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  textArea: {
    height: 150,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: Colors.skyBlue,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#f44",
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});

export default Posts;
