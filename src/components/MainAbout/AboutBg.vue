<template>
    <div id="aboutbg1" class="about-bg about-bg--01 on">
        <StrokeText />
    </div>
    <div id="aboutbg2" class="about-bg about-bg--02">
        1966년은 지지 않는 샛별, <br> 
        역사가 시작된 해입니다
    </div>
    <div id="aboutbg3" class="about-bg about-bg--02">
        <img src="../../assets/images/logo.svg" alt="">
    </div>
</template>

<script>
import { StrokeText } from '@/components'

export default {
	components: {
		StrokeText
	},
	mounted() {
		const contentSection1 = document.querySelector('#section1 .section__content');
        const aboutbgs = document.querySelectorAll('.about-bg');
        const aboutBg1 = document.querySelector('#aboutbg1');
        const aboutBg2 = document.querySelector('#aboutbg2');
        const aboutBg3 = document.querySelector('#aboutbg3');

        let bgNum = 0;
        let scrollCnt = 0;

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;

				// about-bg
				if (scrollRatio > 0 && scrollRatio <= 0.33) {
					bgNum = 1;
				} else if (scrollRatio > 0.33 && scrollRatio <= 0.67) {
                    bgNum = 2;
                } else if (scrollRatio > 0.67 && scrollRatio < 0.9) {
                    bgNum = 3;
                }

                // switch (bgNum) {
                //     case 1:
                //         aboutBg1.classList.add('on');
                //         aboutBg2.classList.remove('on');
                //         aboutBg3.classList.remove('on');
                //         break;
                //     case 2:
                //         aboutBg1.classList.remove('on');
                //         aboutBg2.classList.add('on');
                //         aboutBg3.classList.remove('on');
                //         break;
                //     case 3:
                //         aboutBg1.classList.remove('on');
                //         aboutBg2.classList.remove('on');
                //         aboutBg3.classList.add('on');
                //         break;
                //     default:
                //         aboutBg1.classList.remove('on');
                //         aboutBg2.classList.remove('on');
                //         aboutBg3.classList.remove('on');
                // }
            }
        }

        function titleAnimation() {
            calcHeight(contentSection1);
        }

        window.addEventListener('resize', calcHeight);
        window.addEventListener('scroll', titleAnimation);
	}
}
</script>