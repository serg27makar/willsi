const state = {
    animate: 0
};
const defaultMethod = [0,1,2];

export function slideAnimate(event, startupRef, scrollTopMin = null, scrollTopMax = null, slideMethod = defaultMethod) {
    const winHeight = (window.innerHeight + 400) / 1460;
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

export function paramsAnimate( paramsRef, stopIndex, last = false) {
    paramsRef.map((item, index) => {
        if (stopIndex === index && !last) {
            const wrapper = item.current;
            if (wrapper) wrapper.classList.add("recalculate-box-scale");
        } else {
            const wrapper = item.current;
            if (wrapper) wrapper.classList.toggle("recalculate-box-scale", false);
        }
        return index;
    });
    if (stopIndex === - 1) {
        if (last) {
            window.scrollTo(0, document.scrollingElement.scrollHeight);
        } else {
            window.scrollTo(0, 0);
        }
    }
}

export function scrollDurationTo(currentPosition, toPosition) {
    setTimeout(() => {
        if (currentPosition > toPosition) {
            currentPosition = currentPosition - 20;
            currentPosition = currentPosition < toPosition ? toPosition : currentPosition;
            scrollDurationTo(currentPosition, toPosition)
        } else if (currentPosition < toPosition) {
            currentPosition = currentPosition + 20;
            currentPosition = currentPosition > toPosition ? toPosition : currentPosition;
            scrollDurationTo(currentPosition, toPosition)
        }
    }, 1);
    window.scrollTo(0, currentPosition);
}
export function handlePageUp() {
    const currentPosition = window.scrollY;
    scrollTopDuration(currentPosition);
}

export function scrollTopDuration(currentPosition) {
    setTimeout(() => {
        if (currentPosition >= 20) {
            currentPosition = currentPosition - 20;
            scrollTopDuration(currentPosition)
        } else {
            currentPosition = 0;
        }
    }, 1);
    window.scrollTo(0, currentPosition);
}
