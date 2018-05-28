n=[];
function add()
{
    var name=document.getElementById("name").value;
    var amount=document.getElementById("amount").value;
    n.push({key:name,val:amount});
    document.getElementById("name").value="";
    document.getElementById("amount").value="";
}
function eigt()
{
    var sum=0,i;
    document.getElementById("res").innerHTML="";
    for(i=0;i<n.length;i++)
    {
        document.getElementById("res").innerHTML+=n[i].key+"\,"+n[i].val+"<br>";
        sum+=Number(n[i].val);
    }

      document.getElementById("res").innerHTML+=parseInt(sum);
}
