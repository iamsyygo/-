<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="layout-el-aside layout-el-container" width="200px">
                <sMenu @menu-click="handleMenuItemClick" :menus="menus" />
            </el-aside>
            <el-main class="layout-el-main layout-el-container">Main</el-main>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import sMenu from '../components/menu/index.vue';
import { ISeaMenuItemProps } from '../components/menu/type';
const menus: ISeaMenuItemProps[] = [
    {
        title: 'asdasd',
        key: '1',
        type: 'sub',
        index: '1',
        children: [
            {
                title: 'asdasd',
                key: '1',
                index: '1',
                disabled: false,
                showTimeout: 0,
                hideTimeout: 0,
                popperOffset: 0,
            },
        ],
    },
];

const handleMenuItemClick = (instan) => {
    console.log(instan, 'instan');
};
</script>
<style lang="scss" scoped>
.layout-el-container {
    height: 100vh;
}
.layout-el-aside {
    background-color: aliceblue;
}
</style>
