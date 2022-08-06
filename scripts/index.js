// the scene
const scene = new THREE.Scene();

//blue cube
const cubeShape = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

const cube = new THREE.Mesh(cubeShape, material);

scene.add(cube);

const sizes = {
    width: 1000,
    height: 700,
};

// camera

const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 2;

const canvas = document.getElementById("webgl__canvas");

const renderer = new THREE.WebGLRenderer({
    canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
