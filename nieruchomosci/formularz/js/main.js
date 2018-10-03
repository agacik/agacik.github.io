$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        parListItems = $('div.setup-panel div p'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this),
            $par = $(this).next();

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
            parListItems.removeClass('stepwizard-active').addClass('stepwizard-item');
            $par.addClass('stepwizard-active');
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'],input[type='checkbox'],input[type='radio']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').removeClass('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');



    navListItems.click(function (e) {
        e.preventDefault();

        $(this).parent().prev().addClass('btn-check');
        $('.btn-check a').html('<i class="fa fa-check"></i>');

    });



    navListItems.click(function (e) {
        e.preventDefault();
        $(this).parent().next().removeClass('btn-check');
    });


    $('.read-more').click(function () {
        $(this).hide();
        $(this).next().show();
        $(this).next().next().show();
    });



    $('.read-less').click(function () {
        $(this).hide();
        $(this).prev().show();
        $(this).next().hide();
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});
