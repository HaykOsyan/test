import { $authHost } from "."

export const zipFile = () => {
    $authHost.get('api/guide/file')
    console.log('file downloaded') 
}