var c=0, c2=0, c3=0, c4=0;
    
     function cerrar()
     {
      if (c==0) {
        document.getElementById('PF').style.display = 'block';
        c=1;
      } else {
        document.getElementById('PF').style.display = 'none';
        c=0;
      }
     }

     document.getElementById('ocultar').addEventListener('click',cerrar,true)

     function cerrar2()
     {
      if (c2==0) {
        document.getElementById('PF2').style.display = 'block';
        c2=1;
      } else {
        document.getElementById('PF2').style.display = 'none';
        c2=0;
      }
     }

     document.getElementById('ocultar2').addEventListener('click',cerrar2,true)

     function cerrar3()
     {
      if (c2==0) {
        document.getElementById('PF3').style.display = 'block';
        c2=1;
      } else {
        document.getElementById('PF3').style.display = 'none';
        c2=0;
      }
     }

     document.getElementById('ocultar3').addEventListener('click',cerrar3,true)

     function cerrar4()
     {
      if (c4==0) {
        document.getElementById('PF4').style.display = 'block';
        c4=1;
      } else {
        document.getElementById('PF4').style.display = 'none';
        c4=0;
      }
     }

     document.getElementById('ocultar4').addEventListener('click',cerrar4,true)