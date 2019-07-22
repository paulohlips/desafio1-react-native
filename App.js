/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import Post from './Post/Post'

export default class App extends Component{
  state = {
    title: "Aprendendo React Native",
    author: "Paulo Henrique",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Post title={this.state.title} author={this.state.author} content={this.state.content}/>
          <Post title={this.state.title} author={this.state.author} content={this.state.content}/>
          <Post title={this.state.title} author={this.state.author} content={this.state.content}/>
          <Post title={this.state.title} author={this.state.author} content={this.state.content}/>
          <Post title={this.state.title} author={this.state.author} content={this.state.content}/>

          <Post title={this.state.title} author={this.state.author} content={this.state.content}/>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

