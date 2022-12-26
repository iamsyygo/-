<template>
    <template v-for="{ key, title, type, ...item } in menus" :key="key">
        <el-menu-item
            v-if="type === 'item' || !type"
            v-bind="item"
            @click="$emit('menu-click', $event)"
        >
            <template #title>
                <slot :name="key">
                    <el-icon><slot :name="`${key}-title`" /></el-icon>
                    <span>{{ title }}</span>
                </slot>
            </template>
            <SeaMenuItems
                @menu-click="$emit('menu-click', $event)"
                v-if="item.children"
                :menus="item.children"
            />
        </el-menu-item>

        <el-menu-item-group v-if="type === 'group'" :title="title">
            <SeaMenuItems
                @menu-click="$emit('menu-click', $event)"
                v-if="item.children"
                :menus="item.children"
            />
        </el-menu-item-group>

        <el-sub-menu v-if="type === 'sub'" :index="item.index">
            <template #title>
                <slot :name="key">
                    <el-icon><slot :name="`${key}-title`" /></el-icon>
                    <span>{{ title }}</span>
                </slot>
            </template>
            <SeaMenuItems
                @menu-click="$emit('menu-click', $event)"
                v-if="item.children"
                :menus="item.children"
            />
        </el-sub-menu>
    </template>
</template>
<script lang="ts">
export default {
    name: 'SeaMenuItems',
};
</script>
<script setup lang="ts">
import { ISeaMenuItemProps } from './type';

const props = withDefaults(
    defineProps<{
        menus: ISeaMenuItemProps[];
    }>(),
    {
        menus: [] as any,
    },
);

const emits = defineEmits(['menu-click']);
</script>

<style lang="" scoped></style>
