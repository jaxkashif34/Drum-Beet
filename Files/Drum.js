// console.log("Kashif Ali is Connected")
{
    const playingClass = 'playing';
    const imageRotateDiv = document.querySelector(".imageRotateDiv")
    const imageFlatDiv = document.querySelector(".imageFlatDiv")
    // console.log(allBtns);

    const animationRotate = () => {
        imageRotateDiv.style.transform = "rotate(0deg)"
    }

    // animationRotate();
    const animationOppRotate = () => {
        imageRotateDiv.style.transform = "rotate(-14deg)"
    }

    const animationDown = () => {
        imageFlatDiv.style.top = "33.9%"
    }
    // animationButtons();
    // animationDown();

    const playSound = e => {
        const keyCode = e.keyCode;
        // console.log(keyCode)
        const keyElement = document.querySelector(`div[data-key="${keyCode}"]`)

        if (!keyElement) return;
        // console.log(keyElement)
        const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`)

        audioElement.currentTime = 0;
        audioElement.play();
        // console.log(audioElement.currentTime)

        switch (keyCode) {
            case 82:
                animationRotate();
                break;
            case 69:
                animationOppRotate();
                break;
            case 73:
            case 75:
                animationDown();
                break;
        }
        keyElement.classList.add(playingClass)
    }


    const removeanimationRotate = e => {
        if (e.propertyName !== 'transform') return;
        // console.log(e.propertyName)

        e.target.style.transform = 'rotate(-7deg)';
    };

    const removeanimationDown = e => {
        if (e.propertyName !== "top") return

        e.target.style.top = "33.1%"
    }

    const removeanimationBtn = e => {
        if (e.propertyName !== "transform") return

        e.target.classList.remove(playingClass)
    }

    const allBtns = Array.from(document.querySelectorAll('.key'));

    allBtns.forEach(key => {
        key.addEventListener('transitionend', removeanimationBtn);
    });

    imageRotateDiv.addEventListener("transitionend", removeanimationRotate)

    imageFlatDiv.addEventListener("transitionend", removeanimationDown)

    // playSound();

    window.addEventListener("keydown", playSound)

}