// ================================
// PARAGRAPH DATABASE
// ================================

const paragraphDatabase = [
"The quick brown fox jumps over the lazy dog while the bright sun shines above the green hills and calm river. Birds fly across the clear blue sky as children play happily in the nearby park. The peaceful environment creates a perfect atmosphere for relaxation and enjoyment. People often visit this area to spend quality time with family and friends while appreciating the beauty of nature around them.",

"Learning to type faster requires consistent practice patience and proper finger placement on the keyboard every day. Many beginners focus only on speed but accuracy is equally important for long term improvement. By practicing regularly and maintaining correct posture students can gradually increase their typing performance while reducing mistakes and building confidence in their skills.",

"Technology changes rapidly and students who learn useful skills can create opportunities for a successful future. Programming web development cybersecurity and data analysis are some of the most valuable fields today. Continuous learning and adaptation allow individuals to remain competitive in a constantly evolving digital world filled with new innovations and challenges.",

"Reading books improves vocabulary critical thinking and communication skills which are valuable throughout life. Whether reading fiction history science or self improvement materials readers gain knowledge and different perspectives. Developing a regular reading habit can enhance concentration reduce stress and provide lifelong benefits for both personal and professional growth.",

"Small daily improvements may seem insignificant at first but they produce remarkable results over long periods. Successful people often focus on consistency rather than dramatic changes. By taking small steps every day and maintaining discipline individuals can achieve goals that once appeared impossible while developing strong habits that support future success.",

"The internet provides access to vast amounts of information allowing people to learn almost anything they desire. Online courses educational videos and digital libraries make knowledge available to millions around the world. However users must also learn to identify reliable sources and avoid misinformation when conducting research or seeking answers online.",

"Traveling to new places introduces different cultures traditions foods and perspectives that expand human understanding. Exploring unfamiliar environments encourages adaptability curiosity and appreciation for diversity. Whether visiting nearby towns or distant countries travelers often return with memorable experiences valuable lessons and a deeper understanding of the world around them.",

"Programming teaches logical thinking problem solving and creativity which are useful in many professional fields. Developers design applications websites and software systems that help people accomplish tasks more efficiently. As technology continues to advance programming skills remain highly valuable and open doors to numerous career opportunities across industries.",

"Exercise and healthy eating contribute to physical fitness mental well being and increased energy levels. Regular physical activity strengthens the body improves cardiovascular health and reduces the risk of many diseases. Combined with balanced nutrition and adequate sleep these habits support a healthier lifestyle and improve overall quality of life.",

"Effective time management helps students complete assignments reduce stress and maintain a balanced lifestyle. Prioritizing tasks setting realistic goals and avoiding distractions are important strategies for productivity. Individuals who manage their time wisely often experience greater success in academics work and personal development while maintaining a healthy work life balance.",

"Nature offers beautiful landscapes fresh air and peaceful environments that help people relax and recharge. Spending time outdoors can improve mental health reduce anxiety and increase overall happiness. Activities such as walking hiking and observing wildlife provide opportunities to connect with the natural world and appreciate its remarkable beauty.",

"Teamwork encourages collaboration communication and mutual support leading to better outcomes in many situations. When individuals combine their strengths and share responsibilities complex challenges become easier to overcome. Effective teamwork requires trust respect and a willingness to listen to different viewpoints while working toward common objectives.",

"Science continues to uncover fascinating discoveries about the universe life and the world around us. Researchers study everything from microscopic organisms to distant galaxies seeking answers to important questions. Scientific advancements contribute to medicine technology transportation and countless other areas that improve the quality of human life.",

"Success is often achieved through discipline dedication persistence and the willingness to learn from mistakes. Challenges and setbacks are natural parts of any journey toward meaningful goals. People who remain focused adaptable and committed to continuous improvement are more likely to achieve lasting success in their chosen endeavors.",

"Music has the power to inspire emotions create memories and connect people across different backgrounds. Different genres and styles reflect diverse cultures traditions and artistic expressions. Whether listening performing or composing music individuals can experience creativity relaxation and a unique form of communication that transcends language barriers.",

    


"The library remained quiet throughout the afternoon as students focused on their studies and prepared for upcoming examinations with determination and concentration.",

"A healthy morning routine often includes exercise proper hydration and a nutritious breakfast that provides energy for the rest of the day.",

"The engineer carefully tested the new software application to ensure that every feature worked correctly under different conditions and scenarios.",

"Many successful entrepreneurs started with simple ideas and gradually transformed them into businesses through dedication planning and persistence.",

"The beautiful garden was filled with colorful flowers green plants and butterflies that moved gracefully from one blossom to another.",

"Artificial intelligence continues to transform industries by automating repetitive tasks and helping professionals make better decisions based on data.",

"The young athlete practiced every evening after school and eventually earned a place on the regional championship team.",

"Proper communication helps prevent misunderstandings and allows people to work together more effectively toward shared goals and objectives.",

"The museum displayed historical artifacts that provided visitors with valuable insights into ancient civilizations and cultural traditions.",

"Cloud computing enables organizations to store access and manage information efficiently without relying entirely on physical hardware systems.",

"The chef prepared a delicious meal using fresh ingredients carefully selected from the local market earlier that morning.",

"Learning a new language requires patience regular practice and the willingness to make mistakes while improving communication skills.",

"The research team spent several months collecting information before presenting their findings at an international scientific conference.",

"Environmental conservation plays an important role in protecting natural resources and preserving ecosystems for future generations.",

"The students collaborated on a group project and successfully completed the assignment before the submission deadline arrived.",

"Cybersecurity professionals work to protect networks systems and sensitive information from unauthorized access and potential threats.",

"The mountain trail offered breathtaking views of forests rivers and distant valleys that attracted hikers from many regions.",

"Time spent developing productive habits can significantly improve academic performance professional growth and personal development.",

"The company introduced a new product line designed to meet customer expectations while maintaining high quality standards.",

"Advancements in medical technology have improved diagnosis treatment and recovery outcomes for patients around the world.",

"The train station became crowded during the holiday season as travelers prepared to visit friends and family members.",

"Good leadership involves listening carefully making informed decisions and supporting team members during challenging situations.",

"The documentary explored important historical events and presented detailed information through interviews photographs and archival footage.",

"Computer networks allow devices to exchange information efficiently and support communication across different locations worldwide.",

"The artist spent countless hours refining each detail of the painting to achieve the desired visual effect and balance.",

"Regular reading helps individuals expand their knowledge improve vocabulary and strengthen comprehension skills over time.",

"The weather forecast predicted heavy rainfall throughout the weekend prompting residents to make necessary preparations in advance.",

"Many developers enjoy building personal projects because they provide opportunities to experiment with new technologies and ideas.",

"The space mission successfully collected valuable scientific data that contributed to a deeper understanding of the solar system.",

"Effective problem solving requires analyzing information identifying possible solutions and selecting the most practical course of action."
];

