function tinhGiaiThua(n){
    if(n<2) return 1;
    return n*tinhGiaiThua(n-1);
}



function isPalindrome(str) {
    let arrstr = str.split('');
    let result = '';
    if (arrstr.length > 2) {
      if (arrstr[0] !== arrstr[str.length-1]) {
        return false;
      } else {
        result = str.substr(1, str.length-2);
        return isPalindrome(result);
      }
    }
    return true;
}

