const dateForm = document.getElementById("date-form")
const countdownBox= document.getElementById("countdown-box")

dateForm.addEventListener('submit', e=> {
    e.preventDefault()

    const dateInput = document.getElementById("date-input")
    const timeInput = document.getElementById("time-input")
    const eventDate = Date.parse(dateInput.value + " " + timeInput.value)

    window.eventCountdown && clearInterval(window.eventCountdown)

    const eventCountdown = setInterval(()=> {
        window.eventCountdown = eventCountdown
        const now = new Date().getTime()

        const daysDivider = 1000 * 60 * 60 * 24
        const hoursDivider = 1000 * 60 * 60 
        const minutesDivider = 1000 * 60 
        const secondsDivider = 1000 

        const d = Math.floor(eventDate / daysDivider - now / daysDivider)
        const h = Math.floor((eventDate / hoursDivider - now / hoursDivider) % 24) 
        const m = Math.floor((eventDate / minutesDivider - now /minutesDivider) % 60)
        const s = Math.floor((eventDate / secondsDivider - now /secondsDivider) % 60)

        const diff = eventDate - now

        if( diff > 0 ) {
            countdownBox.innerHTML = `${d} days, ${h} hours, ${m} minutes, ${s} seconds`
        } else {
            countdownBox.innerHTML = "<b> countdown completed</b>"
        }

    },1000)
})  
