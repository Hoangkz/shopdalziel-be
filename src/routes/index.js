

function route(app){
 app.get('/news', (req, res) => {
        // console.log(req.query.q);
        res.render('news');
    })
}
module.exports = route;


// function route(app){
    
    // app.get('/news', (req, res) => {
    //     // console.log(req.query.q);
    //     res.render('news');
    // })
    // =>
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })

    // app.get('/', (req, res) => {
    //     // console.log(req.query.q);
    //     res.render('home');
    // })
    // app.get('/search', (req, res) => {
    //     // console.log(req.query.q);
    //     res.render('search');
    // })

    // app.post('/search', (req, res) => {
    //     console.log(req.body.gender);
    //     res.send('');
    // })
// }
// module.exports = route;

