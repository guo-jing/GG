<template>
    <div class="row" :style="rolStyle"
    :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GGRow',
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        computed: {
            rolStyle() {
                let {gutter} = this;
                return {marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter;
            })
        }
    }
</script>
<style scoped lang="scss">
    .row {
        display: flex;
    }
</style>