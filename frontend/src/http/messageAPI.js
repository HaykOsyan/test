import { $authHost } from ".";

export const createMessage = async (message, userId) => {
    const {data} = await $authHost.post('api/message/save', {'text': message, 'userId':userId})
    console.log('data saved')
    return data
}