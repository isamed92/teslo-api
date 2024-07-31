interface seedAreas {
  name: string;
  description: string;
  createdAt: Date;
}
// INSERT INTO `departamento` VALUES (1,'NULL','2014-01-01',2),(2,'Analisis y diseño','2014-10-20',2),(3,'Desarrollo','2014-10-21',2),(4,'Pruebas e Implementación','2014-11-01',2),(5,'Investigación','2014-11-03',2),(6,'Soporte Técnico','2014-11-18',2),(7,'Seguridad Informática','2014-12-09',2),(8,'Marketing','2014-10-28',2),(9,'Logistica','2015-01-05',2),(10,'Ventas','2014-09-04',2),(11,'Contratación','2014-10-01',2),(12,'Capacitación','2015-11-05',2),(13,'Control de inventarios','2015-05-30',2);
interface seedDepartments {
  name: string;
  description: string;
  createdAt: Date;
  levelId: number;
}

// INSERT INTO `domicilio` VALUES (1,'Italia 260',1),(2,'Balcarce 321',2),(3,'Las Heras 51',3),(4,'Rivadavia 1051',4),(5,'Laprida 635',5),(6,'Maipú 1043',6),(7,'Chacabuco 229',7),(8,'Santiago del Estero 1081',8),(9,'Corrientes 121',9),(10,'Uruguay 403',10);
interface seedAddress {
  street: string;
  personId: number;
}

// INSERT INTO `telefono` VALUES (1,381,4259188,1),(2,3865,426182,2),(3,381,5218476,3),(4,NULL,NULL,4),(5,3863,425482,5),(6,381,4297267,6),(7,NULL,NULL,7),(8,381,5679128,8),(9,3833,425497,9),(10,381,5932823,10);
interface seedPhone {
  areaCode: string;
  number: string;
  personId: number;
}

// INSERT INTO `email` VALUES (1,'mail1@mailnator.com',1),(2,'mail2@mailnator.com',2),(3,'mail3@mailnator.com',3),(4,'mail4@mailnator.com',4),(5,'mail5@mailnator.com',5),(6,'mail6@mailnator.com',6),(7,'mail7@mailnator.com',7),(8,'mail8@mailnator.com',8),(9,'mail9@mailnator.com',9),(10,'mail10@mailnator.com',10);
interface seedEmail {
  email: string;
  personId: number;
}

// INSERT INTO `empleado` VALUES (1,'30001','A',NULL,'2015-09-30',1),(2,'30002','A',NULL,'2015-05-20',2),(3,'30003','I',NULL,'2016-07-05',3),(4,'30004','I',NULL,'2017-08-10',4),(5,'30005','A',NULL,'2016-03-12',5),(6,'30006','S',NULL,'2015-09-17',6),(7,'30007','S',NULL,'2016-08-04',7),(8,'30008','D','Empleado deshabilitado','2016-06-12',8),(9,'30009','D','Empleado deshabilitado','2015-11-08',9),(10,'30010','A',NULL,'2017-10-03',10);
interface seedEmployee {
  employeeIdNumber: string;
  status: string;
  observation: string;
  startDate: Date;
  personId: number;
  userId: number;
}

// INSERT INTO `nivel` VALUES (1,'Gerencial'),(2,'Departametal'),(3,'Sección');
interface seedLevels {
  name: string;
}

// INSERT INTO `persona` VALUES (1,'Nansy','Torres','35901211','1991-09-21','F'),(2,'Rene','Astorga','35718213','1992-09-12','M'),(3,'Emilia','Lavenia','35698714','1993-09-13','F'),(4,'Maximiliano','Avellaneda','35658196','1992-09-11','M'),(5,'Carlos','Sale','35849179','1992-09-01','M'),(6,'Carla','Vellicce','35849167','1992-09-02','F'),(7,'Claudio','Ibarra','35497687','1992-09-03','M'),(8,'Carlos Emanuel','Cardozo','25698741','1992-09-04','M'),(9,'Medina','Isaias','35452163','1992-09-05','M'),(10,'Juan Carlos','Olivera','25963147','1992-09-06','M');
interface seedPerson {
  firstName: string;
  lastName: string;
  dni: string;
  birthdate: Date;
  gender: string;
}

