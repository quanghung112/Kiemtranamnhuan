function Kiemtra() {
    let year = parseInt(document.getElementById('Years').value);
    if (!year) {
        alert('hay nhap nam');
    }else if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    document.getElementById('Result').value = 'nam ' + year + ' is a leap year';
                } else {
                    document.getElementById('Result').value = 'nam ' + year + ' is NOT a leap year';
                }
            } else {
                document.getElementById('Result').value = 'nam ' + year + ' is a leap year';
            }
        } else {
            document.getElementById('Result').value = 'nam ' + year + ' is NOT a leap year';
        }
}
