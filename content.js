(function () {
    'use strict';

    window.addEventListener('load', async function(){
        setInterval(checkAndRefresh, 15000);
        setInterval(logicPath, 3000);
        
        checkAndRefresh();
        logicPath();
      
    }, false);

    function checkAndRefresh() {
        const targetSelector = 'p.chakra-text.css-4r89kw';
        const targetElement = document.querySelector(targetSelector);
        if (targetElement && targetElement.textContent === '此任务暂时完成') {
            location.reload();
        }
    }

    function logicPath() {
        const elementASelector = 'p.chakra-text.css-ckdqvu';
        const buttonBSelector = 'span.chakra-radio__label.css-14iyyou';
        const elementCSelector = 'input.chakra-input.css-1c7m1s2';
        const elementA = document.querySelector(elementASelector);
        const buttonB = document.querySelector(buttonBSelector);
        const elementC = document.querySelector(elementCSelector);

        if (elementA) {
            const textA = elementA.textContent.trim();

            if (buttonB) {
                buttonB.click();
            }

            if (elementC) {
                switch(textA) {
                    case "Umepewa kazi ya mikono bila maagizo.":
                        elementC.value = "Kwa sababu hii inaniwezesha kupata uzoefu katika vitendo na haraka kuzoea mahitaji ya kazi. Kwa kuchunguza kwa hiari na kutatua matatizo, naweza kuelewa vizuri yaliyomo kwenye kazi na kuboresha uwezo wangu.";
                        break;
                    case "Ulikutana na mtu mpya kwenye sherehe.":
                        elementC.value = "Kwa sababu hii helps kuvunja aibu, kujenga uhusiano na kusaidia wote wawili kuwa na urafiki haraka zaidi. Mawasiliano ya moja kwa moja yanaweza kuimarisha urafiki na kuweka msingi wa mwingiliano wa baadaye.";
                        break;
                    case "Unaulizwa kufikiria mradi.":
                        elementC.value = "Kwa sababu hii inaweza kuchochea ubunifu, kusaidia timu kuangalia matatizo kutoka mitazamo mbalimbali na kutoa suluhisho bunifu. Njia ya kufikiri kwa uwazi inaweza kuhamasisha majadiliano zaidi na kupelekea mradi mbele.";
                        break;
                    case "Rafiki yako amekasirika baada ya hoja.":
                        elementC.value = "Kwa sababu kutoa msaada na kuelewa ni muhimu wakati marafiki wanapokutana na shida, hii husaidia kurekebisha uhusiano na kuwafanya wahisi kuwa wanathaminiwa na kujaliwa.";
                        break;
                    case "Umealikwa kwenye hafla mbili za kijamii.":
                        elementC.value = "Kwa sababu hivi ndivyo naweza kukutana na watu wengi zaidi, kupanua mtandao wangu wa kijamii na kuongeza nafasi za kujenga uhusiano wa thamani.";
                        break;
                    case "Umechelewa kwenye mahojiano ya kazi.":
                        elementC.value = "Kwa sababu hii inaonyesha kwamba ninathamini ushirikiano wa kazi na heshimu muda wao. Pole kwa wakati inayoashiria inaweza kupunguza mvuto mbaya na kuonyesha weledi na uwajibikaji wangu.";
                    case "Mfanyakazi mwenzangu alifanya makosa.":
                        elementC.value = "Kwa sababu hii inaweza kuunda mazingira ya kazi yanayosaidia, yanayohimiza wenzangu kurekebisha makosa. Kupitia mawasiliano chanya, naweza kuwasaidia kujifunza na kukua, huku nikiongeza mshikamano wa timu.";
                        break;
                    }
                }
            }
        }
})();    
    