
function circumference(r){
    return 2 * r * Math.PI
}

// module.exports = "This is a circle library"
module.exports = circumference          //can only export one item, or it gets overwritten

function area(r){
    return Math.PI *r *r
}

//export multiple objects
module.exports = {
    circumference: circumference,
    area: area
}