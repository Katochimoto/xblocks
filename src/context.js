const context = (function () {
    return this || (1, eval)('this');
})();

export const xv = context.xv = {};
export const xb = context.xb = {};
export default context;
