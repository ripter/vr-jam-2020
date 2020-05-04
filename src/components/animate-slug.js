AFRAME.registerComponent('animate-slug', {
  schema: {},

  init() {
    // Called on scene initialization.
    console.log('animate-slug', this);
    this.el.addEventListener('object3dset', this);
  },

  tick() {

  },


  // setup the bones and animations
  setupAnimation() {
    const mesh = this.el.getObject3D('mesh');
    if (!mesh) return;
    this.system.addSlug(mesh);
  },

  update() {
    // const mesh = this.el.getObject3D('mesh');
    // console.log('update', mesh);
  },

  play() {
    // console.log('play');
    // this.el.addEventListener('object3dset', this);
  },

  pause() {
    // console.log('paused');
    // this.el.removeEventListener('object3dset', this);
  },


  /**
   * Called when a listening event is observed.
   * @param  {Event} event the event that has been fired and needs to be processed.
   * @return {undefined}
   */
  handleEvent(event) {
    if (event.type !== 'object3dset') { return; }
    // const mesh = this.el.getObject3D('mesh');
    // console.log('Mesh', mesh);
    this.setupAnimation();
  },
});
