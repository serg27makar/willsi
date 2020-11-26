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
export function aosMethod(index, method = "default") {
    switch (method) {
        case "startup":
            return startup(index);
        case "step":
            return step(index);
        case "default":
            return defaultAos(index);
    }

}

function defaultAos(index) {
    let aosFade;
    if (index % 2 === 0) {
        aosFade = "fade-left";
    } else {
        aosFade = "fade-right";
    }
    return aosFade;
}

function startup(index) {
    let aosFade;
    if (index  === 0 || index  === 4) {
        aosFade = "fade-left";
    } else if (index  === 2 || index  === 6) {
        aosFade = "fade-right";
    } else {
        aosFade = "fade-down";
    }
    return aosFade;
}

function step(index) {
    let aosFade;
    if (index  === 0) {
        aosFade = "fade-left";
    } else if (index  === 2) {
        aosFade = "fade-right";
    } else {
        aosFade = "fade-down";
    }
    return aosFade;
}

