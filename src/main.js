const loadIndex = (minutes = new Date().getHours() * 60 + new Date().getMinutes()) => {
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
