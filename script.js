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

