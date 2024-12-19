document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('image');
    if (!img) return;

    const line = document.getElementById('now');
    line.style.width = `${img.clientWidth}px`;

    function updateLinePosition() {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const totalDayTime = endOfDay - startOfDay;
        const elapsedTime = now - startOfDay;
        const imgHeight = img.clientHeight;
        const newYPosition = (elapsedTime / totalDayTime) * imgHeight;
        line.style.top = `${newYPosition}px`;
    }

    updateLinePosition();
    setInterval(updateLinePosition, 60000); // Update every minute

    const timeElement = document.getElementById('current-time');

    function updateTime() {
        const now = new Date();
        const options = { timeZone: 'Asia/Seoul', hour12: false };
        const timeString = now.toLocaleTimeString('ko-KR', options);
        timeElement.textContent = timeString;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update every second
});