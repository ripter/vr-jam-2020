AFRAME.registerSystem('pull-locomotion', {
  schema: {
    hand: {type: 'selector', default: '#rightHand'},
    motor: {type: 'selector', default: '#player'},
    camera: {type: 'selector', default: '#camera'},
  },

  init() {
    this.isGripped = false;
    this.isMoving = false;

    this.gripStartPosition = new THREE.Vector3();
    this.motorStartPosition = new THREE.Vector3();
    this.motorPosition = new THREE.Vector3();
    this.handPosition = new THREE.Vector3();
    this.handDelta = new THREE.Vector3();
    this.currentPosition = new THREE.Vector3();
    this.cameraPosition = new THREE.Vector3();
    this.distanceToMove = 0;
  },

  tick() {
    const elLog = document.querySelector('#log');
    const hand = this.data.hand.object3D;
    const motor = this.data.motor.object3D;
    const camera = this.data.camera.object3D;

    motor.getWorldPosition(this.motorPosition);
    hand.getWorldPosition(this.handPosition);
    camera.getWorldPosition(this.cameraPosition);

    // let distance = this.motorPosition.distanceTo(this.gripStartPosition);
    // let distance = this.gripStartPosition.toArray();
    // elLog.setAttribute('text', {value: `m: ${distance.map(d => `\n${d}`)}`});

    //
    // When the player first grips, setup for movement.
    if (this.isGripped && !this.isMoving) {
      this.isMoving = true;

      this.gripStartPosition.copy(this.handPosition);
      this.motorStartPosition.copy(this.motorPosition);

      // this.gripStartPosition.add(this.cameraPosition);

      this.gripStartPosition.y = this.motorStartPosition.y;
      // this.distanceToMove = this.motorStartPosition.distanceTo(this.gripStartPosition);
      // this.gripStartPosition.addScalar(1.25);
      // this.gripStartPosition.y = this.motorStartPosition.y;
    }
    // When the player ungrips, stop movement.
    else if (!this.isGripped && this.isMoving) {
      this.isMoving = false;
    }

    //
    // Move the motor!
    if (this.isGripped && this.isMoving) {
      let alpha = 1;

      // ignore the y-axis,
      this.handPosition.y = this.gripStartPosition.y;
      alpha = this.handPosition.distanceTo(this.gripStartPosition);// / this.distanceToMove;
      // const alpha = this.handPosition.manhattanDistanceTo (this.gripStartPosition);// / this.distanceToMove;
      // const handDelta = this.handPosition
      // this.handDelta.subVectors(this.handPosition, this.gripStartPosition);



      // Move the motor to the start position by alpha
      // this.gripStartPosition.y = this.motorStartPosition.y;
      motor.position.lerpVectors(this.motorStartPosition, this.gripStartPosition, alpha);


      // let msg = '';
      // msg += `alpha: ${alpha}\n`;
      // msg += 'camera' + this.cameraPosition.toArray().map(i => `\t${i}\n`);
      // msg += 'start' + this.gripStartPosition.toArray().map(i => `${i}\n`)
      // msg += 'hand' + this.handPosition.toArray().map(i => `${i}\n`)
      // elLog.setAttribute('text', {value: msg});
    }
  },

  update() {
    const { hand } = this.data;

    // Listen to the hand's events
    ['gripdown', 'gripup'].forEach(eventName => hand.addEventListener(eventName, this));
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
