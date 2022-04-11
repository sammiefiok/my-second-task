//no.1
if (browser = 'Edge') {
    alert("You've got the Edge")
} else if (browser = 'Chrome') {
    alert('Okay we support this browser too')
} else if (browser = 'Firefox') {
    alert("Okay we support this browser too");
} else if (browser = 'Safari') {
    alert("Okay we support this browser too");
} else if (browser = 'Opera') {
    alert("Okay we support this browser too");
} else {
    alert('We hope that this page looks okay');
}

//no.2
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
    case 1:
        alert(1);
    case 2 || 3:
        alert('2,3');
}