import EmblaCarousel from "embla-carousel";
import {setupPrevNextBtns, disablePrevNextBtns} from "./prevAndNextButtons";
import {setupDotBtns, generateDotBtns, selectDotBtn} from "./dotButtons";
import {slidesArray} from "./dummySlides";

function createSlides(slideInfo) {
    let emblaSlide = document.createElement('div');
    emblaSlide.className = 'embla__slide';

    let emblaSlideInner = document.createElement('div');
    emblaSlideInner.className = 'embla__slide__inner';

    let slideImg = document.createElement('img');
    slideImg.className = 'embla__slide__img';
    slideImg.src = slideInfo.source;

    let slideName = document.createElement('div');
    slideName.className = 'embla__slide__name';
    slideName.innerHTML = `${slideInfo.name}`;

    let slideCred = document.createElement('div');
    slideCred.className = 'embla__slide__credibility';
    slideCred.innerHTML = `${slideInfo.credibility}`;

    let slideContent = document.createElement('div');
    slideContent.className = 'embla__slide__content';
    slideContent.innerHTML = `${slideInfo.content}`;

    emblaSlide.appendChild(emblaSlideInner);
    emblaSlideInner.appendChild(slideImg);
    emblaSlideInner.appendChild(slideName);
    emblaSlideInner.appendChild(slideCred);
    emblaSlideInner.appendChild(slideContent);

    const wrap = document.querySelector(".embla");
    let slideContainer = wrap.querySelector(".embla__container");

    slideContainer.appendChild(emblaSlide);

    const viewPort = wrap.querySelector(".embla__viewport");
    const embla = EmblaCarousel(viewPort, {
        loop: false,
        align: 'start'
    });
    const prevBtn = wrap.querySelector(".embla__button--prev");
    const nextBtn = wrap.querySelector(".embla__button--next");

    const dots = document.querySelector(".embla__dots");

    const dotsArray = generateDotBtns(dots, embla);
    const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
    const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

    setupPrevNextBtns(prevBtn, nextBtn, embla);
    setupDotBtns(dotsArray, embla);

    embla.on("select", setSelectedDotBtn);
    embla.on("select", disablePrevAndNextBtns);
    embla.on("init", setSelectedDotBtn);
    embla.on("init", disablePrevAndNextBtns);
}

slidesArray.forEach((slideInfo) => createSlides(slideInfo));
