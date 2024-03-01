import * as THREE from "three";

console.log(THREE);

// Scene

const scene = new THREE.Scene();

// Create an object

const geometry = new THREE.BoxGeometry(1, 1, 1);

// Add a material

const material = new THREE.MeshBasicMaterial({ color: "blue" });

// Creating the mesh

const mesh = new THREE.Mesh(geometry, material);

// Adding the mesh to the scene

scene.add(mesh);

// Creating a size variable for using it later again and again

const sizes = {
  width: 800,
  height: 500,
};

// creating the Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// setting the camera position go back 5 units in z direction
camera.position.z = 5;
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
