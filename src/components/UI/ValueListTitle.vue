<template>
    <div class="value__list__title">
        <div class="item">
            Название
        </div>
        <div  class="item">
            Значение
        </div>
        <div  class="item">
            Дата
        </div>
        <div  class="item">
            Функции
        </div>
    </div>
</template>
<script setup>
    name : {
        'value-list-title'
    }
    
</script>
<style scoped>
    .value__list__title {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 30px;
        font-size: 1.3em;
        justify-content: space-around;
        background: white;
    }
    .item {
        
    }
</style>