function ten()
{
    var i;
    var str=document.getElementById("str").value;
    var arr=str.split(",");
    document.getElementById("str").value="";
    for(i=0;i<arr.length;i++)
    palin(arr[i]);
}
function palin(str)
{
        var i,c=1,j=str.length;
        j--;    
        for(i=0;i<=j;i++,j--)
        {
            if(str.charAt(i)!=str.charAt(j))
               { c=0;
                break;
               }
        }
        if(c==1)
        {
            document.getElementById("res").innerHTML+=str+"\,";
        }
}

