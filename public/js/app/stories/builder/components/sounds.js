$(document).ready(function () {
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Ocean",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/ocean.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_1",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar1").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_1").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_2").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Birds",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/birds160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_2",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar2").slider({
        orientation: "horizontal",
        value: 50,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_2").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_3").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Wind",
                mp3: "http://520766843.r.fdccdn.net/sounds/gale160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_3",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar3").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_3").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_4").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Whitenoise",
                mp3: "http://520766843.r.fdccdn.net/sounds/noise/white-noise144.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_4",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar4").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_4").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_5").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Library",
                mp3: "http://520766843.r.fdccdn.net/sounds/people/delft-library160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_5",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar5").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_5").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_6").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Train",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/train160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_6",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar6").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_6").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_7").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "River",
                mp3: "http://520766843.r.fdccdn.net/sounds/river160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_7",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar7").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_7").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_8").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Fire",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/fireplace.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_8",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar8").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_8").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_9").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Crickets",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/crickets160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_9",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar9").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_9").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_10").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Dolphins",
                mp3: "http://520766843.r.fdccdn.net/sounds/ocean/dolphin-screaming160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_10",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar10").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_10").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_11").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Road",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/highway160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_11",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar11").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_11").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_12").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Fan",
                mp3: "http://520766843.r.fdccdn.net/sounds/objects/deskfan160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_12",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar12").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_12").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_13").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Rain",
                mp3: "http://520766843.r.fdccdn.net/sounds/rain/rainbest160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_13",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar13").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_13").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_14").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Thunder",
                mp3: "http://520766843.r.fdccdn.net/sounds/rain/thunder160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_14",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar14").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_14").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_15").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Snow",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/snow.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_15",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar15").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_15").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_16").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Windchime",
                mp3: "http://520766843.r.fdccdn.net/sounds/windchime160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_16",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar16").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_16").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_17").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Cafe",
                mp3: "http://520766843.r.fdccdn.net/sounds/cafe/cafe-brazil-walla160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_17",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar17").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_17").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_18").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Countryside",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/fryers-forest160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_18",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar18").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_18").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_19").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Cat",
                mp3: "http://520766843.r.fdccdn.net/sounds/cat160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_19",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar19").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_19").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_20").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Leaves",
                mp3: "http://520766843.r.fdccdn.net/sounds/hipster/aspen-tree160.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_20",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar20").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_20").jPlayer("volume", volume);
        }
    });


    $("#jquery_jplayer_21").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Pinknoise",
                mp3: "http://520766843.r.fdccdn.net/sounds/noise/pink-noise144.mp3"
            });
        },
        swfPath: "js",
        preload: "none",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_21",
        loop: true,
        error: function (event) {
            var time = event.jPlayer.status.currentTime;
            $(this).jPlayer("play", time);
        }
    });

    $(".jp-volume-bar21").slider({
        orientation: "horizontal",
        value: 80,
        slide: function (event, ui) {
            var volume = ui.value / 100;
            $("#jquery_jplayer_21").jPlayer("volume", volume);
        }
    });


    $("#stop_all").click(function () {
        setTimeout(function () {
            $(".jp-pause").trigger("click")
        }, 3600000); // write the time after you want to stop 1000 = 1 second //
    });


});