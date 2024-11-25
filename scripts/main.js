
document.getElementById("open-add-blogers").addEventListener("click", function() {
    document.getElementById("add-modal-block-blogers").classList.add("open")
})


document.getElementById("commit-add-blogers").addEventListener("click", function() {
    document.getElementById("add-modal-block-blogers").classList.remove("open")
})


document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        document.getElementById("add-modal-block-blogers").classList.remove("open")
    }
})


document.querySelector("modal_add .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true
})
