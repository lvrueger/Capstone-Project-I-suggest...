$(document)
    .ready(function () {

        // create sidebar and attach to menu open  /* SIDEBAR clickable*/
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');

        $('.overlay').visibility({
            type: 'fixed',
            offset: 80
        });
    });
