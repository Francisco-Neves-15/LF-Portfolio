// *$ec* Geral
const mediaQuery = window.matchMedia("(max-width: 600px)")
let isSmallWidth = null
function uptade_media() {
    // 
    if (mediaQuery.matches) {
        isSmallWidth = true
    } else {
        isSmallWidth = false
    }
    toggle_navbar("resize")
}

// *$ec* Overlays

// *$oc* Toggle Overlay
const overlay_header = document.getElementById("overlay-header")

function toggle_overlay(type, witchOverlay) {
    const thisSelect_overlay = document.getElementById(`overlay-${witchOverlay}`)

    function cs_open() {
        thisSelect_overlay.classList.add("show")
        // thisSelect_overlay.removeAttribute("hidden")
        thisSelect_overlay.removeAttribute("inert")
    }
    function cs_close() {
        thisSelect_overlay.classList.remove("show")
        // thisSelect_overlay.setAttribute("hidden", "")
        thisSelect_overlay.setAttribute("inert", "")
    }

    // Yes, I use so much "if's" | Sim, eu uso muitos "if's"
    if (type === "open") {
        cs_open()
    } else {
        cs_close()
    }

}

// *$ec* Header
const el_header = document.getElementById("header")

// *$oc* Toggle Navbar
const el_navbar = document.getElementById("navbar")
const btn_toggleMenu = document.getElementById("btn-toggle-menu")

function toggle_navbar(type) {
    let aria_identif_geral = "aria-expanded"
    let aria_identif_btn = "aria-active"
    let this_status = el_navbar.getAttribute(aria_identif_geral)

    function cs_open() {
        el_navbar.setAttribute(aria_identif_geral, "true")
        el_header.setAttribute(aria_identif_geral, "true")
        btn_toggleMenu.setAttribute(aria_identif_btn, "true")
        el_navbar.removeAttribute("hidden")
        el_navbar.removeAttribute("inert")
        if (mediaQuery.matches) {
            toggle_overlay("open", "header")
        }
    }
    function cs_close() {
        el_navbar.setAttribute(aria_identif_geral, "false")
        el_header.setAttribute(aria_identif_geral, "false")
        btn_toggleMenu.setAttribute(aria_identif_btn, "false")
        el_navbar.setAttribute("hidden", "")
        el_navbar.setAttribute("inert", "")
        if (mediaQuery.matches) {
            toggle_overlay("close", "header")
        }
    }

    // Yes, I use so much "if's" | Sim, eu uso muitos "if's"
    if (type === "first") {
        cs_close()
        return
    } else if (type === "resize") {
        if (mediaQuery.matches) {
            cs_close()
        } else {
            cs_open()
        }
        return
    }

    if (type === "toggle") {
        if (this_status === "false") {
            cs_open()
        } else {
            cs_close()
        }
    }
    else if (type === "open") {
        cs_open()
    } else if (type === "close") {
        cs_close()
    }

}

document.addEventListener("DOMContentLoaded", () => {
    
    window.addEventListener("resize", () => {
        uptade_media()
        console.log("123123")
    })
    uptade_media()

    btn_toggleMenu.addEventListener("click", () => {
        toggle_navbar("toggle")
    })
    
    overlay_header.addEventListener("click", () => {
        toggle_navbar("toggle")
    })
    
})