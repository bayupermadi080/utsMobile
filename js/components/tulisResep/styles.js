
const React = require('react-native');


const { StyleSheet, Dimensions } = React;

import metrics from './../../themes/metrics';
const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  confirm: {
    flex: 1,
    marginTop: 18,
    borderRadius: 5,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  saveBtn: {
    alignItems: 'center',
  },
};
