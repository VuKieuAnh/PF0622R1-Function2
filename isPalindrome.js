function palindromeFun(str) {
    // convert the string into an array using the string.split() function  
    const arrValue = str.split(''); //   
    let n = arrValue.length;
    let mid = parseInt(n/2);
    for(let i =0; i<mid; i++){
        if(arrValue[i] != arrValue[n-1-i])
        return false;
    }
    return true;
   
}


function check(){
    //lay du lieu
    let str = document.getElementById("number").value;
    //goi ham kiem tra tinh doi xung
    let check = palindromeFun(str);
    //ket luan
    if(check){
        alert(`chuoi ${str} la chuoi doi xung`);
    }
    else{
        alert(`chuoi ${str} khong doi xung`);
    }
}