const numberParagraphs = [
    "123 456 789 101 202 303 404 505",
    "987 654 321 123 456 789 999 888",
    "2025 2026 2027 2028 2029 2030",
    "11 22 33 44 55 66 77 88 99",
    "10 20 30 40 50 60 70 80 90 100",
    "314 159 265 358 979 323 846 264",
    "1001 2002 3003 4004 5005 6006",
    "2468 1357 8642 7531 1122 3344",
    "808 707 606 505 404 303 202 101",
    "12 34 56 78 90 98 76 54 32 10"
];

const symbolParagraphs = [
    "! @ # $ % ^ & * ( )",
    "< > ? / \\ | + - =",
    "{ } [ ] : ; \" ' , .",
    "! @ # $ % ^ & * + =",
    "~ ` ! @ # $ % ^ & *",
    "( ) [ ] { } < > / \\",
    "+ - = _ | : ; , . ?",
    "@ # $ % & * ! ? + -",
    "\" ' : ; / \\ | _ = +",
    "[ { ( < > ) } ] ! #"
];

const mixedParagraphs = [
  "Order #1256 | Date: 15/08/2026 | Amount: ₹2,450.75 | Tax: 18% | Total: ₹2,891.89 | Status: PAID",

"User-ID: U2026-4589 | Login: 09:45 AM | Password Hint: @Alpha#789 | Attempts: 2/5 | Access: Granted",

"Product A-101 = ₹599 | Product B-205 = ₹1,299 | Discount: 25% | Coupon: SAVE25 | Final: ₹1,423.50",

"Server Load: CPU=87% | RAM=6.4/8GB | Disk=420/500GB | Temp=72°C | Uptime=125 Days",

"Flight AI-2026 | Gate #12 | Seat 18A | Boarding: 08:30 | Departure: 09:15 | Arrival: 11:45",

"Match Score: Team-A=245/6 | Team-B=238/9 | Difference=7 Runs | Overs=50.0 | Result: WIN",

"Transaction #458921 | Amount=$1,250.50 | Fee=$12.25 | Tax=18% | Net=$1,013.60 | Success=YES",

"Route: A1→B2→C3→D4 | Distance=42.8km | Fuel=3.5L | Speed=65km/h | ETA=00:39:25",

"Stock: XYZ@₹1,245.80 | Change:+4.8% | Volume:1,25,000 | High:₹1,260 | Low:₹1,210",

"Exam Result: Roll#220145 | Marks=478/500 | Percentage=95.6% | Rank=#12 | Status=PASS",

"Invoice #2026-450 | Qty=15 | Price=₹249.99 | Discount=10% | GST=18% | Total=₹3,984.57",

"Network: Ping=18ms | Download=125.4Mbps | Upload=42.8Mbps | Loss=0.2% | Signal=98%",

"Bank A/C: XXXX-4589 | Balance=₹45,780.90 | Debit=₹1,250 | Credit=₹5,000 | Updated=14:25",

"Weather: Temp=38°C | Humidity=72% | Wind=18km/h | Rain=25% | UV Index=8.5",

"Build v2.5.18 | Tests=148/150 | Failed=2 | Coverage=97.8% | Deploy=SUCCESS"
];



