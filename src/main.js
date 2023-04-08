const loadIndex = () => {
    let minutes = new Date().getHours() * 60 + new Date().getMinutes()
    console.log(minutes)
    if (minutes < 720 && minutes > 240) {
        console.log('Good morning!')
      } else if (minutes < 1080) {
        console.log('Good afternoon!')
      } else if (minutes < 1320) {
        console.log('Good evening!')
      } else {
        console.log('Good night!')
      }
    
    TimeColor(minutes)

    Write("Michael Andreev", "name")
    setTimeout(() => {Write("Software & Robotics engineer", "title")}, 100 + "Michael Andreev".length * 50)
    setTimeout(() => {$('.content')[0].setAttribute('style', 'display: block')}, 200 + "Michael Andreev".length * 100 + "Software & Robotics engineer".length * 100)
    for (let i = 0; i <= 1; i += 0.001) {
        setTimeout(() => {$('.content')[0].setAttribute("style", "opacity: " + i)}, 200 + "Michael Andreev".length * 100 + "Software & Robotics engineer".length * 100 + i * 1000)
    }

    

}

const Write = (text, id) => {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.substring(0, document.getElementById(id).innerHTML.length - 1)
            document.getElementById(id).innerHTML += text[i]
            document.getElementById(id).innerHTML += "_"
        }, 1000 + i * 50)
    }
    setTimeout(() => {
        document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.substring(0, document.getElementById(id).innerHTML.length - 1)
    }, 1000 + text.length * 50)
}

const TimeColor = (minutes) => {
    let c1 = ColorSteps.getColorSteps('#2b2924', '#866f4a', 180)
    let c2 = ColorSteps.getColorSteps('#866f4a', '#e29939', 180)
    let c3 = ColorSteps.getColorSteps('#e29939', '#ffe225', 360)
    let mastercolor = []
    for (let i = 0; i < c1.length; i++) { mastercolor[i] = c1[i] }
    for (let i = 0; i < c2.length; i++) { mastercolor[i + 180] = c2[i] }
    for (let i = 0; i < c3.length; i++) { mastercolor[i + 360] = c3[i] }
    let bg = ''
    if (minutes < 720) {
        bg = mastercolor[minutes]
    } else {
        bg = mastercolor[720 - (minutes - 720)]
    }
    console.log(bg)
    document.getElementsByTagName("body")[0].setAttribute("style", "background-color: " + bg + ";")
}