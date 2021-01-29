declare module "*.svg?inline" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  import Vue from "vue";
  export default Vue;
}
