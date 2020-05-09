import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';


AFRAME.registerShader('gradient', {
  schema: {
    topColor: {type: 'color', default: '#red', is: 'uniform'},
    middleColor: {type: 'color', default: '#blue', is: 'uniform'},
    bottomColor: {type: 'color', default: '#green', is: 'uniform'}
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});
