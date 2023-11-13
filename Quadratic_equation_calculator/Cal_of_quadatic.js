document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);

    let discriminant = b**2 - 4*a*c;
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.getElementById('x1').value = isNaN(x1) ? "N/A" : Math.floor(x1);
    document.getElementById('x2').value = isNaN(x2) ? "N/A" : Math.floor(x2);
});