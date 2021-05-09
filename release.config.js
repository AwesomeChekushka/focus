module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/gitlab',
    '@semantic-release/npm',
    ['@semantic-release/git', { assets: ['CHANGELOG.md'] }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
  ],
  branches: ['master', 'v+([0-9])?(.{+([0-9]),x}).x'],
}
