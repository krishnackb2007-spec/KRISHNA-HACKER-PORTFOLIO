/* =====================================================
   KRISHNA OS
   DIGITAL REALM
===================================================== */


/* ================= MATRIX ================= */

const canvas =
    document.getElementById("matrix");

const ctx =
    canvas.getContext("2d");


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}

resizeCanvas();


const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%<>[]{}";

const fontSize = 14;

let columns =
    Math.floor(canvas.width / fontSize);

let drops =
    Array(columns).fill(1);


function matrixRain() {

    ctx.fillStyle =
        "rgba(0, 3, 1, 0.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
        "#00ff41";

    ctx.font =
        fontSize + "px monospace";


    for (
        let i = 0;
        i < drops.length;
        i++
    ) {

        const character =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];


        ctx.fillText(
            character,
            i * fontSize,
            drops[i] * fontSize
        );


        if (
            drops[i] * fontSize >
                canvas.height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }


        drops[i]++;

    }

}


setInterval(
    matrixRain,
    40
);


window.addEventListener(
    "resize",
    () => {

        resizeCanvas();

        columns =
            Math.floor(
                canvas.width /
                fontSize
            );

        drops =
            Array(columns).fill(1);

    }
);


/* ================= BOOT ================= */

let progress = 0;

const progressBar =
    document.getElementById(
        "bootProgress"
    );

const bootText =
    document.getElementById(
        "bootText"
    );


const bootMessages = [

    "LOADING NEURAL CORE...",
    "DECRYPTING PROFILE...",
    "CHECKING SECURITY...",
    "CONNECTING PROJECTS...",
    "SYSTEM READY."

];


const bootInterval =
    setInterval(() => {

        progress += 2;

        progressBar.style.width =
            progress + "%";


        if (
            progress % 20 === 0
        ) {

            const index =
                Math.min(
                    progress / 20 - 1,
                    bootMessages.length - 1
                );

            bootText.textContent =
                bootMessages[index];

        }


        if (progress >= 100) {

            clearInterval(
                bootInterval
            );

            setTimeout(() => {

                document
                    .getElementById(
                        "bootScreen"
                    )
                    .style.display =
                    "none";


                document
                    .getElementById(
                        "mainSite"
                    )
                    .style.opacity =
                    "1";

            }, 600);

        }

    }, 40);


/* ================= CLOCK ================= */

function updateClock() {

    const now =
        new Date();

    const time =
        now.toLocaleTimeString(
            "en-IN",
            {
                hour12: false
            }
        );

    document
        .getElementById(
            "clock"
        )
        .textContent = time;

}

setInterval(
    updateClock,
    1000
);

updateClock();


/* ================= TYPING ================= */

const messages = [

    "> Establishing secure connection...",
    "> Loading developer profile...",
    "> Scanning digital realm...",
    "> All systems operational.",
    "> Welcome, stranger."

];

let messageIndex = 0;
let charIndex = 0;

const typingLine =
    document.getElementById(
        "typingLine"
    );


function typeMessage() {

    if (
        charIndex <
        messages[messageIndex].length
    ) {

        typingLine.textContent +=
            messages[
                messageIndex
            ][charIndex];

        charIndex++;

        setTimeout(
            typeMessage,
            35
        );

    } else {

        setTimeout(
            eraseMessage,
            1800
        );

    }

}


function eraseMessage() {

    if (
        typingLine.textContent.length
    ) {

        typingLine.textContent =
            typingLine
                .textContent
                .slice(0, -1);

        setTimeout(
            eraseMessage,
            15
        );

    } else {

        messageIndex =
            (messageIndex + 1) %
            messages.length;

        charIndex = 0;

        typeMessage();

    }

}

typingLine.textContent = "";

typeMessage();


/* ================= SCROLL ================= */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= INTRO ================= */

function runIntro() {

    const messages = [

        "INITIALIZING...",
        "SCANNING SYSTEM...",
        "ACCESSING USER PROFILE...",
        "KRISHNA FOUND.",
        "WELCOME."

    ];

    let i = 0;

    const interval =
        setInterval(() => {

            showModal(
                "INTRO.EXE",
                messages[i]
            );

            i++;

            if (i >= messages.length) {

                clearInterval(
                    interval
                );

            }

        }, 700);

}


