<template>
    <label class="customCheckbox">
        {{text}}
        <input type="checkbox" name="checkbox" :checked="value" @change="$emit('input', $event.target.checked)">
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
    name: 'ui-checkbox',
    props: {
        text: {
            type: String,
            default: ''
        },
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>