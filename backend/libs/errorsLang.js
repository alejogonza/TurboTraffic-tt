export const enErrors = {
  'string.empty': 'cannot be empty',
  'any.required': 'cannot be empty',
  'string.pattern.name': 'cannot have numbers or special characters',
  'string.max': 'must be less than or equal to ',
  'string.min': 'must be at least ',
  'number.max': 'must be less than or equal to ',
  'number.min': 'must be greater than or equal to ',
  'number.base': 'must be a number',
  'string.email': 'must be a valid email',
  'number.unsafe': 'not a valid number',
  'boolean.base': 'must be true or false',
  'object.base': 'must be a Object JSON string'
}

export const esErrors = {
  'object.base': 'debe ser Object JSON string',
  'boolean.base': 'debe ser true o false',
  'any.required': 'no puede estar vacio',
  'string.empty': 'no puede estar vacio',
  'string.pattern.name': 'no puede tener numeros o caracteres especiales',
  'string.max': 'debe ser inferior o igual a ',
  'string.min': 'debe tener al menos ',
  'string.email': 'debe ser un correo valido',
  'number.base': 'debe ser un numero',
  'number.max': 'debe ser menor o igual a ',
  'number.min': 'debe ser mayor o igual a ',
  'number.unsafe': 'no es un numero valido'
}

export const specialErrors = {
  variantPriceEn: {
    es: 'debe ser un objeto con formato valido',
    en: 'must be a valid format object'
  },
  variantPriceEs: {
    es: 'debe ser un objeto con formato valido',
    en: 'must be a valid format object'
  },
  guideLang: {
    es: 'debe ser un numero 1: Español, 2: Ingles, 3: Ambos',
    en: 'must be a number 1: Spanish, 2: English, 3: Both'
  },
  bankAccount: {
    es: 'no encontrada',
    en: 'not found'
  },
  bussinessName: {
    es: 'no encontrado',
    en: 'not found'
  },
  bankAccountType: {
    es: 'debe ser corriente o ahorros',
    en: 'must be current or savings'
  },
  documentType: {
    es: 'es invalido',
    en: 'is invalid'
  },
  bankNumber: {
    es: 'debe ser un numero valido',
    en: 'must be a valid number'
  },
  document: {
    es: 'debe ser un documento valido',
    en: 'must be a valid document'
  },
  bussinessId: {
    es: 'es invalido',
    en: 'is invalid'
  },
  phone: {
    es: 'debe ser un numero de telefono valido',
    en: 'must be a valid phone number'
  },
  city: {
    es: 'no valida',
    en: 'not valid'
  },
  state: {
    es: 'no valido',
    en: 'not valid'
  },
  rememberMe: {
    es: 'debe ser un valor booleano',
    en: 'must be a boolean value'
  }
}

export const esLabels = {
  name: 'Nombre',
  bussinessName: 'Nombre del negocio',
  address: 'Dirección',
  email: 'Correo',
  surname: 'Apellido',
  phone: 'Telefono',
  password: 'Contraseña',
  city: 'Ciudad',
  state: 'Estado',
  bussinessId: 'ID de negocio',
  document: 'Documento',
  documentType: 'Tipo de documento',
  bankNumber: 'Numero de cuenta bancaria',
  bankAccountType: 'Tipo de cuenta bancaria',
  bankAccount: 'Cuenta bancaria',
  rememberMe: 'Recuerdame',
  experienceNameEs: 'Nombre de la experiencia en español',
  experienceNameEn: 'Nombre de la experiencia en ingles',
  experienceDetailsEs: 'Detalles de la experiencia en español',
  experienceDetailsEn: 'Detalles de la experiencia en ingles',
  haveGuide: 'Incluye guia',
  guideLang: 'Lenguage del guia',
  includesEs: 'Que incluye',
  includesEn: 'Que incluye en ingles',
  forbiddenEs: 'Prohibido llevar',
  forbiddenEn: 'Prohibido llevar en ingles',
  notForEs: 'No recomendado',
  notForEn: 'No recomendado en ingles',
  toWearEs: 'Que llevar',
  toWearEn: 'Que llevar en ingles',
  cityId: 'Id de ciudad',
  coordsUrl: 'Url de ubicación',
  personsGroup: 'Grupo de personas',
  englishVersion: 'Versión en ingles',
  spanishVersion: 'Versión en español',
  variantPriceEs: 'Variantes de precios',
  variantPriceEn: 'Variantes de precios en ingles'
}

