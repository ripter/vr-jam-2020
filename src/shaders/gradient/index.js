import vertexShader from './vertex.glsl';
import fragmentGradientSimple from './fragment-gradient-simple.glsl';


AFRAME.registerShader('gradient-simple', {
  schema: {
    topColor: { type: 'color', default: '#red', is: 'uniform' },
    bottomColor: { type: 'color', default: '#blue', is: 'uniform' },
  },
  vertexShader,
  fragmentShader: fragmentGradientSimple,
});
