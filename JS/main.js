 /* Jag testade mig av alert("Hej") för at kolla om nått funkar, det tvingar webbläsaren att läsa medelandet.
   Jag sökte efter. Jag felsökte mina problem i source fönstret. Där i consolen så hittade jag de flesta av mina fel.

*/ 

document.addEventListener("DOMContentLoaded", () => {
    let inputBox = document.querySelector("#input1");
  
    inputBox.addEventListener("input", (event) => {
      removeAllSections();
      makeSections(parseInt(event.currentTarget.value));
    });
  });

 // Denna kod låter oss skapa sektioner med text(titel och undertext) som vi kan skriva i. 
// Main är föräldren och det är där alla dessa event(child,titel,blurb) skapas. Barnet är sektioner och i sektionerner skapas titeln och undertexten.
  let makeSections = (count) => {
    for (var i = 0; i < count; i++) {
      var parent = document.querySelector("main");
  
      var child = document.createElement("section");

      //Istället för h4 så ändarade jag till h3, det ser bättre ut.
      var title = document.createElement("h3");
      var blurb = document.createElement("p");
  
      // varje gång vi skpaar en ny titel så vill vi inte att det börjar med noll utan 1.
      title.innerText = "Title " + (i+1);
      //Här gör vi så att undertexten(blurb) får upp "Let's wright something!" varje gång vi skapar en sektion, itsället för massa konstig undertext.
      blurb.innerText = `Let's wright something!`;
  
      //Dessa låter användaren kunna ändra på titeln och undertexten.
        makeEditable(title);
        makeEditable(blurb);
    
        child.append(title);
        child.append(blurb);
        parent.append(child);
      }
    };


 // Här låter det oss att gå tillbaka eller ta bort en/flera sektioner(titel och undertext).
    let removeAllSections = () => {
        var test_sections = document.querySelectorAll("section");
        for (var i = 0; i < test_sections.length; i++) {
          test_sections[i].remove();
        }
      };
      
      // Eftersom det står "true" så kan användaren ändra på titeln och undertexten när användaren klickar på de.
     // Om det istället skulle ha stått "false" så skulle eventet inte fungera.
      let makeEditable = (elem) => {
        elem.addEventListener("click", (event) => {
          elem.contentEditable = true;
          elem.focus();
        });
        elem.addEventListener("blur", (event) => {
          elem.contentEditable = false;
        });
      };

      
      
      