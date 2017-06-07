
import React, { Component, PropTypes } from 'react';
import { Alert, TouchableOpacity, View, ListView, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Item, Label, Input, Form } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

var SERVER_LOGIN_URL = 'http://mhs.rey1024.com/1415051095/addKategori.php';

class Tulis extends Component {
   
  static propTypes = {
    name: React.PropTypes.string,
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      nama: "",
    };
  }

  onSave() {
    fetch(SERVER_LOGIN_URL + '?nama=' + this.state.nama)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Fail to Input");
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
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Tulis Resep'}</Title>
          </Body>          
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama Resep</Label>
              <Input 
                onChangeText={(e) => this.setState({ nama: e })} 
                text = {this.state.nama}
              />
            </Item>
            {/*<Item floatingLabel>
              <Label>Resep</Label>
              <Input onChangeText={this.onResepChange}/>
            </Item>
            <Item floatingLabel last>
              <Label>Tips</Label>
              <Input onChangeText={this.onTipsChange}/>
            </Item>*/}
          </Form>
          <Button primary style={styles.confirm} onPress={() => this.onSave()}><Text style={styles.saveBtn}> Simpan </Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
});

export default connect(mapStateToProps, bindAction)(Tulis);
