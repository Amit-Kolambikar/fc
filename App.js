import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Divider } from 'react-native-elements';

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile
        </Text>
      </View>
    )
  }
}

export default class TabDemo extends Component {
  state= {
    selectedTab: 'home'
  };

  render() {
    return (
        <TabNavigator style={styles.container}
        tabBarStyle={styles.tabBarStyle}>
        <ScrollView
        horizontal={true}
        style={styles.contentContainer}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        >
        <Text style={styles.welcome}> Welcome to React NativeWelcome to React Native</Text>
      </ScrollView>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'home'})}>
            <Home/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: "#3496f0"}}
            tabStyle={styles.tabStyle}
            titleStyle={styles.tabText}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <Profile/>
          </TabNavigator.Item>
      </ScrollView>
        </TabNavigator>
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
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
  },
  tabText: {
    fontSize:32,
  },
  tabStyle:{
    margin:24,
  },
  tabBarStyle:{
    height:90,
  }
});

AppRegistry.registerComponent('TabDemo', () => TabDemo);