<template>
    <div class="day_items">
        <p class="day_items_text">Погода на ближайшие дни</p>
        <div class="day_items_item">
            <DayItem
                :dataWeather={dataWeather}
            />
        </div>
    </div>
</template>

<script>
import DayItem from './DayItem.vue';

export default {
    props: {
        dataWeather: []
    },
    components: { DayItem }
}
</script>

<style scoped>

.day_items {
    padding: 16px;
    border: 1px solid #DAE9F4;
    border-radius: 16px;
}

.day_items_text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4F5864;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E1E7EE;
    padding-bottom: 16px;
    margin: 0;
}

.day_items_text::before {
    content: '';
    display: block;
    background: url('../../../assets/img/content/days.svg') center / contain no-repeat;
    width: 14px;
    height: 14px;
    margin-right: 8px;
}

.day_items_item {
    display: flex;
    justify-content: space-between;
}
    
</style>