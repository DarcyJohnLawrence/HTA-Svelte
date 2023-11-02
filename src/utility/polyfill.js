// Disabled polyfill for IE11 inputs
Object.defineProperty(HTMLInputElement.prototype, 'disabled', {
    enumerable: true,
    configurable: true,
    get: function () {
        return HTMLInputElement.prototype.hasAttribute.call(this, 'disabled');
    },
    set: function (value) {
        if (value) {
            return HTMLInputElement.prototype.setAttribute.call(this, 'disabled', '');
        } else {
            return HTMLInputElement.prototype.removeAttribute.call(this, 'disabled');
        }
    }
});

// Disabled polyfill for IE11 selects
Object.defineProperty(HTMLSelectElement.prototype, 'disabled', {
    enumerable: true,
    configurable: true,
    get: function () {
        return HTMLSelectElement.prototype.hasAttribute.call(this, 'disabled');
    },
    set: function (value) {
        if (value) {
            return HTMLSelectElement.prototype.setAttribute.call(this, 'disabled', '');
        } else {
            return HTMLSelectElement.prototype.removeAttribute.call(this, 'disabled');
        }
    }
});

// Disabled polyfill for IE11 selects
Object.defineProperty(HTMLTextAreaElement.prototype, 'disabled', {
    enumerable: true,
    configurable: true,
    get: function () {
        return HTMLTextAreaElement.prototype.hasAttribute.call(this, 'disabled');
    },
    set: function (value) {
        if (value) {
            return HTMLTextAreaElement.prototype.setAttribute.call(this, 'disabled', '');
        } else {
            return HTMLTextAreaElement.prototype.removeAttribute.call(this, 'disabled');
        }
    }
});

// Array.Item() polyfill for VBScript
Array.prototype.Item = function (idx) {
    return this[idx];
};