import http from 'http';
import fs from 'fs';
const server=http.createServer((req,res)=>{
    if(req.url=='/home.html'){
        fs.readFile('index.html','utf-8',(err,htmlContent)=>{
            if(err){
                res.statusCode=500;;
                res.end("Internel server Error");
                return;
            }
            res.setHeader('Content-Type','text/html');
            res.end(htmlContent);
        });
    }else if(req.url === '/styles.cs'){
        fs.readFile('styles.css','utf-8',(err,cssContent)=>{
            if(err){
                res.statusCode=500;
                res.end("Internel server Error");
                return;
            }
            res.setHeader('Content-Type','text/css');
            res.end(cssContent);
        });
    }else{
        res.statusCode=404;
        res.end("Page Not Found");
    }
});

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});