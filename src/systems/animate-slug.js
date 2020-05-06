
AFRAME.registerSystem('animate-slug', {
  schema: {
    hand: { type: 'selector', default: '#rightHand' },
    // slug: { type: 'selector', default: '#slugModel' },
  },

  init() {
    this.slugMesh;
    this.headBone;
    this.handPosition = new THREE.Vector3();
    this.bonePosition = new THREE.Vector3();

    this.elLog = document.querySelector('#log');
  },

  update() {
    // const slug = this.data.slug.object3D;
    // console.log('slug', slug);
    // get the bones so we can anaimate them.
    // this.headBone = slug.getObjectByName('Head.Bone');

    // console.log('headBone', this.headBone);
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

    // bonePosition.x = handPosition.x;
    // bonePosition.z = handPosition.z;
    // headBone.position.x = handPosition.x;
    // headBone.position.z = handPosition.z;
    headBone.position.x = hand.position.x;
    headBone.position.z =  -hand.position.z;


    // let msg = 'hand\n';
    // msg += hand.position.toArray().map(i => `${i}\n`);
    // msg += 'headBone\n';
    // msg += headBone.position.toArray().map(i => `${i}\n`);
    // msg += 'boneOffset\n';
    // msg += this.boneOffset.toArray().map(i => `${i}\n`);
    // msg += 'slug\n';
    // msg += slug.position.toArray().map(i => `${i}\n`);
    // this.elLog.setAttribute('text', {value: msg});


    // this.headBone.position.copy(hand.position);

    // if (!this.slugMesh) return;

    // console.log(this.headBone);

    if (!this.DEBUG) {
      this.DEBUG = true;
      console.log('headBone', this.headBone);
    }
  },

  addSlug(mesh) {
    console.log('addSlug', mesh);
    this.slugMesh = mesh;
    this.headBone = mesh.getObjectByName('HeadBone');
    // this.boneOffset.copy(this.headBone.position);
  },
});
