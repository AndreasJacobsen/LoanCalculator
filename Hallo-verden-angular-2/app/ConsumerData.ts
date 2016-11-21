export class ConsumerData {


    public utData: string;
    //TODO: endre til det tor gjorde istedenfor constructor
    constructor(name: string, adress: string, phone: string, person: string, year) {
        this.utData = name + " : " + adress + " : " + phone + " : " + person + " : " + year;
    }
}