
let button = document.querySelector('#button');
let attributeone = document.querySelector('#attribution1');
let golden = document.querySelector('#goldenretriever');

golden.style.display = 'none';
attributeone.style.display = 'none';

button.onclick = () => {
    golden.style.display = 'block';
    attributeone.style.display = 'block';
    button.style.display = 'none';
}

golden.onclick = () => {
    golden.style.display = 'none';
    attributeone.style.display = 'none';
    button.style.display = 'block';
}



let buttontwo = document.querySelector('#buttontwo');
let attributetwo = document.querySelector('#attribution2');
let attributethree = document.querySelector('#attribution3');
let yorkshire = document.querySelector('#yorkshireterrier');

attributethree.style.display = 'none';
attributetwo.style.display = 'block';

buttontwo.onmouseover = () => {
    if (yorkshire.getAttribute('src') === 'images/Yorkshire_Terrier.jpg') {
        yorkshire.setAttribute('src', 'images/Yorkshire_Terrier_2.jpg')
        attributetwo.style.display = 'none';
        attributethree.style.display = 'block';
    } else {
        yorkshire.setAttribute('src', 'images/Yorkshire_Terrier.jpg')
        attributethree.style.display = 'none';
        attributetwo.style.display = 'block';
    }
}





