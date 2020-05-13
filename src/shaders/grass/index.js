import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';


// Original from: https://codepen.io/al-ro/pen/jJJygQ?editors=1010
// Based on:
// "Realistic real-time grass rendering" by Eddie Lee, 2010
// https://www.eddietree.com/grass
// https://medium.com/@Zadvorsky/into-vertex-shaders-594e6d8cd804u
// https://github.com/zadvorsky/three.bas
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_buffergeometry_instancing_dynamic.html
// https://www.opengl-tutorial.org/intermediate-tutorials/tutorial-17-quaternions/
AFRAME.registerShader('gradient-grass', {
  schema: {
    // topColor: { type: 'color', default: '#red', is: 'uniform' },
    // bottomColor: { type: 'color', default: '#blue', is: 'uniform' },
  },
  vertexShader,
  fragmentShader,
});
