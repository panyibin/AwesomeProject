/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeEventEmitter,
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SectionList,
  Button
} from 'react-native';

var myLogger = NativeModules.MyLogger;
var seedManager = NativeModules.SeedManager;

const {SeedManager} = NativeModules;

var noficationText = 'waiting for notification';

var seedManagerEmitter = new NativeEventEmitter(SeedManager);
// var subscription = seedManagerEmitter.addListener(
//   'kSWHappyEvent',
//   (reminder) => {
//     console.log('receive notifiation');
//   }
// );

export default class TestView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      textToTranslate: '',
      company: 'Microsoft',
      seed: props.username,
      notification:'waiting for notification'
    };

    var subscription = seedManagerEmitter.addListener(
      'kSWHappyEvent',
      (reminder) => {
        console.log('receive notifiation');
        this.setState(
          {notification:'receive notification'}
        );
      }
    );
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    this.setState(
      () => {

      }
    );
  }

  componentWillUnmount() {

  }

  render() {
    let pic = {
      uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864562884,2415870474&fm=27&gp=0.jpg'
    };

    return (
      <View style={styles.container}>
        <Text>name</Text>
        <Text style={styles.welcome}>
          TestView google
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>age:</Text>
          <Text>{this.props.age}</Text>
        </View>
        <Button title='getSeed' color='white'
          onPress={() => {
            console.log('press button');
            this.getSeed();
          }}
        />
        <Text>{this.state.seed}</Text>
        <Text>{this.state.company}</Text>

        <Button title='createWallet' color='white'
          onPress={() => {
            console.log('press createWallet');
            this.createWallet();
          }}
        />

        <Text>{this.state.notification}</Text>

      </View>
    );
  }

  async getSeed() {
    var seedGenerated = await seedManager.getSeed();
    console.log(seedGenerated);
    // this.setState(
    //   previousState => {
    //     return {seed:seedGenerated};
    //   }
    // this.setState(
    //   () => {
    //     return {seed:seedGenerated};
    //   }
    // );
    this.setState(
      { seed: seedGenerated }
    );
  }

  async createWallet() {
    var success = await seedManager.createWallet("google");
    if (success) {
      console.log('create wallet success');
    } else {
      console.log('fail to create wallet');
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'green',
    // flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

const myStyle = StyleSheet.create(
  {
    lightGreen: {
      fontSize: 40,
      color: 'green'
    },
  }
);
