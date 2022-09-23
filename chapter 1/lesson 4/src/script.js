import './style.css'
import * as THREE from 'three'

// define scene
const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
// mesh is combined out of first geometry, then material
const mesh = new THREE.Mesh(geometry, material)
// finally add mesh to scene
scene.add(mesh)

// size
const sizes = {
  width: 800,
  height: 600,
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// move the camera backward before doing the render
camera.position.z = 2
scene.add(camera)

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({  
  canvas: canvas,
})

// resize renderer to update size of renderer
renderer.setSize(sizes.width, sizes.height)

// do first render
renderer.render(scene, camera)