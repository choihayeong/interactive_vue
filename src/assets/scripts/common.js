(() => {
    let yOffset = 0;
    let prevScHeight = 0;
    let currentScene = 0;
    let enterNewScene = false;
    const sceneInfo = [
        {
            type: 'normal',
            sticky: false,
            // heightTimes: 5, 
            scHeight: 0,
            obj: {
                container: document.querySelector('#section0'),
            },
            values: {

            }
        },
        {
            type: 'normal',
            sticky: false,
            // heightTimes: 5, 
            scHeight: 0,
            obj: {
                container: document.querySelector('#section1'),
            }
        },
        {
            type: 'normal',
            sticky: false,
            // heightTimes: 5, 
            scHeight: 0,
            obj: {
                container: document.querySelector('#section2'),
            },
            values: {

            }
        },
    ];

    function setLayout() {
        // 각 스크롤 섹션의 높이 세팅
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                // sceneInfo[i].scHeight = sceneInfo[i].heightTimes * window.innerHeight;
            } else if (sceneInfo[i].type === 'normal') {
                console.log(document.querySelector('.header'));
                // sceneInfo[i].scHeight = sceneInfo[i].obj.container.offsetHeight;
            }

            // sceneInfo[i].obj.container.style.height = `${sceneInfo[i].scHeight}px`;
        }

        yOffset = window.pageYOffset;
        let totalScHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScHeight += sceneInfo[i].scHeight;
            if (totalScHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `showScene${currentScene}`);
    }

    function calcValues(values, currentYOffset) {
        let rv;
        const scHeight = sceneInfo[currentScene].scHeight;
        const scRatio = currentYOffset / sceneInfo[currentScene].scHeight;

        if (values.length === 3) {
            // start ~ end animation
            const partScStart = values[2].start * scHeight;
            const partScEnd = values[2].end * scHeight;
            const partScHeight = partScEnd - partScStart;

            if (currentYOffset >= partScStart && currentYOffset <= partScEnd) {
                rv = (currentYOffset - partScStart) / partScHeight * ((values[1] - values[0]) + values[0]);
            } else if (currentYOffset < partScStart) {
                rv = values[0];
            } else if (currentYOffset > partScEnd) {
                rv = values[1];
            }

        } else {
            rv = scRatio * ((values[1] - values[0]) + values[0]);
        }

        return rv;
    }

    function scrollLoop() {
        enterNewScene = false;
        prevScHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScHeight += sceneInfo[i].scHeight;
        }

        if (yOffset > prevScHeight + sceneInfo[currentScene].scHeight) {
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id', `showScene${currentScene}`);
        }
        if (yOffset < prevScHeight) {
            enterNewScene = true;
            if (currentScene === 0) {
                return;
            }
            currentScene--;
            document.body.setAttribute('id', `showScene${currentScene}`);
        }

        if (enterNewScene) {
            return;
        }
        // playAnimation();
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });
    window.addEventListener('load',setLayout);
    window.addEventListener('resize', setLayout);
})();