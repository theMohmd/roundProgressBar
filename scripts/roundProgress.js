function roundProgInit(inputId,bgColor,progColor) {
  document.getElementById(inputId).style.overflow = 'hidden';
  document.getElementById(inputId).innerHTML =`
  <div style="padding: 1px;height: 100%;width: 100%; background-color:${bgColor}" >
          <div id="${inputId}Container" 
          style="height: 100%;width: 100%;display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));grid-template-rows: repeat(1, minmax(0, 1fr));border-radius: 9999px; overflow: hidden;"
          >
            <div id="${inputId}Left" style=" grid-column-start: 1;grid-column-end: 2;grid-row-start: 1;grid-row-end: 2;background-color: ${progColor};"></div>
            <div id="${inputId}Right" style="grid-column-start: 2;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;background-color: ${progColor};"></div>
            <div id="${inputId}Spinner" style="grid-row-start: 1;grid-row-end: 2;grid-column-start: 1;grid-column-end: 3;z-index: 30;">
              <div style="height: 100%;width: 50%;float: right;background-color: ${bgColor};"></div>
            </div>
            <div style="grid-row-start: 1;grid-row-end: 2;grid-column-start: 1;grid-column-end: 3;z-index: 30;width: 80%;height: 80%;align-self: center;justify-self: center;border-radius: 9999px;background-color: ${bgColor};"></div>
            
          </div>

        </div>
        <div style="height: 100%;width: 100%; border:8px solid ${bgColor};border-radius: 9999px;position: relative;top: -100%; z-index: 100;"></div>
    `;
    
}
function roundProgUpdate(inputId, inputPercent) {
  if (inputPercent < 0) {
    inputPercent *= -1;
  }
  if (inputPercent > 100) {
    inputPercent %= 100;
  }

  document.getElementById(inputId + "Spinner").style.transform = `rotate(${
    inputPercent * 3.6
  }deg)`;
  if (inputPercent < 50) {
    document.getElementById(inputId + "Left").style.display = "none";
    document.getElementById(inputId + "Right").style.zIndex = "1";
    document.getElementById(inputId + "Spinner").style.zIndex = "2";
  } else {
    document.getElementById(inputId + "Left").style.display = "block";
    document.getElementById(inputId + "Right").style.zIndex = "2";
    document.getElementById(inputId + "Spinner").style.zIndex = "1";
  }
}

