<template>
    <header class="header">
        <div class="container">   
            <div class="header_menu">
                <div class="header_menu_items">
                    <ButtonSquare @click="burger"><img src="../../assets/img/nav_button/burger.png" alt="loupe"></ButtonSquare>
                    <ButtonSquare><img src="../../assets/img/nav_button/loupe.svg" alt="loupe"></ButtonSquare>
                </div>
                <Logo/>
                <div class="header_menu_items">
                    <ButtonSquare>RU</ButtonSquare>
                    <ButtonSquare><img src="../../assets/img/nav_button/user.svg" alt="user"></ButtonSquare>
                    <ButtonSquare><img src="../../assets/img/nav_button/like.svg" alt="like"></ButtonSquare>
                    <ButtonSquare><img src="../../assets/img/nav_button/cart.svg" alt="cart"></ButtonSquare>
                </div>
            </div>
            <div v-if="burgerStatus">
                <Burger/>
            </div>
        </div>
    </header>
</template>

<script>
import Burger from '../UI/Burger/Burger.vue';
import ButtonSquare from '../UI/Button/ButtonSquare.vue';
import Logo from '../UI/Logo/Logo.vue';

export default {
    name: "Header",
    data() {
        return {
            burgerStatus: false
        };
    },
    methods: {
        burger() {
            this.burgerStatus = !this.burgerStatus
        }
    },
    components: { ButtonSquare, Logo, Burger }
}
</script>

<style>
.header {
    padding: 20px 16px;
    background: #FFFFFF;
}

.header_menu {
    display: flex;
    justify-content: space-between;
}

.header_menu_items {
    display: flex;
    align-items: center;
}

.header_menu_items:last-child {
    margin-right: 30px;
}

</style>