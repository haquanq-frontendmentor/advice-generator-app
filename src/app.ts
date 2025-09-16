const refreshButton = document.querySelector(".advice__refresh-btn") as HTMLButtonElement;
const adviceId = document.querySelector(".advice__id") as HTMLElement;
const adviceContent = document.querySelector(".advice__content") as HTMLElement;

type SlipAdvice = {
    id: string;
    advice: string;
};

async function getRandomSlipAdvice() {
    const result = await fetch("https://api.adviceslip.com/advice");
    const { slip }: { slip: SlipAdvice } = await result.json();
    return slip;
}

refreshButton.addEventListener("click", async (e) => {
    const { id, advice } = await getRandomSlipAdvice();
    adviceId.textContent = "ADVICE #" + id;
    adviceContent.textContent = `"${advice}"`;
});
