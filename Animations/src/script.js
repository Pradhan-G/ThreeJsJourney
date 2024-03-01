import * as THREE from "three";
import gsap from "gsap";

console.log(gsap);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// The purpose of requestAnimationFrame is to call the function provided on the next frame

// we are going to call the same function on each new frame

//  Get the time
let time = Date.now();

const clock = new THREE.Clock();

gsap.to(mesh.position, {
  x: 2,
  duration: 1,
  delay: 1,
});
gsap.to(mesh.position, {
  x: 0,
  duration: 1,
  delay: 2,
});

const tick = () => {
  // //  Get the time
  // let currentTime = Date.now();
  // //   console.log(time);
  // //   The difference between the current time and the previous time is delta
  // const delta = currentTime - time;
  // time = currentTime;
  // //   console.log(delta);
  // // Update the object
  // mesh.rotation.x += 0.001 * delta;
  // mesh.rotation.y += 0.001 * delta;
  // mesh.rotation.z += 0.001 * delta;
  // An easier way to do this is by using the clock
  // //  Define the clock object on the top and use it
  // const elapsedTime = clock.getElapsedTime();
  // // console.log(elapsedTime);
  // // mesh.rotation.x = elapsedTime * 2 * Math.PI;
  // // mesh.position.x = elapsedTime;
  // mesh.position.x = Math.sin(elapsedTime * 2 * Math.PI);
  // mesh.position.y = Math.cos(elapsedTime * Math.PI * 2);
  // camera.lookAt(mesh.position);
  // // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
