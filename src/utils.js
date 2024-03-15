import { unlink } from 'fs/promises'

export async function removeFile(patn) {
    try {
        await unlink(patn)
    } catch (e) {
        console.log('Error while removing file', e.message)
    }
}
