

//Denna kod ändrar färg på headerns backrgund till rött när musen nuddar headern, men när musen inte gör det så är headen grön.
let rubrik= document.querySelector("header");
      rubrik.addEventListener("mouseover",changecolor);
      rubrik.addEventListener("mouseleave",changeback);

      function changeback(event){
        let rubrikn= event.currentTarget;
        rubrikn.style.backgroundColor="green";  }

      function changecolor(event){
        let rubrikn= event.currentTarget;
        rubrikn.style.backgroundColor="red";
      }



      //Denna kod ska kunn låta användaren flytta på en sektion.
      let flyg= document.querySelector("main, section");
      flyg.addEventListener("click", startflyga,{once: true});
      function flyger(event){
          let blogg=event.currentTarget;
          document.body.append(blogg);
          blogg.addEventListener("click",stoppflyg,{once:true});
          document.addEventListener("mousemove",fly);

      }
      function fly(event){
          let blogg= flyg;
          
          blogg.style.left=event.pageX-blogg.offsetWidth/2+"px";
          blogg.style.top=event.pageY-blogg.offsetHeight/2+"px";
      }
      function stoppflyg(event){
          let blogg= event.currentTarget;
          document.querySelector("section, h3").append(blogg);
          document.querySelector("section, p").append(blogg);
          blogg.style="";
          flyg.addEventListener("click", startflyga,{once: true});
          document.removeEventListener("mousemove",fly);
      }
