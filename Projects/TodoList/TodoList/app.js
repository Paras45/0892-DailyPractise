const express =require('express');
const app =express();
var mysql = require('mysql');
const bodyparser =require('body-parser');
app.set('view engine','ejs')
//const ejs =require('ejs');
app.use(bodyparser.urlencoded({extended:false}));
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"todo"
})
con.connect((err)=>{
    if(err) throw err;
    console.log("connected successfully ... ");
})
app.get("/",(req,res)=>{
    let option={weekly :'long',year:'numeric',month:'long',day:'numeric'};
    let today=new Date();
    let day=today.toLocaleDateString("en-us",option);
    var Query="SELECT * FROM personals ";
    
   
    con.query(Query,function(error,data){
        if(error){
            throw error;
        }else{
            res.render("home",{name:data,day:day});
        }
        
    })
})
app.post("/add",(req,res)=>{
    var name=req.body.notes;
    
    
        var sql = "INSERT INTO personals (id , task ) VALUES ?";
        var values=[[,name]];
        con.query(sql,[values], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.redirect("/");
         });
   
    
});
app.post("/delete",(req,res)=>{
    if(!req.body.checkbox){
        res.redirect("/");
    }
    else{
        if(req.body.notes==""){
            var sql = "DELETE FROM personals WHERE id="+req.body.checkbox+"";
            con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("record deleted");
            res.redirect("/");
            });
        }
        else{
            var sql = "UPDATE personals SET task='"+req.body.notes+"' WHERE id="+req.body.checkbox+"";
            con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("record deleted");
            res.redirect("/");
            });
        }
    }
})




app.listen(1000);