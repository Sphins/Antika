export default class antikaActorSheet extends ActorSheet {
    get template() {
        console.log(`antika | Récupération du fichier html ${this.actor.data.type}-sheet.`);

        return `systems/antika/template/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        const character = data.actor.data.data

        console.log(data);

                //tri

                character.armes = data.items.filter(item => item.type === "armes");                     //tri arme
                character.armures = data.items.filter(item => item.type === "armures");                 //tri armure
                character.pouvoirs = data.items.filter(item => item.type === "pouvoirs");               // tri pouvoire
                character.avantages = data.items.filter(item => item.type === "avantages");             //tri avantages
                character.défauts = data.items.filter(item => item.type === "défauts");                 // tri défauts

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('.item-edit').click(this._onItemEdit.bind(this));
        html.find('.item-delete').click(this._onItemDelete.bind(this));


               //navigation fiche pj

               var competence = document.getElementById("competence");
               var equipement = document.getElementById("equipement");
               var pouvoir = document.getElementById("pouvoir");
      
               var tab1 = document.getElementById("tab1");
               var tab2 = document.getElementById("tab2");
               var tab3 = document.getElementById("tab3");
      
            competence.addEventListener("click", () =>{
                   if(getComputedStyle(tab1).display != "block"){
                       tab1.style.display = "block";
                       tab2.style.display = "none";
                       tab3.style.display = "none";

                       
                       competence.style.background = "#bfa288";
                       competence.style.color = "#5a2119";
                       equipement.style.background = "#5a2119";
                       equipement.style.color = "#bfa288";
                       pouvoir.style.background = "#5a2119";
                       pouvoir.style.color = "#bfa288";
                   }
               })

            equipement.addEventListener("click", () =>{
                if(getComputedStyle(tab2).display != "block"){
                    tab1.style.display = "none";
                    tab2.style.display = "block";
                    tab3.style.display = "none";

                    
                    competence.style.background = "#5a2119";
                    competence.style.color = "#bfa288";
                    equipement.style.background = "#bfa288";
                    equipement.style.color = "#5a2119";
                    pouvoir.style.background = "#5a2119";
                    pouvoir.style.color = "#bfa288";
                }
            })

            pouvoir.addEventListener("click", () =>{
                if(getComputedStyle(tab3).display != "block"){
                    tab1.style.display = "none";
                    tab2.style.display = "none";
                    tab3.style.display = "block";

                    
                    competence.style.background = "#5a2119";
                    competence.style.color = "#bfa288";
                    equipement.style.background = "#5a2119";
                    equipement.style.color = "#bfa288";
                    pouvoir.style.background = "#bfa288";
                    pouvoir.style.color = "#5a2119";
                }
            })
    }


    getItemFromEvent = (ev) => {
        const parent = $(ev.currentTarget).parents(".item");
        return this.actor.getOwnedItem(parent.data("itemId"));
    }

    _onItemEdit(event) {
        const item = this.getItemFromEvent(event);
        item.sheet.render(true);
    }

    _onItemDelete(event) {
        const item = this.getItemFromEvent(event);
        let d = Dialog.confirm({
            title: "Suppression d'élément",
            content: "<p>Confirmer la suppression de '" + item.name + "'.</p>",
            yes: () => this.actor.deleteOwnedItem(item.id),
            no: () => {},
            defaultYes: false
        });
    }
}