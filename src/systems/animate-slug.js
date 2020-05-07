
AFRAME.registerSystem('animate-slug', {
  schema: {
    hand: { type: 'selector', default: '#rightHand' },
  },

  init() {
    this.slugMesh = null;
    this.headBone = null;
    this.handPosition = new THREE.Vector3();
    this.bonePosition = new THREE.Vector3();

    this.elLog = document.querySelector('#log');
  },

  update() {

  },

  tick() {
    const { handPosition, bonePosition } = this;
    const hand = this.data.hand.object3D;
    const slug = this.slugMesh;
    if (!hand || !slug) return;

    // get the head bone
    const headBone = slug.getObjectByName('HeadBone');

    // Rotate the head to match the hand
    headBone.setRotationFromEuler(hand.rotation);

    hand.getWorldPosition(handPosition);
    headBone.getWorldPosition(bonePosition);

    headBone.position.x = hand.position.x;
    headBone.position.z = -hand.position.z;
  },

  // animate-slug component registers it's self when the model has loaded.
  addSlug(mesh) {
    this.slugMesh = mesh;
    this.headBone = mesh.getObjectByName('HeadBone');
  },
});
