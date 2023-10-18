const spanPageviews = document.getElementById("spanPageviews");
const discountSpan = document.querySelector(".discount");
const strong = document.getElementById("strong");
const range = document.querySelector(".range");
const check = document.getElementById("check");
const prices = [10, 16, 32];
const numPageviews = [50, 100, 200];
const discount = .75;
const changePrice = () => {
    switch (parseInt(range.value)) {
        case 1:
            check.checked ? strong.textContent = (prices[0] * discount).toFixed(2) : strong.textContent = prices[0].toFixed(2);
            spanPageviews.textContent = numPageviews[0];
            break;
        case 2:
            check.checked ? strong.textContent = (prices[1] * discount).toFixed(2) : strong.textContent = prices[1].toFixed(2);
            spanPageviews.textContent = numPageviews[1];
            break;
        case 3:
            check.checked ? strong.textContent = (prices[2] * discount).toFixed(2) : strong.textContent = prices[2].toFixed(2);
            spanPageviews.textContent = numPageviews[2];
            break;
    }
}
const updateSliderColor = () => {
    const percentage = (range.value - range.min) / (range.max - range.min) * 100;
    range.style.background = `linear-gradient(to right, #A6F1E9 ${percentage}%, #EDF1FB ${percentage}%)`;
}

updateSliderColor();
range.addEventListener("change", () => changePrice());
check.addEventListener("click", () => changePrice());
range.addEventListener("input", () => updateSliderColor());
window.addEventListener("resize", () => window.innerWidth < 505 ? discountSpan.textContent = "-25%" : discountSpan.textContent = "25% discount");