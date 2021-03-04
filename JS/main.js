 /* Jag testade mig av alert("Hej") för at kolla om nått funkar, det tvingar webbläsaren att läsa medelandet.
   Jag sökte efter. Jag felsökte mina problem i source fönstret. Där i consolen så hittade jag de flesta av mina fel.
*/ 

/*DOMContentLoaded framkallas när html dokumentet har laddats och analyserats helt 
utan att vänta på att formatmallar, bilder och underramar ska laddas.
*/
document.addEventListener("DOMContentLoaded", () => {
    let inputBox = document.querySelector("#input1");
    //inputBox är nu #input1, #input1 ligger i index.html

    //"input" i addEventListener aktiveras när värdet för ett element har ändrats.  
    inputBox.addEventListener("input", (event) => {

      //Om den har ändrats så sätts removeAllSections(); igång och tar bort element.
      removeAllSections();

      //Här sätts makeSections igång, parseInt retunerar en int(heltal), heltalet som användaren knappar in i #input1, t.ex om hen vill ha 5 sectioner.   
      makeSections(parseInt(event.currentTarget.value));
    });
  });

   // Denna kod låter oss skapa sektioner med text(titel och undertext) som vi kan skriva i. 
  // Main är föräldren och det är där alla dessa event(child,titel,blurb) skapas. Barnet är sektioner och i sektionerner skapas titeln och undertexten.
  let makeSections = (count) => {
    for (let i = 0; i < count; i++) {
      let parent = document.querySelector("main");
  
      let child = document.createElement("section");

      //Istället för h4 så ändarade jag till h3, det ser bättre ut.
      let title = document.createElement("h3");
      let blurb = document.createElement("p");
  
      // varje gång vi skpaar en ny titel så vill vi inte att det börjar med noll utan 1.
      title.innerText = "Title " + (i+1);
      //Här gör vi så att undertexten(blurb) får upp "Let's wright something!" varje gång vi skapar en sektion, itsället för massa konstig undertext.
      blurb.innerText = `Let's wright something!`;
  
      //Dessa låter användaren kunna ändra på titeln och undertexten.
        makeEditable(title);
        //Den skickar in alla titlar och blurb som användaren skapar in makeEditable som är längst ner!
        makeEditable(blurb);
    
        //Här bifogar vi t.ex alla skapade titlar in i child( vilket är alla skapade Sections)
        child.append(title);
        child.append(blurb);
        parent.append(child);
      }
    };


 // Här låter det oss att gå tillbaka eller ta bort en/flera sektioner(titel och undertext).
    let removeAllSections = () => {
        let test_sections = document.querySelectorAll("section");
        for (let i = 0; i < test_sections.length; i++) {
          test_sections[i].remove();
        }
      };
      
      // Eftersom det står "true" så kan användaren ändra på titeln och undertexten när användaren klickar på de.
     // Om det istället skulle ha stått "false" så skulle eventet inte fungera.
      let makeEditable = (elem) => {

        /*Här tar makeEditable in alla titel och blurb in i elem, sen kopplas de med addEventListener där den fixar så
         att när användare klickar på titel eller blurb så får hen tillgång till att redigera(contentEditable = true;)
          elem.focus(); focus utlösar sig när elementet har motagit fokus, som det låter!  */
        elem.addEventListener("click", (event) => {
          elem.contentEditable = true;
          elem.focus();
        });

       /* Här kopplar vi så elem(vilket är som vi ser ovan titel och blurb) får till sig kopplat med addEventListener, där den fixar så
         när ett elemet tappar fokus(att användaren inte skriver något typ) så utlöser när den tappar focus så man inte kan redigera texten längre(contentEditable= false;),
         Motsatsen till blur or focus.*/
        elem.addEventListener("blur", (event) => {
          elem.contentEditable = false;
        });
      };

      
      
      