export const enLabels = {
  spanishVersion: 'Spanish version',
  englishVersion: 'English version',
  cityId: 'Id of city',
  coordsUrl: 'Location url',
  toWearEs: 'To wear in spanish',
  toWearEn: 'To wear',
  notForEs: 'Not recommended in spanish',
  notForEn: 'Not recommended ',
  forbiddenEs: 'Forbidden to carry in spanish',
  forbiddenEn: 'Forbidden to carry',
  variantPriceEs: 'Price variants in spanish',
  variantPriceEn: 'Price variants',
  includesEn: 'Which includes',
  includesEs: 'Which includes in spanish',
  haveGuide: 'Includes guide',
  guideLang: 'Guide language',
  experienceNameEs: 'Experiencie name in spanish',
  experienceNameEn: 'Experiencie name',
  experienceDetailsEs: 'Experiencie details in spanish',
  experienceDetailsEn: 'Experiencie details',
  personsGroup: 'Group of people',
  rememberMe: 'Remember me',
  name: 'Name',
  surname: 'Surname',
  bussinessName: 'Bussiness name',
  address: 'Address',
  email: 'Email',
  phone: 'Phone',
  password: 'Password',
  city: 'City',
  state: 'State',
  bussinessId: 'ID of bussiness',
  document: 'Document',
  documentType: 'Document type',
  bankNumber: 'Bank account number',
  bankAccountType: 'Bank account type',
  bankAccount: 'Bank account'
}

export const langJsonList = {
  versionValidator: {
    es: 'Versión en español o versión en ingles deben ser true',
    en: 'Spanish version or English version must be true'
  },
  experienceCreated: {
    es: 'Experiencia creada, asignaremos una categoría adecuada y verificaremos que todo esté en orden, te notificaremos cuando esté listo',
    en: 'Experience created, we will assign an appropriate category and verify that everything is in order, we will notify you when it is ready'
  },
  employeeCreated: {
    es: 'Empleado creado satisfactoriamente',
    en: 'Employee created successfully'
  },
  noOwner: {
    es: 'Dueño no registrado',
    en: 'Owner not registered'
  },
  bussinessIdNotFound: {
    es: 'ID del negocio no encontrado o es invalido',
    en: 'ID of bussiness not found or is invalid'
  },
  categoryCreated: {
    es: 'Categoria creada satisfactoriamente',
    en: 'Category created successfully'
  },
  categoryAlreadyCreated: {
    es: 'Categoria existente',
    en: 'Category exist'
  },
  bussinessHaveOwner: {
    es: 'Dueño existente',
    en: 'Owner exist'
  },
  contractCreated: {
    es: 'Contrato subido satisfactoriamente',
    en: 'Contract updated successfully'
  },
  contractExist: {
    es: 'Contrato existente',
    en: 'Contract exist'
  },
  ownerCreated: {
    es: 'Dueño del negocio creado satisfactoriamente',
    en: 'Bussiness owner created successfully'
  },
  bussinessNoExist: {
    es: 'Negocio no existe',
    en: 'Bussiness no exist'
  },
  ownerExist: {
    es: 'Dueño del negocio ya existe',
    en: 'Bussiness owner already exist'
  },
  justOneFile: {
    es: 'Sube solo un archivo',
    en: 'Upload just one file'
  },
  fileQuantity: {
    es: 'Cantidad de archivos superada solo subir ',
    en: 'File quantity exceded just upload '
  },
  bussinessNameExist: {
    es: 'Nombre del negocio ya existe',
    en: 'Bussiness name already exist'
  },
  bussinessNotFound: {
    es: 'Nombre del negocio no encontrado',
    en: 'Bussiness name not found'
  },
  bussinessCreated: {
    es: 'Negocio creado satisfactoriamente',
    en: 'Bussiness created successfully'
  },
  noFile: {
    es: 'Sube al menos un archivo',
    en: 'Upload at least one file'
  },
  fileNotSupported: {
    es: 'Archivo no soportado solo ',
    en: 'File not supported just '
  },
  fileBig: {
    es: 'Archivo muy grande tamaño maximo 10MB',
    en: 'File too big max size 10MB'
  },
  cityCreated: {
    es: 'Ciudad creada satisfactoriamente',
    en: 'City successfully created'
  },
  cityAlreadyCreated: {
    es: 'Ciudad y estado creado',
    en: 'City and state already created'
  },
  cityValidation: {
    es: 'Ciudad o estado no valida',
    en: 'City or state not valid'
  },
  cityNoCreated: {
    es: 'Ciudad o estado no encontrado',
    en: 'City or state not found'
  },
  userCreated: {
    es: 'Usuario creado satisfactoriamente',
    en: 'User successfully created'
  },
  emailValidation: {
    es: 'Correo ya registrado',
    en: 'Email already registered'
  },
  loginFailue: {
    es: 'Correo o contraseña invalido',
    en: 'Email or password invalid'
  },
  phoneValidation: {
    es: 'Telefono ya registrado',
    en: 'Phone already registered'
  },
  documentValidation: {
    es: 'Documento ya registrado',
    en: 'Document already registered'
  },
  tokenNotFound: {
    es: 'No se encontro un token de acceso',
    en: 'Access token not found'
  },
  invalidRole: {
    es: 'Rol no valido',
    en: 'Invalid role'
  },
  invalidToken: {
    es: 'Token de acceso no valido',
    en: 'Access token not valid'
  },
  invalidUser: {
    es: 'Usuario no valido',
    en: 'User not valid'
  }
}
