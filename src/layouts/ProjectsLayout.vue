<template>
    <div class="ProjectsLayout">
        <HeaderComponent/>
        <main class="ProjectsLayoutMain">
            <slot />
        </main>
        <h3>Footer</h3>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
    name: 'ProjectsLayout',
    components: { HeaderComponent },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>