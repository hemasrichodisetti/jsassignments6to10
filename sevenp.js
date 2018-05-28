var n=new Array();
function sevt(){
    document.getElementById("res").innerHTML=n+"<br>";
    var i,j;
    n.sort();
    var prev=n[0];
    var count=1;
    for(i=1;i<n.length;i++)
    { 
          
            if (n[i] == prev) count++;
            else
            {    
                if(count>1)
                document.getElementById("res").innerHTML+="\""+prev+"\""+"<br>";
                count = 1;
                prev = n[i];
            }
            
    
    }
}
function add()
{
    var sum=document.getElementById("arr").value;
    n.push(parseInt(sum));
    document.getElementById("arr").value="";
}