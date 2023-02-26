const tlacitkostart = document.getElementById("tlacitkostart");
const uvod = document.getElementById("uvod");
const burger = document.getElementById("burger");
const counter = document.getElementById("counter");
const meat = document.getElementById("meat");
const vareni = document.getElementById("vareni");
const pokus = document.getElementById("pokus");
const vypsat = document.getElementById("vypsat");
const place = document.getElementById("place");
const dale2 = document.getElementById("dale2");
const nav = document.getElementById("nav");
const konec = document.getElementById("konec");
const vareni2 = document.getElementById("vareni2");
const burger2 = document.getElementById("burger2");
const counter2 = document.getElementById("counter2");
const meat2 = document.getElementById("meat2");
const dale3 = document.getElementById("dale3");
const konec2 = document.getElementById("konec2");
const konechry = document.getElementById("konechry");
const menu = document.getElementById("menu");
const navod = document.getElementById("navod");
const zpět = document.getElementById("zpet");
let time = 0;
let time2 = 0;
navod.onclick = () =>{
  uvod.style.display="none";
  info.style.display="block";
  zpět.style.display="block";
}
zpět.onclick = () => {
  window.location.reload();
}

menu.onclick = () =>{
  window.location.reload();

}
tlacitkostart.onclick = () => {
    uvod.style.display = "none";
burger.style.display = "block";
interval=setInterval(() => {
    time++;
  if(time>15){
    meat.style.backgroundImage="url(./res/img/hamprop-export.png)";
    counter.innerHTML="Propečené";
    meat.onclick = () => {
      burger.style.display = "none";
      vareni.style.display = "block"; 
      clearInterval(interval);
    }
  };
  if(time>30){
    burger.style.display = "none";
    konechry.style.display="block";
    }
}, 1000);
};

let a=0;
const dale = document.getElementById("dale");
const place1 = document.getElementById("place1");
const place2 = document.getElementById("place2");
const place3 = document.getElementById("place3");
const place4 = document.getElementById("place4");
const place5 = document.getElementById("place5");

let currentDroppable5 = null;

