<template>
    <div :class="{'switch-button': 1, active: value}" @click="$emit('input', !value)"></div>
</template>

<script>

    export default {
        props: {
            value: {type: Boolean, default: false}
        },

        data() {
            return {};
        }
    };

</script>

<style lang="scss" scoped>

    $width: 38px;
    $height: 20px;
    $kpadding: 3px;

    .switch-button {
        @include size($height, $width);
        position: relative;
        border-radius: 50em;
        background: RGB(var(--secondary-text-color));
        transition: all 0.3s;
        cursor: pointer;

        $ksize: $height - 2 * $kpadding;
        $ktpadding: 2 * $kpadding;

        &::before {
            @include pseudo();
            @include size($ksize);
            border-radius: 50em;
            background: RGB(var(--primary-background-color));
            margin: $kpadding;

            @include animate('0.25s ease-in-out reverse forwards') {
                0% {
                    width: $ksize;
                }
                50% {
                    width: calc(100% - #{$ktpadding});
                }
                100% {
                    right: 0;
                    width: $ksize;
                }
            }
        }

        &.active {
            background: RGB(var(--theme-primary));

            &::before {
                @include animate('0.25s ease-in-out forwards') {
                    0% {
                        width: $ksize;
                    }
                    50% {
                        width: calc(100% - #{$ktpadding});
                    }
                    100% {
                        right: 0;
                        width: $ksize;
                    }
                }
            }
        }
    }

</style>
