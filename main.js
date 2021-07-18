if ('serviceWorker' in navigator) {
    console.log("EXISTE");
    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log("SW Cargado correctamente", res))
        .catch(err => console.log("SE NO Cargado ", err))

} else {
    console.log("No Existe")
}
$(document).ready(function() {
    $("#menu a").click(function(e) {
        e.preventDefault();
        console.log($("footer").offset().top);
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    })
});