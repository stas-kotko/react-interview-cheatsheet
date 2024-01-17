import fs from 'fs'

const README_PATH = './README.md'
const TOC_HEADER = '### Table of Contents'
const PATH_TO_FILES = './src/'

const dirContent = fs.readdirSync(PATH_TO_FILES)

const readFirstLine = str => str.split(/\r?\n/)[0];
const removeHashes = str => str.slice(str.lastIndexOf('# ') + 2)

const getTitle = filePath => {
	const content = fs.readFileSync(filePath, 'utf-8')
	return removeHashes(readFirstLine(content))
}

const makeTocLine = (title, link) => `* [${title}](${link})\n`

const tableOfContents = dirContent.reduce((acc, filePath) => {
	return acc += makeTocLine(getTitle(PATH_TO_FILES + filePath), PATH_TO_FILES + filePath)
}, '')

const readmeContent = fs.readFileSync(README_PATH, 'utf-8')

const readmeNewContent = readmeContent.slice(0, readmeContent.indexOf(TOC_HEADER) + TOC_HEADER.length) + '\n\n' + tableOfContents

fs.writeFileSync(README_PATH, readmeNewContent)
