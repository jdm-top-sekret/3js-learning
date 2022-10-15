every object that inherits from object3d contains
- position
- scale
- rotation
- quaternion

lets use them. these properties get combiled in matrices. 
you dont need to understand them to do transformations like rotation or position, behind the scene they get updated with matrices.

position: 3 properties x/y/z
- lets u move objects
- can do it to mesh and camera (cuz mesh inherit from object3d)
- do this before rendering,
- inherits from Vector3 
- length: vector is distance between origin of scene and object position
  - mesh.position.length()
- distance from another vector3, like camera and object
- normalize normalizes length to 1

AxesHelper
- shows xyz axes visually

rotation
- 2 ways of doing: quaternion and rotation
  - both update one another
- not vector3 but euler, made to do rotation
- gimble lock is when axes is stuck
  - apply order y x z when rotating
