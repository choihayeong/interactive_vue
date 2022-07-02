<template>
    <h2 class="slogan">
        CREATIVITY INSPIRED
    </h2>
    <div class="image-wrap image-wrap--slogan">
        <img src="../assets/images/1.jpg">
    </div>
</template>

<style lang="scss" scoped>
    .slogan {
        position:relative;
        color: white;
        animation: slogan 1s ease-out 0s forwards;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            background: #000;
            z-index: -1;
            animation: slogan_before 1s ease-out 0s forwards;
        }
    }
    @keyframes slogan {
        0% {color: white;}
        100% {color: #000;}
    }
    @keyframes slogan_before {
        0% {width: 100%;}
        100% {width: 0%;}
    }
    .image-wrap {
        &--slogan{
            img {
                transform:scale(1.25);
                animation: zoom_out 1s ease-out 0s forwards;
            }
        }
    }
    @keyframes zoom_out {
        0% {transform: scale(1.25);}
        100% {transform: scale(1);}
    }
</style>

<script>
export default {
    
}
</script>