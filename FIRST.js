/*let num=prompt("enter a number:");
if(num%5 === 0)
{
    console.log(num,"is a multiple of 5");
}
else
{
    console.log(num,"is not a multiple of 5");
}*/
/*let n=prompt("enter a number");
let sum=0;
for(let i=1;i<=n;i++)
{
    sum=sum+i;
}
console.log("sum=",sum);*/
/*console.log("even numbers between 0 and 100 ");//question no1
for(let i=0;i<=100;i++)
{
    if(i%2===0)
    {
        console.log(i);
    }
};*/
/*let n=prompt("enter the game number");//question no-2
let m=5;
while(m!=n)
{
    n=prompt(console.log("You guessed the incorrect game number.Please enter the correct game number"));
}
console.log(" Congratulations! You guessed correct game number");*/
/*let str=`This is a template literal`;//Template Literal ``->backtick
console.log(str);*/
/*let student={
    Name:"Abhijit",
    Branch:"C.E.N",
};
console.log("Name",student.Name,"is of","Branch",student.Branch);
let output=`Name ${student.Name} is of Branch ${student.Branch}`;//String Interpolation
console.log(output);*/
/*let name=prompt("enter your name");
console.log("@",name,name.length);*/
/*let num=[85,44,97,37,76,60]
let sum=0;
for(i=0;i<num.length;i++)
{
   sum=sum+num[i]; 
}
let n=num.length;
console.log("Average=",sum/n);*/
let n=[250,645,300,900,50];
for(i=0;i<n.length;i++)
{
    n[i]=(n[i]-0.10*n[i]);
}
console.log("Final price after applying offer");
for(i=0;i<n.length;i++)
{
    console.log(n[i]);
}