// INSERT INTO `puesto` VALUES (1,'Análista en sistemas','2014-11-12','Efectuar el elevamiento y análisis de los sistemas informáticos a fin de proponer mejoras o soluciones y/o el desarrollo de nuevo software.','Efectuar el elevamiento y análisis de los sistemas informáticos a fin de proponer mejoras o soluciones y/o el desarrollo de nuevo software.','Ingeniería de software','Análisis, Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad','1 año y medio a 2 años'),(2,'Programador','2014-11-13','Efectuar  el desarrollo de nuevo software adaptado a las necesidades del  cliente.','Efectuar  el desarrollo de nuevo software adaptado a las necesidades del  cliente.','Lenguajes de programación, Bases de datos','Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad','1 año y medio a 2 años'),(3,'Análista en mantenimiento','2014-12-20','Mantener funcionando correctamente los equipos del organismo operador ','Mantener funcionando correctamente los equipos del organismo operador ','Interfaces digital – analógico a sistemas informáticos ','Análisis, Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad ','1 año y medio a 2 años'),(4,'Análista en comunicaciones','2014-12-15','Mejora y optimización de los sistemas de comunicación','Mejora y optimización de los sistemas de comunicación','Telefonía, Redes de cómputo, Configuración de antenas, Configuración de swtches, Configuración de routers, Software relacionado, Nuevas tecnologías, Conocimientos básicos de computación ','Análisis, Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad','2 años'),(5,'Administrador de base de datos','2014-12-21','Administrar las bases de datos institucionales  y velar por la seguridad de la información','Administrar las bases de datos institucionales  y velar por la seguridad de la información','Bases de datos. Configuración y manejo de motores de base de datos','Comprensión oral, Comprobación, Detección de averias, Diseño de tecnología, Identificación de problemas, Juicio y toma de decisiones, Operación y control, Organización de la información, Recopilación de información','2 años'),(6,'Jefe de Recursos Humanos','2014-11-25','Dirigir, planificar y controlar las diversas tareas que implica la administración de los recursos humanos en la organización con el fin de garantizar su desarrollo para satisfacer las exigencias de la misma.','Dirigir, planificar y controlar las diversas tareas que implica la administración de los recursos humanos en la organización con el fin de garantizar su desarrollo para satisfacer las exigencias de la misma.','Amplios conocimientos en técnicas de Supervisión.','Capacidad para dirigir la elaboración de políticas, prácticas, proyectos, planes y programas en materia de Gestión de Recursos Humanos, Salud Ocupacional, Relaciones Laborales y Sindicales y Administración de Personal. Amabilidad. Solución de problemas. Comunicación verbal. Organización del trabajo. Responsabilidad. Liderazgo y motivación','1 año y medio'),(7,'Jefe de Contratación','2014-12-18','Dirige el proceso de reclutamiento, selección, confección y aplicación de pruebas y la contratación por concursos al personal eventual y temporal','Dirige el proceso de reclutamiento, selección, confección y aplicación de pruebas y la contratación por concursos al personal eventual y temporal','Técnicas modernas sobre selección del personal. Redacción de pruebas de selección. Sobre evaluación y medición del trabajo.','Demuestra dominio en materia de legislación de administración financiera estando en condiciones de aplicarla en una variedad de escenarios con autonomía propia y siendo reconocido como experto en el área de su competencia. - Compromiso con el aprendizaje. - Comprensión del entorno organizacional. Construcción de relaciones Planificación y Gestión Desarrollo de Personal. ','2 años'),(8,'Gerente General','2014-11-11','Liderar la gestión estratégica, dirigiendo y coordinando a las distintas áreas para asegurar la rentabilidad , competitividad, continuidad y sustentabiliad de la empresa, cumpliendo con los lineamientos estratégicos del directorio y las normativas y reglamentos vigentes','Liderar la gestión estratégica, dirigiendo y coordinando a las distintas áreas para asegurar la rentabilidad , competitividad, continuidad y sustentabiliad de la empresa, cumpliendo con los lineamientos estratégicos del directorio y las normativas y reglamentos vigentes','Plantación, Dirección, Supervisión y Control en el área administrativa y de operación. Manejo de Equipo de Computo y software administrativo. Ingles(80%). Coaching','Gerenciamiento de la Motivación del Personal.  - Capacidad de poder hacer que los demás mantengan un ritmo de trabajo intenso. - Capacidad de desarrollar, consolidar y conducir un equipo de trabajo alentando a sus miembros a trabajar con autonomía y responsabilidad. - Liderazgo. - Habilidad necesaria para orientar la acción de los grupos humanos en una dirección determinada.  - Establecer objetivos, darles adecuado seguimiento y retroalimentación, integrando las opiniones de los otros. - Comunicación Eficaz - Capacidad de escuchar, hacer preguntas, expresar conceptos e ideas en forma efectiva. Toma de decisiones. - Capacidad de elegir entre cursos o caminos de acción alternativos, utilizando procesos cognitivos como memoria, pensamiento y evaluación ','2 años y medio'),(9,'Jefe de Sistemas','2014-11-11','Gestionar y coordinar los recursos necesarios relacionados con el desarrollo e implementación de sistemas de información.','Gestionar y coordinar los recursos necesarios relacionados con el desarrollo e implementación de sistemas de información.','Lenguajes de programación  Bases de datos  Redes  Telefonía  Ingeniería de software  Comunicaciones  Software  Hardware  Conocimientos generales de electrónica  Paquetería  Administración de servidores  Administración general ','Liderazgo  Análisis  Iniciativa  Manejo de personal  Trabajar bajo presión  Responsabilidad  Buena presentación   Disciplina  Toma de decisiones ','2 años'),(10,'Jefe Comercial','2014-11-10','Planificar, organizar, dirigir, controlar y coordinar eficientemente el sistema comercial, diseñando estrategias que permitan el logro de los objetivos empresariales, dirigiendo el desarrollo de las actividades de marketing y las condiciones de venta de los servicios, encaminado al cumplimiento de las metas establecidas por la planeación estratégica.','Planificar, organizar, dirigir, controlar y coordinar eficientemente el sistema comercial, diseñando estrategias que permitan el logro de los objetivos empresariales, dirigiendo el desarrollo de las actividades de marketing y las condiciones de venta de los servicios, encaminado al cumplimiento de las metas establecidas por la planeación estratégica.','Elaboración  de estrategias comerciales. Maketing. Desarrollo y ejecución de nuevos proyectos comerciales. Atención a clientes.','Alta capacidad para saber vender.  - Capacidad para trabajar con aplicaciones informáticas. - Conocimientos técnicos sobre los productos y/o servicios de la empresa. - Conocimiento de su mercado - Conocimiento de los principios del marketing estratégico y la metodología del marketing operativo actual. - Capacidad para centrarse en los resultados. - Compartir la misión de la empresa - Gestión del tiempo - Habilidades de liderazgo. - Habilidades para solucionar con eficiencia los problemas. - Capacidad para planificar sus actividades de acuerdo a los objetivos definidos - Energía, mucho entusiasmo y motivación. - Actitud positiva - Habilidades interpersonales. - Habilidades de comunicación','2 años'),(11,'Jefe de Compras','2014-11-10','Planifica, y dirige las actividades que lleva a cabo el departamento de compras de la institución que corresponde a todo el proceso de compras y adquisiciones de acuerdo a la legislación.','Planifica, y dirige las actividades que lleva a cabo el departamento de compras de la institución que corresponde a todo el proceso de compras y adquisiciones de acuerdo a la legislación.','Ley de compras. Código fiscal.','Innovación. - Adaptación al cambio. - Toma de decisiones. - Compromiso y lealtad. - Iniciativa. - Sensibilidad medioambiental. - Espíritu emprendedor. - Espíritu comercial. - Capacidad de aprendizaje. - Dinamismo y entusiasmo. - Capacidad de negociación.','2 años'),(12,'Jefe de Analisis y Diseño','2014-11-09','Realizar tareas de Relevamiento,  Análisis y diseño de los sistemas informáticos.','Realizar tareas de Relevamiento,  Análisis y diseño de los sistemas informáticos.','Trayectoria laboral en el área de incumbencia  Conocimientos  y experiencia en Metodologías de Desarrollo de Software Sólidos conocimientos de diagramación lógica, algoritmos y estructuras de datos.  Sólidos conocimientos de programación, análisis y diseño',' Flexibilidad mental de criterios. - Habilidades para la obtención y análisis de información. - Orientación al cliente (interno/externo). - Interés por la Innovación. - Capacidad de síntesis. - Perspectiva estratégica. - Capacidad de análisis y síntesis.  - Capacidad de organización y planificación.  - Comunicación oral y escrita en lengua nativa.  - Capacidad de gestión de la información. Resolución de problemas.  - Toma de decisiones.  ','2 años'),(13,'Jefe de Desarrollo','2014-11-09','Planifica, organiza y controla la implementación de los sistemas informáticos y evalúa el desarrollo de los mismos. Asegura el buen funcionamiento de las aplicaciones; atiende y resuelve consultas de los usuarios.','Planifica, organiza y controla la implementación de los sistemas informáticos y evalúa el desarrollo de los mismos. Asegura el buen funcionamiento de las aplicaciones; atiende y resuelve consultas de los usuarios.','Sobre el uso de aplicaciones y lenguaje de programación. Sobre base de datos, sistemas operativos. Sobre formulación y evaluación de proyectos.','Para recordar conceptos, incluyendo instrucciones y planes generales. Para recordar rápidamente pequeñas diferencias en palabras, nombres o detalles de números. Para expresarse oralmente.','2 años'),(14,'Jefe de Pruebas e Implementación','2014-11-10','Asegurar que el software o pieza de software funcione de acuerdo con los requisitos; trabaje con sus interfaces de la forma esperada, detectando en forma temprana defectos y evitando su propagación y llegada al cliente (interno o externo).','Asegurar que el software o pieza de software funcione de acuerdo con los requisitos; trabaje con sus interfaces de la forma esperada, detectando en forma temprana defectos y evitando su propagación y llegada al cliente (interno o externo).','Conocimientos de ingeniería del software. Conocimientos de metodologías y modelos de calidad para la industria del software. Metodologías de desarrollo de sistemas (ágiles, no ágiles). Conocimientos de herramientas para la ejecución y seguimiento de testing. Conocimientos de lenguajes de consulta de Base de Datos','Actitud, responsabilidad y compromiso, con orientación a resultados. Detallista (que preste atención al detalle, a las particularidades). Pensamiento analítico / crítico. Pragmatismo (adecuar las técnicas y el esfuerzo al alcance del proyecto). Capacidad de trabajo en equipo, con buen manejo de relaciones interpersonales. Capacidad de abstracción. Orientación al cliente Interno / Externo.','2 años'),(15,'Jefe de Investigación','2014-11-10','Responsable por lograr un adecuado y oportuno asesoramiento al departamento de sistemas en aspectos especializados en tecnologías de información y comunicaciones, innovación y desarrollo tecnológico.','Responsable por lograr un adecuado y oportuno asesoramiento al departamento de sistemas en aspectos especializados en tecnologías de información y comunicaciones, innovación y desarrollo tecnológico.','Post grado en áreas afines o administrativas. Habilidad para dirigir, planificar, supervisar y coordinar trabajos, metas y objetivos. Habilidad para la comunicación efectiva de ideas. Habilidad para para implementar sistemas y procedimientos nuevos de trabajo.','Liderazgo. Orientación al Logro. Trabajo en Equipo. Toma de Decisiones. Planificación Organizacional','2 años'),(16,'Jefe de Soporte Técnico','2014-11-09','Mantener equipos de cómputo en buen estado hardware ','Mantener equipos de cómputo en buen estado hardware ','Conocimientos básicos en computación   Conocimientos básicos en electrónica','Iniciativa  Responsable  Puntualidad  Presentación  Trabajar bajo presión  Disciplina','1 año'),(17,'Jefe de Seguridad Informática','2014-11-09',NULL,NULL,NULL,NULL,NULL),(18,'Jefe de Marketing','2014-11-10',NULL,NULL,NULL,NULL,NULL),(19,'Jefe de Logistica','2014-11-10',NULL,NULL,NULL,NULL,NULL),(20,'Jefe de Ventas','2014-11-09',NULL,NULL,NULL,NULL,NULL),(21,'Jefe de Capacitación','2014-11-11',NULL,NULL,NULL,NULL,NULL),(22,'Jefe de Inventarios','2014-11-10',NULL,NULL,NULL,NULL,NULL);
interface seedPositions {
  name: string;
  createdAt: Date;
  description: string;
  functions?: string;
  knowledge?: string;
  skills?: string;
  experience?: string;
}

