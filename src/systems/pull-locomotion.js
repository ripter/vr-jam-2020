AFRAME.registerSystem('pull-locomotion', {
  schema: {
    hand: { type: 'selector', default: '#rightHand' },
    motor: { type: 'selector', default: '#player' },
    camera: { type: 'selector', default: '#camera' },
  },

  init() {
    this.isGripped = false;
    this.isMoving = false;

    this.gripStartPosition = new THREE.Vector3();
    this.motorStartPosition = new THREE.Vector3();
    this.handPosition = new THREE.Vector3();
    this.cameraPosition = new THREE.Vector3();
  },

  tick() {
    const hand = this.data.hand.object3D;
    const motor = this.data.motor.object3D;
    const camera = this.data.camera.object3D;

    hand.getWorldPosition(this.handPosition);
    camera.getWorldPosition(this.cameraPosition);

    //
    // When the player first grips, setup for movement.
    // When the player ungrips, stop movement.
    if (this.isGripped && !this.isMoving) {
      this.isMoving = true;

      this.gripStartPosition.copy(this.handPosition);
      // this.motorStartPosition.copy(this.motorPosition);
      this.motorStartPosition.copy(this.cameraPosition);

      this.gripStartPosition.y = this.motorStartPosition.y;
    } else if (!this.isGripped && this.isMoving) {
      this.isMoving = false;
    }

    //
    // Move the motor!
    if (this.isGripped && this.isMoving) {
      // ignore the y-axis when calculating alpha
      this.handPosition.y = this.gripStartPosition.y;
      const alpha = this.handPosition.distanceTo(this.gripStartPosition);

      // Move the motor to the start position by alpha
      motor.position.lerpVectors(this.motorStartPosition, this.gripStartPosition, alpha);
    }
  },

  update() {
    const { hand } = this.data;

    // Listen to the hand's events
    ['gripdown', 'gripup'].forEach((eventName) => hand.addEventListener(eventName, this));
  },

  /**
   * DOM Event handler.
   * Called when a listening event is observed.
   * @param  {Event} event the event that has been fired and needs to be processed.
   * @return {undefined}
   */
  handleEvent(event) {
    switch (event.type) {
      case 'gripup':
        this.isGripped = false;
        break;
      case 'gripdown':
        this.isGripped = true;
        this.isMoving = false;
        break;
      default:
        // ignore
    }
  },
});
