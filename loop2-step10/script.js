const steps = document.querySelectorAll(".step");

steps.forEach((e) =>
  e.addEventListener("click", function () {
    var stepElement = e;
    steps.forEach((stepItem) => {
      if (stepItem !== stepElement) {
        stepItem.classList.remove("active");
      }
    });
    stepElement.classList.toggle("active");
  })
);
