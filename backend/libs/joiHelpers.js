import { jsonLang } from './errorMessage'

export const langVersions = (value, lang) => {
  if (value?.englishVersion === 'false' && value?.spanishVersion === 'false') {
    return {
      helper: true,
      message: jsonLang('versionValidator', lang),
      label: ['englishVersion', 'spanishVersion']
    }
  }
}
