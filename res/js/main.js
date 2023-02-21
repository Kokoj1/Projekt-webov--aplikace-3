const tlacitkostart = document.getElementById("tlacitkostart");
const uvod = document.getElementById("uvod");
const burger = document.getElementById("burger");
const counter = document.getElementById("counter");
const meat = document.getElementById("meat");
const vareni = document.getElementById("vareni");
const pokus = document.getElementById("pokus");
const vypsat = document.getElementById("vypsat");
const place = document.getElementById("place");

let time = 0;

tlacitkostart.onclick = () => {
    uvod.style.display = "none";
burger.style.display = "block";
interval=setInterval(() => {
    time++;
  counter.innerHTML = time;
  if(time>=1){
    clearInterval(interval);
    meat.onclick = () => {
      burger.style.display = "none";
      vareni.style.display = "block";
      
    }
  };
}, 1000);
};
let a=0;
const dale = document.getElementById("dale");
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
                    dale.onclick = () => {
                      vareni.style.display="none";
                    }
        
                  }
                }
              }
        
              document.addEventListener('mousemove', onMouseMove);
        
              hhouska.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                hhouska.onmouseup = null;
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
          }
        }
      }
    
      document.addEventListener('mousemove', onMouseMove);
    
      salat.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        salat.onmouseup = null;
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
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  rajce.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    rajce.onmouseup = null;
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
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  maso.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    maso.onmouseup = null;
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
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  shouska.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    shouska.onmouseup = null;
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


















