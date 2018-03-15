/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SectionList
} from 'react-native';

var myLogger = NativeModules.MyLogger;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
  render(){
    return (
<Text>Hello {this.props.name} {this.props.title} ~~</Text>
      );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showT:true};

    setInterval(() => {
      this.setState(previousState => {
        return { showT: !previousState.showT};
      });
    }, 100);
  }

  render() {
    let display = this.state.showT ? this.props.text : ' ';

    return (
      <Text>{display}</Text>
      );
  }
}

async function getAlias(name) {
  var events = await myLogger.getAlias1(name);
  console.log(events);
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {textToTranslate:''};
  }

  render() {
    let pic = {
      uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864562884,2415870474&fm=27&gp=0.jpg'
    };

    myLogger.showLog("hello google");

    var ret;

    // myLogger.getAlias1("myname",
    //   (alias, alias2) => {
    //     console.log(alias + ":" + alias2);

    //     ret = alias + "..." + alias2;
    //   }
    // );
    getAlias("Microsoft");

    // var book = myLogger.getAlias1("Google");

    myLogger.getAlias2("yourname");

    console.log(ret);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Image source={pic} style={{width:100, height:100}}/>
        <Greeting name='Google' title='Baby'/>
        <Greeting name='Microsoft'/>
        <Blink text='Apple'/>
        <Text style={styles.instructions}>
          To get started, edit App.js.....
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={[styles.bigblue]}>
        Chrome
        </Text>
        <View style={{width:150, height:150, backgroundColor:'yellow'} }/>
        <View style = {{padding:10}}> 
        <TextInput placeholder="type here" onChangeText={(textToTranslate) => this.setState({textToTranslate})}></TextInput>
        <Text style={{padding:10, fontSize:42}}>
        {this.state.textToTranslate.split(' ').map((word) => word && '*').join(' ')}
        </Text>
        </View>
        <FlatList
        data={[
          {key:'Google'},
          {key:'Apple'},
          {key:'Microsoft'},
          {key:'Facebook Facebook'}
          ]}

          renderItem={ ({item}) => <Text style={styles.item}>{item.key}</Text> }

          style={{backgroundColor:'blue'}}
        />
        <Text>Google google Microsoft Chrome Test Google </Text>

        <SectionList 
        sections={[
          {title:'D', data:[{key:'David'}]},
          {title:'J', data:[{key:'James'}, {key:'Jackson'}, {key:'Jerry'}]}
          ]}

          renderItem={ ({item}) => <Text style={styles.item}>{item.key}</Text> }
          renderSectionHeader={({section}) => <Text style={styles.item}>{section.title}</Text>}
        />

      </View>
    );
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
    backgroundColor:'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color:'blue',
    fontWeight:'bold',
    fontSize: 30,
  },
  item: {
    padding:10,
    fontSize:18,
    height:44,
  }
});

const myStyle = StyleSheet.create(
{
  lightGreen:{
fontSize:40,
color:'green'
  },
}
  );
