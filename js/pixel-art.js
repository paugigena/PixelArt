var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    var indicadorColor = document.getElementById('indicador-de-color');
    indicadorColor.style.backgroundColor = colorActual;
  })
);

function recorrerLista() {
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDiv = document.createElement('div');
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.className = 'color-paleta';
    paleta.appendChild(nuevoDiv);
  }
}

function crearGrilla() {
  for (var i = 0; i < 1750; i++) {
    var pixel = document.createElement('div');
    grillaPixeles.appendChild(pixel);
  }
}

$(document).ready(function () {
  //cambia color seleccionado en indicador de color
  $('.color-paleta').click(function () {
    var $indicadorColor = $('#indicador-de-color');
    var $colorSeleccionado = $(this).css('backgroundColor');
    $indicadorColor.css('backgroundColor', $colorSeleccionado);
  });

  //pinta un pixel de la Grilla
  $('#grilla-pixeles div').click(function () {
    var $indicadorColor = $('#indicador-de-color').css('backgroundColor');
    $(this).css('backgroundColor', $indicadorColor);
  });

  //detectar mouse apretado
  var $mouseApretado = false;
  $('#grilla-pixeles div').mousedown(function () {
    $mouseApretado = true;
  });
  $('#grilla-pixeles div').mouseup(function () {
    $mouseApretado = false;

  });

  //pintar sostenido
  $('#grilla-pixeles div').hover(function () {
    if ($mouseApretado) {
      var $indicadorColor = $('#indicador-de-color').css('backgroundColor');
      $(this).css('backgroundColor', $indicadorColor);
    };
  });

  //borrar
  var $grillaPixeles = $('#grilla-pixeles div');
  $('#borrar').click(function () {
    $grillaPixeles.animate({ 'backgroundColor': 'white' }, 1500);
  });

  //cargar superheroe
  $('#batman').click(function () {
    cargarSuperheroe(batman);
  });
  $('#wonder').click(function () {
    cargarSuperheroe(wonder);
  });
  $('#flash').click(function () {
    cargarSuperheroe(flash);
  })
  $('#invisible').click(function () {
    cargarSuperheroe(invisible);
  })

  //guardar pixelArt
  $('#guardar').click(guardarPixelArt);

});


//llamada de funciones
recorrerLista();
crearGrilla();