const typingInput = document.getElementById("typingInput");
const paragraphDisplay = document.getElementById("paragraphDisplay");

const currentWpm = document.getElementById("currentWpm");
const currentAccuracy = document.getElementById("currentAccuracy");
const correctCharacters = document.getElementById("correctCharacters");
const incorrectCharacters = document.getElementById("incorrectCharacters");
const totalTypedCharacters = document.getElementById("totalTypedCharacters");
const elapsedTime = document.getElementById("elapsedTime");
const paragraphProgress = document.getElementById("paragraphProgress");
const typingStatus = document.getElementById("typingStatus");

const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const retryTopBtn = document.getElementById("retryTopBtn");
const nextBtn = document.getElementById("nextBtn");

const resultModal = document.getElementById("resultModal");

const avgWpm = document.getElementById("avgWpm");
const avgAccuracy = document.getElementById("avgAccuracy");

const bestWpm = document.getElementById("bestWpm");
const bestAccuracy = document.getElementById("bestAccuracy");

const pauseOverlay = document.getElementById("pauseOverlay");

const paragraphCountSelect =
document.getElementById("paragraphCount");

const smallLetters =
document.getElementById("smallLetters");

const capitalLetters =
document.getElementById("capitalLetters");

const numbers =
document.getElementById("numbers");

const symbols =
document.getElementById("symbols");


let selectedParagraphs = [];
let currentParagraphIndex = 0;

let currentText = "";

let charIndex = 0;

let mistakes = 0;

let totalTyped = 0;

let startTime = null;

let timerStarted = false;

let statsTimer = null;

let isPaused = false;

let pauseTimer = null;

let paragraphCompletionTimer = null;

let lastKeyTime = Date.now();

let totalWpmHistory = [];

let totalAccuracyHistory = [];

let finishedParagraphs = 0;



function loadBestStats() {

    const data =
    JSON.parse(
        localStorage.getItem("typingStats")
    );

    if (!data) {

        localStorage.setItem(
            "typingStats",
            JSON.stringify({
                bestWpm: 0,
                bestAccuracy: 0
            })
        );

        return {
            bestWpm: 0,
            bestAccuracy: 0
        };
    }

    return data;
}

function saveBestStats(wpm, accuracy) {

    let data = loadBestStats();

    if (wpm > data.bestWpm) {
        data.bestWpm = Math.round(wpm);
    }

    if (accuracy > data.bestAccuracy) {
        data.bestAccuracy = Math.round(accuracy);
    }

    localStorage.setItem(
        "typingStats",
        JSON.stringify(data)
    );
}



