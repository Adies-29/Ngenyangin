// Kita tempelkan ke 'window' supaya bisa dipanggil dari HTML onclick="..."
window.openTab = function(evt, tabName) {
    // 1. Sembunyikan semua konten tab
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("hidden");
        tabcontent[i].classList.remove("block");
    }

    // 2. Matikan style 'active' di semua tombol
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Munculkan tab yang dipilih
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.remove("hidden");
        targetTab.classList.add("block");
    }

    // 4. Nyalakan style 'active' di tombol yang diklik
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
};