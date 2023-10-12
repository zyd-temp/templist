<template>
    <div class="layout">
        <my-head></my-head>
        <div class="center-box">
            <router-view/>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script setup lang="ts">
import myHead from '@/layout/myHead.vue'
import myFooter from '@/layout/myFooter.vue'

</script>

<style lang="scss">
.layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .center-box {
        // height: calc(100vh - 11rem);
        padding: 1.87rem 2.5rem;
        border-top: 0.5px solid rgb(112, 112, 112);
        overflow: hidden;
    }
}
</style>