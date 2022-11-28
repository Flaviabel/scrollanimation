let content = document.querySelectorAll(".box");

function seeContent() {
    for (let i = 0; i < content.length; i++) {
        let element = content[i].getBoundingClientRect().top;
        let visible = 400;

        if (element < visible) {
            content[i].classList.add("active");
        }
         else{
            content[i].classList.remove("active");
        }
    }
}

document.addEventListener("scroll", seeContent);
seeContent();