 /*Jag lekte runt med try och catch, jag ville använda throw men kom inte på något.
 Här är några av mina tester med try och catch:
 
 try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/ 


document.addEventListener("DOMContentLoaded", () => {
    let inputBox = document.querySelector("#input1");
  
    inputBox.addEventListener("input", (event) => {
      removeAllSections();
      makeSections(parseInt(event.currentTarget.value));
    });
  });

// Denna kod låter oss skapa sektioner med text(titel och undertext) som vi kan skriva i. 
// Main är föräldren och det är där alla dessa event(child,titel,blurb) skapas.
  let makeSections = (count) => {
    for (var i = 0; i < count; i++) {
      var parent = document.querySelector("main");
  
      var child = document.createElement("section");
      var title = document.createElement("h4");
      var blurb = document.createElement("p");
  
      title.innerText = "Title " + i;
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
      
      
      