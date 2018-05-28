var n=new Array();
function sixt(){
    var sum=document.getElementById("num").value;
    var m=parseInt(sum);
    arr(m);  
}
function add()
{
    var sum=document.getElementById("arr").value;
    n.push(parseInt(sum));
    document.getElementById("arr").value="";
}
function arr(m)
{
    document.getElementById("res").innerHTML=n+"<br>";
    var i;
    var j;
    for(i=0;i<n.length;i++)
    {
        for(j=i+1;j<n.length;j++)
        {
            if(n[i]+n[j]==m)
            {
                document.getElementById("res").innerHTML+="\""+n[i]+"\,"+n[j]+"<br>";
            }
        }
    }
}