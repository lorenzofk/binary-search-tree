class Node {

    constructor(data) {
        this._data = data;
        this._left = null;
        this._right = null;
    }

    get left() {
        return this._left;
    }

    set left(node) {
        this._left = node
    };

    get right() {
        return this._right;
    }

    set right(node) {
        this._right = node
    };

    get data() {
        return this._data
    };

    set data(newData) {
        this._data = newData;
    } 
    
}

export default Node;