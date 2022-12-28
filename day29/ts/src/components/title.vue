<template>
    <div class="today">
        <div class="one">
            <div class="oneday">
                <div>
                    <img src="../assets/今日销售额.png" alt="">
                </div>
                <div>
                    <h5>今日销售额</h5>
                    <h6>Today's Sales Amount</h6>
                    <h2>56,998,472</h2>
                </div>
            </div>
            <div class="oneday">
                <div>
                    <img src="../assets/今日定单量.png" alt="">
                </div>
                <div>
                    <h5>今日订单量</h5>
                    <h6>Today's Total Orders</h6>
                    <h2>3,496,490</h2>
                </div>
            </div>
            <div class="oneday">
                <div>
                    <img src="../assets/今日交易用户数.png" alt="">
                </div>
                <div>
                    <h5>今日交易用户数</h5>
                    <h6>Today's Fayed Users</h6>
                    <h2>758,349</h2>
                </div>
            </div>
            <div class="oneday">
                <div>
                    <img src="../assets/今日新增用户数.png" alt="">
                </div>
                <div>
                    <h5>今日新增用户数</h5>
                    <h6>Today's New Users</h6>
                    <h2>1,739,919</h2>
                </div>
            </div>
            <div class="towday">
                <div>
                    <img src="../assets/转化率.png" alt="">
                    <p>转化率</p>
                    <h4>13.00%</h4>
                </div>
                <div>
                    <img src="../assets/退单率.png" alt="">
                    <p>退单率</p>
                    <h4>5.66%</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data () {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.one {
    width: 1169px;
    background-color: #424345;
    color: #fff;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .oneday {
        display: flex;

        div {
            margin-left: 10px;
        }
    }

    .towday {
        display: flex;
        justify-content: space-between;
        margin-right: 10px;
        text-align: center;

        div {
            margin-left: 10px;

            p {
                font-size: 12px;
            }
        }
    }
}
</style>