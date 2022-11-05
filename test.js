

function anuj(){
    console.log(this);

    function fn(){
        console.log(this);
    }

    fn();

}
let nishant = {
    an : anuj
}

nishant.an()