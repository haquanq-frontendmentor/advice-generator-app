async function getSlipAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data.slip;
}

const refreshButton = document.querySelector(".advice__refresh__btn");
const adviceId = document.querySelector(".advice__id");
const adviceContent = document.querySelector(".advice__content");

refreshButton.addEventListener("click", async (e) => {
    const { id, advice } = await getSlipAdvice();

    adviceId.textContent = "ADVICE #" + id;
    adviceContent.textContent = `"${advice}"`;
});
