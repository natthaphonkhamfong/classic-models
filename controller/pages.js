const fs = require('fs');
const path = require('path')

var pathIndex = path.join(__dirname,'../pages','index.html')
var pathLogin = path.join(__dirname,'../pages','login.html')
var pathHome = path.join(__dirname,'../pages','home.html')
var pathInstock = path.join(__dirname,'../pages/ordering','instock.html')
var pathPreorder = path.join(__dirname,'../pages/ordering','preorder.html')

module.exports = {
    index (req,res){
        fs.readFile(pathIndex,(err,data)=>{
            if(err) throw err
            res.end(data)
        })
        
    }
    ,
    login (req,res){
        fs.readFile(pathLogin,(err,data)=>{
            if(err) throw err
            res.end(data)
        })
        
    },
    home (req,res){
        fs.readFile(pathHome,(err,data)=>{
            if(err) throw err
            res.end(data)
        })
        
    },
    instock (req,res){
        fs.readFile(pathInstock,(err,data)=>{
            if(err) throw err
            res.end(data)
        })
        
    },
    preorder (req,res){
        fs.readFile(pathPreorder,(err,data)=>{
            if(err) throw err
            res.end(data)
        })
    }
}