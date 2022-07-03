<template>
    <div class="history-bg">
        <h3 class="history-bg__text">
            Since 1999 <br>
            To 2022
        </h3>
        <div class="history-bg__contents">
            <img src="../../assets/images/4.png" style="transform:translate3d(20%, 0 , 0)">
        </div>
    </div>
</template>

<script>
export default {
	mounted() {
		const contentSection1 = document.querySelector('#section2 .section__content');
        const imagesSlide = document.querySelector('.history-bg__contents img');

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;

                imagesSlide.setAttribute('style', `transform: translate3d(${20-(100*scrollRatio)}%, 0, 0)`);
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