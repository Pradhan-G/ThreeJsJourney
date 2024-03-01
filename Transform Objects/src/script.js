import * as THREE from "three";
import "./style.css";

console.log(THREE);

// Scene

const scene = new THREE.Scene();

// Create an object

const group = new THREE.Group();
scene.add(group);
const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
box2.position.set(2, 0, 0);

const box3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff00ff })
);

box3.position.set(-2, 0, 0);

group.add(box1, box2, box3);

group.rotation.reorder("XYZ");
group.rotation.set(0, 0, 0);
// const geometry = new THREE.BoxGeometry(1, 1, 1);

// // Add a material

// const material = new THREE.MeshBasicMaterial({ color: "red" });

// // Creating the mesh

// const mesh = new THREE.Mesh(geometry, material);

// // Adding the mesh to the scene
// scene.add(mesh);

// Transforming the mesh
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.set(0.7,-0.6,1)
// Scale The mesh
// mesh.scale.x = 2;
// mesh.scale.y = 2;
// mesh.scale.y = 3;
// mesh.scale.set(2, 3, 3);

// Rotation of the mesh
// Reordering the mesh is important
// mesh.rotation.reorder("XYZ");
// mesh.rotation.y = 3.14159;
// mesh.rotation.x = 3.14159;

// console.log(mesh.position.length());

// Creating a size variable for using it later again and again

const sizes = {
  width: 800,
  height: 500,
};

// Axes Helpers
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// creating the Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// setting the camera position go back 5 units in z direction
camera.position.z = 5;

// Look at the object

// camera.lookAt(mesh.position);

// If we dont mention that above line we wont see anything because the camera and the object both will be overlapping each other at the center and that would be a problem

// Targetting the canvas and Creating a renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL1Renderer({
  canvas: canvas,
});
// Setting the size of the renderer
renderer.setSize(sizes.width, sizes.height);

// Rendering the scene and the camera
renderer.render(scene, camera);

// console.log(mesh.position.distanceTo(camera.position));
