function newElement(){
  if($('#myInput').val()==""||$('#myInput').val()==" "){
    alert("You must write something!");
  }
  else{
    var newListItem=$('#myInput').val();
    $("#myUL").append("<li>"+newListItem+"</li>")
  }
}
$('#myUL li .close-x').click(function(){
  $(this).parent().remove();
});
$('#myUL li').click(function(){
  $(this).addClass('cross-off');
});