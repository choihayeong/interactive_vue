<template>
    <div class="stroketext stroketext--default">
        2022
    </div>
    <div class="stroketext stroketext--fill">
        2022
    </div>
</template>

<script>
export default {
    mounted() {
		const contentSection1 = document.querySelector('#section1 .section__content');
        const strokeText = document.querySelector('.stroketext--default');
        const fillStrokeText = document.querySelector('.stroketext--fill');

        function strokeEvent() {
            if (strokeText.parentElement.parentElement.classList.contains('fixed')) {
                fillStrokeText.classList.add('on');
            } else {
                fillStrokeText.classList.remove('on');
            };
        }

        window.addEventListener('scroll', strokeEvent);
    }
}
</script>