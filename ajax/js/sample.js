$(function(){
    $('.push').click(function(){
        // 関数呼び出し
        ajaxCall();
    });
    
    
    function ajaxCall() {
        $.ajax({
            url: 'sample.php',
            dateType: 'json',
            type: 'POST',
            data: {
                'userid': $('.userid').val()
            }
        }).done(function(data, status, jqXHR) {
            // コールに成功したときの動作
            console.log(data, status, jqXHR);  // TEST
            alert('OK!');
        }).fail(function(jqXHR, status, error) {
            // コールにしくったときの動作
            console.log(jqXHR, status, error);  // TEST
            alert('NG...');
        });
    }
});

