let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 3
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link"); // Select all navbar links
  const projectsSection = document.getElementById("projects"); // Target the projects section

  if (!navLinks.length || !projectsSection) {
    console.error("Navbar links or #projects section not found");
    return;
  }

  window.addEventListener("scroll", function () {
    const sectionTop = projectsSection.offsetTop;
    const sectionHeight = projectsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Detects middle of viewport

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.style.color = "white");
    } else {
      navLinks.forEach(link => link.style.color = "black");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNav() {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50; // Adjust for navbar height
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        document
          .querySelector(`.nav-link[href="#${section.id}"]`)
          .classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav(); // Run on page load in case user is not at the top
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const step = Math.floor(scrollPosition / window.innerHeight) % 4;
  
  let borderColors = [
      "black transparent transparent black",
      "transparent black black transparent",
      "black black transparent transparent",
      "transparent transparent black black"
  ];
  
  document.querySelector('.border-overlay').style.borderColor = borderColors[step];
});
