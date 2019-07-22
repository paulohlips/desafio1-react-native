/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Post extends Component {

    static defaultProps = {
        title: "Default Title",
        author: "Default Author",
        content: "Default Content",
    }

    render(){
        return(
            <View style={styles.postContainer}>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <Text style={styles.author}>{this.props.author}</Text>
                <View style={styles.header}/>
                <Text style={styles.content}>{this.props.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postContainer:{
        backgroundColor: 'white',
        alignContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginHorizontal:12,
        marginVertical: 12,
    },

    titleText:{
        fontWeight: 'bold',
        fontSize: 18,
    },

    author:{
        fontSize:10,
        color: '#696969',
        paddingTop: 5,
    },

    content: {
        paddingTop: 15,
        fontSize: 12,
        color: '#696969'
    },
    
    header: {
        backgroundColor: '#F8F8FF',
        height:1,
        marginTop:5
    }
})