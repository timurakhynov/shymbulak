<template>
    <div class="burger_nav">
        <a href="#" class="menu burger__link main">Главная</a>
        <a href="#" class="menu burger__link tickets">Билеты</a>
        <a href="#" class="menu burger__link rental">Прокат</a>
        <a href="#" class="menu burger__link school">Школа</a>
        <a href="#" class="menu burger__link entertainment">Развлечения</a>
        <a href="#" class="menu burger__link hotels">Отели</a>
        <a href="#" class="menu burger__link restaurants">Рестораны</a>
        <a href="#" class="menu burger__link shop">Магазин</a>
        <a href="#" class="menu burger__link kids">Детям</a>
        <a href="#" class="menu burger__link parking">Паркинг</a>
        <a href="#" class="menu burger__link info">Инфо</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.burger_nav {
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 2px solid #DAE9F4;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
}

.menu {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #4F5864;
    text-decoration: none;
}

.burger__link {
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 13px 20px;
}

.burger__link:hover {
    color: #FFFFFF;
    background: #75B6F2;
    box-shadow: 0px 8.88889px 10.6667px rgba(117, 182, 242, 0.15);
    border-radius: 12px;
}

.burger__link::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
}

    .main::before {
        background: url('../../../assets/img/burger/main.svg') center / contain no-repeat;
    }
    .tickets::before {
        background: url('../../../assets/img/burger/tickets.svg') center / contain no-repeat;
    }
    .rental::before {
        background: url('../../../assets/img/burger/rental.svg') center / contain no-repeat;
    }
    .school::before {
        background: url('../../../assets/img/burger/school.svg') center / contain no-repeat;
    }
    .entertainment::before {
        background: url('../../../assets/img/burger/entertainment.svg') center / contain no-repeat;
    }
    .hotels::before {
        background: url('../../../assets/img/burger/hotels.svg') center / contain no-repeat;
    }
    .restaurants::before {
        background: url('../../../assets/img/burger/restaurants.svg') center / contain no-repeat;
    }
    .shop::before {
        background: url('../../../assets/img/burger/shop.svg') center / contain no-repeat;
    }
    .kids::before {
        background: url('../../../assets/img/burger/kids.svg') center / contain no-repeat;
    }
    .parking::before {
        background: url('../../../assets/img/burger/parking.svg') center / contain no-repeat;
    }
    .info::before {
        background: url('../../../assets/img/burger/info.svg') center / contain no-repeat;
    }
</style>