// INSERT INTO `seccion` VALUES (1,'NULL','2014-01-01',3),(2,'Proyecto','2014-11-05',3),(3,'Diseño','2014-11-10',3),(4,'Desarrollo Web','2014-11-01',3),(5,'Base de datos','2014-11-12',3),(6,'Testing','2014-11-25',3),(7,'Deployment','2014-11-30',3),(8,'Nuevas tecnologías','2014-11-08',3),(9,'Innovación de proyectos','2014-11-03',3),(10,'Servicios','2014-11-19',3),(11,'Tecnologías','2014-11-07',3),(12,'Redes y comunicaciones','2014-11-27',3),(13,'Politicas de seguridad','2014-11-04',3),(14,'Planes de contingencia','2014-11-01',3),(15,'Atencion al cliente','2014-11-22',3),(16,'Formación de personal','2014-11-21',3),(17,'Sumunistros','2014-11-25',3),(18,'Compras locales','2014-11-29',3),(19,'Importaciones','2014-11-09',3),(20,'Auditoria','2014-11-18',3);
interface seedSections {
  name: string;
  createdAt: Date;
  levelId: number;
}

// INSERT INTO `empleado_has_puesto` VALUES (1,6,1,'A','2014-11-05',NULL,4,1),(2,12,1,'I','2014-11-20','2017-09-20',2,2),(2,16,1,'A','2014-11-30',NULL,2,6),(3,7,1,'A','2014-11-15',NULL,4,11),(4,9,1,'I','2014-11-02','2017-09-09',2,1),(4,14,1,'A','2014-11-08',NULL,2,4),(5,10,1,'A','2014-11-18',NULL,3,1),(5,18,1,'A','2014-11-01',NULL,3,8),(6,15,1,'A','2014-11-07',NULL,2,5),(6,20,1,'A','2014-11-24',NULL,3,10),(7,8,1,'A','2014-11-22',NULL,6,1),(7,21,1,'I','2014-11-05','2017-09-30',4,12),(8,19,1,'A','2014-11-07',NULL,3,9),(9,11,1,'A','2014-11-19',NULL,5,1),(9,17,1,'A','2014-11-03',NULL,2,7),(10,13,1,'A','2014-11-28',NULL,2,3),(10,22,1,'A','2014-11-25',NULL,5,13);
interface seedEmployeePosition {
  employeeId: number;
  positionId: number;
  status: string;
  startDate: Date;
  endDate: Date;
  sectionId: number;
  departmentId: number;
}

