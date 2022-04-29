let rs=document.getElementById('dis');
function values(a)
{
	rs.value+=a;
}
function result(){
	rs.value=eval(rs.value)
}
function clearr(){
	rs.value=" ";
}
function delt(){
	rs.value=rs.value.substring(0,rs.value.length-1);
}