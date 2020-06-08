module.exports.home = function(req, res){
    // return res.end('Express is up');
    return res.render('home',{
        title: "Home1"
    });
}