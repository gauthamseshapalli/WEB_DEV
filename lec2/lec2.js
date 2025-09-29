function sum(a,b){
    return a+b;

}

let ans= sum(1,2);
console.log(ans);


function canVote(age){
    if(age > 18 ){
        return true;
    }else{
        return false;

    }
}

let result= canVote(16);
console.log(result);

let user = {
    name:"gautham",

}
function greet(user){
    console.log("hi " + user.name );

}
greet;
