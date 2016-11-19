import React, { Component } from 'react';
import api  from '../API';
import DefinitionsList from './DefinitionsList';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#5f9ea0'
  },
  title: {
    marginTop: 20,
    marginBottom: 40,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 24,
    borderWidth: 3,
    borderColor: 'white',
    color: 'white'
  },
});

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      word: '',
      definitions: [],
      isLoading: false,
      error: false
    }
  }
  handleChange(event){
    this.setState({
      word: event.nativeEvent.text
    })
  }
  handleSubmit(){
    this.setState({
      isLoading: true,
    });
    api.getWord(this.state.word)
      .then((jsonRes) => this.handleResponse(jsonRes))
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: `There was an error: ${err}`
        })
      })
  }
  handleResponse(res){
    this.setState({
      definitions: res.definitions,
      isLoading: false,
      error: false
    });
  }
  render() {
    var definitions = this.state.definitions;
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> ROMANIAN DICTIONARY </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.word}
          placeholder="Search here"
          onChange={this.handleChange.bind(this)} />
        <Button
          onPress={this.handleSubmit.bind(this)}
          color="#ffff"
          accessibilityLabel="Search for a word in Romanian"
          title="Search" />
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large"></ActivityIndicator>
        {showErr}

        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          <DefinitionsList definitions={definitions} />
        </ScrollView>
      </View>
      )
  }
};

export default Main;
