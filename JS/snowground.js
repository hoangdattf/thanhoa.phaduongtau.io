$(document).ready(function () {

    $('body').flurry({
        height: 600, speed: 5000, small: 28,
        large: 68,
    });

    $('.toggle-snow').on('click', function (event) {

        event.preventDefault();

        try {
            $('body').flurry('destroy');
        }
        catch (err) {
            $('body').flurry();
        }
    });
});