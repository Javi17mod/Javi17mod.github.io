var version = 3;
if (version == storaged) {
  var speed = 1.7;
  var updatetext = 0;
} else {
  var speed = 0.7;
  var updatetext = 1;
};
if(localStorage.getItem('storaged')) {
  var storaged = parseInt(localStorage.getItem('storaged'));
} else {
  localStorage.setItem('storaged', 0);
  var storaged = localStorage.getItem('storaged');
};
window.onload = function() {
    var progressBar = document.querySelector('.progress');
    var loadingScreen = document.querySelector('.loading-screen');
    var progress = 0;

    var interval = setInterval(function() {
        progress += speed;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
         document.getElementById('subsBox').textContent = storaged;
          localStorage.setItem('storaged', version);
            clearInterval(interval);
            setTimeout(function() {
                loadingScreen.classList.add('hidden');
            }, 500);
        }
    }, 100);
}

/////////////////// Buttons func ////////////////////
function peopleradio() {
  hide()
  document.getElementById("peopleradio").style.display = "block";
};
function radio() {
  hide()
  document.getElementById("radio").style.display = "block";
};
function videos() {
  hide()
  document.getElementById("videos").style.display = "block";
};
function music() {
  hide()
  document.getElementById("music").style.display = "block";
};
function streams() {
  hide()
  document.getElementById("streams").style.display = "block";
}
/////////////////////// Hide ///////////////////////
function hide() {
  document.getElementById("popout1").style.display = "none";
  document.getElementById("radio").style.display = "none";
  document.getElementById("peopleradio").style.display = "none";
  document.getElementById("videos").style.display = "none";
  document.getElementById("music").style.display = "none";
  document.getElementById("streams").style.display = "none";
};
///////////////////// Streams ///////////////////////////
//Phonk//
function streamsphonk(option) {
if (option == 1) {
  window.open("https://www.youtube.com/watch?v=Ak-zIExhfTE")
}
};
//Electronic//
function streamselectro(option1) {
  if (option1 == 1) {
  window.open("https://www.youtube.com/watch?v=Jfcij3wYc7I")
}
  if (option1 == 2) {
  window.open("https://www.youtube.com/watch?v=voxc2L9D78k&t")
}
  if (option1 == 3) {
  window.open("https://www.youtube.com/watch?v=pc9QMP9D2lg")
}
  if (option1 == 4) {
  window.open("https://www.youtube.com/watch?v=RyQDExEGZiU&t")
}
  if (option1 == 5) {
  window.open("https://www.youtube.com/watch?v=kCMRCOL31HA&t")
}
};
//////////////// Functions ext ////////////////////
function recent() {
  window.location.href = "https://toolbox.streamloots.com/mylastvideo/javi17mod"
};
///////////// Streams ////////////
/////////// Wifi /////////
window.addEventListener('load', function() {
        var popout = document.getElementById('popout');
        var message = document.getElementById('message');

        function checkConnectionStatus() {
            if (navigator.onLine) {
                message.innerText = 'Connected';
                message.classList.add('connected');
                message.classList.remove('disconnected');
                setTimeout(function() {
                    popout.classList.add('hidden');
                    document.getElementById("popout").style.display = "none";
                }, 1000);
            } else {
                document.getElementById("popout").style.display = "block";
                message.innerText = 'You dont have wifi connection';
                message.classList.remove('connected');
                message.classList.add('disconnected');
                popout.classList.remove('hidden');
            }
        }

        window.addEventListener('online', checkConnectionStatus);
        window.addEventListener('offline', checkConnectionStatus);

        checkConnectionStatus();
        detectBrowser();
    });

////////////// Admin ///////////
function showPopout() {
    document.getElementById('popout1').style.display = 'block';
}
function hidePopout() {
    document.getElementById('popout1').style.display = 'none';
}
function verifyCode() {
    var input = document.getElementById('codeInput').value;

    if (input.toLowerCase() === 'analytics') {
        window.open('https://analytics.google.com/analytics/web/#/p396496061/reports/explorer?params=_u..nav%3Dmaui%26_u.dateOption%3Dtoday%26_u.comparisonOption%3Ddisabled&r=top-events&ruid=B505FDF2-579F-4902-BED1-16389D59D558&collectionId=5832515147');
    } else if (input.toLowerCase() === 'youtube studio') {
        window.open('https://studio.youtube.com/')
    } else if (input.toLowerCase() === 'notifications') {
        window.open('https://dashboard.onesignal.com/apps/dfbe5e9d-8f48-414d-928b-1b71a20df487/notifications/new')
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid code';
    }
};
////////////Browser detector/////////
function detectBrowser() {
        var browser = "";
        // Verificamos si es Internet Explorer
        if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > -1) {
          browser = "Internet Explorer";
        }
        // Verificamos si es Chrome
        else if (navigator.userAgent.indexOf("Chrome") !== -1) {
          browser = "Google Chrome";
        }
        // Verificamos si es Firefox
        else if (navigator.userAgent.indexOf("Firefox") !== -1) {
          browser = "Mozilla Firefox";
        }
        // Verificamos si es Safari
        else if (navigator.userAgent.indexOf("Safari") !== -1) {
          browser = "Safari";
        }
        // Verificamos si es Opera
        else if (navigator.userAgent.indexOf("Opera") !== -1 || navigator.userAgent.indexOf("OPR") !== -1) {
          browser = "Opera";
        }
        // Verificamos si es Edge
        else if (navigator.userAgent.indexOf("Edge") !== -1) {
          browser = "Microsoft Edge";
        }
        // Si no se detecta ningún navegador especifico, se muestra el valor "Desconocido"
        else {
          browser = "Unknown";
        }

 // Actualizamos el texto en el div con el tipo de navegador

document.getElementById("navegador").textContent = "Browser: " + browser;
}
