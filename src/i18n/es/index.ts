import type { Translation } from '../i18n-types';
import { ContentTypeEnum } from '../../lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '../../lib/types/content/metadata/subject.enum';
import { ExpertiseEnum } from '../../lib/types/content/metadata/expertise.enum';

const es: Translation = {
	// HomePage / HeroSection
	MAIN_HEADING_1: 'Aprende todo sobre la',
	MAIN_HEADING_2: 'Flow Blockchain',
	WELCOME: 'Bienvenido',

	// HomePage / ExploreSection
	EXPLORE_TAGLINE: 'Explora nuestros contenidos',
	EXPLORE_H1: 'Recursos educativos gratuitos de Flow Blockchain',

	// HomePage / LearningPathsSection
	PATHS_H1: 'Sigue uno de nuestros caminos de aprendizaje',

	// HomePage / SocialMediaSection
	SOCIAL_H1: 'Más de 1000 estudiantes nos recomiendan',

	// Catalog / Sidebar
	TYPE_OF_CONTENT: 'Tipo de contenido',
	SUBJECT: 'Tema',
	EXPERTISE: 'Experinecia',

	// Cadence by example
	SEARCH: 'Buscar',
	NO_EXAMPLES_FOUND: 'No se encontraron ejemplos para este lenguaje',

	// Your achievements
	ACHIEVEMENTS_H1: 'Tus logros',

	// ContentCard
	SKILLS_YOU_WILL_LEARN: 'Habilidades que aprenderás',

	START: "Comenzar",

	// Type of content
	[ContentTypeEnum.Course]: 'Curso',
	[ContentTypeEnum.Bootcamp]: 'Bootcamp',
	[ContentTypeEnum.Roadmap]: 'Camino de aprendizaje',
	[ContentTypeEnum.Quickstart]: 'Plantillas',
	[ContentTypeEnum.Resources]: 'Recursos',
	[ContentTypeEnum.Blog]: 'Blog',

	// Subjects
	[SubjectsEnum.Backend]: 'Backend',
	[SubjectsEnum.Web]: 'Desarrollo Web',
	[SubjectsEnum.Cadence]: 'Cadence',
	[SubjectsEnum.DApp]: 'DApp',
	[SubjectsEnum.Javascript]: 'Javascript',

	// Expertise
	[ExpertiseEnum.Advanced]: 'Avanzado',
	[ExpertiseEnum.Intermediate]: 'Intermedio',
	[ExpertiseEnum.Beginner]: 'Principiante',

	// Quickstarts
	NO_QUICKSTARTS_FOUND: 'No se encontraron plantillas para este lenguaje'
};

export default es;
