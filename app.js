 document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".accordion-toggle");
    toggles.forEach(btn => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        const content = btn.nextElementSibling;
        if (expanded) {
          content.style.display = "none";
          content.setAttribute("aria-hidden", "true");
        } else {
          content.style.display = "block";
          content.setAttribute("aria-hidden", "false");
        }
      });
    });
  });

// about section function ↑↑↑↑↑↑↑______/////

// let step = 1;

//   function showNextParagraph() {
//     const para2 = document.getElementById("para2");
//     const para3 = document.getElementById("para3");
//     const btn = document.getElementById("readMoreBtn");

//     if (step === 1) {
//       para2.style.display = "block";
//       step = 2;
//     } else if (step === 2) {
//       para3.style.display = "block";
//       btn.innerHTML = 'Show Less <i class="fa-solid fa-arrow-left"></i>';
//       step = 3;
//     } else {
//       // collapse back to only first
//       para2.style.display = "none";
//       para3.style.display = "none";
//       btn.innerHTML = 'Read More <i class="fa-solid fa-arrow-right"></i>';
//       step = 1;
//     }
//   }

// hide and see function ↑↑↑↑↑________//////

// feedback form 
 (function () {
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      document.getElementById('feedbackSuccess').style.display = 'block';
      form.reset();
      form.classList.remove('was-validated');
    });
  })();