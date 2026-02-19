function dohandling(){
   throw new Error("This is an error");
}

function init(){
    try {
       
        dohandling();
    }
    catch(e){
        console.log(e);    }

        console.log("This is after the error"); 
}

init();