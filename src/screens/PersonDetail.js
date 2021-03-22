import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';

export default class PersonDetail extends React.Component{
  render(){

    const {person} = this.props.navigation.state.params;
    const picURL = person.picture.large;


    return(
      <View style={styles.container}>
        <Image source={{uri: picURL}}
              style={styles.avatar}
        />
        <View style={styles.datailContiner}>
          <Line label='E-mail:' content={person.email}/>
          <Line label='Cidade:' content={person.location.city}/>
          <Line label='Estado:' content={person.location.state}/>
          <Line label='Cel:' content={person.cell}/>
          <Line label='Nacionalidade:' content={person.nat}/>
          <Line label='Profissao:' content={person.prof}/>

        </View>
      </View>
    )
  }
}  

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
    // flex: 1,
    // marginLeft: 15,
    borderRadius: 5
  }, 
  datailContiner:{
    backgroundColor: '#e2f9ff',
    marginTop:20,
    elevation: 1,
  }
})