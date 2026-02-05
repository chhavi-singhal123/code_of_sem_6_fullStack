console.log("chhavi singhal");
chhavi();
function chhavi(){
    console.log("hello");

}
const fs = require('fs');
fs.writeFile('chhavi.txt' , 'hello world',function(err){
    if (err) console.log("hey aya kuch error");
    console.log('file has been created');
});


fs.appendFile('chhavi.txt','mera nmae chhavi singhal hai' , function(err){
    if(err) console.log('hey everyone');
    console.log('file bn gyi');
});

fs.rename('chhavi.txt','hii aya kuch error', function(err){
    if(err)console.log('hii sabko');
    console.log('yeah ye bhi bn gyi')
});

fs.unlink('chhavi.txt',function(err){
    if(err)console.log("radhe radhe");
    console.log('are waah ye bhi kar liya hamne')
});