function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
        Math.floor(
            Math.random() * (i + 1)
        );

        [array[i], array[j]] =
        [array[j], array[i]];
    }

    return array;
}

function generateParagraphList() {

    const count =
    parseInt(paragraphCountSelect.value);

    const hasLetters =
    smallLetters.checked ||
    capitalLetters.checked;

    let sourceArray =
    paragraphDatabase;

    if (
        numbers.checked &&
        !hasLetters &&
        !symbols.checked
    ) {
        sourceArray = numberParagraphs;
    }
    else if (
        symbols.checked &&
        !hasLetters &&
        !numbers.checked
    ) {
        sourceArray = symbolParagraphs;
    }
    else if (
        numbers.checked ||
        symbols.checked
    ) {
        sourceArray = mixedParagraphs;
    }

    const copy = [...sourceArray];

    shuffleArray(copy);

    selectedParagraphs =
    copy.slice(
        0,
        Math.min(count, copy.length)
    );

    currentParagraphIndex = 0;

    paragraphProgress.textContent =
    `1/${selectedParagraphs.length}`;
}



function renderParagraph(text) {

    paragraphDisplay.innerHTML = "";

    text.split("").forEach((char, index) => {

        const span =
        document.createElement("span");

        span.innerText = char;

        if(index === 0){
            span.classList.add("current");
        }

        paragraphDisplay.appendChild(span);

    });
}



function loadParagraph() {

    currentText =
    selectedParagraphs[currentParagraphIndex];

    charIndex = 0;

    mistakes = 0;

    totalTyped = 0;

    timerStarted = false;

    startTime = null;

    clearInterval(statsTimer);
    statsTimer = null;

    typingInput.value = "";

    resetLiveStats();

    typingStatus.textContent = "Ready";

    renderParagraph(currentText);
}



function validateFilters() {

    if (
        !smallLetters.checked &&
        !capitalLetters.checked &&
        !numbers.checked &&
        !symbols.checked
    ) {

        alert(
            "Select at least one option."
        );

        smallLetters.checked = true;
    }
}


function startTest() {

    validateFilters();

    generateParagraphList();

    finishedParagraphs = 0;

    totalWpmHistory = [];

    totalAccuracyHistory = [];

    loadParagraph();

    typingInput.focus();
}

startBtn.addEventListener(
    "click",
    startTest
);













function calculateWPM() {

    if (!startTime) return 0;

    const minutes =
    (Date.now() - startTime) / 60000;

    if (minutes <= 0) return 0;

    const correctChars =
    totalTyped - mistakes;

    const words =
    correctChars / 5;

    return Math.max(
        0,
        Math.round(words / minutes)
    );
}


function calculateAccuracy() {

    if (totalTyped === 0) {
        return 100;
    }

    return Math.max(
        0,
        Math.round(
            ((totalTyped - mistakes) /
            totalTyped) * 100
        )
    );
}


