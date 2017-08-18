(function() {
    window.onload = function() {
        var timer = null,
            fieldsCount = 25,
            grid = document.getElementById('grid'),
            start = document.getElementById('start'),
            stop = document.getElementById('stop'),
            info = document.getElementById('info'),
            main = function(count) {
                var array = new Array(count);
                for(var i = 0; i < count;) {
                  array[i] = ++i;
                }
                drawGrid(array, grid);
            },
            drawGrid = function(array, canvas) {
                var markup = '',
                    length = array.length;
                for(var i = 0; i < length; i++) {
                    markup += '<div class="number">' + array[i] + '</div>';
                }
                canvas.innerHTML = markup;
            },
            generateUniqueRandomArray = function(count) {
                var array = [],
                    randomNumber = 0;
                while(array.length < count) {
                    randomNumber = Math.ceil(Math.random() * count);
                    if(array.indexOf(randomNumber) > -1) {
                        continue;
                    }
                    array[array.length] = randomNumber;
                }
                return array;
            };
        start.onclick = function () {
            var i = 0;
            drawGrid(generateUniqueRandomArray(fieldsCount), grid);
            clearInterval(timer);
            info.innerHTML = i;
            timer = setInterval(function() {
                info.innerHTML = ++i;
            }, 1000);
        };
        stop.onclick = function() {
            clearInterval(timer);
        };
        main(fieldsCount);
    }
}());