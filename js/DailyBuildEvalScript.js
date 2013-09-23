$('document').ready(function () {
    
    var monthNames = new Array("January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December" );
                      
    var date = new Date();
    
    if(date.getDay() == 0) //today == sunday
    {
        date.setDate(date.getDate() - 2);
    }
    else if(date.getDay() == 1) //today == monday
    {
        date.setDate(date.getDate() - 3);
    }
    else
    {
        date.setDate(date.getDate() - 1);
    }
    
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    
     //$('.debug').append("<h2>" + date.getDate() + " " + month + " " + year);
        
});