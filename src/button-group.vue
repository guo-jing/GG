<template>
    <div class="gg-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GGButtonGroup',
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase();
                if (name !== 'button') {
                    console.warn(`gg-button-group 的子元素只能为 gg-button ，而你使用了 ${name}`);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gg-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .gg-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                z-index: 1;
            }
        }
    }
</style>