const areas: seedAreas[] = [
  {
    name: 'Sistemas',
    description: 'Sistemas',
    createdAt: new Date('2014-10-09'),
  },
  {
    name: 'Comercial',
    description: 'Comercial',
    createdAt: new Date('2014-10-20'),
  },
  {
    name: 'Recursos Humanos',
    description: 'Recursos Humanos',
    createdAt: new Date('2014-10-01'),
  },
  {
    name: 'Compras',
    description: 'Compras',
    createdAt: new Date('2015-05-20'),
  },
  {
    name: 'Gerencia general',
    description: 'Gerencia general',
    createdAt: new Date('2014-11-10'),
  },
];

const departments: seedDepartments[] = [
  {
    name: 'Analisis y diseño',
    description: 'Analisis y diseño',
    createdAt: new Date('2014-10-20'),
    levelId: 2,
  },
  {
    name: 'Desarrollo',
    description: 'Desarrollo',
    createdAt: new Date('2014-10-21'),
    levelId: 2,
  },
  {
    name: 'Pruebas e Implementación',
    description: 'Pruebas e Implementación',
    createdAt: new Date('2014-11-01'),
    levelId: 2,
  },
  {
    name: 'Investigación',
    description: 'Investigación',
    createdAt: new Date('2014-11-03'),
    levelId: 2,
  },
  {
    name: 'Soporte Técnico',
    description: 'Soporte Técnico',
    createdAt: new Date('2014-11-18'),
    levelId: 2,
  },
  {
    name: 'Seguridad Informática',
    description: 'Seguridad Informática',
    createdAt: new Date('2014-12-09'),
    levelId: 2,
  },
  {
    name: 'Marketing',
    description: 'Marketing',
    createdAt: new Date('2014-10-28'),
    levelId: 2,
  },
  {
    name: 'Logistica',
    description: 'Logistica',
    createdAt: new Date('2015-01-05'),
    levelId: 2,
  },
  {
    name: 'Ventas',
    description: 'Ventas',
    createdAt: new Date('2014-09-04'),
    levelId: 2,
  },
  {
    name: 'Contratación',
    description: 'Contratación',
    createdAt: new Date('2014-10-01'),
    levelId: 2,
  },
  {
    name: 'Capacitación',
    description: 'Capacitación',
    createdAt: new Date('2015-11-05'),
    levelId: 2,
  },
  {
    name: 'Control de inventarios',
    description: 'Control de inventarios',
    createdAt: new Date('2015-05-30'),
    levelId: 2,
  },
];

const address: seedAddress[] = [
  {
    street: 'Italia 260',
    personId: 1,
  },
  {
    street: 'Balcarce 321',
    personId: 2,
  },
  {
    street: 'Las Heras 51',
    personId: 3,
  },
  {
    street: 'Rivadavia 1051',
    personId: 4,
  },
  {
    street: 'Laprida 635',
    personId: 5,
  },
  {
    street: 'Maipú 1043',
    personId: 6,
  },
  {
    street: 'Chacabuco 229',
    personId: 7,
  },
  {
    street: 'Santiago del Estero 1081',
    personId: 8,
  },
  {
    street: 'Corrientes 121',
    personId: 9,
  },
  {
    street: 'Uruguay 403',
    personId: 10,
  },
];

const email: seedEmail[] = [
  {
    email: 'mail1@mailinator.com',
    personId: 1,
  },
  {
    email: 'mail2@mailinator.com',
    personId: 2,
  },
  {
    email: 'mail3@mailinator.com',
    personId: 3,
  },
  {
    email: 'mail4@mailinator.com',
    personId: 4,
  },
  {
    email: 'mail5@mailinator.com',
    personId: 5,
  },
  {
    email: 'mail6@mailinator.com',
    personId: 6,
  },
  {
    email: 'mail7@mailinator.com',
    personId: 7,
  },
  {
    email: 'mail8@mailinator.com',
    personId: 8,
  },
  {
    email: 'mail9@mailinator.com',
    personId: 9,
  },
  {
    email: 'mail10@mailinator.com',
    personId: 10,
  },
];

