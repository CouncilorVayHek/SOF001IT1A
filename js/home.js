// Tallentaa valitun kategorian ja siirtyy visasivulle
document.querySelectorAll(".cat-btn").forEach(btn =>
    btn.addEventListener("click", () => {
      sessionStorage.setItem("chosenCategory", btn.dataset.cat);
      window.location.href = "./quiz.html";          // visasivu
    })
  );
  