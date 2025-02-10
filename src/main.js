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

    age = new Date().getFullYear() - 2005
    //console.log(new Date().getMonth() + 1)
    if (new Date().getMonth() + 1 < 9) age--
    if (new Date().getMonth() + 1 == 9) {
        if (new Date().getDate() < 20) age--
    }
    //console.log(age)

    document.getElementById("Hello").innerHTML = "Hello! I'm Michael - " + age + " y.o. developer and engineer. I like robots, drones and software development."

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
    // let c1 = ColorSteps.getColorSteps('#2b2924', '#866f4a', 180)
    // let c2 = ColorSteps.getColorSteps('#866f4a', '#a7722c', 180)
    // let c3 = ColorSteps.getColorSteps('#a7722c', '#e29939', 360)
    // let mastercolor = []
    // for (let i = 0; i < c1.length; i++) { mastercolor[i] = c1[i] }
    // for (let i = 0; i < c2.length; i++) { mastercolor[i + 180] = c2[i] }
    // for (let i = 0; i < c3.length; i++) { mastercolor[i + 360] = c3[i] }
    // let bg = ''
    // if (minutes < 720) {
    //     bg = mastercolor[minutes]
    // } else {
    //     bg = mastercolor[720 - (minutes - 720)]
    // }
    // console.log(bg)
    
    if (minutes < 720 && minutes > 240) {
        document.getElementsByTagName("body")[0].setAttribute("style", "background-color: #569DEE ;")
        for (let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].setAttribute("style", "color: #040622;")
        }
        console.log('Good morning!')
      } else if (minutes < 1080) {
        document.getElementsByTagName("body")[0].setAttribute("style", "background-color: #447DBE ;")
        for (let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].setAttribute("style", "color: #99fff2;")
        }
        console.log('Good afternoon!')
      } else if (minutes < 1320) {
        document.getElementsByTagName("body")[0].setAttribute("style", "background-color: #475D85 ;")
        for (let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].setAttribute("style", "color: #99fff2;")
        }
        console.log('Good evening!')
      } else {
        document.getElementsByTagName("body")[0].setAttribute("style", "background-color: #040622 ;")
        for (let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].setAttribute("style", "color: #99fff2;")
        }
        console.log('Good night!')
      }
}