import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PeopleListItems from './PeopleListItems';

const PeopleList =  props => {
  const {people, onPressItem} = props;

  return(
    <FlatList 
      style={styles.container}
      data ={ people }
      renderItem={({item}) => (
        <PeopleListItems 
          person={item}
          onPressItem = {onPressItem}
        />
      )}
      keyExtractor = { (item, index) => item.name.first + index}
    />
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e2f9ff',
  }
});

export default PeopleList;