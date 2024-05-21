<template>
    <div class="ProjectsLayout">
        <HeaderComponent/>
        <main class="ProjectsLayoutMain">
            <slot />
        </main>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'ProjectsLayout',
    components: { 
        HeaderComponent,
        FooterComponent
    },

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