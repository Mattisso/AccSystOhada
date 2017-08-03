/* Get Programming with JavaScript
 * Listing 15.06
 * A simplified oTableauPoste constructor
 */

(function () {
    "use strict";


   var oStblArea = = function (Id,AreaShortName, AreaLongName) {
       // var exits = {};
        var oStblAreas = [];
      //  var challenges = {};

       /*  this.addoStableauPoste = function (oStableauName, StbleauLongName) {
            oStableauPostes.push({
                "oStableauName":oStableauName,
                "StbleauLongName": StbleauLongName
            });
        }; */

       

        this.getData = function () {
            var data = {
                "Id":Id,
                "AreaShortName": AreaShortName,
                "StbleauLongName": StbleauLongName
              //  "oStableauPostes": oStableauPostes.slice()
              //  "exits": Object.keys(exits)
            };

            return data;
        };
    };

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.oStblArea = oStblArea;

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