const askAdvice = document.getElementById("submit__new__phares");

askAdvice.addEventListener("click", () => {
    const numberPhrase = document.getElementById("number__phrases");
    const pharesApi = document.getElementById("phares");

    fetch("https://api.adviceslip.com/advice")
        .then((res) => {
            if (!res.ok) {
                throw new Error("API phrase search error");
            }
            return res.json();
        })
        .then((item) => {
            numberPhrase.innerHTML = `${item.slip.id}`;
            pharesApi.innerHTML = `"${item.slip.advice}"`;
        })
});


