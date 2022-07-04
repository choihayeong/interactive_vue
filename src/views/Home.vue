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
			<HistoryBg />
		</div>
	</section>
	<section id="section3" class="section section--group">
		<MainTitle v-bind:mainObj="groupObj" />
		<div class="section__content section__content--group">
			<GroupSlider />
		</div>
	</section>
	<section id="section4" class="section section--now">
		<div class="section__content section__content--now">
			<NowBg />
		</div>
	</section>
	<section id="section5" class="section section--connect">
		<div class="section__content section__content--connect">
			<ConnectBg />
		</div>
	</section>
	<section id="section6" class="section section--sustain">
		<MainTitle v-bind:mainObj="sustainObj" />
		<div class="section__content section__content--sustain">
			<img src="../assets/images/temp_sustain.jpg">
		</div>
	</section>
	<Showroom />
</template>

<script>
import { Slogan, MainTitle, StrokeText, AboutBg, HistoryBg, GroupSlider, NowBg, ConnectBg, Showroom } from '@/components'

export default {
	data() {
		return {
			aboutObj: {
				id: 1,
				name: 'about',
				title: '글로벌 선도기업 효성,<br>초일류 기업의 초석을 다지다',
				description: '인류의 보다 나은 생활을 만들어 가는 이야기가 시작되었습니다'
			},
			historyObj: {
				id: 2,
				name: 'history',
				title: '끝없는 도전정신으로<br>한걸음 더 나아갑니다',
				description: '지난 50여년 간 끊임없는 도전정신으로 국내외 기간산업을 이끌어왔습니다.'
			},
			groupObj: {
				id: 3,
				name: 'group',
				title: '혁신적인 소재·부품·장비<br>개발에 집중하고 있습니다',
				description: '실패를 두려워하지 않고 끊임없이 도전하고 있습니다.'
			},
			sustainObj: {
				id: 4,
				name: 'sustain',
				title: '새로운 도전이<br>내일의 변화를 만듭니다',
				description: '효성은 지속 가능한 경영을 통해 사회의 미래가치를 높입니다.'
			}
		}
	},
	components: {
		Slogan,
		MainTitle,
		StrokeText,
		AboutBg,
		HistoryBg,
		GroupSlider,
		NowBg,
		ConnectBg,
		Showroom
	},
	mounted() {
		const contentSection1 = document.querySelector('#section1 .section__content');
        const contentSection2 = document.querySelector('#section2 .section__content');
		const sectionNow = document.querySelector('#section4');
		const sectionConnect = document.querySelector('#section5');

        function calcHeight(content) {
            let currentScroll = window.pageYOffset;
            let start = 0;
            let end = content.offsetHeight;
            let scrollRatio = 0;

            if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
                let currentPosition = currentScroll - content.offsetTop;
                scrollRatio = currentPosition / content.offsetHeight;
				
				console.log(`Section: ${scrollRatio}`);

				if (scrollRatio >= 0.01 && scrollRatio <= 0.99) {
					content.classList.add('active');
				} else {
					content.classList.remove('active');
				}

				// if (content === sectionNow && content.classList.contains('active')) {
				// 	if (scrollRatio < 0.01) {
				// 		content.classList.remove('active');
				// 	}
				// }
				// if (content === sectionConnect && content.classList.contains('active')) {
				// 	if (scrollRatio < 0.01) {
				// 		content.classList.remove('active');
				// 	}
				// }
            }
        }

        function titleAnimation() {
            calcHeight(contentSection1);
            calcHeight(contentSection2);
            // calcHeight(sectionNow);
            // calcHeight(sectionConnect);
        }

        window.addEventListener('resize', calcHeight);
        window.addEventListener('scroll', titleAnimation);
	}
}
</script>