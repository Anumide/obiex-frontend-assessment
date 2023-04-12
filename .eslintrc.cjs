/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
		'vue/no-v-html': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'no-unused-vars': 'off',
		'vue/no-multiple-template-root': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'import/no-named-as-default': 'off',
		'vue/no-template-shadow': 'off',
		'no-var': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'unused-import': 'off',
		'space-before-function-paren': 'off',
		camelcase: 'off',
		'accessor-pairs': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		indent: ['off', 'tab', { SwitchCase: 1 }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		'prefer-const': ['error'],
		'arrow-parens': ['error', 'always'],
		'no-return-assign': 'off',
		'vue/multi-word-component-names': 'off',
		curly: 'off',
		'vue/html-indent': [
			'warn',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/no-mutating-props': 'off',
		'object-property-newline': 'off',
		'require-atomic-updates': 'off',
		'require-await': 'off'
	},
}
