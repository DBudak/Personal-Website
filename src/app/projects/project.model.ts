export class Project{
    constructor(
        public image:string,
        public jobDone : string,
        public title : string,
        public description : string
    ){
        this.image = './assets/projects/' + image;
    }
}