/**
 * Tailwind CSS Typography Config
 * Web 端字体系统 - Tailwind 配置
 * 
 * 使用方法:
 * 1. 将此配置合并到 tailwind.config.js 的 theme.extend
 * 2. 使用类名: text-display-2xl, text-h1, text-body-lg 等
 */

module.exports = {
  theme: {
    extend: {
      // ========== Font Family ==========
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        brand: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'Monaco',
          '"Cascadia Code"',
          '"Roboto Mono"',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },

      // ========== Font Size + Line Height ==========
      fontSize: {
        // Display
        'display-2xl': ['72px', { lineHeight: '90px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-xl': ['60px', { lineHeight: '72px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-lg': ['48px', { lineHeight: '60px', fontWeight: '600', letterSpacing: '-0.01em' }],
        'display-md': ['36px', { lineHeight: '44px', fontWeight: '600', letterSpacing: '-0.01em' }],

        // Heading
        'h1': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'h2': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '28px', fontWeight: '600' }],
        'h5': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'h6': ['14px', { lineHeight: '22px', fontWeight: '600' }],

        // Body
        'body-xl': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '18px', fontWeight: '400' }],

        // Body Strong
        'body-lg-strong': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body-md-strong': ['14px', { lineHeight: '22px', fontWeight: '600' }],
        'body-sm-strong': ['13px', { lineHeight: '20px', fontWeight: '600' }],

        // Label
        'label-lg': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-sm': ['13px', { lineHeight: '18px', fontWeight: '500' }],
        'label-xs': ['12px', { lineHeight: '16px', fontWeight: '500' }],

        // Caption
        'caption-md': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'caption-sm': ['11px', { lineHeight: '16px', fontWeight: '400' }],
        'caption-xs': ['10px', { lineHeight: '14px', fontWeight: '400' }],

        // Code
        'code-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'code-md': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'code-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'code-xs': ['12px', { lineHeight: '18px', fontWeight: '400' }],
      },

      // ========== Font Weight ==========
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        heavy: '800',
      },

      // ========== Line Height ==========
      lineHeight: {
        base: '1.5',
        tight: '1.25',
        relaxed: '1.75',
        loose: '2',
      },

      // ========== Letter Spacing ==========
      letterSpacing: {
        'display': '-0.02em',
        'heading': '-0.01em',
        normal: '0',
        wide: '0.01em',
      },
    },
  },

  // ========== Plugins (可选) ==========
  plugins: [
    // Tailwind Typography Plugin (如需要文章排版)
    // require('@tailwindcss/typography'),
  ],
}

/**
 * 使用示例
 * 
 * HTML:
 * <h1 class="text-h1 text-gray-900">页面标题</h1>
 * <p class="text-body-lg text-gray-700">这是正文内容...</p>
 * <button class="text-label-md font-medium">确定</button>
 * <small class="text-caption-md text-gray-500">提示信息</small>
 * 
 * React/JSX:
 * <div className="text-display-xl text-center">
 *   Welcome to Our Platform
 * </div>
 * 
 * 响应式:
 * <h1 class="text-h2 md:text-h1 lg:text-display-md">
 *   响应式标题
 * </h1>
 */
