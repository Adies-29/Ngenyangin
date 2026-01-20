function init3DSlider() {
    const cards = document.querySelectorAll('.menu-card');
    let isAnimating = false;
    
    // Cari elemen tengah awal
    let centerCard = document.querySelector('.pos-center'); 

    // Cek apakah elemen ada (supaya tidak error di halaman lain)
    if (!cards.length || !centerCard) return;

    cards.forEach((card) => {
        // Event Listener untuk Click
        card.addEventListener('mouseenter', () => {
            
            // Block jika animasi sedang jalan
            if (isAnimating) return;

            // Block jika klik card yang MEMANG SUDAH di tengah
            if (card === centerCard) return;

            isAnimating = true;

            // Logic swap posisi (Tukar Kelas)
            if (card.classList.contains('pos-left')) {
                // Kiri pindah ke Tengah
                card.classList.replace('pos-left', 'pos-center');
                // Tengah lama pindah ke Kiri
                centerCard?.classList.replace('pos-center', 'pos-left');
            } else if (card.classList.contains('pos-right')) {
                // Kanan pindah ke Tengah
                card.classList.replace('pos-right', 'pos-center');
                // Tengah lama pindah ke Kanan
                centerCard?.classList.replace('pos-center', 'pos-right');
            }

            // Update variabel centerCard ke kartu yang baru
            centerCard = card;

            // Unlock setelah animasi CSS selesai (600ms)
            setTimeout(() => {
                isAnimating = false;
            }, 600);
        });
    });
}

// Jalankan fungsi saat browser selesai loading
document.addEventListener('DOMContentLoaded', init3DSlider);

// PENTING: Jika nanti kamu pakai Astro View Transitions, tambahkan baris ini juga:
document.addEventListener('astro:page-load', init3DSlider);