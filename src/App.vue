<template>
    <div class="mainPage">
        <Header/> 
        <Content/>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Content from './components/Content/Content.vue';
import Footer from './components/Footer/Footer.vue';

export default {
    methods: {},
    components: { Header, Content, Footer }
}
</script>

<style>
body {
    margin: 0;
}

.container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
}

</style>