<script setup>
//导入tjs
import * as THREE from 'three'
//导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//创建场景
const scene = new THREE.Scene()
//创建相机
const camera = new THREE.PerspectiveCamera(
    //视角
    45,
    window.innerWidth / window.innerHeight//宽高比按照窗口的宽高设置
    //近平面
    , 0.1,
    //远平面
    1000
)

//添加世界坐标辅助器
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
//创造渲染器
const renderer = new THREE.WebGLRenderer()
//设置渲染尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)//将渲染器挂载到body上
//创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)
//创建材质
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const ParentCbeMateraial = new THREE.MeshBasicMaterial({ color: 0x0bfff })
//创建父元素
const parentCbe = new THREE.Mesh(geometry, ParentCbeMateraial)
//创建网格，就是物体
const cube = new THREE.Mesh(geometry, material)
//将子元素添加到父元素中
parentCbe.add(cube)
//设置网格位置
cube.position.set(3, 0, 0)
parentCbe.position.set(-3, 0, 0)
//将网格添加到场景中,更改为添加父元素
scene.add(parentCbe)
//设置相机位置
camera.position.z = 5
camera.position.x = 2
camera.position.y = 2
//相机看向那里
camera.lookAt(0, 0, 0)
//创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
//设置阻尼
controls.enableDamping = true
//设置阻尼参数
controls.dampingFactor = 0.05
//渲染函数
function animate() {
    controls.update();
    requestAnimationFrame(animate)
    //x,y,z旋转角度
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    renderer.render(scene, camera)
}
animate()
//渲染
renderer.render(scene, camera)
</script>

<template>
    <a href="../login/lgin.vue" target="login">跳转到目标路由</a>
    <div> <router-link to="/">跳回</router-link></div>
</template>

<style scoped lang="scss">
canvas {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

}
</style>