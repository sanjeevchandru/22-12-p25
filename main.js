document.write("25.to sort the following array of objects by title value."+"<br>");
var arr = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    document.write("original array => "+JSON.stringify(arr)+"<br>")
    document.write("---------------------------------------------------------"+"<br>")
function test25(a,b){
    if(a.title<b.title){
        return -1;
    }
    if(a.title>b.title){
        return 1;
    }
return 0;
}
document.write(JSON.stringify(arr.sort(test25))+"<br><br>");