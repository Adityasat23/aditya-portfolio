export {};

declare module "*.glb";
declare module "*.gltf";
declare module "*.png";

// opsional untuk meshline (sering dipakai di lanyard)
declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
