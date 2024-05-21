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
        <div class="footer">
            <FooterComponent/>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    name: 'AboutLayout',
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