'use strict';
function piiFunction() {
    function DataEnclosure(name) {
        let pii = {
            name: "Steven",
            ssn: '123456789',
            getName: function () {
                return this.name
            }
        };

        return pii.getName();
    }
    return DataEnclosure();
}


console.log(piiFunction())