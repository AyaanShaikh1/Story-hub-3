import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';

import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  submitButton = () => {

    db.collection('story').add({
      Title: this.state.title,
      Author: this.state.author,
      Story: this.state.story,
    });

    this.setState({
      Title: '',
      Author: '',
      Story: '',
    });
    ToastAndroid.show('Story Submitted', ToastAndroid.SHORT);
       

  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Write Story</Text>
        </View>

        <View value={this.state.title}>
          <TextInput
            style={styles.inputBox}
            placeholder="Book Name"
            onChangeText={(text) => {
              this.setState({
                title: text,
              });
            }}
            value={this.state.title}
          />
        </View>

        <View value={this.state.author}>
          <TextInput
            style={styles.inputBox}
            placeholder="Author`s Name"
            onChangeText={(text) => {
              this.setState({
                author: text,
              });
            }}
            value={this.state.author}
          />
        </View>

        <View>
          <TextInput
            style={styles.storyBox}
            placeholder="Write The Story"
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                story: text,
              });
            }}
            value={this.state.story}
          />
        </View>
        <View>
          <TouchableOpacity onPress={()=>{this.submitButton()}}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'darkorange',
  },
  text: {
    color: '#8B008B',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputBox: {
    marginTop: 10,
    width: '60%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  storyBox: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    height: 250,
    textAlign: 'center',
    borderWidth: 4,
  },
  buttonText: {
    marginTop: 10,
    width: '30%',
    height: 40,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  },
});
