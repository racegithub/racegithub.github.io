$(document).ready(function(){
    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=8d73654b464540718d339bc78de836fb",
        success:function(data){
            console.log(data);
        },
        error:function(){
            //alert("Some Error occurred!");
        }
    })
})