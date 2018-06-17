(function () {
    let score = 0;
    let timeUID = null;

    const gameElement = document.createElement("div");
    const panelElement = document.createElement("div");
    const arenaElement = document.createElement("div");
    const moleElement = document.createElement("div");
    //panelElement.innerHTML = score;

    gameElement.classList.add("game");
    panelElement.classList.add("panel");
    arenaElement.classList.add("arena");
    moleElement.classList.add("mole");

    gameElement.appendChild(panelElement);
    gameElement.insertAdjacentElement(
        "beforeEnd",
        arenaElement
    );

    const resetButtonElement = document.createElement("a");
    resetButtonElement.innerHTML = "reset";
    resetButtonElement.setAttribute("role", "button");
    resetButtonElement.setAttribute("href", "http://codeme.pl");

    resetButtonElement.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();

        score = 0;
        showMole();
    }, false);

    const scoreElement = document.createElement("div");
    scoreElement.innerHTML = score;

    panelElement.appendChild(resetButtonElement);
    panelElement.appendChild(scoreElement);
    arenaElement.appendChild(moleElement);

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

    document.body.appendChild(gameElement);

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
        timeUID = setInterval(changePosition, 1 * 30 * 1000);
    }
}());

(function () {
    const html = `<div class="game" ref="game">
        <div class="panel" ref="panel">
            <a role="button" href="#reset" ref="resetButton">reset</a>
            <div ref="score">0</div>
        </div>
        <div class="arena"  ref="arena">
            <div class="mole" ref="mole"></div>
        </div>
    </div>`;

    const tmp = document.createElement("template");

    tmp.innerHTML = html;

    const documentFragment = tmp.content;

    const colection = documentFragment.querySelectorAll("[ref]");

    const template = Array.prototype.reduce.call(
        colection,
        function (obj, item) {
            const name = item.getAttribute("ref");
            obj[name] = item;
            return obj;
        }, {});

    template.arena.addEventListener("click", function () {

    }, false);
}());
