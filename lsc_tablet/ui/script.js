$(document).ready(function(){
  $('.container').css('display', 'none')
  window.addEventListener("message", function(event){
    if(event.data.showhud == true){
      $('.faktura').css('display', 'none');  
      $('.container').css('display', 'block')

      const player = event.data.player



      document.getElementById("player").innerHTML ='Zalogowano jako: ' + player;




      $('#logout').css('display', 'block')
      $('#footer').css('display', 'block')
      $('#title').css('font-size', '60px')
      $('#faktura_btn').css('display', 'block')


      $('#powod_faktura').css('display', 'none')
      $('#minicontainer_faktura').css('display', 'none')
      $('#btn_faktura').css('display', 'none')
      $('#kwota_faktura').css('display', 'none')
      document.getElementById("title").innerHTML = 'Los Santos Customs'
      $('#anulujfakture').css('display', 'none')
    }
    if(event.data.faktura == true){



      const faktura = event.data.data
      document.getElementById("title").innerHTML ='Faktura od: <div id="pracownik">' + faktura.pracownik + "</div>";
      document.getElementById("hajs").innerHTML = faktura.kwota;
      document.getElementById("powod_faktura").innerHTML = faktura.powod;

      $('#title').css('font-size', '40px')
      $('#powod_faktura').css('display', 'block')

      $('#minicontainer_faktura').css('display', 'block')
      $('#btn_faktura').css('display', 'block')
      $('#kwota_faktura').css('display', 'block')
      
      $('.container').css('display', 'block')
      $('.menu').css('display', 'block')
      $('#anulujfakture').css('display', 'block')
      $('#faktura_btn').css('display', 'none')

      $('#wystawfakture_btn').css('display', 'none')
      $('#powod').css('display', 'none')
      $('#kwota').css('display', 'none')

      $('#logout').css('display', 'none')
      $('#footer').css('display', 'none');  
      // $('.faktura').css('display', 'block');  
    }
    if(event.data.showhud == false){
      $('.container').css('display', 'none')
    }
  });
});

function wylacztablet() {
  $('.container').css('display', 'none')
  $.post('http://lsc_tablet/wylacztablet', JSON.stringify({}));
}
function anulujfakture(){
  $('.container').css('display', 'none')
  $.post('http://lsc_tablet/anulujfakture', JSON.stringify({}));
}

function wyslijfaktura() { 
  $.post('http://lsc_tablet/wyslijfaktura', JSON.stringify({
    powod: document.getElementById('powod').value,
    kwota: document.getElementById('kwota').value,
  }));
}
function zaplacfakture() {
  $('.container').css('display', 'none')
  console.log("test")
  $.post('http://lsc_tablet/zaplacfakture', JSON.stringify({
    powod: document.getElementById("powod_faktura").innerText,
    kwota: document.getElementById("hajs").innerText,
    pracownik: document.getElementById("pracownik").innerText
  }));

  $.post('http://lsc_tablet/anulujfakture', JSON.stringify({}));
}



function wystawfakture() { 
  document.getElementById("title").innerHTML ='Faktura';
  $('#powod').css('display', 'block');
  $('.informacje').css('display', 'none');
  $('.searchbar').css('display', 'none');
  $('.t_button').css('display', 'none');  
  $('.obywatel').css('display', 'none');
  $('#wystawfakture_btn').css('display', 'block');
  $('#kwota').css('display', 'block');
}

