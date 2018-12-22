let allImages = $(".data-source img");
let galleryImages = $(".data-source img.gallery-item");
let gallery = $("#gallery")[0];
let slotMachine = $("#slot-machine")[0];

function displayNextGalleryImage() {
    if (galleryImages.length == 0)
        return;

    let pos = parseInt(gallery.dataset.position || 0);
    pos = (pos < galleryImages.length) ? pos : 0;

    $(gallery).transition('hide');
    gallery.src = galleryImages[pos].src;

    $(gallery).transition({
        'animation': 'fade right',
        'duration': '2s'
    });
    gallery.dataset.position = pos + 1;

}

function spinSlotMachine() {
    let rand = Math.floor(Math.random() * allImages.length);
    let image = allImages[rand];

    $(slotMachine).transition('hide');
    slotMachine.src = image.src;
    slotMachine.dataset.target = image.dataset.target;
    $(slotMachine).transition('tada');

}

if (gallery) {
    console.log('Initialising gallery with ' + galleryImages.length + ' images.')

    displayNextGalleryImage();
    setInterval(displayNextGalleryImage, 5000);
}


if (slotMachine) {
    console.log('Initialising slot machine with a random image.')
    spinSlotMachine();
}