class Marks {

    constructor( ){
        this.actives = {};
    }

    addMark( mark ) {
        this.actives[ mark.id ] = mark;
        return mark;
    }

    removeMark ( id ) {
        delete this.actives [ id ];
    }

    updateMark ( mark ) {
        this.actives [ mark.id ] = mark
    }    


}

module.exports = Marks;