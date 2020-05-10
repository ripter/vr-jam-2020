uniform vec3 bottomColor;
uniform vec3 topColor;
varying vec3 vWorldPosition;

/*
 * Simple gradient between two values.
*/
void main() {
  float minHeight = -1.0;
  float maxHeight = 1.0;
  float height = normalize( vWorldPosition ).y;
  float alpha = (height - minHeight) / (maxHeight - minHeight);
  vec3 color = vec3(0.0);

  color = mix(bottomColor, topColor, alpha);
  gl_FragColor = vec4(color, 1.0);
}
