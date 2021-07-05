import 'styled-components';
import { ThemeInterface } from '../styles/theme'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface
}