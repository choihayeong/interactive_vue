<template>
    <div v-bind:id="`title${mainObj.id}`" class="section__title" v-bind:data-name="`${mainObj.name}`">
        <div class="titlewrap">
            <h3 class="main-title">
                <span v-html="`${mainObj.title}`"></span>
            </h3>
            <p class="main-desc">
                {{ mainObj.description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .titlewrap {
        // position: fixed;
        // top: 40%;
        // left: 0;
        // width: 100%;
        opacity: 0;
        background: #fff;
        transform: translate3d(0, 120%, 0);
        transition: all 0.8s ease-out;
        &.active {
            position: fixed;
            top: 40%;
            left: 0;
            width: 100%;
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
        const titleSection3 = document.querySelector('#title3.section__title');
        const titleSection4 = document.querySelector('#title4.section__title');

        function calcHeight(title) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = title.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= title.offsetTop && currentScroll <= (title.offsetTop + title.offsetHeight)) {
                let currentPosition = currentScroll - title.offsetTop;
                scrollRatio = currentPosition / title.offsetHeight;
            
                console.log(`MainTitle: ${scrollRatio}`);

                if (scrollRatio >= 0.01 && scrollRatio <= 0.75) {
                    title.querySelector('.titlewrap').classList.add('active');
                } else {
                    title.querySelector('.titlewrap').classList.remove('active');
                }

                if (scrollRatio >= 0.67) {
                    title.nextSibling.classList.add('active');
                } else {
                    title.nextSibling.classList.remove('active');
                }
            }
        }

        function titleAnimation() {
            calcHeight(titleSection1);
            calcHeight(titleSection2);
            calcHeight(titleSection3);
            calcHeight(titleSection4);
        }

        window.addEventListener('resize', calcHeight);
        window.addEventListener('scroll', titleAnimation);
    }
}
</script>