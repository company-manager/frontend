module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['docs', 'fix', 'refactor', 'revert', 'test', 'dev']],
	},
}
