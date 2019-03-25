<template>
    <div class="my-footer-comp">
        <div class="my-footer">
            <p>本站ICP编号：京ICP备09081962 版权：中国摄影出版社（英文缩写：CPPH）  未经同意，不得转载，使用和链接本站内容，违者必究 </p>
            <p>COPYRIGHT © CHINA PHOTOGRAPHIC PUBLISHING HOUSE</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
    }
</script>

<style lang="less">
@import "../assets/less/common";
.my-footer-comp{
    height: 40px;
    background: #f5f5f5;
    .my-footer{
        p{
            text-align: center;
            font-size: 12px;
            color: #666;
        }
    }
}
</style>