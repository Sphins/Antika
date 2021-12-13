import antikaItemSheet from "./sheet/antikaitemsheet.js";
import antikaActorSheet from "./sheet/antikaactorsheet.js";
import { preloadHandlebarsTemplates } from "./system/templates.js";

Hooks.once("init", () => {
    console.log("Antika | Initialisation du système Antika");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("antika", antikaItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("antika", antikaActorSheet, { makeDefault: true });

    preloadHandlebarsTemplates();
})