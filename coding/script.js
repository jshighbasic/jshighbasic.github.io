$('#submit').click(function(){
    location.href = '../testScript.html?dt='+location.href+'&script='+editor.getValue();
});