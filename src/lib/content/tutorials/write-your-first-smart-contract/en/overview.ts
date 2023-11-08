import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { TutorialOverview } from '$lib/types/content/tutorial.interface';

export const overview: TutorialOverview = {
    title: 'Write your first smart contract',
    contentType: ContentTypeEnum.Tutorial,
    author: {
        name: 'Jacob Tucker',
        socialMediaUrl: 'https://twitter.com/jacobmtucker',
        avatarUrl: '/avatars/jacob.jpeg',
        isVerified: true,
        walletAddress: '0x99bd48c8036e2876'
    },
    excerpt: 'Walk through the process of writing a smart contract on the Flow blockchain.',
    metadata: {
        expertise: ExpertiseEnum.Beginner,
        duration: '10 minutes',
        prerequisites: [],
        subjects: [SubjectsEnum.Cadence]
    }
};
