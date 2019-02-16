<template>
    <div>
        <pl :id='id'></pl>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    }
}
</script>