declare module '*.vue' {
  import Vue from 'vue';
  // must bolt on the validations property to the input of ComponentOptions
  // and also onto the "output" of @Component in the form of VueClass<Vue>
  module 'vue/types/options' {
    interface ComponentOptions<V extends vue> {
      validations?: { [x: string]: any };
    }
    interface VueClass<V extends vue> {
      validations?: { [x: string]: any };
    }
  }
  export default Vue;
}
