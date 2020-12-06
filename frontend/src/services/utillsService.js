export default {
    formatYoutubeLink,
    formatImgLink,
    formatDate,
    getEmptyBoard,
    toCapitalCase,
    getRandomColor,
    getEmptyGroup,
    getEmptyCard,
    getEmptyChecklist,
    getEmptyTodo,
    getFutureDate
}

function formatYoutubeLink(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ?
        `https://www.youtube.com/embed/${match[2]}` : null;
}

function formatImgLink(url) {
    if (url.slice(-3) === 'jpg' || url.slice(-3) === 'gif' || url.slice(-3) === 'png' ||
        url.includes('img') || url.includes('image')) {
        return url
    } else {
        return null
    }
}

function formatDate(UTCtime) {
    const formattedDate = new Date(UTCtime)
    const day = formattedDate.getUTCDate()
    const month = formattedDate.getUTCMonth()
    return `${_getMonthByNum(month)} ${day}`
}

function _getMonthByNum(num) {
    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month_names[num]
}

function toCapitalCase(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function getFutureDate(numOfDaysForward) {
    const day = 1 * 1000 * 60 * 60 * 24
    return new Date(+new Date() + numOfDaysForward * day)
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
// ===============GET EMPTY=================//

function getEmptyBoard(title, loggedInUser) {
    const user = loggedInUser || _getGuest()
    const newBoard = {
        "title": title,
        "style": {
            "coverUrls": ['https://infinitiliveaboard.com/public/images/Banner-img-12.jpg', 'https://images.unsplash.com/photo-1547981607-6ea66fe762b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30', 'https://images.unsplash.com/photo-1515419114420-dbf6d24e2e98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30', 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30', 'https://images.unsplash.com/photo-1550847123-f400962ce5e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30', 'https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30']
        },
        "createdBy": {
            "_id": `${user._id}`,
            "username": `${user.username}`,
            "fullName": `${user.fullName || user.username}`,
            "imgUrl": `${user.imgUrl || 'https://res.cloudinary.com/talbs/image/upload/v1605622319/user-default-img_wul0qq.jpg'}`
        },
        "bgImgUrl": _getRandomBgImg(),
        "members": [{
            "_id": `${user._id}`,
            "username": `${user.username}`,
            "fullName": `${user.fullName || user.username}`,
            "imgUrl": `${user.imgUrl || 'https://res.cloudinary.com/talbs/image/upload/v1605622319/user-default-img_wul0qq.jpg'}`
        }],
        "labels": [{
                "id": "2WmI3",
                "color": "green",
                "title": "Fun"
            },
            {
                "id": "jnAdj",
                "color": "red",
                "title": "Important"
            },
            {
                "id": "Q7xeU",
                "color": "yellow",
                "title": "Home"
            },
            {
                "id": "EtZFo",
                "color": "blue",
                "title": "Social"
            },
            {
                "id": "IgJcQ",
                "color": "purple",
                "title": "Decoration"
            },
            {
                "id": "8sIiZ",
                "color": "orange",
                "title": "People"
            }
        ],
        "groups": [],
        "activities": [{
            "id": "a101",
            "txt": "Changed Color",
            "createdAt": 154514,
            "byMember": {
                "_id": "5f6dd43f141ed9611ef10c1e",
                "fullName": "sapir wolloch",
                "username": "sapir",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
            },
            "card": {
                "id": "c101",
                "title": "Replace Logo"
            }
        }],
        "createdAt": 1600878352889,
        "updatedAt": 1601406382648
    }
    return newBoard
}

function getEmptyGroup(title) {
    const newGroup = {
        id: _makeId(),
        title,
        cards: [],
        style: {}
    }
    return newGroup
}

function getEmptyCard(title, coverUrl) {
    const newCard = {
        id: _makeId(),
        title,
        isCompleted: false,
        coverUrl
    }
    return newCard
}

function getEmptyChecklist(title) {
    const checklist = {
        id: _makeId(),
        title,
    }
    return checklist
}


function getEmptyTodo(title) {
    const todo = {
        title,
        id: _makeId(),
        isDone: false
    }
    return todo
}

function _getGuest() {
    return {
        _id: _makeId(),
        username: 'guest',
        fullName: 'Guest',
        imgUrl: 'https://res.cloudinary.com/talbs/image/upload/v1605622319/user-default-img_wul0qq.jpg'
    }
}

function _makeId(length = 5) {
    let txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _getRandomBgImg() {
    const bgUrls = [
        'https://res.cloudinary.com/talbs/image/upload/v1600784338/default-bg-board-img.jpg',
        'https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2ODEyN30',
        'https://res.cloudinary.com/talbs/image/upload/v1600783891/uzhcbl0sl0nqqjp1wkts.jpg',
        'https://images.unsplash.com/photo-1515419114420-dbf6d24e2e98?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2ODEyN30',
        'https://images.unsplash.com/photo-1550847123-f400962ce5e7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2ODEyN30'
    ]
    return bgUrls[_getRandomIntInclusive(0, bgUrls.length)]
}

function _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}