import {
  enErrors,
  esErrors,
  enLabels,
  esLabels,
  specialErrors,
  langJsonList
} from './errorsLang'
const errorMessage = (error, lang) => {
  const label = error[0].path[0]
  const type = error[0].type
  console.log(error)
  if (lang === 'en') {
    if (specialErrors[label]) {
      return `${enLabels[label]} ${specialErrors[label].en}`
    }
    return `${enLabels[label]} ${enErrors[type]}${
      error[0].context.limit ? `${error[0].context.limit} characters` : ''
    }`
  }
  if (lang === 'es') {
    if (specialErrors[label]) {
      return `${esLabels[label]} ${specialErrors[label].es}`
    }
    return `${esLabels[label]} ${esErrors[type]}${
      error[0].context.limit ? `${error[0].context.limit} caracteres` : ''
    }`
  }
}

const jsonLang = (type, lang, extra) => {
  if (lang === 'en') {
    return `${langJsonList[type].en}${extra || ''}`
  }

  if (lang === 'es') {
    return `${langJsonList[type].es}${extra || ''}`
  }
}
export { errorMessage, jsonLang }
