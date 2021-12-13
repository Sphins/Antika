        /**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */

         export const preloadHandlebarsTemplates = async function () {
            // Define template paths to load
            const templatePaths = [
                // ACTOR
                "systems/Antika/template/sheets/pj-composant/pj-capa.html",
                "systems/Antika/template/sheets/pj-composant/pj-equipements.html",
                "systems/Antika/template/sheets/pj-composant/pj-pouvoirs.html",


                // Items
                "systems/Knight/template/sheets/arme_de_contact-sheet.html",
            ];
        
            // Load the template parts
            return loadTemplates(templatePaths);
        };