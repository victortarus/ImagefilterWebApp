const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');
//addFilters using event delegations
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function() {
                this.brightness(5).render();
            });
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function() {
                this.brightness(-5).render();
            });
        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function() {
                this.contrast(5).render();
            });
        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function() {
                this.contrast(-5).render();
            });
        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function() {
                this.saturation(5).render();
            });
        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function() {
                this.saturation(-5).render();
            });
        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function() {
                this.vibrance(5).render();
            });
        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function() {
                this.vibrance(-5).render();
            });
        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function() {
                this.lomo().render();
            });
        } else if (e.target.classList.contains('clarity-add ')) {
            Caman('#canvas', img, function() {
                this.clarity().render();
            });
        } else if (e.target.classList.contains('sincity-add')) {
            Caman('#canvas', img, function() {
                this.sinCity().render();
            });
        } else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function() {
                this.crossProcess().render();
            });
        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function() {
                this.pinhole().render();
            });
        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function() {
                this.nostalgia().render();
            });
        } else if (e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', img, function() {
                this.herMajesty().render();
            });
        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function() {
                this.vintage().render();
            });
        }

    }

});
//revert filter

revertBtn.addEventListener('click', function(e) {
    Caman('#canvas', img, function() {
        this.revert();
    });
});

//TOdo filters
//upload files
uploadFile.addEventListener("change", function(e) {
    //Get file
    const file = document.getElementById('upload-file')
        .files[0];

    //add filereaderapi
    //init file reader
    const reader = new FileReader();
    if (file) {
        //sets filename
        fileName = file.name
            // read data as url
        reader.readAsDataURL(file);
    }
    // add image to my canvas
    reader.addEventListener('load', function() {
        //create image
        img = new Image();
        //  set src
        img.src = reader.result;
        // image on load add to the canvas
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');
        };
    }, false);
});
//download image

downloadBtn.addEventListener('click', function(e) {
    //Get file ext
    const fileExtension = fileName.slice(-4);
    // init new file name
    let newFileName;
    // checkImgatype
    if (fileExtension === 'jpg' || fileExtension === "png") {
        newFileName = fileName.substring(0, fileName.length - 4) + 'edited.jpg';
    }
    //call download
    download(canvas, newFileName);
});

function download(canvas, filename) {
    //initialize event

    let e;
    //create link

    const link = document.createElement('a');

    // Set props
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);

    //create new mouse event

    e = new MouseEvent('click');
    // Dispatch event

    link.dispatchEvent(e);

}