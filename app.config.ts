export default defineAppConfig({
  alpine: {
    title: 'NostriAI',
    img: {
      path: '/Arrow.png',
      alt: 'arrow'
    },
    description: 'We make AI decentrilised',
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/Logo_05.svg', // path of the logo
        pathDark: '/Logo_04.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'nostri' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        text: 'NostriAI',
        repository: 'https://www.github.com/nostriai' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow us on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      github: 'nostriai'
      // twitter: 'nuxtlabs',
      // instagram: 'atinuxt',
      // linkedin: {
      //   icon: 'uil:linkedin',
      //   label: 'LinkedIn',
      //   href: 'https://www.linkedin.com/company/nuxtlabs'
      // }
    },
    // form: {
    //   successMessage: 'Message sent. Thank you!'
    // }
  }
})
