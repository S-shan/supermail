<template>
    <div class="recommends">
        <div class="recommends-item" v-for="(item, index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="item-text">{{item.title}}</div>
            </a>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommentView',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommends {
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommends-item {
    flex: 1;
} 
.recommends-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
}
</style>
