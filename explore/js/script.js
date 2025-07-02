async function fetchCryptoPrices() {
    try {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,ripple,solana&vs_currencies=idr'
        );
        const data = await response.json();

        // Update harga di HTML
        document.getElementById('btc-price').textContent = `1 BTC = ${data.bitcoin.idr.toLocaleString('en-US', { minimumFractionDigits: 2 })} IDR`;
        document.getElementById('eth-price').textContent = `1 ETH = ${data.ethereum.idr.toLocaleString('en-US', { minimumFractionDigits: 2 })} IDR`;
        document.getElementById('bnb-price').textContent = `1 BNB = ${data.binancecoin.idr.toLocaleString('en-US', { minimumFractionDigits: 2 })} IDR`;
        document.getElementById('ada-price').textContent = `1 ADA = ${data.cardano.idr.toLocaleString('en-US', { minimumFractionDigits: 2 })} IDR`;
        document.getElementById('xrp-price').textContent = `1 XRP = ${data.ripple.idr.toLocaleString('en-US', { minimumFractionDigits: 2 })} IDR`;
        document.getElementById('sol-price').textContent = `1 SOL = ${data.solana.idr.toLocaleString('en-US', { minimumFractionDigits: 2 })} IDR`;
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
    }
}

// Panggil fungsi pertama kali
fetchCryptoPrices();

// Perbarui harga setiap 60 detik
setInterval(fetchCryptoPrices, 60000);

// Existing script.js content (unchanged)
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let navClose = document.querySelector('#nav-close');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let closeSearch = document.querySelector('#close-search');

if (menuBtn) {
    menuBtn.onclick = () => {
        navbar.classList.add('active');
    }
}
if (navClose) {
    navClose.onclick = () => {
        navbar.classList.remove('active');
    }
}
if (searchBtn) {
    searchBtn.onclick = () => {
        searchForm.classList.add('active');
    }
}
if (closeSearch) {
    closeSearch.onclick = () => {
        searchForm.classList.remove('active');
    }
}

window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".clients-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});