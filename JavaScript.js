var chek = 0;
function chekName(UserName) {
    alert(UserName.length);
    chek = 0;
    if (UserName.length >1 && UserName.length < 12) {
        chek = 1;
        return chek;
            }
    else

        alert("שם פרטי/משפחה חייב להכיל בין 2 ל 12 אותיות ");
    return chek;
}
function chekNum(UserNum) {
    chek = 0;
    if (UserNum.length == 10) {
        for (i = 0; i < UserNum.length; i++) {
            if (UserNum[i] < 0 || UserNum[i] > 9) {
                return chek;
            }
        }
        chek = 1;
        return chek;
    }
    else {
        document.getElementById('usrtel').innerHTML = " ";
        alert("אורך מספר הטלפון לא תקין ");
        return chek;
    }

}
function chekForm() {
    alert("hii");
    var fname = document.getElementById('fNameUser').value;
    var lname = document.getElementById('lNameUser').value;
   
    var numU = document.getElementById('usrtel').value;
    
     var sum = 0;
    sum = chekName(fname);
    if (sum == 0) {
        document.getElementById('fNameUser').innerHTML = " ";
    }
       sum = sum + chekName(lname);
    if (sum <1) {
        document.getElementById('lNameUser').innerHTML = " ";
    }
    sum = sum + chekNum(numU);
    if (sum == 3) {
        alert("הטופס נשלח בהצלחה");
    }
    }
    
