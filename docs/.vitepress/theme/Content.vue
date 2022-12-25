<script>
import { defineComponent, h, onUpdated, Transition } from 'vue';
import { useRoute } from 'vitepress/dist/client/app/router';
export default defineComponent({
    name: 'VitePressContent',
    props: {
        onContentUpdated: Function
    },
    setup(props) {
        const route = useRoute();
        onUpdated(() => {
            props.onContentUpdated?.();
        });
        // return () => h('div', { style: { position: 'relative' } }, [
        //     route.component ? h(route.component) : null
        // ]);
        return {
            route
        }
    }
});
</script>
<template>
    <div style="position: relative;">
            <Transition appear  mode="out-in">
                <component :is="route.component" />
            </Transition>
    </div>
</template>
