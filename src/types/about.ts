export interface AboutContent {
 id: string;
 title: string;
 subtitle?: string;
 paragraphs: AboutParagraph[];
 highlights: Highlight[];
 stats?: Stat[];
 values?: Value[];
 timeline?: TimelineItem[];
}

export interface AboutParagraph {
 id: string;
 text: string;
 highlights?: string[];
 emphasis?: 'normal' | 'strong' | 'italic';
}

export interface Highlight {
 text: string;
 color: 'cyan' | 'blue' | 'green' | 'yellow' | 'purple';
 weight: 'normal' | 'semibold' | 'bold';
}

export interface Stat {
 id: string;
 number: string;
 label: string;
 description?: string;
 icon?: React.ReactElement;
 color: string;
}

export interface Value {
 id: string;
 title: string;
 description: string;
 icon: React.ReactElement;
 color: string;
}

export interface TimelineItem {
 id: string;
 year: string;
 title: string;
 description: string;
 milestone: boolean;
}

export interface AboutSectionProps {
 content?: AboutContent;
 variant?: 'default' | 'detailed' | 'minimal' | 'story';
 showStats?: boolean;
 showValues?: boolean;
 showTimeline?: boolean;
 layout?: 'centered' | 'split' | 'grid';
}

export interface AboutStatsProps {
 stats: Stat[];
 className?: string;
}

export interface AboutValuesProps {
 values: Value[];
 className?: string;
}

export interface AboutTimelineProps {
 timeline: TimelineItem[];
 className?: string;
}