function updateStats() {

    const wpm =
    calculateWPM();

    const accuracy =
    calculateAccuracy();

    currentWpm.textContent =
    wpm;

    currentAccuracy.textContent =
    accuracy + "%";

    correctCharacters.textContent =
    Math.max(0, totalTyped - mistakes);

    incorrectCharacters.textContent =
    mistakes;

    totalTypedCharacters.textContent =
    totalTyped;

    const elapsedSeconds =
    startTime
        ? Math.floor(
            (Date.now() - startTime) /
            1000
        )
        : 0;

    const minutes =
    Math.floor(elapsedSeconds / 60);

    const seconds =
    elapsedSeconds % 60;

    elapsedTime.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function resetLiveStats() {

    currentWpm.textContent = "0";
    currentAccuracy.textContent = "100%";
    correctCharacters.textContent = "0";
    incorrectCharacters.textContent = "0";
    totalTypedCharacters.textContent = "0";
    elapsedTime.textContent = "00:00";
}

function startStatsTimer() {

    clearInterval(statsTimer);

    statsTimer =
    setInterval(
        updateStats,
        1000
    );
}


function resetPauseTimer() {

    clearTimeout(pauseTimer);

    pauseTimer =
    setTimeout(() => {

        if (
            timerStarted &&
            charIndex < currentText.length
        ) {

            isPaused = true;

            typingStatus.textContent =
            "Paused";

            pauseOverlay.style.display =
            "flex";
        }

    }, 5000);
}


document.addEventListener(
    "keydown",
    () => {

        if (isPaused) {

            isPaused = false;

            pauseOverlay.style.display =
            "none";

            typingStatus.textContent =
            "Typing";

            resetPauseTimer();
        }

    }
);


function updateCharacterDisplay(
    typedChar
) {

    const spans =
    paragraphDisplay.querySelectorAll(
        "span"
    );

    if (
        charIndex >= currentText.length
    ) {
        return;
    }

    const currentSpan =
    spans[charIndex];

    const expectedChar =
    currentText[charIndex];

    totalTyped++;

    if (
        typedChar === expectedChar
    ) {

        currentSpan.classList.add(
            "correct"
        );

    } else {

        currentSpan.classList.add(
            "incorrect"
        );

        mistakes++;
    }

    currentSpan.classList.remove(
        "current"
    );

    charIndex++;

    if (
        charIndex < spans.length
    ) {

        spans[charIndex]
        .classList.add(
            "current"
        );
    }

    updateStats();
}

function removePreviousCharacter() {

    if (charIndex === 0) {
        return;
    }

    const spans =
    paragraphDisplay.querySelectorAll(
        "span"
    );

    if (
        charIndex < spans.length
    ) {
        spans[charIndex]
        .classList.remove(
            "current"
        );
    }

    charIndex--;

    const previousSpan =
    spans[charIndex];

    if (
        previousSpan.classList.contains(
            "incorrect"
        )
    ) {
        mistakes =
        Math.max(0, mistakes - 1);
    }

    previousSpan.classList.remove(
        "correct",
        "incorrect"
    );

    previousSpan.classList.add(
        "current"
    );

    totalTyped =
    Math.max(0, totalTyped - 1);

    updateStats();
}



typingInput.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key !== "Backspace" ||
            isPaused
        ) {
            return;
        }

        e.preventDefault();

        removePreviousCharacter();

        typingInput.value = "";

        if (timerStarted) {
            resetPauseTimer();
        }
    }
);

typingInput.addEventListener(
    "input",
    (e) => {

        if (isPaused) {
            return;
        }

        if (
            charIndex >=
            currentText.length
        ) {
            return;
        }

        if (!timerStarted) {

            timerStarted = true;

            startTime = Date.now();

            startStatsTimer();

            typingStatus.textContent =
            "Typing";
        }

        resetPauseTimer();

        const value =
        e.target.value;

        const typedChar =
        value[value.length - 1];

        if (
            typedChar === undefined
        ) {
            return;
        }

        updateCharacterDisplay(
            typedChar
        );

        typingInput.value = "";

        // Paragraph Finished

        if (
            charIndex >=
            currentText.length
        ) {

            finishCurrentParagraph();
        }

    }
);


function retryCurrentParagraph() {

    clearTimeout(pauseTimer);
    clearTimeout(paragraphCompletionTimer);

    if (
        typingStatus.textContent ===
        "Completed"
    ) {
        finishedParagraphs =
        Math.max(
            0,
            finishedParagraphs - 1
        );

        totalWpmHistory.pop();
        totalAccuracyHistory.pop();
    }

    isPaused = false;
    pauseOverlay.style.display = "none";
    resultModal.style.display = "none";

    charIndex = 0;
    mistakes = 0;
    totalTyped = 0;

    timerStarted = false;
    startTime = null;

    clearInterval(statsTimer);
    statsTimer = null;

    typingInput.value = "";

    resetLiveStats();

    typingStatus.textContent = "Ready";

    renderParagraph(currentText);

    typingInput.focus();
}

retryTopBtn.addEventListener(
    "click",
    retryCurrentParagraph
);

retryBtn.addEventListener(
    "click",
    retryCurrentParagraph
);




















