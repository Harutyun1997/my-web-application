export type postDataType = {
    id: number
    name: string
    text: string
}

export type AddressType = {
    city?: string | null
    country: string | null
}

export type FollowedType = {
    id: number
    followed: boolean
}
export type  userDataType = {
    id: number
    name: string
    email: string
    password: string | number
    age: number
    location: AddressType
    status: string
    src: string
    followed: FollowedType[] | boolean
    isAuth: boolean
    error: boolean | string
}