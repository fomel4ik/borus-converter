export type Theme = 'system' | 'light' | 'dark';

export type Language = 'en' | 'ru';

export interface AppSettings {
  appearance: {
    theme: Theme,
    language: Language;
  };

  converter: {
    preserveMetadata: boolean;
  };
};
