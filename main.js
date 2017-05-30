var memory_arr = [32, 64, 128];
var colors_arr = [ "white", "black", "red" ];
var color;
var memory;
var price;
var x = true;
var y = true;
var res = false;



do {
  memory = +prompt( 'Сколько памяти(32/64/128)', '' );
  for (var i = 0; i < memory_arr.length; i++) {
    if (memory === memory_arr[i]) {
      var x = false;
    };
    };

  if (x === true) {
    if (memory <= 47 && memory > 0)  {
      var res = confirm("Возможно вы имели ввиду 32?");
      if (res === true) {
        var memory = 32;
        var x = false;
        break;
      };
    }
    else if (memory > 47 && memory <= 95) {
      var res = confirm("Возможно вы имели ввиду 64?");
      if (res === true) {
        var memory = 64;
        var x = false;
        break;
      };
    }
    else if (memory > 95) {
      var res = confirm("Возможно вы имели ввиду 128?");
      if (res === true) {
        var memory = 128;
        var x = false;
        break;
      };
    }
    else {
      alert("Выберите между 32/64/128");
    };
  };
} while (x);


do {
  var color = prompt( 'Введите цвет(white, black, red)', '' );
  color = color.toLowerCase();
  for (var i = 0; i < colors_arr.length; i++) {
    if (color === colors_arr[i]) {
      var y = false;
    };
  };

} while (y);


if (memory == 32){
  price = 600;
} else if (memory == 64){
  price = 700;
} else{
  price = 800;
};
if (color == 'red'){
  price += 50;
}


document.write(`
   <h1>Phone:</h1><br>
   <img src="${color}.jpg">
   <br><h1>Price: ${price}</h1>
`)

//console.log( memory );
//console.log( color );
//console.log( price );



//////////////////