shouska.onmousedown = function(event) {

  let shiftX = event.clientX - shouska.getBoundingClientRect().left;
  let shiftY = event.clientY - shouska.getBoundingClientRect().top;

  shouska.style.position = 'absolute';
  shouska.style.zIndex = 1000;
  document.body.append(shouska);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    shouska.style.left = pageX - shiftX + 'px';
    shouska.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    shouska.hidden = true;
    let elemBelow5 = document.elementFromPoint(event.clientX, event.clientY);
    shouska.hidden = false;

    if (!elemBelow5) return;

    let droppableBelow5 = elemBelow5.closest('.droppable5');
    if (currentDroppable5 != droppableBelow5) {
      if (currentDroppable5) {
        leaveDroppable(currentDroppable5);
      }
      currentDroppable5 = droppableBelow5;
      if (currentDroppable5) {
        enterDroppable(currentDroppable5);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  shouska.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    shouska.onmouseup = null;
    let currentDroppable4 = null;

maso.onmousedown = function(event) {

  let shiftX = event.clientX - maso.getBoundingClientRect().left;
  let shiftY = event.clientY - maso.getBoundingClientRect().top;

  maso.style.position = 'absolute';
  maso.style.zIndex = 1000;
  document.body.append(maso);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    maso.style.left = pageX - shiftX + 'px';
    maso.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    maso.hidden = true;
    let elemBelow4 = document.elementFromPoint(event.clientX, event.clientY);
    maso.hidden = false;

    if (!elemBelow4) return;

    let droppableBelow4 = elemBelow4.closest('.droppable4');
    if (currentDroppable4 != droppableBelow4) {
      if (currentDroppable4) {
        leaveDroppable(currentDroppable4);
      }
      currentDroppable4 = droppableBelow4;
      if (currentDroppable4) {
        enterDroppable(currentDroppable4);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  maso.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    maso.onmouseup = null;
    let currentDroppable3 = null;

rajce.onmousedown = function(event) {

  let shiftX = event.clientX - rajce.getBoundingClientRect().left;
  let shiftY = event.clientY - rajce.getBoundingClientRect().top;

  rajce.style.position = 'absolute';
  rajce.style.zIndex = 1000;
  document.body.append(rajce);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    rajce.style.left = pageX - shiftX + 'px';
    rajce.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    rajce.hidden = true;
    let elemBelow3 = document.elementFromPoint(event.clientX, event.clientY);
    rajce.hidden = false;

    if (!elemBelow3) return;

    let droppableBelow3 = elemBelow3.closest('.droppable3');
    if (currentDroppable3 != droppableBelow3) {
      if (currentDroppable3) {
        leaveDroppable(currentDroppable3);
      }
      currentDroppable3 = droppableBelow3;
      if (currentDroppable3) {
        enterDroppable(currentDroppable3);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  rajce.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    rajce.onmouseup = null;
    let currentDroppable2 = null;

    salat.onmousedown = function(event) {

  let shiftX = event.clientX -salat.getBoundingClientRect().left;
  let shiftY = event.clientY - salat.getBoundingClientRect().top;

  salat.style.position = 'absolute';
  salat.style.zIndex = 1000;
  document.body.append(salat);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    salat.style.left = pageX - shiftX + 'px';
    salat.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    salat.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    salat.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable2');
    if (currentDroppable2 != droppableBelow) {
      if (currentDroppable2) {
        leaveDroppable(currentDroppable2);
      }
      currentDroppable2 = droppableBelow;
      if (currentDroppable2) {
        enterDroppable(currentDroppable2);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  salat.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    salat.onmouseup = null;
    let currentDroppable = null;
    hhouska.onmousedown = function(event) {

      let shiftX = event.clientX - hhouska.getBoundingClientRect().left;
      let shiftY = event.clientY - hhouska.getBoundingClientRect().top;

      hhouska.style.position = 'absolute';
      hhouska.style.zIndex = 1000;
      document.body.append(hhouska);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        hhouska.style.left = pageX - shiftX + 'px';
        hhouska.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        hhouska.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        hhouska.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) {
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);

          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      hhouska.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        hhouska.onmouseup = null;
        nav.innerHTML="Klikni na tlačítko dále"
        dale.onclick = () => {
          vareni.style.display="none";
          hhouska.style.display="none";
          salat.style.display="none";
          rajce.style.display="none";
          maso.style.display="none";
          shouska.style.display="none";
          konec.style.display="block";
        }
      };

    };

    function enterDroppable(place1) {
      place1.style.background = 'lightgreen';

    }

    function leaveDroppable(place1) {
      place1.style.background = '';

    }

    hhouska.ondragstart = function() {
      return false;
    };

  };

};

function enterDroppable(place2) {
  place2.style.background = 'lightgreen';


}

function leaveDroppable(place2) {
  place2.style.background = '';

}

salat.ondragstart = function() {
  return false;
};

  };

};

function enterDroppable(place3) {
  place3.style.background = 'lightgreen';

}

function leaveDroppable(place3) {
  place3.style.background = '';

}

rajce.ondragstart = function() {
  return false;
};
  };

};

function enterDroppable(place4) {
  place4.style.background = 'lightgreen';

}

function leaveDroppable(place4) {
  place4.style.background = '';

}

maso.ondragstart = function() {
  return false;
};
  };

};
function enterDroppable(place5) {
  place5.style.background = 'lightgreen';

}

function leaveDroppable(place5) {
  place5.style.background = '';

}

shouska.ondragstart = function() {
  return false;
};
dale2.onclick = () =>{
  konec.style.display="none";
  burger2.style.display="block";
  interval2=setInterval(() => {
      time2++;
    
    if(time2>15){
      counter2.innerHTML = "Propečené";
      meat2.style.backgroundImage="url(./res/img/doubleburger-export.png)";
    
      meat2.onclick = () => {
        burger2.style.display="none";
        vareni2.style.display="block";
        clearInterval(interval2);
      }
   
     };
     if(time2>30){
      burger2.style.display = "none";
      konechry.style.display="block";
      }
     
   }, 1000);
   };



const place6 = document.getElementById("place6");
const place7 = document.getElementById("place7");
const place8 = document.getElementById("place8");
const place9 = document.getElementById("place9");
const place10 = document.getElementById("place10");
const place11 = document.getElementById("place11");
const place12 = document.getElementById("place12");
const place13 = document.getElementById("place13");

let currentDroppable13 = null;

shouska2.onmousedown = function(event) {

  let shiftX = event.clientX - shouska2.getBoundingClientRect().left;
  let shiftY = event.clientY - shouska2.getBoundingClientRect().top;

  shouska2.style.position = 'absolute';
  shouska2.style.zIndex = 1000;
  document.body.append(shouska2);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    shouska2.style.left = pageX - shiftX + 'px';
    shouska2.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    shouska2.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    shouska2.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable13');
    if (currentDroppable13 != droppableBelow) {
      if (currentDroppable13) {
        leaveDroppable(currentDroppable13);
      }
      currentDroppable13 = droppableBelow;
      if (currentDroppable13) {
        enterDroppable(currentDroppable13);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  shouska2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    shouska2.onmouseup = null;
    let currentDroppable12 = null;

salat2.onmousedown = function(event) {

let shiftX = event.clientX -salat2.getBoundingClientRect().left;
let shiftY = event.clientY - salat2.getBoundingClientRect().top;

salat2.style.position = 'absolute';
salat2.style.zIndex = 1000;
document.body.append(salat2);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
salat2.style.left = pageX - shiftX + 'px';
salat2.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
moveAt(event.pageX, event.pageY);

salat2.hidden = true;
let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
salat2.hidden = false;

if (!elemBelow) return;

let droppableBelow = elemBelow.closest('.droppable12');
if (currentDroppable12 != droppableBelow) {
  if (currentDroppable12) {
    leaveDroppable(currentDroppable12);
  }
  currentDroppable12 = droppableBelow;
  if (currentDroppable12) {
    enterDroppable(currentDroppable12);
  }
}
}

document.addEventListener('mousemove', onMouseMove);

salat2.onmouseup = function() {
document.removeEventListener('mousemove', onMouseMove);
salat2.onmouseup = null;
let currentDroppable11 = null;

maso2.onmousedown = function(event) {

  let shiftX = event.clientX - maso2.getBoundingClientRect().left;
  let shiftY = event.clientY - maso2.getBoundingClientRect().top;

  maso2.style.position = 'absolute';
  maso2.style.zIndex = 1000;
  document.body.append(maso2);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    maso2.style.left = pageX - shiftX + 'px';
    maso2.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    maso2.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    maso2.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable11');
    if (currentDroppable11 != droppableBelow) {
      if (currentDroppable11) {
        leaveDroppable(currentDroppable11);
      }
      currentDroppable11 = droppableBelow;
      if (currentDroppable11) {
        enterDroppable(currentDroppable11);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  maso2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    maso2.onmouseup = null;
    let currentDroppable10 = null;

shouska1.onmousedown = function(event) {

  let shiftX = event.clientX - shouska1.getBoundingClientRect().left;
  let shiftY = event.clientY - shouska1.getBoundingClientRect().top;

  shouska1.style.position = 'absolute';
  shouska1.style.zIndex = 1000;
  document.body.append(shouska1);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    shouska1.style.left = pageX - shiftX + 'px';
    shouska1.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    shouska1.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    shouska1.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable10');
    if (currentDroppable10 != droppableBelow) {
      if (currentDroppable10) {
        leaveDroppable(currentDroppable10);
      }
      currentDroppable10 = droppableBelow;
      if (currentDroppable10) {
        enterDroppable(currentDroppable10);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  shouska1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    shouska1.onmouseup = null;
    let currentDroppable9 = null;

maso1.onmousedown = function(event) {

  let shiftX = event.clientX - maso1.getBoundingClientRect().left;
  let shiftY = event.clientY - maso1.getBoundingClientRect().top;

  maso1.style.position = 'absolute';
  maso1.style.zIndex = 1000;
  document.body.append(maso1);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    maso1.style.left = pageX - shiftX + 'px';
    maso1.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    maso1.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    maso1.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable9');
    if (currentDroppable9 != droppableBelow) {
      if (currentDroppable9) {
        leaveDroppable(currentDroppable9);
      }
      currentDroppable9 = droppableBelow;
      if (currentDroppable9) {
        enterDroppable(currentDroppable9);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  maso1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    maso1.onmouseup = null;
    let currentDroppable8 = null;

rajce1.onmousedown = function(event) {

  let shiftX = event.clientX - rajce1.getBoundingClientRect().left;
  let shiftY = event.clientY - rajce1.getBoundingClientRect().top;

  rajce1.style.position = 'absolute';
  rajce1.style.zIndex = 1000;
  document.body.append(rajce1);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    rajce1.style.left = pageX - shiftX + 'px';
    rajce1.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    rajce1.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    rajce1.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable8');
    if (currentDroppable8 != droppableBelow) {
      if (currentDroppable8) {
        leaveDroppable(currentDroppable8);
      }
      currentDroppable8 = droppableBelow;
      if (currentDroppable8) {
        enterDroppable(currentDroppable8);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  rajce1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    rajce1.onmouseup = null;
    let currentDroppable7 = null;

salat1.onmousedown = function(event) {

let shiftX = event.clientX -salat1.getBoundingClientRect().left;
let shiftY = event.clientY - salat1.getBoundingClientRect().top;

salat1.style.position = 'absolute';
salat1.style.zIndex = 1000;
document.body.append(salat1);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
salat1.style.left = pageX - shiftX + 'px';
salat1.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
moveAt(event.pageX, event.pageY);

salat1.hidden = true;
let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
salat1.hidden = false;

if (!elemBelow) return;

let droppableBelow = elemBelow.closest('.droppable7');
if (currentDroppable7 != droppableBelow) {
  if (currentDroppable7) {
    leaveDroppable(currentDroppable7);
  }
  currentDroppable7 = droppableBelow;
  if (currentDroppable7) {
    enterDroppable(currentDroppable7);
  }
}
}

document.addEventListener('mousemove', onMouseMove);

salat1.onmouseup = function() {
document.removeEventListener('mousemove', onMouseMove);
salat1.onmouseup = null;
let currentDroppable6 = null;
    hhouska1.onmousedown = function(event) {

      let shiftX = event.clientX - hhouska1.getBoundingClientRect().left;
      let shiftY = event.clientY - hhouska1.getBoundingClientRect().top;

      hhouska1.style.position = 'absolute';
      hhouska1.style.zIndex = 1000;
      document.body.append(hhouska1);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        hhouska1.style.left = pageX - shiftX + 'px';
        hhouska1.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        hhouska1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        hhouska1.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable6');
        if (currentDroppable6 != droppableBelow) {
          if (currentDroppable6) {
            leaveDroppable(currentDroppable6);
          }
          currentDroppable6 = droppableBelow;
          if (currentDroppable6) {
            enterDroppable(currentDroppable6);

          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      hhouska1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        hhouska1.onmouseup = null;
        dale3.onclick = () =>{
          vareni2.style.display="none";
          konec2.style.display="block";
          hhouska1.style.display="none";
          salat1.style.display="none";
          rajce1.style.display="none";
          maso1.style.display="none";
          shouska1.style.display="none";
          maso2.style.display="none";
          shouska2.style.display="none";
          salat2.style.display="none";
         
        }
      };

    };

    function enterDroppable(place6) {
      place6.style.background = 'lightgreen';

    }

    function leaveDroppable(place6) {
      place6.style.background = '';

    }

    hhouska1.ondragstart = function() {
      return false;
    };
};

};

function enterDroppable(place7) {
place7.style.background = 'lightgreen';


}

function leaveDroppable(place7) {
place7.style.background = '';

}

salat1.ondragstart = function() {
return false;
};
  };

};

function enterDroppable(place8) {
  place8.style.background = 'lightgreen';

}

function leaveDroppable(place8) {
  place8.style.background = '';

}

rajce1.ondragstart = function() {
  return false;
};

  };

};

function enterDroppable(place9) {
  place9.style.background = 'lightgreen';

}

function leaveDroppable(place9) {
  place9.style.background = '';

}

maso1.ondragstart = function() {
  return false;
};
  };

};
function enterDroppable(place10) {
  place10.style.background = 'lightgreen';

}

function leaveDroppable(place10) {
  place10.style.background = '';

}

shouska1.ondragstart = function() {
  return false;
};
  };

};

function enterDroppable(place11) {
  place11.style.background = 'lightgreen';

}

function leaveDroppable(place11) {
  place11.style.background = '';

}

maso2.ondragstart = function() {
  return false;
};
};

};

function enterDroppable(place12) {
place12.style.background = 'lightgreen';


}

function leaveDroppable(place12) {
place12.style.background = '';

}

salat2.ondragstart = function() {
return false;
};
  };

};
function enterDroppable(place13) {
  place13.style.background = 'lightgreen';

}

function leaveDroppable(place13) {
  place13.style.background = '';

}

shouska2.ondragstart = function() {
  return false;
};

const info = document.getElementById("info");

window.onload = async () => {

  try {
  const file = await fetch("./res/data/Jason.json");
  const data = await file.json();

  data.gameinfos.forEach((gameinfo) => {
      info.innerHTML += `
      <h2>1 . ${gameinfo.prvni}</h2>
      <h2>2 . ${gameinfo.druhy}</h2>
      <h2>3 . ${gameinfo.treti}</h2>
      <h2>4 .${gameinfo.ctvrty}</h2>
      <h2>5 . ${gameinfo.paty}</h2>
      `
  });
  }catch (err){
      console.log(err)
  }
}















