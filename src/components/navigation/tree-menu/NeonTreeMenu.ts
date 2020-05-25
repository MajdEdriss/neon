import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonTreeMenuModel } from './NeonTreeMenuModel';

@Component
export default class NeonIndex extends Vue {
  @Prop({ required: true })
  model!: NeonTreeMenuModel[];
}
