<template>
    <div v-bind:id="`title${mainObj.id}`" class="section__title">
        <div class="titlewrap">
            <h3 class="main-title">
                <span v-html="`${mainObj.title}`">

                </span>
                <!-- {{ mainObj.title }} -->
            </h3>
            <p class="main-desc">
                {{ mainObj.description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .titlewrap {
        opacity: 0;
        transform: translate3d(0, 120%, 0);
        transition: all 1s ease-out;
        &.active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
</style>

<script>
export default {
    props: {
        mainObj: Object
    },
    mounted() {
        const titleSection1 = document.querySelector('#title1.section__title');
        const titleSection2 = document.querySelector('#title2.section__title');

        function calcHeight(title) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = title.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= title.offsetTop && currentScroll <= (title.offsetTop + title.offsetHeight)) {
                let currentPosition = currentScroll - title.offsetTop;
                scrollRatio = currentPosition / title.offsetHeight;
            
                if (scrollRatio >= 0.01) {
                    title.querySelector('.titlewrap').classList.add('active');
                } else {
                    title.querySelector('.titlewrap').classList.remove('active');
                }

                if (scrollRatio >= 0.5) {
                    title.nextSibling.classList.add('fixed');
                } else {
                    title.nextSibling.classList.remove('fixed');
                }
            }
        }

        function titleAnimation() {
            calcHeight(titleSection1);
            calcHeight(titleSection2);
        }

        window.addEventListener('resize', calcHeight);
        window.addEventListener('scroll', titleAnimation);
    }
}
</script>