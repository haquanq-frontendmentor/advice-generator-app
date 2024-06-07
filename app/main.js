async function getSlipAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data.slip;
}

const refreshButton = document.querySelector(".advice-refresh");
const adviceId = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice-content");

refreshButton.addEventListener("click", async (e) => {
    refreshButton.style.transform += " scale(0.9)";
    const { id, advice } = await getSlipAdvice();

    adviceId.textContent = "ADVICE #" + id;
    adviceContent.textContent = `"${advice}"`;
});
