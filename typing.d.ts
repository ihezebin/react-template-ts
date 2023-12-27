declare module '*.module.scss' {
    const style: { readonly [key: string]: string }
    export default style;
}

declare module '*.module.css' {
    const style: { readonly [key: string]: string }
    export default style;
}

declare module '*.png';

declare interface IObject {
    [key: string]: any;
}
