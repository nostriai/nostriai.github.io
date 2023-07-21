import theme from '@nuxt-themes/tokens/config'
import { defineTheme } from 'pinceau'

export default defineTheme({
    alpine: {
        body: {
          // Update the background color in light & dark mode
          backgroundColor: {
            initial: '#ffffff',
            dark: '#000000'
          }
        },
      },
    font: {
        mono: 'monospace'
    }
})
