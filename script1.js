var arr=[1,2,2,3,5,5,7,8,90,70,15,70]
var brr=[]
for(var i=0;i<arr.length;i++){
    if(brr.indexOf(arr[i])==-1){
        brr.push(arr[i])
    }
}
console.log(brr)