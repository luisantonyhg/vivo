function iniciar() {
    let coord = {lat: -12.2047569, lng:-76.9691828};
    let map = new google.maps.Map(document.getElementById('map'),{
    zoom:10,
    center:coord
});

let marker = new google.maps.Marker({
    position: coord,
    map: map
})
}