const Employee = require("../lib/Employee.js");

class Engineer  extends Employee {
    constructor(name, id, email, GitHub) {
        this.name = name;
        this.id = id
        this.email = email
        this.GitHub = GitHub
    };

    getSchool() {
        return(this.GitHub);
    }

};

module.exports = Engineer; 