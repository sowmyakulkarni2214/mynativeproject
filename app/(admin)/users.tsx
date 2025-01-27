import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal, TextInput, Button, ActivityIndicator, RefreshControl } from 'react-native';
import BottomSheetUser from '@/components/BottomSheetUser';
import BottomsheetUser from '@/components/BottomSheetUser';
export type userType = {
  id: string;
  name: string;
  imageUrl: string;
  country: string;
  age: string;
  rating: number;
  sports: string[];
  isBlocked: boolean;
};

const usersinitial: userType[] = [
  // Initial list of users
  {
    id: '1',
    name: 'John Parker',
    country: 'Canada',
    age: '21-30 Years old',
    rating: 3,
    sports: ['Football', 'Baseball', 'Basketball', 'Soccer'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    isBlocked: false,
  },
  {
    id: '2',
    name: 'John Parker',
    country: 'Canada',
    age: '21-30 Years old',
    rating: 4,
    sports: ['Football', 'Baseball', 'Basketball', 'Soccer'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    isBlocked: false,
  },
  // Add other initial users here
];

const Users = () => {
  const [userData, setUserData] = useState<userType[]>(usersinitial);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // To handle loading state for fetching new data
  const [refreshing, setRefreshing] = useState(false); // To handle refresh state

  // Handle Add New User


  // Load more users when scrolling to bottom
  const loadMoreUsers = () => {
    if (loading) return; // Prevent multiple requests at the same time
    setLoading(true);
    
    // Simulate a network request for loading more users
    setTimeout(() => {
      const moreUsers: userType[] = [
        // Add more dummy users
        {
          id: (userData.length + 1).toString(),
          name: 'New User',
          country: 'USA',
          age: '30-40 Years old',
          rating: 4.5,
          sports: ['Tennis', 'Basketball'],
          imageUrl: 'https://bootdey.com/img/Content/avatar/avatar5.png',
          isBlocked: false,
        },
        {
          id: (userData.length + 2).toString(),
          name: 'Another User',
          country: 'UK',
          age: '40-50 Years old',
          rating: 3.8,
          sports: ['Football', 'Rugby'],
          imageUrl: 'https://bootdey.com/img/Content/avatar/avatar3.png',
          isBlocked: false,
        },
      ];

      setUserData(prev => [...prev, ...moreUsers]);
      setLoading(false);
    }, 2000); // Simulate a delay (2 seconds)
  };

  // Handle Refresh to Load First Set
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate refreshing (getting the first set of users)
    setTimeout(() => {
        setUserData(usersinitial); // Reset to the initial data
      setRefreshing(false);
    }, 2000); // Simulate a delay (2 seconds)
  }, []);

  // Render Friend item
  const renderUser = ({ item }: { item: userType }) => {
    return (
      <View style={[styles.card, item.isBlocked && styles.blockedCard]}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.country} - {item.age}</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Text key={index} style={styles.star}>
                {index < Math.floor(item.rating) ? '★' : '☆'}
              </Text>
            ))}
          </View>
          <Text style={styles.sports}>{item.sports.join(' | ')}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        onEndReached={loadMoreUsers} // Load more users when scrolling to the bottom
        onEndReachedThreshold={0.5} // Trigger when 50% of the list is reached
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>Add New User</Text>
      </TouchableOpacity>

      {/* Modal for Adding a New User */}
      {/* <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New User</Text>

         
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newFriend.name}
              onChangeText={(text) => setNewFriend({ ...newFriend, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Country"
              value={newFriend.country}
              onChangeText={(text) => setNewFriend({ ...newFriend, country: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              value={newFriend.age}
              onChangeText={(text) => setNewFriend({ ...newFriend, age: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Image URL"
              value={newFriend.imageUrl}
              onChangeText={(text) => setNewFriend({ ...newFriend, imageUrl: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Sports (comma separated)"
              value={newFriend.sports.join(', ')}
              onChangeText={(text) => setNewFriend({ ...newFriend, sports: text.split(',').map(sport => sport.trim()) })}
            />

        
            <Button title="Add User" onPress={addNewUser} />

      
            <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      {showModal?<BottomsheetUser setShowModal={setShowModal} setUserData={setUserData} userData={userData}/>:""}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  blockedCard: {
    backgroundColor: '#f8d7da',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 16,
    color: '#FFD700',
  },
  sports: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  blockButton: {
    backgroundColor: '#2ECC71',
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
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
});

export default Users;
