
let Cookies = require('jscookie');
$(document).ready(function (){
    function loadCategories() {
        console.log('##########################');
        let setICategoriesItems = function (response) {
            let name;
            let localeValue;
            let userLocale = Cookies.get(I18N) || LOCALES.EN;
            let $owl = $('#categories_container');
            _.each(response, function (entry) {
                name = entry.name;
                if (userLocale !== LOCALES.EN) {
                    localeValue = _.find(entry.locales, function (localeEntry) {
                        return (userLocale === localeEntry.locale) ? localeEntry.value : null;
                    });
                    if (localeValue) {
                        name = localeValue.value;
                    }
                    name = name || entry.name;
                }
                $('<div class="item"></div>').append($('<h4></h4>').html(name)).appendTo($owl);
            });
            /*

             <div class="item"><h4>2</h4></div>
             <div class="item"><h4>3</h4></div>
             <div class="item"><h4>4</h4></div>
             <div class="item"><h4>5</h4></div>
             <div class="item"><h4>6</h4></div>
             <div class="item"><h4>7</h4></div>
             <div class="item"><h4>8</h4></div>
             <div class="item"><h4>9</h4></div>
             <div class="item"><h4>10</h4></div>
             <div class="item"><h4>11</h4></div>
             <div class="item"><h4>12</h4></div>
             */
            $owl.owlCarousel({
                loop: false,
                nav: true,
                margin: 10,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    960: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                },
                navText: ['<span><i class="icon-arrow-left"></i> </span>', '<span><i class="icon-arrow-right"></i> </span>'],
            });
            $owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY > 0) {
                    $owl.trigger('next.owl');
                } else {
                    $owl.trigger('prev.owl');
                }
                e.preventDefault();
            });
        }
        // get all pages of current stories
        $.get([API_HOST, 'categories'].join('/')).then(function (response) {
            // build item
            setICategoriesItems(response);
        }.bind(this));

    }

    function loadTopStories() {
        $.get([API_HOST, 'stories', 'top'].join('/')).then(function (response) {
            // build item
            new Vue({
                el: '#top_stories',
                data: {
                    items: response
                }
            })
        }.bind(this));

    }
    loadCategories();
    loadTopStories();
})