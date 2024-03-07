
function submit() {
    const group1 = document.querySelectorAll(".exam .group-1 .mb-20");
    group1.forEach((question, index) => {
        
        const correct = question.querySelector(`input[value=${g1[index]}]`).cheked;
        if (correct) {
            result += 1;
        }
    });

    const group2 = document.querySelectorAll(".exam .group-2 .mb-20");
    group2.forEach((question, index) => {
        const correct = question.querySelector(`input[value=${g2[index]}]`).checked;
        if (correct) {
            result += 1;
        }
    });

    const group3 = document.querySelectorAll(".exam .group-3 .mb-20");
    group3.forEach((question, index) => {
        let count = 0;
        for (const as of g3[index]) {
            const correct = question.querySelector(`input[value=${as}]`).checked;
            if (correct) {
                count += 1;
            }
        }
        if (count == g3[index].length) {
            result += 1;
        }
    });

    const displayBox = document.querySelector(".display-record");
    const showResult = displayBox.querySelector(".d-body b");
    const percet = Math.ceil((result/30)*100);
    showResult.innerHTML = `Bạn giống tôi đến: ${percet}%`;
    displayBox.classList.add("shown");
}

const buttonUserSubmit = document.querySelector(".form-submit button");
if (buttonUserSubmit) {
    buttonUserSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "exam.html";
    });

}

const g1 = ["yes", "yes", "no", "yes", "no", "yes", "no", "no", "yes", "yes"];
const g2 = ["A", "B", "C", "D", "C", "B", "A", "A", "D", "A"];
const g3 = [["A", "C", "D"], ["B", "D"], ["A", "C"], ["D"], ["C", "D"], ["B"], ["A"], ["A"], ["B", "D"], ["A"]];

let result = 0
const submitBtn = document.querySelector(".exam .container-fluid button");
if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        submit();
    });
}

const showBox = document.querySelector(".display-record");
if (showBox) {
    const existbtn = showBox.querySelector(".d-foot button");
    existbtn.addEventListener("click", () => {
        window.location.href = "index.html";
    })
}

