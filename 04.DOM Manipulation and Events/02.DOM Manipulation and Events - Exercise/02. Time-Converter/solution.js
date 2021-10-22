function attachEventsListeners() {
    const rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        const inDays = value / rations[unit];

        return {
            days: inDays,
            hours: inDays * rations.hours,
            minutes: inDays * rations.minutes,
            seconds: inDays * rations.seconds
        }
    }

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    // document.getElementById('daysBtn').addEventListener('click', onConvert);
    // document.getElementById('hoursBtn').addEventListener('click', onConvert);
    // document.getElementById('minutesBtn').addEventListener('click', onConvert);
    // document.getElementById('secondsBtn').addEventListener('click', onConvert);

    document.querySelector('main').addEventListener('click', onConvert)

    function onConvert(e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
            const input = e.target.parentElement.querySelector('input[type = "text"]');
            const time = convert(Number(input.value), input.id);

            daysInput.value = time.days;
            hoursInput.value = time.hours;
            minutesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }


    //     const input = e.target.parentElement.querySelector('input[type = "text"]');
    //     const time = convert(Number(input.value), input.id);
    //
    //     daysInput.value = time.days;
    //     hoursInput.value = time.hours;
    //     minutesInput.value = time.minutes;
    //     secondsInput.value = time.seconds;
    }
}