<template>
    <div class="AboutLayout">
        <div class="header">
            <HeaderComponent/>
        </div>
        <div>
            <main class="AboutLayoutMain content">
                <slot />
            </main>
        </div>
        <div>
            <h3>Footer</h3>
        </div>
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
.header {
    padding-bottom: 100px;   
}
</style>