const employee: seedEmployee[] = [
  {
    employeeIdNumber: '30001',
    status: 'A',
    observation: null,
    startDate: new Date('2015-09-30'),
    personId: 1,
    userId: 1,
  },
  {
    employeeIdNumber: '30002',
    status: 'A',
    observation: null,
    startDate: new Date('2015-05-20'),
    personId: 2,
    userId: 2,
  },
  {
    employeeIdNumber: '30003',
    status: 'I',
    observation: null,
    startDate: new Date('2016-07-05'),
    personId: 3,
    userId: 3,
  },
  {
    employeeIdNumber: '30004',
    status: 'I',
    observation: null,
    startDate: new Date('2017-08-10'),
    personId: 4,
    userId: 4,
  },
  {
    employeeIdNumber: '30005',
    status: 'A',
    observation: null,
    startDate: new Date('2016-03-12'),
    personId: 5,
    userId: 5,
  },
  {
    employeeIdNumber: '30006',
    status: 'S',
    observation: null,
    startDate: new Date('2015-09-17'),
    personId: 6,
    userId: 6,
  },
  {
    employeeIdNumber: '30007',
    status: 'S',
    observation: null,
    startDate: new Date('2016-08-04'),
    personId: 7,
    userId: 7,
  },
  {
    employeeIdNumber: '30008',
    status: 'D',
    observation: 'Empleado deshabilitado',
    startDate: new Date('2016-06-12'),
    personId: 8,
    userId: 8,
  },
  {
    employeeIdNumber: '30009',
    status: 'D',
    observation: 'Empleado deshabilitado',
    startDate: new Date('2015-11-08'),
    personId: 9,
    userId: 9,
  },
  {
    employeeIdNumber: '30010',
    status: 'A',
    observation: null,
    startDate: new Date('2017-10-03'),
    personId: 10,
    userId: 10,
  },
];

const levels: seedLevels[] = [
  {
    name: 'Gerencial',
  },
  {
    name: 'Departametal',
  },
  {
    name: 'Sección',
  },
];

const person: seedPerson[] = [
  {
    firstName: 'Nansy',
    lastName: 'Torres',
    dni: '35901211',
    birthdate: new Date('1991-09-21'),
    gender: 'F',
  },
  {
    firstName: 'Rene',
    lastName: 'Astorga',
    dni: '35718213',
    birthdate: new Date('1992-09-12'),
    gender: 'M',
  },
  {
    firstName: 'Emilia',
    lastName: 'Lavenia',
    dni: '35698714',
    birthdate: new Date('1993-09-13'),
    gender: 'F',
  },
  {
    firstName: 'Maximiliano',
    lastName: 'Avellaneda',
    dni: '35658196',
    birthdate: new Date('1992-09-11'),
    gender: 'M',
  },
  {
    firstName: 'Carlos',
    lastName: 'Sale',
    dni: '35849179',
    birthdate: new Date('1992-09-01'),
    gender: 'M',
  },
  {
    firstName: 'Carla',
    lastName: 'Vellicce',
    dni: '35849167',
    birthdate: new Date('1992-09-02'),
    gender: 'F',
  },
  {
    firstName: 'Claudio',
    lastName: 'Ibarra',
    dni: '35497687',
    birthdate: new Date('1992-09-03'),
    gender: 'M',
  },
  {
    firstName: 'Carlos Emanuel',
    lastName: 'Cardozo',
    dni: '25698741',
    birthdate: new Date('1992-09-04'),
    gender: 'M',
  },
  {
    firstName: 'Medina',
    lastName: 'Isaias',
    dni: '35452163',
    birthdate: new Date('1992-09-05'),
    gender: 'M',
  },
  {
    firstName: 'Juan Carlos',
    lastName: 'Olivera',
    dni: '25963147',
    birthdate: new Date('1992-09-06'),
    gender: 'M',
  },
];

