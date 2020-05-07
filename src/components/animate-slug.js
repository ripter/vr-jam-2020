AFRAME.registerComponent('animate-slug', {
  schema: {},

  init() {
    // Listen for object3D being set, like when the model is loaded.
    this.el.addEventListener('object3dset', this);
  },

  // setup the bones and animations
  setupAnimation() {
    const mesh = this.el.getObject3D('mesh');
    if (!mesh) return;
    this.system.addSlug(mesh);
  },

  update() {
  },

  play() {
  },

  pause() {
  },

  /**
   * Called when a listening event is observed.
   * @param  {Event} event the event that has been fired and needs to be processed.
   * @return {undefined}
   */
  handleEvent(event) {
    if (event.type !== 'object3dset') { return; }
    this.setupAnimation();
  },
});
