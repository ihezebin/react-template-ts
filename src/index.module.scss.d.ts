declare module '*.module.scss' {
    const style: { [className: string]: string };
    export default style;
}


declare module "*.png" {
    const value: string;
    export default value;
}