const positions: seedPositions[] = [
  {
    name: 'Análista en sistemas',
    createdAt: new Date('2014-11-12'),
    description:
      'Efectuar el elevamiento y análisis de los sistemas informáticos a fin de proponer mejoras o soluciones y/o el desarrollo de nuevo software.',
    functions:
      'Efectuar el elevamiento y análisis de los sistemas informáticos a fin de proponer mejoras o soluciones y/o el desarrollo de nuevo software.',
    knowledge: 'Ingeniería de software',
    skills:
      'Análisis, Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad',
    experience: '1 año y medio a 2 años',
  },
  {
    name: 'Programador',
    createdAt: new Date('2014-11-13'),
    description:
      'Efectuar  el desarrollo de nuevo software adaptado a las necesidades del  cliente.',
    functions:
      'Efectuar  el desarrollo de nuevo software adaptado a las necesidades del  cliente.',
    knowledge: 'Lenguajes de programación, Bases de datos',
    skills:
      'Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad',
    experience: '1 año y medio a 2 años',
  },
  {
    name: 'Análista en mantenimiento',
    createdAt: new Date('2014-12-20'),
    description:
      'Mantener funcionando correctamente los equipos del organismo operador ',
    functions:
      'Mantener funcionando correctamente los equipos del organismo operador ',
    knowledge: 'Interfaces digital – analógico a sistemas informáticos ',
    skills:
      'Análisis, Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad ',
    experience: '1 año y medio a 2 años',
  },
  {
    name: 'Análista en comunicaciones',
    createdAt: new Date('2014-12-15'),
    description: 'Mejora y optimización de los sistemas de comunicación',
    functions: 'Mejora y optimización de los sistemas de comunicación',
    knowledge:
      'Telefonía, Redes de cómputo, Configuración de antenas, Configuración de swtches, Configuración de routers, Software relacionado, Nuevas tecnologías, Conocimientos básicos de computación ',
    skills:
      'Análisis, Iniciativa, Responsable, Buena presentación, Trabajar bajo presión, Disciplina, Puntualidad',
    experience: '2 años',
  },
  {
    name: 'Administrador de base de datos',
    createdAt: new Date('2014-12-21'),
    description:
      'Administrar las bases de datos institucionales  y velar por la seguridad de la información',
    functions:
      'Administrar las bases de datos institucionales  y velar por la seguridad de la información',
    knowledge:
      'Bases de datos. Configuración y manejo de motores de base de datos',
    skills:
      'Comprensión oral, Comprobación, Detección de averias, Diseño de tecnología, Identificación de problemas, Juicio y toma de decisiones, Operación y control, Organización de la información, Recopilación de información',
    experience: '2 años',
  },
  {
    name: 'Jefe de Recursos Humanos',
    createdAt: new Date('2014-11-25'),
    description:
      'Dirigir, planificar y controlar las diversas tareas que implica la administración de los recursos humanos en la organización con el fin de garantizar su desarrollo para satisfacer las exigencias de la misma.',
    functions:
      'Dirigir, planificar y controlar las diversas tareas que implica la administración de los recursos humanos en la organización con el fin de garantizar su desarrollo para satisfacer las exigencias de la misma.',
    knowledge: 'Amplios conocimientos en técnicas de Supervisión.',
    skills:
      'Capacidad para dirigir la elaboración de políticas, prácticas, proyectos, planes y programas en materia de Gestión de Recursos Humanos, Salud Ocupacional, Relaciones Laborales y Sindicales y Administración de Personal. Amabilidad. Solución de problemas. Comunicación verbal. Organización del trabajo. Responsabilidad. Liderazgo y motivación',
    experience: '1 año y medio',
  },
  {
    name: 'Jefe de Contratación',
    createdAt: new Date('2014-12-18'),
    description:
      'Dirige el proceso de reclutamiento, selección, confección y aplicación de pruebas y la contratación por concursos al personal eventual y temporal',
    functions:
      'Dirige el proceso de reclutamiento, selección, confección y aplicación de pruebas y la contratación por concursos al personal eventual y temporal',
    knowledge:
      'Técnicas modernas sobre selección del personal. Redacción de pruebas de selección. Sobre evaluación y medición del trabajo.',
    skills:
      'Demuestra dominio en materia de legislación de administración financiera estando en condiciones de aplicarla en una variedad de escenarios con autonomía propia y siendo reconocido como experto en el área de su competencia. - Compromiso con el aprendizaje. - Comprensión del entorno organizacional. Construcción de relaciones Planificación y Gestión Desarrollo de Personal. ',
    experience: '2 años',
  },
  {
    name: 'Gerente General',
    createdAt: new Date('2014-11-11'),
    description:
      'Liderar la gestión estratégica, dirigiendo y coordinando a las distintas áreas para asegurar la rentabilidad , competitividad, continuidad y sustentabiliad de la empresa, cumpliendo con los lineamientos estratégicos del directorio y las normativas y reglamentos vigentes',
    functions:
      'Liderar la gestión estratégica, dirigiendo y coordinando a las distintas áreas para asegurar la rentabilidad , competitividad, continuidad y sustentabiliad de la empresa, cumpliendo con los lineamientos estratégicos del directorio y las normativas y reglamentos vigentes',
    knowledge:
      'Plantación, Dirección, Supervisión y Control en el área administrativa y de operación. Manejo de Equipo de Computo y software administrativo. Ingles(80%). Coaching',
    skills:
      'Gerenciamiento de la Motivación del Personal.  - Capacidad de poder hacer que los demás mantengan un ritmo de trabajo intenso. - Capacidad de desarrollar, consolidar y conducir un equipo de trabajo alentando a sus miembros a trabajar con autonomía y responsabilidad. - Liderazgo. - Habilidad necesaria para orientar la acción de los grupos humanos en una dirección determinada.  - Establecer objetivos, darles adecuado seguimiento y retroalimentación, integrando las opiniones de los otros. - Comunicación Eficaz - Capacidad de escuchar, hacer preguntas, expresar conceptos e ideas en forma efectiva. Toma de decisiones. - Capacidad de elegir entre cursos o caminos de acción alternativos, utilizando procesos cognitivos como memoria, pensamiento y evaluación ',
    experience: '2 años y medio',
  },
  {
    name: 'Jefe de Sistemas',
    createdAt: new Date('2014-11-11'),
    description:
      'Gestionar y coordinar los recursos necesarios relacionados con el desarrollo e implementación de sistemas de información.',
    functions:
      'Gestionar y coordinar los recursos necesarios relacionados con el desarrollo e implementación de sistemas de información.',
    knowledge:
      'Lenguajes de programación  Bases de datos  Redes  Telefonía  Ingeniería de software  Comunicaciones  Software  Hardware  Conocimientos generales de electrónica  Paquetería  Administración de servidores  Administración general ',
    skills:
      'Liderazgo  Análisis  Iniciativa  Manejo de personal  Trabajar bajo presión  Responsabilidad  Buena presentación   Disciplina  Toma de decisiones ',
    experience: '2 años',
  },
  {
    name: 'Jefe Comercial',
    createdAt: new Date('2014-11-10'),
    description:
      'Planificar, organizar, dirigir, controlar y coordinar eficientemente el sistema comercial, diseñando estrategias que permitan el logro de los objetivos empresariales, dirigiendo el desarrollo de las actividades de marketing y las condiciones de venta de los servicios, encaminado al cumplimiento de las metas establecidas por la planeación estratégica.',
    functions:
      'Planificar, organizar, dirigir, controlar y coordinar eficientemente el sistema comercial, diseñando estrategias que permitan el logro de los objetivos empresariales, dirigiendo el desarrollo de las actividades de marketing y las condiciones de venta de los servicios, encaminado al cumplimiento de las metas establecidas por la planeación estratégica.',
    knowledge:
      'Elaboración  de estrategias comerciales. Maketing. Desarrollo y ejecución de nuevos proyectos comerciales. Atención a clientes.',
    skills:
      'Alta capacidad para saber vender.  - Capacidad para trabajar con aplicaciones informáticas. - Conocimientos técnicos sobre los productos y/o servicios de la empresa. - Conocimiento de su mercado - Conocimiento de los principios del marketing estratégico y la metodología del marketing operativo actual. - Capacidad para centrarse en los resultados. - Compartir la misión de la empresa - Gestión del tiempo - Habilidades de liderazgo. - Habilidades para solucionar con eficiencia los problemas. - Capacidad para planificar sus actividades de acuerdo a los objetivos definidos - Energía, mucho entusiasmo y motivación. - Actitud positiva - Habilidades interpersonales. - Habilidades de comunicación',
    experience: '2 años',
  },
  {
    name: 'Jefe de Compras',
    createdAt: new Date('2014-11-10'),
    description:
      'Planifica, y dirige las actividades que lleva a cabo el departamento de compras de la institución que corresponde a todo el proceso de compras y adquisiciones de acuerdo a la legislación.',
    functions:
      'Planifica, y dirige las actividades que lleva a cabo el departamento de compras de la institución que corresponde a todo el proceso de compras y adquisiciones de acuerdo a la legislación.',
    knowledge: 'Ley de compras. Código fiscal.',
    skills:
      'Innovación. - Adaptación al cambio. - Toma de decisiones. - Compromiso y lealtad. - Iniciativa. - Sensibilidad medioambiental. - Espíritu emprendedor. - Espíritu comercial. - Capacidad de aprendizaje. - Dinamismo y entusiasmo. - Capacidad de negociación.',
    experience: '2 años',
  },
  {
    name: 'Jefe de Analisis y Diseño',
    createdAt: new Date('2014-11-09'),
    description:
      'Realizar tareas de Relevamiento,  Análisis y diseño de los sistemas informáticos.',
    functions:
      'Realizar tareas de Relevamiento,  Análisis y diseño de los sistemas informáticos.',
    knowledge:
      'Trayectoria laboral en el área de incumbencia  Conocimientos  y experiencia en Metodologías de Desarrollo de Software Sólidos conocimientos de diagramación lógica, algoritmos y estructuras de datos.  Sólidos conocimientos de programación, análisis y diseño',
    skills:
      'Flexibilidad mental de criterios. - Habilidades para la obtención y análisis de información. - Orientación al cliente (interno/externo). - Interés por la Innovación. - Capacidad de síntesis. - Perspectiva estratégica. - Capacidad de análisis y síntesis.  - Capacidad de organización y planificación.  - Comunicación oral y escrita en lengua nativa.  - Capacidad de gestión de la información. Resolución de problemas.  - Toma de decisiones.  ',
    experience: '2 años',
  },
  {
    name: 'Jefe de Desarrollo',
    createdAt: new Date('2014-11-09'),
    description:
      'Planifica, organiza y controla la implementación de los sistemas informáticos y evalúa el desarrollo de los mismos. Asegura el buen funcionamiento de las aplicaciones; atiende y resuelve consultas de los usuarios.',
    functions:
      'Planifica, organiza y controla la implementación de los sistemas informáticos y evalúa el desarrollo de los mismos. Asegura el buen funcionamiento de las aplicaciones; atiende y resuelve consultas de los usuarios.',
    knowledge:
      'Sobre el uso de aplicaciones y lenguaje de programación. Sobre base de datos, sistemas operativos. Sobre formulación y evaluación de proyectos.',
    skills:
      'Para recordar conceptos, incluyendo instrucciones y planes generales. Para recordar rápidamente pequeñas diferencias en palabras o nombres o detalles de números. Para expresarse oralmente.',
    experience: '2 años',
  },
  {
    name: 'Jefe de Pruebas e Implementación',
    createdAt: new Date('2014-11-10'),
    description:
      'Asegurar que el software o pieza de software funcione de acuerdo con los requisitos; trabaje con sus interfaces de la forma esperada, detectando en forma temprana defectos y evitando su propagación y llegada al cliente (interno o externo).',
    functions:
      'Asegurar que el software o pieza de software funcione de acuerdo con los requisitos; trabaje con sus interfaces de la forma esperada, detectando en forma temprana defectos y evitando su propagación y llegada al cliente (interno o externo).',
    knowledge:
      'Conocimientos de ingeniería del software. Conocimientos de metodologías y modelos de calidad para la industria del software. Metodologías de desarrollo de sistemas (ágiles, no ágiles). Conocimientos de herramientas para la ejecución y seguimiento de testing. Conocimientos de lenguajes de consulta de Base de Datos',
    skills:
      'Actitud, responsabilidad y compromiso, con orientación a resultados. Detallista (que preste atención al detalle, a las particularidades). Pensamiento analítico / crítico. Pragmatismo (adecuar las técnicas y el esfuerzo al alcance del proyecto). Capacidad de trabajo en equipo, con buen manejo de relaciones interpersonales. Capacidad de abstracción. Orientación al cliente Interno / Externo.',
    experience: '2 años',
  },
  {
    name: 'Jefe de Investigación',
    createdAt: new Date('2014-11-10'),
    description:
      'Responsable por lograr un adecuado y oportuno asesoramiento al departamento de sistemas en aspectos especializados en tecnologías de información y comunicaciones, innovación y desarrollo tecnológico.',
    functions:
      'Responsable por lograr un adecuado y oportuno asesoramiento al departamento de sistemas en aspectos especializados en tecnologías de información y comunicaciones, innovación y desarrollo tecnológico.',
    knowledge:
      'Post grado en áreas afines o administrativas. Habilidad para dirigir, planificar, supervisar y coordinar trabajos, metas y objetivos. Habilidad para la comunicación efectiva de ideas. Habilidad para para implementar sistemas y procedimientos nuevos de trabajo.',
    skills:
      'Liderazgo. Orientación al Logro. Trabajo en Equipo. Toma de Decisiones. Planificación Organizacional',
    experience: '2 años',
  },
  {
    name: 'Jefe de Soporte Técnico',
    createdAt: new Date('2014-11-09'),
    description: 'Mantener equipos de cómputo en buen estado hardware ',
    functions: 'Mantener equipos de cómputo en buen estado hardware ',
    knowledge:
      'Conocimientos básicos en computación   Conocimientos básicos en electrónica',
    skills:
      'Iniciativa  Responsable  Puntualidad  Presentación  Trabajar bajo presión  Disciplina',
    experience: '1 año',
  },
  {
    name: 'Jefe de Seguridad Informática',
    createdAt: new Date('2014-11-09'),
    description: null,
    functions: null,
    knowledge: null,
    skills: null,
    experience: null,
  },
  {
    name: 'Jefe de Marketing',
    createdAt: new Date('2014-11-10'),
    description: null,
    functions: null,
    knowledge: null,
    skills: null,
    experience: null,
  },
  {
    name: 'Jefe de Logistica',
    createdAt: new Date('2014-11-10'),
    description: null,
    functions: null,
    knowledge: null,
    skills: null,
    experience: null,
  },
  {
    name: 'Jefe de Ventas',
    createdAt: new Date('2014-11-09'),
    description: null,
    functions: null,
    knowledge: null,
    skills: null,
    experience: null,
  },
  {
    name: 'Jefe de Capacitación',
    createdAt: new Date('2014-11-11'),
    description: null,
    functions: null,
    knowledge: null,
    skills: null,
    experience: null,
  },
  {
    name: 'Jefe de Inventarios',
    createdAt: new Date('2014-11-10'),
    description: null,
    functions: null,
    knowledge: null,
    skills: null,
    experience: null,
  },
];

