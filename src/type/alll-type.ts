export type postDataType = {
    id: number
    name: string
    text: string
}

export type AddressType = {
    city?: string | null
    country: string | null
}


export  type PhotoType = {
    lastModified: number
    lastModifiedDate: string
    name: string
    size: number
    type: string
    webkitRelativePath: string | null
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
    followed: Array<number>
    isAuth: boolean
    error: boolean | string
}