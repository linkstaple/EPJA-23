import { createContext } from 'react'
import { Styles } from 'jss'
import { createUseStyles } from 'react-jss'
import { createTheming } from 'theming'

type AppTheme = typeof appTheme

const appTheme = {
  colors: {
    background: '#000',
    backgroundMinor: 'linear-gradient(300.29deg, #1C1C1C 37.17%, rgba(28, 28, 28, 0) 160.33%)',
    backgroundLight: '#161922',
    control: '#FFE55C',
    text: '#FFF',
    textMinor: 'rgba(255, 255, 255, 0.55)',
    primaryGreen: '#85FF92',
    secondaryGreen: '#3DFF96',
    aqua: '#19FFF1',
  },
}

const context = createContext<AppTheme>(appTheme)

const theming = createTheming(context)
const { ThemeProvider, useTheme } = theming

/**
 * Имеем возможность удобно прокинуть какие-нибудь глобальные значения для стилей ко всем компонентам
 * {@link https://cssinjs.org/jss-syntax?v=v10.10.0 Docs}
 * @example
 * const App = () => {
 *    const c = useStyles()
 *    return <div className={c.block}>some text</div>
 * }
 *
 * const useStyles = createStyles(theme => ({
 *   block: {
 *     color: theme.mainColor,
 *     background: theme.mainBackgroundColor
 *   }
 * }))
 *
 * Здесь useStyles() правильно выведет ключи объекта со стилями,
 * но возможно иное применение createStyles, в котором тайпскрипт не выведет ключи и отдаст Record<string, string>
 *
 * const useStyles = createStyles<{ textColor: string }>({
 *   block: props => props.textColor
 * })
 *
 * В компоненте:
 * const c = useStyles({ textColor: 'red' }) // отдает просто Record<string, string>
 * return <div className={c.block}>some text</div>
 *
 * Также ТС не поругается, если указать пропсы к стилю, но не передать в useStyles.
 * Но по факту передавать надо, иначе ошибка
 */
function createStyles<StyleProps = unknown, C extends string = string>(
  styles: Styles<C, StyleProps, AppTheme> | ((theme: AppTheme) => Styles<C, StyleProps, undefined>),
) {
  const useStyles = createUseStyles<C, StyleProps, AppTheme>(styles)

  return (styleProps?: StyleProps) => {
    const theme = useTheme()
    return useStyles({
      ...(styleProps as StyleProps),
      theme,
    })
  }
}

export default appTheme
export { appTheme, ThemeProvider, AppTheme, createStyles, useTheme }
