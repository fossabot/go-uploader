
module.exports = {
	"plugins": [
	  ["@semantic-release/commit-analyzer"],
	  ["@semantic-release/release-notes-generator"],
	  ["@semantic-release/changelog", {
		"changelogTitle": "# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines."
	  }],
	  ["@semantic-release/git", {
		"assets": ["CHANGELOG.md"],
		"message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
	  }],
	  ["@semantic-release/exec", {
		"prepareCmd": "make dist",
	  }],
	  ["@semantic-release/github", {
		"assets": [
		  {"path": "dist/*.gz"}
		]
	  }],
	],
	"branches": ["master", "main"]
  }