var outputArray = [];
console.log = function(e) {
    outputArray.push(e);
};
try{
    var url = location.href;
    var backTo = url.split('?dt=')[1].split('&script=')[0];
    // After the test is over, the page will be redirected to the backTo page.
    var script = url.split('&script=')[1].split('&testval=')[0];
    // The script that will be executed.
    var testval = url.split('&testval=')[1].split(';,');
    // This is the test value.
    // The url is like: http://example.com/test.html?dt=http://example.com/back.html&script=console.log(list);&testval=list=5;,list=4;,list=3;,list=2;,list=1;,list=0;
    script = decodeURIComponent(script);
    try{
        if(testval==undefined){
            eval(script);
        }
        else{
            for(let i=0;i<testval.length;i++){
                eval(decodeURIComponent(testval[i]));
                eval(script);
            }
        }
        // localStorage.clear();
        var token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        location.href = `${backTo}?success=t&token=${token}&script=${url.split('&script=')[1].split('&testval=')[0]}`;
        localStorage.setItem(token,  JSON.stringify(outputArray));
    }
    catch(e){
        console.table({Error:e.message});
        location.href = `${backTo}?error=${e}&script=${url.split('&script=')[1].split('&testval=')[0]}`;
    }
}
catch(e){
    console.error(e);
}