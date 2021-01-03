function isEqual(a, b) {
    let aPros = Object.getOwnPropertyNames(a);
    let bPros = Object.getOwnPropertyNames(b);
    if (bPros.length != aPros.length) {
        return false;
    }
    for (let i = 0; i < aPros.length; i++) {
        if (!b.hasOwnProperty(aPros[i]) || aPros[i] !== bPros[aPros[i]]) {
            return false;
        }
    }
    return true;
}