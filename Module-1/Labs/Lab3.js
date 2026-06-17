document.getElementById("helloBtn").addEventListener('click', () => {
    document.getElementById("column1").style.backgroundColor = '#20B2DA';
    document.getElementById("heading1").textContent = document.getElementById("helloSubmission").value;
});

document.getElementById("worldBtn").addEventListener('click', () => {
    document.getElementById("column2").style.backgroundColor = '#20B2DA';
    document.getElementById("heading2").textContent = document.getElementById("worldSubmission").value;
});