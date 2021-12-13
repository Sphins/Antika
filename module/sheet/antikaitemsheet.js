export default class antikaItemSheet extends ItemSheet {
    get template() {
        console.log(`antika | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/antika/template/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        console.log(data);

        return data;
    }
}