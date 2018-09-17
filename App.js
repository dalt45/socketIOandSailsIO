/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){

    // sails.io 
    /*
    var io = sailsIOClient(socketIOClient)
    io.sails.useCORSRouteToGetCookie = false
    io.sails.url = 'https://ucp.uxmalstream.com:35810'
    io.sails.reconnect = true
    var socket = io.sails.connect()
  */
    //socket-io
    var socket = socketIOClient('https://ucp.uxmalstream.com:35810?__sails_io_sdk_version=1.1.13',{
      reconnection:true,
      secure:true,
      transports:['websocket'],
    })

    socket.on('connect',(data) => {
      console.log("conectado",data)
    })
    socket.on('connect_error',(data) => {
      console.log("no conectado",data)
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
