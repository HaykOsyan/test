import { $authHost } from "."

export const weather = async () => {
    const {data} = await $authHost.get('api/weather')
    return data
}