function newImage(image, src, position, left, bottom, boolean) {
    let newImg = document.createElement('img');
    newImg.src = src;
    newImg.style.position = position;
    newImg.style.left = left;
    newImg.style.bottom = bottom;
    document.body.append(newImg);

    if (boolean === true && image === 'sword') { 
        newImg.addEventListener('click', function() {
            newImg.remove();
        });
        newImg.style.cursor = 'pointer';
    }
}

newImage('sword', 'assets/sword.png', 'fixed', '500px', '405px', true);
newImage('pineTree', 'assets/pine-tree.png', 'fixed', '450px', '200px');
newImage('greenCharacter', 'assets/green-character.gif', 'fixed', '100px', '100px');
newImage('tree', 'assets/tree.png', 'fixed', '200px', '300px');
newImage('pillar', 'assets/pillar.png', 'fixed', '350px', '100px');
newImage('crate', 'assets/crate.png', 'fixed', '150px', '200px');
newImage('well', 'assets/well.png', 'fixed', '500px', '425px');
