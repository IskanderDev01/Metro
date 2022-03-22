window.addEventListener("DOMContentLoaded", () => {
    // ====================================HEADER===================================
    const header=document.querySelector('.header')
    const menuBurger = document.querySelector('.fa-bars')
    const menuListMedia = document.querySelector('.menu-list-media')
    const x = document.querySelector('.fa-times')
    const fxscr = document.querySelector('.krujochek')
    window.addEventListener('scroll',()=> {
        if (window.scrollY > 10) {
            header.classList.add('bx-shd')
        }else {
            header.classList.remove('bx-shd')
        }
    })
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            fxscr.classList.add('scroll-krujochek')
        } else {
            fxscr.classList.remove('scroll-krujochek')
        }
    })
    menuBurger.addEventListener('click', () => {
        menuBurger.style.display = "none"
        x.style.display = "block"
        menuListMedia.style.display = "block"
        menuListMedia.classList.add('transform')
    })
    x.addEventListener('click', () => {
        x.style.display = "none"
        menuBurger.style.display = "block"
        menuListMedia.style.display = "none"
        menuListMedia.classList.remove('transform')
    })
    // ====================================SLAYD===================================
    const knopka1 = document.querySelector('.knopka_1')
    const knopka2 = document.querySelector('.knopka_2')
    const knopka3 = document.querySelector('.knopka_3')
    const slaid1 = document.querySelector('.slayd-banner_block_1')
    const slaid2 = document.querySelector('.slayd-banner_block_2')
    const slaid3 = document.querySelector('.slayd-banner_block_3')
    knopka1.addEventListener('click', () => {
        knopka2.classList.remove('focus')
        knopka3.classList.remove('focus')
        knopka1.classList.add('focus')
        slaid2.style.display = "none"
        slaid3.style.display = "none"
        slaid1.style.display="block"
    })
    knopka2.addEventListener('click', () => {
        knopka1.classList.remove('focus')
        knopka3.classList.remove('focus')
        knopka2.classList.add('focus')
        slaid1.style.display = "none"
        slaid3.style.display = "none"
        slaid2.style.display="block"
    })
    knopka3.addEventListener('click', () => {
        knopka1.classList.remove('focus')
        knopka2.classList.remove('focus')
        knopka3.classList.add('focus')
        slaid1.style.display = "none"
        slaid2.style.display = "none"
        slaid3.style.display="block"
    })
})