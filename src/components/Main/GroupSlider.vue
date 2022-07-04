<template>
    <div class="group-slider">
        <img src="../../assets/images/temp_slider.jpg" alt="">
    </div>
</template>

<style lang="scss" scoped>
    .group-slider {
        text-align: center;
    }
</style>

<script>
export default {
	mounted() {
		const contentSection1 = document.querySelector('#section3 .section__content');
        const groupSlider = document.querySelector('.group-slider');

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;

                console.log(scrollRatio);

                groupSlider.setAttribute('style', 'position: relative');

                if (scrollRatio <= 0.01) {
                    groupSlider.removeAttribute('style');
                }
            }
        }

        function animation() {
            calcHeight(contentSection1);
        }

        window.addEventListener('resize', calcHeight);
        window.addEventListener('scroll', animation);
	}
}
</script>
