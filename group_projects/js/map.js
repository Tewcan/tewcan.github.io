
            function leftArrowPressed() {
            var element = document.getElementById("charater");
            element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

            function rightArrowPressed() {
            var element = document.getElementById("charater");
            element.style.left = parseInt(element.style.left) + 5 + 'px';

            }

            function upArrowPressed() {
            var element = document.getElementById("charater");
            element.style.top = parseInt(element.style.top) - 5 + 'px';
            }

            function downArrowPressed() {
            var element = document.getElementById("charater");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
            }

            function moveSelection(evt) {
                switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    upArrowPressed();
                    break;
                    case 40:
                    downArrowPressed();
                    break;
                    }
                };

        function docReady()
        {

          window.addEventListener('keydown', moveSelection);
        }
// onload="docReady()" onkeydown="" onkeyup=""
// <img id="charater" src="../images/logo.png" style="position:absolute;left:0; top:0;" height="15" width="15">