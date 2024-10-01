    const gmailInput = document.querySelector('#gmail_input')
    const gmailButton = document.querySelector('#gmail_button')
    const gmailResult = document.querySelector('#gmail_result')

    const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    gmailButton.onclick = () => {
        if (regExp.test(gmailInput.value)) {
            gmailResult.innerHTML = 'OK'
            gmailResult.style.color = 'green'
        } else {
            gmailResult.innerHTML = 'NOT OK'
            gmailResult.style.color = 'red'
        }
    }

    const childBlock = document.querySelector(".child_block")

    let position = 0;
    const stopPosition = 450;

    function move() {
        if (position < stopPosition) {
            position += 2;
            childBlock.style.left = `${position}px`;
            requestAnimationFrame(move)
        }
    }
    move()
