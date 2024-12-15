var arr = [
    { dp: "images/1.jpg", story: "images/1.jpg" },
    { dp: "images/2.jpg", story: "images/2.jpg" },
    { dp: "images/3.png", story: "images/3.png" },
    { dp: "images/4.jpg", story: "images/4.jpg" },
    { dp: "images/5.jpg", story: "images/5.jpg" }
]
var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
stories.innerHTML = clutter

stories.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    // document.querySelector("#full-screen").style.transition = "all ease 1s"

    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none"
    }, 2000)
})