/* ================= MODAL ================= */

function showModal(
    title,
    text
) {

    document
        .getElementById(
            "modalTitle"
        )
        .textContent =
        title;


    document
        .getElementById(
            "modalText"
        )
        .textContent =
        text;


    document
        .getElementById(
            "modal"
        )
        .style.display =
        "flex";

}


function closeModal() {

    document
        .getElementById(
            "modal"
        )
        .style.display =
        "none";

}


function showMessage() {

    showModal(
        "WHOAMI",
        "KRISHNA // CSE STUDENT // DEVELOPER // PROBLEM SOLVER // TECH ENTHUSIAST"
    );

}


/* ================= SECRET PROJECT ================= */

function secretProject() {

    showModal(
        "⚠ CLASSIFIED",
        "ACCESS DENIED. You need to discover the secret terminal command first. Hint: type 'secret'."
    );

}


/* ================= CONTACT ================= */

function fakeLink(name) {

    event.preventDefault();

    showModal(
        "SECURE CONNECTION",
        name + " connection module is ready. Replace this link with your real " + name + " profile."
    );

}


/* ================= TERMINAL ================= */

const terminalInput =
    document.getElementById(
        "terminalInput"
    );

const terminalOutput =
    document.getElementById(
        "terminalOutput"
    );


terminalInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !== "Enter"
        ) return;


        const command =
            terminalInput
                .value
                .trim()
                .toLowerCase();


        terminalInput.value = "";


        executeCommand(
            command
        );

    }
);


function printTerminal(
    text
) {

    const line =
        document.createElement(
            "p"
        );

    line.innerHTML =
        text;

    terminalOutput.appendChild(
        line
    );

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;

}


function executeCommand(
    command
) {

    if (!command) return;


    printTerminal(
        `<span style="color:#00ff41">
        root@krishna:~#
        </span> ${command}`
    );


    switch(command) {


        case "help":

            printTerminal(
                `
                AVAILABLE COMMANDS:<br>
                about<br>
                skills<br>
                projects<br>
                github<br>
                contact<br>
                clear<br>
                secret<br>
                matrix
                `
            );

            break;


        case "about":

            printTerminal(
                `
                KRISHNA KUMAR<br>
                CSE STUDENT<br>
                DEVELOPER<br>
                PROBLEM SOLVER
                `
            );

            break;


        case "skills":

            printTerminal(
                `
                HTML • CSS • JavaScript<br>
                Python • C/C++ • SQL<br>
                Git • GitHub • Web Development
                `
            );

            break;


        case "projects":

            printTerminal(
                `
                [01] AI CHATBOT<br>
                [02] STUDENT HUB<br>
                [03] CODE EDITOR<br>
                [04] SECRET LAB
                `
            );

            break;


        case "github":

            printTerminal(
                `
                GitHub module ready.<br>
                Add your real GitHub URL.
                `
            );

            break;


        case "contact":

            printTerminal(
                `
                SECURE CHANNEL AVAILABLE.<br>
                Email • Instagram • LinkedIn
                `
            );

            break;


        case "secret":

            printTerminal(
                `
                <span style="color:#ff3030">
                ⚠ ACCESSING CLASSIFIED FILE...
                </span><br><br>

                ████████████████████ 100%<br><br>

                <span style="color:#00ff41">
                ACCESS GRANTED.
                </span><br><br>

                You found the secret. 😈<br>
                Welcome to the inner system.
                `
            );

            break;


        case "matrix":

            printTerminal(
                `
                MATRIX PROTOCOL ENABLED.<br>
                SYSTEM IS WATCHING...
                `
            );

            break;


        case "clear":

            terminalOutput.innerHTML = "";

            break;


        default:

            printTerminal(
                `
                Command not found:
                <span style="color:#ff3030">
                ${command}
                </span><br>

                Type <b>help</b> for available commands.
                `
            );

    }

}