const sections: seedSections[] = [
  {
    name: 'Proyecto',
    createdAt: new Date('2014-11-05'),
    levelId: 3,
  },
  {
    name: 'Diseño',
    createdAt: new Date('2014-11-10'),
    levelId: 3,
  },
  {
    name: 'Desarrollo Web',
    createdAt: new Date('2014-11-01'),
    levelId: 3,
  },
  {
    name: 'Base de datos',
    createdAt: new Date('2014-11-12'),
    levelId: 3,
  },
  {
    name: 'Testing',
    createdAt: new Date('2014-11-25'),
    levelId: 3,
  },
  {
    name: 'Deployment',
    createdAt: new Date('2014-11-30'),
    levelId: 3,
  },
  {
    name: 'Nuevas tecnologías',
    createdAt: new Date('2014-11-08'),
    levelId: 3,
  },
  {
    name: 'Innovación de proyectos',
    createdAt: new Date('2014-11-03'),
    levelId: 3,
  },
  {
    name: 'Servicios',
    createdAt: new Date('2014-11-19'),
    levelId: 3,
  },
  {
    name: 'Tecnologías',
    createdAt: new Date('2014-11-07'),
    levelId: 3,
  },
  {
    name: 'Redes y comunicaciones',
    createdAt: new Date('2014-11-27'),
    levelId: 3,
  },
  {
    name: 'Politicas de seguridad',
    createdAt: new Date('2014-11-04'),
    levelId: 3,
  },
  {
    name: 'Planes de contingencia',
    createdAt: new Date('2014-11-01'),
    levelId: 3,
  },
  {
    name: 'Atencion al cliente',
    createdAt: new Date('2014-11-22'),
    levelId: 3,
  },
  {
    name: 'Formación de personal',
    createdAt: new Date('2014-11-21'),
    levelId: 3,
  },
  {
    name: 'Sumunistros',
    createdAt: new Date('2014-11-25'),
    levelId: 3,
  },
  {
    name: 'Compras locales',
    createdAt: new Date('2014-11-29'),
    levelId: 3,
  },
  {
    name: 'Importaciones',
    createdAt: new Date('2014-11-09'),
    levelId: 3,
  },
  {
    name: 'Auditoria',
    createdAt: new Date('2014-11-18'),
    levelId: 3,
  },
];

