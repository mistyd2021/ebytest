$(document).ready(function () {
    // OPEN MODAL
    $("#startBtn").click(function () {
        $("#stepOneWindow").modal("show");
    });
    // DISPLAY CUSTOM COLORS WHEN CUSTOM STYLES IS SELECTED
    $("#styleCustom").click(function () {
        $("#customColors").removeClass("visible")
    });
});

// ATTEMPT TO GET SELECTED RADIO BUTTONS
$(document).ready(function () {
    $("#reviewBox").click(function () {
        var boxList = [];
        // LOOP THROUGH RADIO BUTTONS
        $(".createBox").each(function () {
            var radioValue = $("input[type='radio']:checked", $(this)).val();
        });
        console.log(boxList);
    });
});