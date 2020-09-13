export default function (arg: any) {
    if (typeof arg === 'number') {
        return arg - arg === 0;
    }
    if (typeof arg === 'string' && arg.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+arg) : isFinite(+arg);
    }
    return false;
};