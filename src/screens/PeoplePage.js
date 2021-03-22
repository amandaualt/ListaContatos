import React, {Component} from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import PeopleList from '../components/PeopleList'; 

type Props = {};
export default class PeoplePage extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      people: [],
      loading: false,
    };
  }

  componentDidMount(){
    this.setState({loading: true});
    axios
    .get('https://randomuser.me/api/?nat=br&results=500')
    .then(response => {
      const {results} = response.data; 
      this.setState({
        people: results,
        loading: false
      })
    }).catch(error => {
      this.setState({
        error: true,
        loading: false,
      }); 
    });
}

  renderList(){
    const textElements = this.state.people.map(person => {
      const {first} = person.name;
      return <Text key={first}>{first}</Text>
    });

    return textElements;
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        {
          this.state.loading ?   
          <ActivityIndicator size="large" color="#cbcbcb"/> 
          : 
            this.state.error ? 
              <Text style={styles.error}>Erro ao carregar....</Text>
              :
              <PeopleList people={this.state.people} onPressItem={(param) => this.props.navigation.navigate('PersonDetail', param) }/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  error:{
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  }
})

