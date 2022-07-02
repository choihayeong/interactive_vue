<template>
	<section id="section0" class="section section--intro">
		<Slogan />
	</section>
	<section id="section1" class="section section--about">
		<MainTitle v-bind:mainObj="aboutObj" />
		<div class="section__content section__content--about">
			<AboutBg />
		</div>
	</section>
	<section id="section2" class="section section--history">
		<MainTitle v-bind:mainObj="historyObj" />
		<div class="section__content section__content--history">
			<div class="history-bg">

			</div>
		</div>
	</section>
</template>

<script>
import { Slogan, MainTitle, StrokeText, AboutBg } from '@/components'
// import {  } from '@/assets/scripts/common.js'

export default {
	data() {
		return {
			aboutObj: {
				id: 1,
				title: '글로벌 선도기업 효성,<br>초일류 기업의 초석을 다지다',
				description: '인류의 보다 나은 생활을 만들어 가는 이야기가 시작되었습니다'
			},
			historyObj: {
				id: 2,
				title: 'Temp title2',
				description: 'Temp description2'
			}
		}
	},
	components: {
		Slogan,
		MainTitle,
		StrokeText,
		AboutBg
	},
	mounted() {
		const contentSection1 = document.querySelector('#section1 .section__content');
        const contentSection2 = document.querySelector('#section2 .section__content');

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;
				
				// console.log(scrollRatio);

				content.classList.remove('fixed');
				if (scrollRatio > 0 && scrollRatio < 0.85) {
					content.classList.add('fixed');
				} else {
					content.classList.remove('fixed');
				}
            }
        }

        function titleAnimation() {
            calcHeight(contentSection1);
            calcHeight(contentSection2);
        }

        window.addEventListener('resize', calcHeight);
        window.addEventListener('scroll', titleAnimation);
	}
}
</script>