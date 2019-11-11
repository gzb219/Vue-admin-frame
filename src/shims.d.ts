declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'css-color-function';

declare module 'element-ui/lib/locale/lang/*';

declare module 'element-ui/lib/transitions/collapse-transition';

declare module 'vue-count-to';

declare module '@/vendor/painted-face';

declare module '@ckeditor/ckeditor5-build-classic' {
  const ClassicEditorBuild: any;

  export = ClassicEditorBuild;
}