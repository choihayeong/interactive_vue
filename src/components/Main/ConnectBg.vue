<template>
    <div class="connect-bg">
        <img src="../../assets/images/temp_connect.jpg" alt="">
        <!-- <h3 class="connect-bg__text">
            Connect to the wider world
        </h3> -->
    </div>
</template>

<script>
export default {
	mounted() {
		const contentSection1 = document.querySelector('#section5 .section__content');

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;

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