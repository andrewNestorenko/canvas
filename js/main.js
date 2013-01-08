document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('main')
        , ctx = canvas.getContext('2d');

    var isMouseDown = 0;
    var started = false;

    canvas.addEventListener('mousedown', function (e) {
        isMouseDown = 1;
    }, false);

    canvas.addEventListener('mousemove', function (e) {
        if (isMouseDown) {
            var canX = e.pageX - canvas.offsetLeft;
            var canY = e.pageY - canvas.offsetTop;
            if (!started) {
                ctx.beginPath();
                ctx.moveTo(canX, canY);
                ctx.strokeStyle = getRandomColor();
                started = true;
            } else {
                ctx.lineTo(canX, canY);

                ctx.lineWidth = 10;
                ctx.stroke();
            }

        }
    }, false);

    document.getElementById('clear').addEventListener('click', function (e) {
        e.preventDefault();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.addEventListener('mouseup', function (e) {
        isMouseDown = 0;
        started = false;
        ctx.closePath();
    }, false);

}, false);

function getRandomColor() {
    return 'rgb(0, ' + Math.floor(255 - 42.5 * (Math.random() * 6 ) ) + ',' +
        Math.floor(255 - 42.5 *  (Math.random() * 6) ) + ')';
}