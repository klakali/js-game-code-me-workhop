(function () {
    let score = 0;
    let timeUID = null;

    const gameElement = document.createElement("div");
    const panelElement = document.createElement("div");
    const arenaElement = document.createElement("div");
    const moleElement = document.createElement("div");
    const scoreElement = document.createElement("div");
    const resetButtonElement = document.createElement("a");
        resetButtonElement.innerHTML = "Reset";
        resetButtonElement.setAttribute("role", "button");
        resetButtonElement.setAttribute("href", "#reset");
    
    gameElement.classList.add("game");
    panelElement.classList.add("panel");
    arenaElement.classList.add("arena");
    moleElement.classList.add("mole");
    
    gameElement.appendChild(panelElement);
    gameElement.insertAdjacentElement(
        "beforeEnd",
        arenaElement
    );
    
    scoreElement.innerHTML = score;
    
    panelElement.appendChild(scoreElement);
    panelElement.appendChild(resetButtonElement);;
    arenaElement.appendChild(moleElement);
    
    document.body.appendChild(gameElement);

    resetButtonElement.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();

        score = 0;
        scoreElement.innerHTML = score;
        showMole();
    }, false);

    arenaElement.addEventListener(
        "click",
        function (e) {
            const element = e.target;
            e.stopPropagation();

            if (moleElement === element) {
                score += 1;
                scoreElement.innerHTML = score;
                showMole();
            }
        },
        false
    );

    showMole();

    function changePosition() {
        Object.assign(
            moleElement.style, {
                top: `${Math.floor(Math.random() * 9) * 50}px`,
                left: `${Math.floor(Math.random() * 9) * 50}px`
            }
        );
    }

    function showMole() {
        clearInterval(timeUID);
        changePosition()
        timeUID = setInterval(changePosition, 1 * 9 * 100);
    }
}());
