function Hello ( msg ) {
    console.log( 'Hello '+ msg + '!' );
}
Hello.prototype.apply = function(complier){
    complier.plugin('run', function(complier, callback){
        console.log('I am in Hello!');
        callback();
    })
}
module.exports = Hello;