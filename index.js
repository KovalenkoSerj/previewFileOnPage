var uploaded = localStorage.getItem('img') || [];
document.getElementById('output').innerHTML = uploaded;

function uploadImages(event) {
  var files = event.target.files, file, reader, i;
  for (i = 0; i < files.length; i++) {
    file = files[i];
    reader = new FileReader();
    reader.onload = (function (uploadedFiles) {
      return function (event) {
        var { type, name, size } = uploadedFiles, loaded = event.target, div;
        var images = [`<div>` + "<img id='image' src='" + loaded.result + "'/>" + '<br/>'
          + `<span>Type: ${type};</span>` + '<br/> '
          + `<span>Name: ${name};</span>` + '<br/> '
          + `<span>Size: ${(size / 1000).toFixed(1) + ('KB')};</span>` + `</div>`].join('');
        div = document.createElement("div");
        uploaded += images;
        div.innerHTML = images;
        localStorage.setItem('img', uploaded);
        document.getElementById("output").appendChild(div);
      }
    }(file));
    reader.readAsDataURL(file)
  }
};
document.getElementById("pull").addEventListener("change", uploadImages);


