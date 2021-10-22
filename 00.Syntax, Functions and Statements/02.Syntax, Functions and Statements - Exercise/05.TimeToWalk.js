function calcTime(step, footPrint, speed) {
    let distance = step * footPrint;
    let speedInMps = speed / 3.6;

    let time = distance / speedInMps;
    let breaks = Math.trunc(distance / 500);
    time += (breaks * 60);

    let hours = Math.trunc(time / 3600);
    let minutes = Math.trunc((time % 3600) / 60);
    let seconds = Math.ceil(time % 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
}

calcTime(4000, 0.60, 5)
calcTime(2564, 0.70, 5.5)