function finishCurrentParagraph() {

    clearTimeout(pauseTimer);
    clearInterval(statsTimer);
    statsTimer = null;

    updateStats();

    typingStatus.textContent =
    "Completed";

    const wpm =
    calculateWPM();

    const accuracy =
    calculateAccuracy();

    totalWpmHistory.push(wpm);
    totalAccuracyHistory.push(accuracy);

    finishedParagraphs++;

    paragraphCompletionTimer =
    setTimeout(() => {

        if (
            finishedParagraphs >=
            selectedParagraphs.length
        ) {

            finishWholeTest();

        } else {

            currentParagraphIndex++;

            paragraphProgress.textContent =
            `${currentParagraphIndex + 1}/${selectedParagraphs.length}`;

            loadParagraph();

            typingInput.focus();
        }

    }, 1000);
}



function finishWholeTest() {

    resultModal.style.display =
    "flex";

    const avgWpmValue =
    Math.round(
        totalWpmHistory.reduce(
            (a, b) => a + b,
            0
        ) /
        totalWpmHistory.length
    );

    const avgAccuracyValue =
    Math.round(
        totalAccuracyHistory.reduce(
            (a, b) => a + b,
            0
        ) /
        totalAccuracyHistory.length
    );

    avgWpm.textContent =
    avgWpmValue;

    avgAccuracy.textContent =
    avgAccuracyValue + "%";

    saveBestStats(
        avgWpmValue,
        avgAccuracyValue
    );

    const best =
    loadBestStats();

    bestWpm.textContent =
    best.bestWpm;

    bestAccuracy.textContent =
    best.bestAccuracy + "%";
}


nextBtn.addEventListener(
    "click",
    () => {

        resultModal.style.display =
        "none";

        startTest();

        typingInput.focus();
    }
);



function initializeBestStats() {

    const best =
    loadBestStats();

    bestWpm.textContent =
    best.bestWpm;

    bestAccuracy.textContent =
    best.bestAccuracy + "%";
}



function applyFilters(text) {

    let result = text;

    const allowSmall =
    smallLetters.checked;

    const allowCapital =
    capitalLetters.checked;

    const allowNumbers =
    numbers.checked;

    const allowSymbols =
    symbols.checked;

    if (!allowSmall) {

        result =
        result.replace(
            /[a-z]/g,
            ""
        );
    }

    if (!allowCapital) {

        result =
        result.replace(
            /[A-Z]/g,
            ""
        );
    }

    if (!allowNumbers) {

        result =
        result.replace(
            /[0-9]/g,
            ""
        );
    }

    if (!allowSymbols) {

        result =
        result.replace(
            /[^a-zA-Z0-9\s]/g,
            ""
        );
    }

    result =
    result.replace(
        /\s+/g,
        " "
    );

    if (
        result.trim().length < 10 &&
        !allowNumbers &&
        !allowSymbols
    ) {

        return text;
    }

    return result.trim();
}



const originalLoadParagraph =
loadParagraph;

loadParagraph = function () {

    currentText =
    applyFilters(
        selectedParagraphs[
            currentParagraphIndex
        ]
    );

    charIndex = 0;

    mistakes = 0;

    totalTyped = 0;

    timerStarted = false;

    startTime = null;

    clearInterval(statsTimer);
    statsTimer = null;

    typingInput.value = "";

    resetLiveStats();

    typingStatus.textContent =
    "Ready";

    renderParagraph(
        currentText
    );
};


document.addEventListener(
    "keydown",
    (e) => {

        const keys =
        document.querySelectorAll(
            ".key"
        );

        keys.forEach(key => {

            if (
                key.textContent
                .toLowerCase() ===
                e.key.toLowerCase()
            ) {

                key.classList.add(
                    "active-key"
                );

                setTimeout(() => {

                    key.classList.remove(
                        "active-key"
                    );

                }, 150);
            }
        });
    }
);


document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key === "Escape"
        ) {

            resultModal.style.display =
            "none";
        }

    }
);


initializeBestStats();


document.addEventListener(
    "click",
    (e) => {

        if (
            !e.target.closest(
                ".typing-section"
            ) ||
            e.target.closest(
                "button, input, select, textarea, a, label, [contenteditable='true']"
            ) ||
            !currentText ||
            isPaused
        ) {
            return;
        }

        typingInput.focus();
    }
);





























