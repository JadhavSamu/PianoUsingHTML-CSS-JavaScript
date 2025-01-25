const pianokeys = document.querySelectorAll(".piano-keys .key");
function playTune(key){
    switch(key){
            case 'a':
               const sound1 = new Audio('sounds/e.wav');
               sound1.play();
               break;

            case 'w':
                 const sound2 = new Audio('sounds/w.wav');
                 sound2.play();
                 break;
            case 's':
                   const sound3 = new Audio('sounds/s.wav');
                   sound3.play();
                   break;
            case 'e':
                    const sound4 = new Audio('sounds/e.wav');
                    sound4.play();
                    break;
            case 'd':
                    const sound5 = new Audio('sounds/d.wav');
                    sound5.play();
                    break;
            case 'f':
                    const sound6 = new Audio('sounds/f.wav');
                    sound6.play();
                    break;
            case 't':
                    const sound7 = new Audio('sounds/t.wav');
                    sound7.play();
                    break;
            case 'g':
                    const sound8 = new Audio('sounds/g.wav');
                    sound8.play();
                    break;
            case 'y':
                   const sound9 = new Audio('sounds/y.wav');
                   sound9.play();
                   break;
            case 'h':
                   const sound10 = new Audio('sounds/h.wav');
                   sound10.play();
                   break;
            case 'u':
                  const sound11 = new Audio('sounds/u.wav');
                  sound11.play();
                  break;
            case 'j':
                 const sound12 = new Audio('sounds/j.wav');
                 sound12.play();
                 break;
            case 'k':
                const sound13 = new Audio('sounds/k.wav');
                sound13.play();
                break;
             case 'o':
                const sound14 = new Audio('sounds/o.wav');
                sound14.play();
                break;
            case 'l':
                const sound15 = new Audio('sounds/l.wav');
                sound15.play();
                break;
            case 'p':
                const sound16 = new Audio('sounds/p.wav');
                sound16.play();
                break;
            case 'i':
                const sound17 = new Audio('sounds/k.wav');
                sound17.play();
                break;
    }
}

for(let i=0; i<pianokeys.length;i++){
    pianokeys[i].addEventListener("click", (event)=>{
        playTune(event.target.innerHTML)
    });
}

document.addEventListener("keypress",(event)=>{
     keypressed=event.key;
     playTune(keypressed);
});
