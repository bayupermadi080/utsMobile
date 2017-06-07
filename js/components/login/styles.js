
const React = require('react-native');
import metrics from './../../themes/metrics';

const { StyleSheet, Dimensions } = React;
const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EFEFEF',
  },
  shadow: {
    flex: 1,
    height: deviceHeight / 2.7,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 9,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
};
