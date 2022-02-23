// try using a url with ?page=3

let result = null;

function getParameter( parameterName ) {
    let parameters = new URLSearchParams( window.location.search );
    result = parameters.get( "page" ) ;
    result == null ? alert("this is null") : console.log(result);
}

function sayHello() {
    console.log("Hello");
}

window.onload = function () {
    getParameter();
    sayHello();
};