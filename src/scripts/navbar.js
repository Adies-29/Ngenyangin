// --- File: src/scripts/navbar.js ---

// 1. LOGIKA ACTIVE MENU (Scroll Spy & Produk Page)
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Cek apakah sedang di halaman produk (URL mengandung 'product')
const isProductPage = window.location.href.includes("product");

if (isProductPage) {
    // SKENARIO A: HALAMAN PRODUK -> Paksa Kategori Nyala
    navLinks.forEach((link) => {
        link.classList.remove("active-nav");
        if (link.getAttribute("href").includes("kategori")) {
            link.classList.add("active-nav");
        }
    });
} else {
    // SKENARIO B: HOMEPAGE -> Scroll Spy
    if (sections.length > 0) {
        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 150) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active-nav");
                if (current && link.getAttribute("href").includes(current)) {
                    link.classList.add("active-nav");
                }
            });
        });
    }
}

// 2. LOGIKA SEARCH BAR (Pencarian Real-time)
const searchInput = document.getElementById("search-input");

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const keyword = e.target.value.toLowerCase();
        const cards = document.querySelectorAll(".product-item"); // Pastikan class ini ada di ProductCard

        cards.forEach((card) => {
            const productName = card.getAttribute("data-name") || "";
            
            if (productName.includes(keyword)) {
                card.style.display = ""; // Muncul
            } else {
                card.style.display = "none"; // Sembunyi
            }
        });

        // Scroll otomatis ke menu jika mengetik (Opsional)
        const menuSection = document.getElementById("menu") || document.getElementById("kategori");
        if (keyword.length > 0 && menuSection && window.scrollY < menuSection.offsetTop) {
             menuSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

