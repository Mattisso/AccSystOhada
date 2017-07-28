/* Get Programming with JavaScript
 * Listing 15.06
 * A simplified oTableauPoste constructor
 */

(function () {
    "use strict";


    var oTableauPoste = function (TableauName, tbleauLongName) {
       // var exits = {};
        var oStableauPostes = [];
      //  var challenges = {};

        this.addoStableauPoste = function (oStableauName, StbleauLongName) {
            oStableauPostes.push({
                "oStableauName":oStableauName,
                "StbleauLongName": StbleauLongName
            });
        };

       

        this.getData = function () {
            var data = {
               // "Id":Id,
                "TableauName": TableauName,
                "tbleauLongName": tbleauLongName,
                "oStableauPostes": oStableauPostes.slice()
              //  "exits": Object.keys(exits)
            };

            return data;
        };
    };

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.oTableauPoste = oTableauPoste;

})();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a new oTableauPoste.
 *
 *    > var p = new theCrypt.oTableauPoste("The Farm", "You are at a farm")
 *    > p.getData()
 *
 * 3) Add oStableauPostes.
 *
 *    > p.addoStableauPoste("a key")
 *    > p.addoStableauPoste("a cheese")
 *    > p.getData()
 *
 * 4) Add an exit.
 *
 *    > p.addExit("east", "The Farmhouse")
 *    > p.getData()
 *
 */