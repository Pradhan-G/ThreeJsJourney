// WE need 4 elements in order for 3js to work

// A scene that will contain the objects
//  Some Objects - primitive geometries, imported models, Particles, Lights, ETC...
//  A Camera
//  A Renderer

// adding a scene

const scene = new THREE.Scene();

// WE need to create a Mesh which is a combination of geometry(the shape) and a material (how it looks)
// Start with a BoxGeometry and a MeshBasicMaterial

// Adding an Object

// 1st step - add a geometry (Parameters - length width and depth)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 2nd step - add a material and in parameters add the color inside an object
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// 3rd step - Add the mesh now
const mesh = new THREE.Mesh(geometry, material);

// Adding the mesh to the scene now
scene.add(mesh);

// Now to look at something we need to add a camera and set its location and what it has to look at and many more things. Lets see one thing at a time
const canvas = document.querySelector(".webgl");
const sizes = {
  width: 1920,
  height: 1080,
};

// The most basic camera is Perspective Camera and we need to provide parameters to make it work properly (FOV (Field Of View) (degrees),The Aspect Ratio (Mostly the size of the viewport))
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// we cannot see anything as of yet because the camera and the object all the things are at the same place... now to move an object or transform an object we can use the following properties 1: Position(also an object - x,y,z properties) 2: Rotation 3: Scale
camera.position.z = 5;

// creating the renderer for the camera which needs a canvas, so we created a canvas in html and then targeted it above and used it
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Setting the size of the renderer
renderer.setSize(sizes.width, sizes.height);

// To render something we use .render() and in this we need to add two parameters - scene and camera
renderer.render(scene, camera);
