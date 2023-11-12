<script setup>
// const poker = {
//     poker_eles: {},
//     transform_eles: [
//         "rotate(-10deg)",
//         "rotate(-6deg) translate(35%,-12%)",
//         "rotate(-2deg) translate(65%, -19%);",
//         "rotate(2deg) translate(95%, -26%);",
//         "rotate(6deg) translate(125%, -33%);"
//     ],
//     init() {
//         this.poker_eles = [...document.getElementsByClassName('puke')]
//         this.poker_eles.array.forEach((ele, index) => {
//             ele.num = index
//         });
//     }
//     ,
//     por() {
//         this.poker_eles.map((ele) => {
//             let num = ele.num
//             num += 1
//             ele.style.transition = "transform 0.3s ease"
//             ele.style.transform = this.transform_eles[num]
//             ele.num = num
//         })
//     }
// }
// poker.init()
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div>
                    <router-link to="/">跳回</router-link>
                </div>
            </el-header>
            <el-main class="main">
                <div class="container">
                    <div class="puke">
                        <img src="../../../img/img-poker/1629171545448.jpg" alt="">
                    </div>
                    <div class="puke">
                        <img src="../../../img/img-poker/1629171545827.jpg" alt="">
                    </div>
                    <div class="puke">
                        <img src="../../../img/img-poker/1629171545934.jpg" alt="">
                    </div>
                    <div class="puke">
                        <img src="../../../img/img-poker/1629243456132.jpg" alt="">
                    </div>
                    <div class="puke">
                        <img src="../../../img/img-poker/1629244136641.jpg" alt="">
                    </div>
                    <div @click="por"></div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.main {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100vh;
    background-color: #000;

    .container {
        position: absolute;
        width: 45rem;
        height: 25rem;
        margin-bottom: 1rem;

        div {
            position: absolute;
            width: 20rem;
            height: 26rem;
            border: 0.15rem solid #fff;
            background-color: #17f700;
            transform-origin: bottom left;
            overflow: hidden;
            border-radius: 1.5rem;

            img {
                width: 100%;
                position: relative;
            }

            &:nth-child(1) {
                transform: rotate(-10deg);
            }

            &:nth-child(2) {
                transform: rotate(-6deg) translate(35%, -12%);
            }

            &:nth-child(3) {
                transform: rotate(-2deg) translate(65%, -19%);
            }

            &:nth-child(4) {
                transform: rotate(2deg) translate(95%, -26%);
            }

            &:nth-child(5) {
                transform: rotate(6deg) translate(125%, -33%);
            }

            &:nth-child(6) {
                transform: rotate(6deg) translate(125%, -33%);
                background-color: #fff;
                transition: 0.3 ease;
                cursor: pointer;
                z-index: 1000;
            }

            &:nth-child(6):hover {
                background-color: #aaa;
            }
        }
    }
}
</style>
