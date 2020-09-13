export default function (arg: any) {
    return typeof arg === "number" && !isNaN(arg)
}