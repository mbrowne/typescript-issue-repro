const { setDefaultMockTheme } = require('artnet-styled/utils/test-utils')
const { ...theme } = require('~/theme')

// set default theme for theme helpers createWithTheme(), mountWithTheme(), shallowWithTheme(), and renderWithTheme()
setDefaultMockTheme(theme)
