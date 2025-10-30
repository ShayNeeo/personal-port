// Theme configuration
export const themes = {
  default: {
    name: 'default',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#ffd700',
      background: '#111827',
      surface: '#1f2937',
      text: '#ffffff',
      textMuted: '#9ca3af',
    },
    gradients: {
      hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      button: 'linear-gradient(135deg, #ffd700, #ffed4e)',
    }
  },
  'black-white': {
    name: 'black-white',
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#000000',
      background: '#ffffff',
      surface: '#f9fafb',
      text: '#000000',
      textMuted: '#6b7280',
    },
    gradients: {
      hero: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)',
      button: 'linear-gradient(135deg, #000000, #333333)',
    }
  }
};

export const getTheme = () => {
  const themeName = process.env.NEXT_PUBLIC_THEME || 'default';
  return themes[themeName as keyof typeof themes] || themes.default;
};

