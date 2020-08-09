const state = {
    animate: 0
};
const defaultMethod = [0,1,2];

export function slideAnimate(event, startupRef, scrollTopMin = null, scrollTopMax = null, slideMethod = defaultMethod) {
    const winHeight = (window.innerHeight + 500) / 1589;
    scrollTopMin = scrollTopMin ? scrollTopMin * winHeight: null;
    scrollTopMax = scrollTopMax ? scrollTopMax * winHeight: null;
    let scrollTop = event.target.scrollingElement.scrollTop;
    const animate1 = startupRef;
    const animate2 = startupRef[0];
    if ((scrollTopMin && scrollTop < scrollTopMin) || (scrollTopMax && scrollTop > scrollTopMax)) {
        if (state.animate !== animate1) {
            slideMethod.map((item, index) => {
                const currentClass = "start-animate-step-box" + item;
                const wrapper = startupRef[index].current;
                if (wrapper) wrapper.classList.add(currentClass);
                return index;
            });
            state.animate = animate1;
        }
    } else {
        if (state.animate !== animate2) {
            slideMethod.map((item, index) => {
                const currentClass = "start-animate-step-box" + item;
                const wrapper = startupRef[index].current;
                if (wrapper) wrapper.classList.toggle(currentClass, false);
                return index;
            });
            state.animate = animate2
        }
    }
}
