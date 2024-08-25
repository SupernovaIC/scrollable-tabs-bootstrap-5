//let move = require('move');
// Function to initialize scrollable tabs for a specific wrapper
function initializeScrollableTabs(wrapper) {
    const scrollBarWidths = 40;
    const scrollerRight = wrapper.querySelector(".scroller-right");
    const scrollerLeft = wrapper.querySelector(".scroller-left");
    const list = wrapper.querySelector(".list");
    const lastNavLink = list.querySelectorAll(".nav-item.nav-link")[list.querySelectorAll(".nav-item.nav-link").length - 1];
    let btnTriggered = false;

    let widthOfList = function () {
        let itemsWidth = 0;
        const listLinks = list.querySelectorAll("a");

        listLinks.forEach((el) => {
            let itemWidth = getOuterWidth(el);
            itemsWidth += itemWidth;
        });

        return itemsWidth;
    };

    let widthOfHidden = function (w) {
        w = (!w) ? 0 : w;
        const oW = getOuterWidth(wrapper.querySelector(".wrapper-nav")) - w;
        const ww = parseFloat((0 - oW).toFixed(3));
        const hw = (oW - widthOfList() - getLeftPosi()) - scrollBarWidths;
        const rp = document.body.clientWidth - (getOuterLeft(lastNavLink) + getOuterWidth(lastNavLink)) - w;

        if (ww > hw) {
            return (rp > ww ? rp : ww);
        } else {
            return (rp > hw ? rp : hw);
        }
    };

    let getLeftPosi = () => {
        const lp = getOuterLeft(list);
        const wrapperLeft = getOuterLeft(wrapper.querySelector(".wrapper-nav"));
        
        return lp - wrapperLeft;
    };

    let reAdjust = () => {
        let rp = document.body.clientWidth - (getOuterLeft(lastNavLink) + getOuterWidth(lastNavLink));

        if (getOuterWidth(wrapper.querySelector(".wrapper-nav")) < widthOfList() && (rp < 0)) {
            scrollerRight.style.display = 'flex';
            unfade(scrollerRight);
        } else {
            scrollerRight.style.display = 'none';
        }

        if (getLeftPosi() < 0) {
            scrollerLeft.style.display = 'flex';
            unfade(scrollerLeft);
        } else {
            scrollerLeft.style.display = 'none';
        }

        btnTriggered = false;
    };

    scrollerRight.addEventListener("click", () => {
        if (btnTriggered) return;

        btnTriggered = true;

        fade(scrollerLeft);
        unfade(scrollerRight);

        let wR = getOuterWidth(scrollerRight);

        move(list).add("left", +widthOfHidden(wR), 200).end().then(() => {
            reAdjust();
        });
    });

    scrollerLeft.addEventListener("click", () => {
        if (btnTriggered) return;

        btnTriggered = true;

        fade(scrollerRight);
        unfade(scrollerLeft);

        let wL = getOuterWidth(scrollerLeft);

        move(list).add("left", -getLeftPosi() + wL, 200).end().then(() => {
            reAdjust();
        });
    });

    window.addEventListener('resize', () => {
        reAdjust();
    }, true);

    reAdjust();
}

let getOuterLeft = (elem) => elem.getBoundingClientRect().left;

let getOuterWidth = (elem) => parseFloat(window.getComputedStyle(elem).width);

function fade(elem) {
    elem.style.display = "none";
    elem.style.transition = "opacity 0.6s";
    elem.style.opacity = 0;
}

function unfade(elem) {
    elem.style.display = "block";
    elem.style.transition = "opacity 0.6s";
    elem.style.opacity = 1;
}

// Initialize scrollable tabs for each tab set
document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
    initializeScrollableTabs(wrapper);
});