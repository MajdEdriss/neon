import Vue, { VueConstructor } from 'vue';
import VueI18n from 'vue-i18n';

/* components */
import NeonActionMenu from './components/navigation/action-menu/NeonActionMenu.vue';
import NeonBadge from './components/presentation/badge/NeonBadge.vue';
import NeonButton from './components/user-input/button/NeonButton.vue';
import NeonCard from './components/layout/card/NeonCard.vue';
import NeonCardBody from './components/layout/card/body/NeonCardBody.vue';
import NeonCardHeader from './components/layout/card/header/NeonCardHeader.vue';
import NeonDrawer from './components/layout/drawer/NeonDrawer.vue';
import NeonDropZone from './components/user-input/drop-zone/NeonDropZone.vue';
import NeonFile from './components/user-input/file/NeonFile.vue';
import NeonFooter from './components/layout/footer/NeonFooter.vue';
import NeonGrid from './components/layout/grid/NeonGrid.vue';
import NeonGridArea from './components/layout/grid/grid-area/NeonGridArea.vue';
import NeonIcon from './components/design/icon/NeonIcon.vue';
import NeonInput from './components/user-input/input/NeonInput.vue';
import NeonLabel from './components/presentation/label/NeonLabel.vue';
import NeonLink from './components/navigation/link/NeonLink.vue';
import NeonLogo from './components/design/logo/NeonLogo.vue';
import NeonModal from './components/layout/modal/NeonModal.vue';
import NeonNote from './components/feedback/note/NeonNote.vue';
import NeonPage from './components/layout/page/NeonPage.vue';
import NeonPassword from './components/user-input/password/NeonPassword.vue';
import NeonSideNav from './components/layout/side-nav/NeonSideNav.vue';
import NeonSwitch from './components/user-input/switch/NeonSwitch.vue';
import NeonToggle from './components/user-input/toggle/NeonToggle.vue';
import NeonTopNav from './components/layout/top-nav/NeonTopNav.vue';
import NeonTreeMenu from './components/navigation/tree-menu/NeonTreeMenu.vue';
import NeonTreeMenuItem from './components/navigation/tree-menu/item/NeonTreeMenuItem.vue';

/* models and utils */
import { NeonActionMenuModel } from './components/navigation/action-menu/NeonActionMenuModel';
import { NeonButtonStyle } from './components/user-input/button/NeonButtonStyle';
import { NeonDateUtils } from './components/common/NeonDateUtils';
import { NeonFormattedDate } from './components/common/NeonFormattedDate';
import { NeonFunctionalColor } from './components/common/NeonFunctionalColor';
import { NeonGridModel } from './components/layout/grid/NeonGridModel';
import { NeonHorizontalPosition } from './components/common/NeonHorizontalPosition';
import { NeonIconRegistry } from './components/design/icon/NeonIconRegistry';
import { NeonInputType } from './components/user-input/input/NeonInputType';
import { NeonState } from './components/common/NeonState';
import { NeonMode } from './components/common/NeonMode';
import { NeonModeUtils } from './components/common/NeonModeUtils';
import { NeonOrientation } from './components/common/NeonOrientation';
import { NeonPosition } from './components/common/NeonPosition';
import { NeonResponsive } from './components/layout/grid/NeonResponsive';
import { NeonResponsiveUtils } from './components/common/NeonResponsiveUtils';
import { NeonLabelSize } from './components/presentation/label/NeonLabelSize';
import { NeonSize } from './components/common/NeonSize';
import { NeonSwitchStyle } from './components/user-input/switch/NeonSwitchStyle';
import { NeonToggleModel } from './components/user-input/toggle/NeonToggleModel';
import { NeonToggleStyle } from './components/user-input/toggle/NeonToggleStyle';
import { NeonTreeMenuModel } from './components/navigation/tree-menu/NeonTreeMenuModel';

/* register default provided icons */
import { RegisterIcons } from './components/design/icon/RegisterIcons';
RegisterIcons.register();

Vue.use(VueI18n);

const components: { [s: string]: VueConstructor } = {
  NeonActionMenu,
  NeonBadge,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonDrawer,
  NeonDropZone,
  NeonFile,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonIcon,
  NeonInput,
  NeonLabel,
  NeonLink,
  NeonLogo,
  NeonModal,
  NeonNote,
  NeonPage,
  NeonPassword,
  NeonSideNav,
  NeonSwitch,
  NeonToggle,
  NeonTopNav,
  NeonTreeMenu,
  NeonTreeMenuItem,
};

Object.keys(components).forEach((k) => Vue.component(k, components[k]));

export {
  NeonActionMenu,
  NeonActionMenuModel,
  NeonBadge,
  NeonButton,
  NeonButtonStyle,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonDateUtils,
  NeonDrawer,
  NeonDropZone,
  NeonFile,
  NeonFormattedDate,
  NeonFooter,
  NeonFunctionalColor,
  NeonGrid,
  NeonGridArea,
  NeonGridModel,
  NeonIcon,
  NeonInput,
  NeonInputType,
  NeonHorizontalPosition,
  NeonIconRegistry,
  NeonLabel,
  NeonLabelSize,
  NeonLink,
  NeonState,
  NeonLogo,
  NeonModal,
  NeonMode,
  NeonModeUtils,
  NeonNote,
  NeonOrientation,
  NeonPage,
  NeonPassword,
  NeonPosition,
  NeonResponsive,
  NeonResponsiveUtils,
  NeonSideNav,
  NeonSize,
  NeonSwitch,
  NeonSwitchStyle,
  NeonToggle,
  NeonToggleModel,
  NeonToggleStyle,
  NeonTopNav,
  NeonTreeMenu,
  NeonTreeMenuItem,
  NeonTreeMenuModel,
};
