<template>
    <div class="now-bg">
        <h3 class="now-bg__text">
            <img src="../../assets/images/5.png">
        </h3>
        <div class="now-bg__contents" style="transform:translate3d(0, -10%, 0)">
            <img src="../../assets/images/6.png">
        </div>
    </div>
</template>

<script>
export default {
	mounted() {
		const contentSection1 = document.querySelector('#section4 .section__content');
        const nowContents = document.querySelector('.now-bg__contents');

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;

                nowContents.setAttribute('style', `transform: translate3d(0, ${-10-(100*scrollRatio)}%, 0)`);
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