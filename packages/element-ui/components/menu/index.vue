<template>
    <el-menu v-bind="$attrs" class="sea-menu-vertical">
        <SeaMenuItems @menu-click="$emit('menu-click', $event)" :menus="menus" />
    </el-menu>
</template>

<script lang="ts" setup>
import SeaMenuItems from './menuItems.vue';
import { ISeaMenuItemProps } from './type';
import moduleName from '../../index';
console.log(moduleName);
const props = withDefaults(
    defineProps<{
        menus: ISeaMenuItemProps[];
    }>(),
    {
        menus: [] as any,
    },
);
</script>
<style>
.sea-menu-vertical {
    height: 100%;
}
</style>
