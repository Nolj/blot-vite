<template>
    <div class="spin"></div>
</template>
<style scoped>
.spin {
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 30px solid transparent;
    border-radius: 50%;
    border-top-color: brown;
    animation: spin 1s ease infinite;
}
@keyframes spin {
    to {-webkit-transform: rotate(360deg);}
}
</style>