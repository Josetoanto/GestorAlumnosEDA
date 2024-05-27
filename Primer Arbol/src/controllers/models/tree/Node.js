//export sirve para exportar una clase, import importa la clase al modelo que tu escojas
export class Node {
    value
    right
    left
    constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
    }
}
export default Node
