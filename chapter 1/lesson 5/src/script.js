import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

mesh.position.set(0.7, -0.6,1)

scene.add(mesh)

// axes helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// scale
mesh.scale.set(2,.5,.5)

// rotation
// think of what axis to rotate on first
mesh.rotation.reorder('YXZ')
mesh.rotation.set(Math.PI * .25, Math.PI * .25, 0)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,3)
scene.add(camera)

camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)