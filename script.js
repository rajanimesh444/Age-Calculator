function calculateDiff() {
    let date_1 = document.getElementById('bDate').value;
    let date_2 = document.getElementById('cDate').value;

    if(!date_2) {
        date_2 = new Date().toJSON().slice(0, 10);
    } 
    let dob = new Date(date_1);
    let cDate = new Date(date_2);

    let diff = new Date(cDate.getTime() - dob.getTime());

    let output = document.getElementById('showAge');
    output.id = "showAge";

    if(diff == NaN || !date_1) {
        output.innerHTML = "Please select date first!";
        return;
    }
    if(date_1 > date_2) {
        output.innerHTML = "Invalid Input!";
        return;
    }
    output.innerHTML = "Age: " + " " + Number(diff.getUTCFullYear() - 1970) +
    "Years " +
     " " + diff.getUTCMonth() +
      "Months " +
       " " +
        Number(diff.getUTCDate() - 1) +
        "Days";

}