'use strict';

var MSG = {
    url_invalid: 'Đường link không hợp lệ.'
}

function renderSponsor() {

}

function getEther() {
    var url = $('#social-link').val();
    if(!url || !urlCheck(url)) {
        alert(MSG.url_invalid)
    }
}

function urlCheck(url) {
    var reg = /^((http[s]):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
    if(!reg.test(url)) {
        return false;
    }
    return true;
}

$(document).ready(function(){
    renderSponsor();
    $('#btn-get-eth').on('click', function(){
        alert(1)
        getEther();
    });
})