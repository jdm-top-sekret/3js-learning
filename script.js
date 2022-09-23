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
scene.add(camera)
