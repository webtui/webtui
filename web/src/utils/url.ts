export function splitPathChunks(path: string) {
    return path.split('/').filter((chunk) => chunk.trim() !== '')
}

export function compareUrlPaths(a: string, b: string) {
    const aChunks = splitPathChunks(a)
    const bChunks = splitPathChunks(b)

    return aChunks.every((chunk, i) => chunk === bChunks[i])
}
