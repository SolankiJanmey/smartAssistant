import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
export default class Myapp extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={{
              uri:
                'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png',
            }}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
      </View>
    );
    return (
      <View style={[{flex: 1}]}>
      <ScrollView>
      <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>        
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.LeftContainer}>
          <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
            <Text style={{paddingTop: 5, color: 'white'}}>Hey!Hey!Hey!Hey!Hey!Hey!Hey!</Text>
          </View>
        </View>
      </ScrollView>
        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  LeftContainer: {
    alignItems: 'flex-start',
    margin: 10,
  },
  RightContainer: {
    alignItems: 'flex-end',
    margin: 10,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
  },
});
