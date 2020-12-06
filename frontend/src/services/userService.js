import httpService from './httpService'

export default {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update
}

const DEFAULT_USERS = [{
        email: "tal@appsus.com",
        fullName: "tal ben shmuel",
        imgUrl: "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg",
        username: "tal",
        _id: "",
    },
    {
        email: "sapir@appsus.com",
        fullName: "sapir wolloch",
        imgUrl: "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg",
        username: "sapir",
        _id: "",

    },
    {
        email: "ron@appsus.com",
        fullName: "Ron Goldman",
        imgUrl: "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
        username: "Ron Goldman",
        _id: "",

    },
    {
        email: "gal@appsus.com",
        fullName: "Gal Gadot",
        imgUrl: "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
        username: "Gal Gadot",
        _id: "",
    },
    {
        email: "yossi@appsus.com",
        fullName: "Yossi Avrahami",
        imgUrl: "https://res.cloudinary.com/talbs/image/upload/v1604938424/yossi_wzcnxe.jpg",
        username: "Yossi Avrahami",
        _id: "",
    },
    {
        email: "matan@appsus.com",
        fullName: "Matan Navon",
        imgUrl: "https://res.cloudinary.com/talbs/image/upload/v1601035625/matan_k2pkae.jpg",
        username: "Matan Navon",
        _id: ""
    }
]

function getUsers() {
    const isAdmin = false
    if (isAdmin) return httpService.get('user')
    return Promise.resolve(DEFAULT_USERS)
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    return _handleLogin(user)
}
async function signup(userCred) {
    userCred.fullName = userCred.username;
    userCred.imgUrl = 'https://res.cloudinary.com/talbs/image/upload/v1605622319/user-default-img_wul0qq.jpg'
    const user = await httpService.post('auth/signup', userCred)
    return _handleLogin(user)
}
async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}