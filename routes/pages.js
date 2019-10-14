// import pagesController from '../controller/pageController'
const pagesCon = require('../controller/pages')

module.exports = (app) => {
    app.get('/',pagesCon.index)
    app.get('/login',pagesCon.login)
    app.get('/home',pagesCon.home)
    app.get('/instock',pagesCon.instock)
    app.get('/preorder',pagesCon.preorder)
}