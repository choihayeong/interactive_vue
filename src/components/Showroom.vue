<template>
    <aside id="showroom" class="showroom" style="background-position-y: 50%">
        showroom
    </aside>
</template>

<script>
export default {
	mounted() {
		const showroom = document.querySelector('#showroom');

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= (content.offsetTop - (window.innerHeight / 2)) && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;

                content.setAttribute('style', `background-position-y: ${-(scrollRatio * 100)}%`);
            }
        }

        function animation() {
            calcHeight(showroom);
        }

        window.addEventListener('resize', calcHeight);
        window.addEventListener('scroll', animation);
	}
}
</script>