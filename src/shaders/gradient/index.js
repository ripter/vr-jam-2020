import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';


AFRAME.registerShader('gradient', {
  schema: {
    topColor: {type: 'color', default: '255 0 0', is: 'uniform'},
    bottomColor: {type: 'color', default: '0 0 255', is: 'uniform'},
    offset: {type: 'number', default: 400, is: 'uniform'},
    exponent: {type: 'number', default: 0.6, is: 'uniform'}
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});
