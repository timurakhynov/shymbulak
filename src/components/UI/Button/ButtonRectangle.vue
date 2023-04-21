<template>
    <button class="ButtonRectangle">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonRectangle",
    data() {
        return{}
    },
    methods: {
        
    }
}
</script>

<style>
.ButtonRectangle {
    width: 137px;
    height: 56px;
    background: #FFFFFF;
    border: 1px solid #DAE9F4;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 120%;
    color: #6D7784;
}
.ButtonRectangle:hover {
    cursor: pointer;
    background: #DAE9F4;
}
</style>