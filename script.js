document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('image');
    if (!img) return;

    const line = document.getElementById('now');
    line.style.width = `${img.clientWidth}px`;

    function updateLinePosition() {
        const now = new Date();
        const AwakeTime = 7
        const SleepTime = 23
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const SpendTimeAfterAwake = now - startOfDay - AwakeTime*60*60*1000;
        if (SpendTimeAfterAwake < 0) {
            SpendTimeAfterAwake = 0;
        }
        const newYPosition = (SpendTimeAfterAwake / ((SleepTime-AwakeTime)*60*60*1000)) * img.clientHeight + img.offsetTop - 10;
        // console.log(img.offsetTop, img.clientHeight, newYPosition);
        line.style.top = `${newYPosition}px`;
    }

    updateLinePosition();
    setInterval(updateLinePosition, 1000); // Update every minute

    const timeElement = document.getElementById('current-time');

    function updateTime() {
        const now = new Date();
        const options = { timeZone: 'Asia/Seoul', hour12: false };
        const timeString = "지금은? " + now.toLocaleTimeString('ko-KR', options);
        timeElement.textContent = timeString;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update every second
});