function date_time(id){
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');

    d = date.getDate();

    h = date.getHours();

    if(h<10){
        h = "0"+h;
    }
    if(h > 12){
        during = "PM";
        h = h - 12;
    }else{
        during = "AM";
    }
    m = date.getMinutes();

    if(m<10){
            m = "0"+m;
    }
    s = date.getSeconds();

    if(s<10){
           s = "0"+s;
    }

    result = ''+months[month]+' '+d+', '+year+' | '+h+':'+m+':'+s+' '+during;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("'+id+'");','1000');
    return true;
}

