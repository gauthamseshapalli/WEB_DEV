//node installed//


//anagram assignment

function isAnagram(str1,str2){

const sortedstr1= str1.split('').sort().join('');
const sortedstr2= str2.split('').sort().join('');

if(sortedstr1 == sortedstr2){
    console.log("anagram");
}else{
    console.log("not an anagram");

}

}


isAnagram("aba","baa");
