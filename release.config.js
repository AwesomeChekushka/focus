module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/gitlab',
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        // eslint-disable-next-line no-undef
        message: `chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}`,
      },
    ],
  ],
  branches: ['master', 'v+([0-9])?(.{+([0-9]),x}).x'],
}
