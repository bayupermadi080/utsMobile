
import React, { Component, PropTypes } from 'react';
import { Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { setUser } from '../../actions/user';
import styles from './styles';

var SERVER_LOGIN_URL = 'http://mhs.rey1024.com/1415051095/login.php';

const background = require('../../../images/logo.png');

class Login extends Component {

  // static propTypes = {
  //   setUser: React.PropTypes.func,
  // }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  // setUser(name) {
  //   this.props.setUser(name);
  // }

  login() {
    fetch(SERVER_LOGIN_URL + '?username=' + this.state.username + '&password=' + this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Wrong Username or Password!")
         }
         else 
       {
        Actions.home();
        }  
        
      })
      .done();
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}/>
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input 
                    placeholder="USERNAME" 
                    text = {this.state.username}
                    onChangeText={(e) => this.setState({ username: e })} 
                  />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                    text = {this.state.password}
                    onChangeText={(e) => this.setState({ password: e })}
                  />
                </Item>
                <Button style={styles.btn} onPress={() => this.login()}>
                  <Text>Login</Text>
                </Button>
              </View>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    setUser: email => dispatch(setUser(email)),
  };
}


export default connect(null, bindActions)(Login);
