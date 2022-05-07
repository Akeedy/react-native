import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function ListItem({item, deleteItem}) {
  <Icon name="rocket" size={30} color="#900" />;
  return (
    <TouchableOpacity style={style.listItem}>
      <View style={style.listItemView}>
        <Text style={style.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#efefef',
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#fcfcfc',
  },
  listItemView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    color: 'black',
  },
});

export default ListItem;
