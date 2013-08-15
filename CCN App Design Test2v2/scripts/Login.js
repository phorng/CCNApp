function login(e)
{
    var CoID=document.getElementById("CoID").value,
    UserID=document.getElementById("UserID").value,
    PW=document.getElementById("PW").value;
    
    if(CoID === "patrick" && UserID === "horng" && PW === "123") {
        app.navigate("#summary-screen");
        
    }
}