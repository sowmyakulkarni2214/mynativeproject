import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface MyCustomListProps {
  items: any[];
  renderItem: (item: any) => JSX.Element;
}

const MyCustomList: React.FC<MyCustomListProps> = ({ items, renderItem }: MyCustomListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default MyCustomList;