const phones: seedPhone[] = [
  {
    areaCode: '011',
    number: '12345678',
    personId: 1,
  },
  {
    areaCode: '011',
    number: '12345679',
    personId: 2,
  },
  {
    areaCode: '011',
    number: '12345680',
    personId: 3,
  },
  {
    areaCode: '011',
    number: '12345681',
    personId: 4,
  },
  {
    areaCode: '011',
    number: '12345682',
    personId: 5,
  },
  {
    areaCode: '011',
    number: '12345683',
    personId: 6,
  },
  {
    areaCode: '011',
    number: '12345684',
    personId: 7,
  },
  {
    areaCode: '011',
    number: '12345685',
    personId: 8,
  },
  {
    areaCode: '011',
    number: '12345686',
    personId: 9,
  },
  {
    areaCode: '011',
    number: '12345687',
    personId: 10,
  },
];

const employeePosition: seedEmployeePosition[] = [
  {
    employeeId: 1,
    positionId: 6,
    status: 'A',
    startDate: new Date('2014-11-05'),
    endDate: null,
    sectionId: 4,
    departmentId: 1,
  },
  {
    employeeId: 2,
    positionId: 2,
    status: 'I',
    startDate: new Date('2014-11-20'),
    endDate: new Date('2017-09-20'),
    sectionId: 2,
    departmentId: 2,
  },
  {
    employeeId: 2,
    positionId: 6,
    status: 'A',
    startDate: new Date('2014-11-30'),
    endDate: null,
    sectionId: 2,
    departmentId: 6,
  },
  {
    employeeId: 3,
    positionId: 7,
    status: 'A',
    startDate: new Date('2014-11-15'),
    endDate: null,
    sectionId: 4,
    departmentId: 11,
  },
  {
    employeeId: 4,
    positionId: 2,
    status: 'I',
    startDate: new Date('2014-11-02'),
    endDate: new Date('2017-09-09'),
    sectionId: 2,
    departmentId: 1,
  },
  {
    employeeId: 4,
    positionId: 6,
    status: 'A',
    startDate: new Date('2014-11-08'),
    endDate: null,
    sectionId: 2,
    departmentId: 4,
  },
  {
    employeeId: 5,
    positionId: 3,
    status: 'A',
    startDate: new Date('2014-11-18'),
    endDate: null,
    sectionId: 3,
    departmentId: 1,
  },
  {
    employeeId: 5,
    positionId: 6,
    status: 'A',
    startDate: new Date('2014-11-01'),
    endDate: null,
    sectionId: 3,
    departmentId: 8,
  },
  {
    employeeId: 6,
    positionId: 6,
    status: 'A',
    startDate: new Date('2014-11-17'),
    endDate: null,
    sectionId: 3,
    departmentId: 1,
  },
  {
    employeeId: 7,
    positionId: 6,
    status: 'A',
    startDate: new Date('2014-11-24'),
    endDate: null,
    sectionId: 3,
    departmentId: 1,
  },
  {
    employeeId: 8,
    positionId: 6,

    status: 'D',
    startDate: new Date('2014-11-12'),
    endDate: new Date('2017-09-09'),
    sectionId: 3,
    departmentId: 1,
  },
  {
    employeeId: 9,
    positionId: 6,
    status: 'D',
    startDate: new Date('2014-11-08'),
    endDate: new Date('2017-09-09'),
    sectionId: 3,
    departmentId: 1,
  },
  {
    employeeId: 10,
    positionId: 6,
    status: 'A',
    startDate: new Date('2014-11-03'),
    endDate: null,
    sectionId: 3,
    departmentId: 1,
  },
];
