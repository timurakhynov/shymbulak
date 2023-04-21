<template>
    <button class="ButtonSquare">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonSquare",
    data() {
        return{}
    }
}
</script>

<style scoped>
.ButtonSquare {
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #DAE9F4;
    border-radius: 12px;
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
.ButtonSquare:hover {
    cursor: pointer;
    background: #DAE9F4;
}
.burgerButton {
    width: 26px;
    height: 1px;
    background-color: #4F5864;
}
</style>