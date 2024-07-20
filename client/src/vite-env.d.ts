/// <reference types="vite/client" />

// This is user Types from log in
interface userInfoType {
    username: string,
    picture: string,
    email: string,
    savedCode: Array<string>,
}

interface loginCredentialType {
    userId: string,
    password: string
}
