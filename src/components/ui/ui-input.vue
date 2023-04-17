<template>
    <div class="customInput">
        <span>{{label}}</span>
        <input 
            type="text" 
            :name="name"
            :placeholder="placeholder" 
            :value="value" 
            @input="$emit('input', $event.target.value)"/>
    </div>
</template>

<script>
export default {
    name: 'ui-input',
    props: {
        name: {
            type: String,
            default: 'Name'
        },
        placeholder: {
            type: String,
            default: 'Placeholder'
        },
        value: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>