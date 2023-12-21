<template>
    <div class="AboutLayout">
        <HeaderComponent/>
        <main class="AboutLayoutMain">
            <slot />
        </main>
        <h3>Footer</h3>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
    name: 'AboutLayout',
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