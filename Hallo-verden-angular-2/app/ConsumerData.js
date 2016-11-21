"use strict";
var ConsumerData = (function () {
    //TODO: endre til det tor gjorde istedenfor constructor
    function ConsumerData(name, adress, phone, person, year) {
        this.utData = name + " : " + adress + " : " + phone + " : " + person + " : " + year;
    }
    return ConsumerData;
}());
exports.ConsumerData = ConsumerData;
//# sourceMappingURL=ConsumerData.js.map