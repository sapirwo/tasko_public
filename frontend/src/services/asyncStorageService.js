import utillsService from './utillsService'
export default {
    query,
    get,
    post,
    put,
    remove,
}

var gBoards = [{
        "_id": "5fb787e73880d8cba86ed706",
        "title": "Project Management",
        "style": {
            "coverUrls": [
                "https://res.cloudinary.com/talbs/image/upload/v1606119269/tal2uysils7u0azifltk.gif",
                "https://res.cloudinary.com/talbs/image/upload/v1606052700/lk0gxfpaslbyf3gn6hh2.jpg",
                "https://infinitiliveaboard.com/public/images/Banner-img-12.jpg",
                "https://images.unsplash.com/photo-1547981607-6ea66fe762b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1515419114420-dbf6d24e2e98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1550847123-f400962ce5e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30"
            ]
        },
        "createdBy": {
            "_id": "5f6dd413141ed9611ef10c1c",
            "username": "tal",
            "fullName": "tal ben shmuel",
            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
        },
        "bgImgUrl": "https://res.cloudinary.com/talbs/image/upload/v1600784338/default-bg-board-img.jpg",
        "members": [{
                "_id": "5f6dd413141ed9611ef10c1c",
                "username": "tal",
                "fullName": "tal ben shmuel",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
            },
            {
                "email": "sapir@appsus.com",
                "fullName": "sapir wolloch",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg",
                "username": "sapir",
                "_id": "5f6dd43f141ed9611ef10c1e"
            },
            {
                "email": "gal@appsus.com",
                "fullName": "Gal Gadot",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                "username": "Gal Gadot",
                "_id": "5faba7f897a0ef90d52348bf"
            }
        ],
        "labels": [{
                "id": "2WmI3",
                "color": "green",
                "title": "Help"
            },
            {
                "id": "jnAdj",
                "color": "red",
                "title": "Priority"
            },
            {
                "id": "Q7xeU",
                "color": "yellow",
                "title": "Copy Request"
            },
            {
                "id": "EtZFo",
                "color": "blue",
                "title": "Tasko Tip"
            },
            {
                "id": "IgJcQ",
                "color": "purple",
                "title": "Design Team"
            },
            {
                "id": "8sIiZ",
                "color": "orange",
                "title": "One more step"
            }
        ],
        "groups": [{
                "id": "g101",
                "title": "Project Resources",
                "cards": [{
                        "id": "dABIK",
                        "title": "Tasko Tip: Card labels! What do they mean? (Click for more info)",
                        "isCompleted": false,
                        "labels": [{
                                "id": "jnAdj",
                                "color": "red",
                                "title": "Priority"
                            },
                            {
                                "id": "2WmI3",
                                "color": "green",
                                "title": "Help"
                            },
                            {
                                "id": "EtZFo",
                                "color": "blue",
                                "title": "Tasko Tip"
                            },
                            {
                                "id": "IgJcQ",
                                "color": "purple",
                                "title": "Design Team"
                            },
                            {
                                "id": "Q7xeU",
                                "color": "yellow",
                                "title": "Copy Request"
                            },
                            {
                                "id": "8sIiZ",
                                "color": "orange",
                                "title": "One more step"
                            }
                        ],
                        "description": "Labels are great ways to differentiate the type of tasks your team has."
                    },
                    {
                        "id": "zOy2R",
                        "title": "Project \"Teamwork Dream Work\" Launch Timeline",
                        "isCompleted": false,
                        "description": "Whoa! Look! It's a checklist—you can create tasks, tag your teammates, and check-off tasks as you go and achieve milestones.",
                        "checklist": {
                            "id": "Ikesz",
                            "title": "schedule",
                            "todos": [{
                                    "title": "Begin campaign planning",
                                    "id": "dykH8",
                                    "isDone": false
                                },
                                {
                                    "title": "Approve budgets",
                                    "id": "atnQZ",
                                    "isDone": false
                                },
                                {
                                    "title": "Finish legal review",
                                    "id": "wVyfA",
                                    "isDone": false
                                },
                                {
                                    "title": "Approve designs",
                                    "id": "yWHvo",
                                    "isDone": false
                                },
                                {
                                    "title": "Test website",
                                    "id": "E2DoB",
                                    "isDone": false
                                },
                                {
                                    "title": "Launch!",
                                    "id": "mK6e0",
                                    "isDone": false
                                }
                            ],
                            "doneTodos": 0,
                            "totalTodos": 6
                        }
                    },
                    {
                        "id": "8674I",
                        "title": "Stakeholders",
                        "isCompleted": false,
                        "members": [{
                                "_id": "5f6dd413141ed9611ef10c1c",
                                "username": "tal",
                                "fullName": "tal ben shmuel",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                            },
                            {
                                "email": "sapir@appsus.com",
                                "fullName": "sapir wolloch",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg",
                                "username": "sapir",
                                "_id": "5f6dd43f141ed9611ef10c1e"
                            },
                            {
                                "email": "gal@appsus.com",
                                "fullName": "Gal Gadot",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                                "username": "Gal Gadot",
                                "_id": "5faba7f897a0ef90d52348bf"
                            }
                        ]
                    },
                    {
                        "id": "4rhLJ",
                        "title": "Weekly Updates",
                        "isCompleted": false
                    }
                ],
                "groups": [{
                        "id": "EsVON",
                        "title": "Food",
                        "description": ""
                    },
                    {
                        "id": "qrqOH",
                        "title": "Snacks"
                    },
                    {
                        "id": "32Bn1",
                        "title": "dfgdfg"
                    },
                    {
                        "id": "nw6Nj",
                        "title": "sdfsdf"
                    },
                    {
                        "id": "GbkuG",
                        "title": "s"
                    }
                ]
            },
            {
                "id": "g102",
                "title": "To Do",
                "cards": [{
                        "id": "tfz1k",
                        "title": "Tasko Tip: This is where assigned tasks live so that your team can see who's working on what and when it's due.",
                        "isCompleted": false,
                        "labels": [{
                            "id": "EtZFo",
                            "color": "blue",
                            "title": "Tasko Tip"
                        }]
                    },
                    {
                        "id": "6rQVH",
                        "title": "Sketch site banner",
                        "isCompleted": false,
                        "labels": [{
                            "id": "IgJcQ",
                            "color": "purple",
                            "title": "Design Team"
                        }]
                    },
                    {
                        "id": "Fzt6n",
                        "title": "Edit email drafts",
                        "isCompleted": false
                    },
                    {
                        "id": "vWo1R",
                        "title": "Finish customer list",
                        "isCompleted": false,
                        "labels": [{
                            "id": "8sIiZ",
                            "color": "orange",
                            "title": "One more step"
                        }]
                    },
                    {
                        "id": "5otrW",
                        "title": "Sketch the \"Teamy Dreamy\" Font",
                        "isCompleted": false
                    }
                ],
                "style": {}
            },
            {
                "id": "IZ7TB",
                "title": "Pending",
                "cards": [{
                        "id": "jNXaI",
                        "title": "Tasko Tip: 💬  For those in-between tasks that are almost done but also awaiting one last step.",
                        "isCompleted": false,
                        "labels": [{
                            "id": "EtZFo",
                            "color": "blue",
                            "title": "Tasko Tip"
                        }]
                    },
                    {
                        "id": "YHsnb",
                        "title": "Legal review",
                        "isCompleted": false
                    },
                    {
                        "id": "hbfS5",
                        "title": "Social media assets",
                        "isCompleted": false,
                        "labels": [{
                            "id": "IgJcQ",
                            "color": "purple",
                            "title": "Design Team"
                        }]
                    }
                ],
                "style": {}
            },
            {
                "id": "Fs6dq",
                "title": "Blocked",
                "cards": [{
                        "id": "HFdEO",
                        "title": "Tasko Tip: Splash those redtape-heavy issues that are slowing your team down here.",
                        "isCompleted": false,
                        "coverUrl": "https://res.cloudinary.com/talbs/image/upload/v1606119269/tal2uysils7u0azifltk.gif",
                        "labels": [{
                            "id": "EtZFo",
                            "color": "blue",
                            "title": "Tasko Tip"
                        }]
                    },
                    {
                        "id": "GqAtx",
                        "title": "Freelancer contracts",
                        "isCompleted": false,
                        "labels": [{
                            "id": "8sIiZ",
                            "color": "orange",
                            "title": "One more step"
                        }]
                    },
                    {
                        "id": "opJkz",
                        "title": "Budget approval",
                        "isCompleted": false
                    }
                ],
                "style": {}
            },
            {
                "id": "XNdyg",
                "title": "Done",
                "cards": [{
                        "id": "QKqMj",
                        "title": "Tasko Tip: ✨ Be proud! You're done! For all your finished tasks that your team has hustled on.",
                        "isCompleted": false,
                        "labels": [{
                            "id": "EtZFo",
                            "color": "blue",
                            "title": "Tasko Tip"
                        }]
                    },
                    {
                        "id": "WizKi",
                        "title": "Finalize Campaign Name: Teamwork Dream Work ✨",
                        "isCompleted": true,
                        "members": [{
                                "_id": "5f6dd413141ed9611ef10c1c",
                                "username": "tal",
                                "fullName": "tal ben shmuel",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                            },
                            {
                                "email": "sapir@appsus.com",
                                "fullName": "sapir wolloch",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg",
                                "username": "sapir",
                                "_id": "5f6dd43f141ed9611ef10c1e"
                            },
                            {
                                "email": "gal@appsus.com",
                                "fullName": "Gal Gadot",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                                "username": "Gal Gadot",
                                "_id": "5faba7f897a0ef90d52348bf"
                            }
                        ]
                    },
                    {
                        "id": "Hw4pQ",
                        "title": "Submit Q1 report",
                        "isCompleted": true,
                        "members": [{
                            "_id": "5f6dd413141ed9611ef10c1c",
                            "username": "tal",
                            "fullName": "tal ben shmuel",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                        }]
                    },
                    {
                        "id": "J88af",
                        "title": "Campaign Proposal",
                        "isCompleted": true,
                        "members": [{
                            "email": "sapir@appsus.com",
                            "fullName": "sapir wolloch",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg",
                            "username": "sapir",
                            "_id": "5f6dd43f141ed9611ef10c1e"
                        }]
                    }
                ],
                "style": {}
            }
        ],
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
        "createdAt": 1605863399748,
        "updatedAt": 1606133703376
    },
    {
        "_id": "5f6b77100f2d4a30fcfb81de",
        "title": "Birthday Party",
        "style": {
            "coverUrls": [
                "https://infinitiliveaboard.com/public/images/Banner-img-12.jpg",
                "https://images.unsplash.com/photo-1547981607-6ea66fe762b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1515419114420-dbf6d24e2e98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1550847123-f400962ce5e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30"
            ]
        },
        "createdBy": {
            "_id": "5f6dd43f141ed9611ef10c1e",
            "username": "sapir",
            "fullName": "sapir wolloch",
            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
        },
        "bgImgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601207603/birthday-bg-image_sdr8z5.jpg",
        "members": [{
                "_id": "5f6dd413141ed9611ef10c1c",
                "fullName": "tal ben shmuel",
                "username": "tal",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
            },
            {
                "email": "ron@appsus.com",
                "fullName": "Ron Goldman",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
                "username": "Ron Goldman",
                "_id": "5faba7da97a0ef90d52348be"
            },
            {
                "email": "gal@appsus.com",
                "fullName": "Gal Gadot",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                "username": "Gal Gadot",
                "_id": "5faba7f897a0ef90d52348bf"
            },
            {
                "_id": "5f6dd43f141ed9611ef10c1e",
                "fullName": "sapir wolloch",
                "username": "sapir",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
            },
            {
                "email": "yossi@appsus.com",
                "fullName": "Yossi Avrahami",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938424/yossi_wzcnxe.jpg",
                "username": "Yossi Avrahami",
                "_id": "5faba82297a0ef90d52348c0"
            },
            {
                "_id": "5f6dd430141ed9611ef10c1d",
                "fullName": "shahar mayzel",
                "username": "shahar",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035441/shahar_uxjjhc.jpg"
            }
        ],
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
        "groups": [{
                "id": "g101",
                "title": "Things To Buy",
                "cards": [{
                        "id": "EsVON",
                        "title": "Food",
                        "isCompleted": true,
                        "description": "",
                        "labels": [{
                                "id": "jnAdj",
                                "color": "red",
                                "title": "Important"
                            },
                            {
                                "id": "2WmI3",
                                "color": "green",
                                "title": "Fun"
                            }
                        ],
                        "dueDate": utillsService.getFutureDate(2),
                        "members": [{
                                "email": "ron@appsus.com",
                                "fullName": "Ron Goldman",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
                                "username": "Ron Goldman",
                                "_id": "5faba7da97a0ef90d52348be"
                            },
                            {
                                "email": "gal@appsus.com",
                                "fullName": "Gal Gadot",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                                "username": "Gal Gadot",
                                "_id": "5faba7f897a0ef90d52348bf"
                            }
                        ]
                    },
                    {
                        "id": "brY7c",
                        "title": "Drinks",
                        "coverUrl": "https://img.freepik.com/free-photo/alcoholic-non-alcoholic-cocktails-wooden-table-summer-cold-drinks_127657-1.jpg?size=626&ext=jpg&ga=GA1.2.1074801328.1599004800",
                        "isCompleted": false,
                        "bgc": "orange",
                        "labels": [{
                                "id": "2WmI3",
                                "color": "green",
                                "title": "Fun"
                            },
                            {
                                "id": "EtZFo",
                                "color": "blue",
                                "title": "Social"
                            }
                        ],
                        "dueDate": utillsService.getFutureDate(2),
                        "members": [{
                                "email": "ron@appsus.com",
                                "fullName": "Ron Goldman",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
                                "username": "Ron Goldman",
                                "_id": "5faba7da97a0ef90d52348be"
                            },
                            {
                                "email": "gal@appsus.com",
                                "fullName": "Gal Gadot",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                                "username": "Gal Gadot",
                                "_id": "5faba7f897a0ef90d52348bf"
                            }
                        ]
                    }
                ],
                "groups": [{
                        "id": "EsVON",
                        "title": "Food",
                        "description": ""
                    },
                    {
                        "id": "qrqOH",
                        "title": "Snacks"
                    },
                    {
                        "id": "32Bn1",
                        "title": "dfgdfg"
                    },
                    {
                        "id": "nw6Nj",
                        "title": "sdfsdf"
                    },
                    {
                        "id": "GbkuG",
                        "title": "s"
                    }
                ]
            },
            {
                "id": "g102",
                "title": "Venue",
                "cards": [{
                        "id": "01uqc",
                        "title": "Tell your neighbors it's gonna be a noisy weekend",
                        "isCompleted": true,
                        "coverUrl": "https://media.timeout.com/images/105347841/630/472/image.jpg",
                        "labels": [{
                                "id": "8sIiZ",
                                "color": "orange",
                                "title": "People"
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
                            }
                        ],
                        "members": [{
                                "_id": "5f6dd413141ed9611ef10c1c",
                                "fullName": "tal ben shmuel",
                                "username": "tal",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                            },
                            {
                                "_id": "5f6dd43f141ed9611ef10c1e",
                                "fullName": "sapir wolloch",
                                "username": "sapir",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
                            }
                        ]
                    },
                    {
                        "id": "Zt1MY",
                        "title": "Invite Guests",
                        "isCompleted": false,
                        "labels": [{
                                "id": "EtZFo",
                                "color": "blue",
                                "title": "Social"
                            },
                            {
                                "id": "8sIiZ",
                                "color": "orange",
                                "title": "People"
                            }
                        ],
                        "bgc": "purple",
                        "members": [{
                                "email": "yossi@appsus.com",
                                "fullName": "Yossi Avrahami",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938424/yossi_wzcnxe.jpg",
                                "username": "Yossi Avrahami",
                                "_id": "5faba82297a0ef90d52348c0"
                            },
                            {
                                "email": "ron@appsus.com",
                                "fullName": "Ron Goldman",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
                                "username": "Ron Goldman",
                                "_id": "5faba7da97a0ef90d52348be"
                            }
                        ],
                        "checklist": {
                            "id": "sQQtT",
                            "title": "Guests",
                            "todos": [{
                                    "title": "Dave",
                                    "id": "MeiSP",
                                    "isDone": true
                                },
                                {
                                    "title": "Sara",
                                    "id": "qj1Kq",
                                    "isDone": false
                                },
                                {
                                    "title": "Dan",
                                    "id": "RrLpY",
                                    "isDone": true
                                },
                                {
                                    "title": "John",
                                    "id": "cOkAC",
                                    "isDone": false
                                }
                            ],
                            "doneTodos": 2,
                            "totalTodos": 4
                        }
                    },
                    {
                        "id": "BNGlV",
                        "title": "Prepare the house for party",
                        "isCompleted": true,
                        "labels": [{
                            "id": "IgJcQ",
                            "color": "purple",
                            "title": "Decoration"
                        }],
                        "description": "Prepare the house for the best party ever!\n",
                        "members": [{
                                "email": "ron@appsus.com",
                                "fullName": "Ron Goldman",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
                                "username": "Ron Goldman",
                                "_id": "5faba7da97a0ef90d52348be"
                            },
                            {
                                "email": "yossi@appsus.com",
                                "fullName": "Yossi Avrahami",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938424/yossi_wzcnxe.jpg",
                                "username": "Yossi Avrahami",
                                "_id": "5faba82297a0ef90d52348c0"
                            },
                            {
                                "_id": "5f6dd413141ed9611ef10c1c",
                                "fullName": "tal ben shmuel",
                                "username": "tal",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                            }
                        ]
                    }
                ],
                "style": {}
            },
            {
                "id": "FAsqb",
                "title": "Birthday Playlist",
                "cards": [{
                        "id": "UuE3b",
                        "title": "Happy Birthday",
                        "coverUrl": "https://www.youtube.com/embed/_z-1fTlSDF0",
                        "isCompleted": false,
                        "bgc": "red"
                    },
                    {
                        "id": "Jwn9m",
                        "title": "Stevie Wonder - Happy Birthday",
                        "coverUrl": "https://www.youtube.com/embed/inS9gAgSENE",
                        "isCompleted": false,
                        "bgc": "green"
                    },
                    {
                        "id": "L65Kx",
                        "title": "Infected Mushroom Remix",
                        "coverUrl": "https://www.youtube.com/embed/S8vF2XmGQko",
                        "isCompleted": false,
                        "bgc": "blue"
                    }
                ],
                "style": {}
            },
            {
                "id": "IZ7TB",
                "title": "Entertainment",
                "cards": [{
                        "id": "IQ8Jz",
                        "title": "Good vibe",
                        "coverUrl": "https://media0.giphy.com/media/L1bPUAMXIqXpPoWk9R/200.gif",
                        "labels": [{
                                "id": "2WmI3",
                                "color": "green",
                                "title": "Fun"
                            },
                            {
                                "id": "jnAdj",
                                "color": "red",
                                "title": "Important"
                            }
                        ],
                        "bgc": "yellow",
                        "members": [{
                                "_id": "5f6dd43f141ed9611ef10c1e",
                                "fullName": "sapir wolloch",
                                "username": "sapir",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
                            },
                            {
                                "_id": "5f6dd413141ed9611ef10c1c",
                                "fullName": "tal ben shmuel",
                                "username": "tal",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                            },
                            {
                                "_id": "5f6dd430141ed9611ef10c1d",
                                "fullName": "shahar mayzel",
                                "username": "shahar",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035441/shahar_uxjjhc.jpg"
                            }
                        ],
                        "isCompleted": false
                    },
                    {
                        "id": "aWFjb",
                        "title": "Make a slideshow",
                        "isCompleted": true,
                        "labels": [{
                            "id": "EtZFo",
                            "color": "blue",
                            "title": "Social"
                        }],
                        "members": [{
                            "_id": "5f6dd43f141ed9611ef10c1e",
                            "fullName": "sapir wolloch",
                            "username": "sapir",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
                        }]
                    }
                ],
                "style": {}
            },
            {
                "id": "Fs6dq",
                "title": "Done",
                "cards": [{
                    "id": "8ozZu",
                    "title": "Use this party board!",
                    "isCompleted": true,
                    "members": [{
                            "_id": "5f6dd413141ed9611ef10c1c",
                            "fullName": "tal ben shmuel",
                            "username": "tal",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                        },
                        {
                            "email": "ron@appsus.com",
                            "fullName": "Ron Goldman",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
                            "username": "Ron Goldman",
                            "_id": "5faba7da97a0ef90d52348be"
                        },
                        {
                            "email": "gal@appsus.com",
                            "fullName": "Gal Gadot",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                            "username": "Gal Gadot",
                            "_id": "5faba7f897a0ef90d52348bf"
                        },
                        {
                            "_id": "5f6dd43f141ed9611ef10c1e",
                            "fullName": "sapir wolloch",
                            "username": "sapir",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
                        },
                        {
                            "email": "yossi@appsus.com",
                            "fullName": "Yossi Avrahami",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938424/yossi_wzcnxe.jpg",
                            "username": "Yossi Avrahami",
                            "_id": "5faba82297a0ef90d52348c0"
                        },
                        {
                            "_id": "5f6dd430141ed9611ef10c1d",
                            "fullName": "shahar mayzel",
                            "username": "shahar",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035441/shahar_uxjjhc.jpg"
                        }
                    ]
                }],
                "style": {}
            }
        ],
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
    },
    {
        "_id": "5f6b77100f2d4a30fcfb81ed",
        "title": "Trip To Italy",
        "style": {
            "coverUrls": [
                "https://infinitiliveaboard.com/public/images/Banner-img-12.jpg",
                "https://images.unsplash.com/photo-1547981607-6ea66fe762b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1515419114420-dbf6d24e2e98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1550847123-f400962ce5e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30"
            ]
        },
        "createdBy": {
            "_id": "5f6dd43f141ed9611ef10c1e",
            "username": "sapir",
            "fullName": "sapir wolloch",
            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
        },
        "bgImgUrl": "https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2ODEyN30",
        "members": [{
                "_id": "5f6dd43f141ed9611ef10c1e",
                "fullName": "sapir wolloch",
                "username": "sapir",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
            },
            {
                "_id": "5f6dd413141ed9611ef10c1c",
                "fullName": "tal ben shmuel",
                "username": "tal",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
            },
            {
                "email": "matan@appsus.com",
                "fullName": "Matan Navon",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035625/matan_k2pkae.jpg",
                "username": "Matan Navon",
                "_id": "5faba84c97a0ef90d52348c1"
            }
        ],
        "labels": [{
                "id": "2WmI3",
                "color": "green",
                "title": "Recommended"
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
        "groups": [{
                "id": "g101",
                "title": "Location",
                "cards": [{
                        "id": "8Qwza",
                        "title": "Rome",
                        "isCompleted": true,
                        "coverUrl": "https://www.thoughtco.com/thmb/GS4AiVqpE78EVPlhV8tJgRThEr0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-roman-coliseum-in-the-early-morning-655490208-5abd1d0f119fa80037ef98b9.jpg",
                        "bgc": "orange",
                        "labels": [{
                            "id": "2WmI3",
                            "color": "green",
                            "title": "Recommended"
                        }],
                        "members": [{
                                "_id": "5f6dd43f141ed9611ef10c1e",
                                "fullName": "sapir wolloch",
                                "username": "sapir",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
                            },
                            {
                                "_id": "5f6dd413141ed9611ef10c1c",
                                "fullName": "tal ben shmuel",
                                "username": "tal",
                                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                            }
                        ]
                    },
                    {
                        "id": "2c1rf",
                        "title": "Venice",
                        "isCompleted": false,
                        "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfZmXvuMclfZTsmtgNKeZo_SEOT00Uies6A&usqp=CAU",
                        "bgc": "orange",
                        "labels": [{
                            "id": "2WmI3",
                            "color": "green",
                            "title": "Recommended"
                        }],
                        "members": [{
                            "email": "matan@appsus.com",
                            "fullName": "Matan Navon",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035625/matan_k2pkae.jpg",
                            "username": "Matan Navon",
                            "_id": "5faba84c97a0ef90d52348c1"
                        }]
                    },
                    {
                        "id": "RJgve",
                        "title": "Florence",
                        "isCompleted": false,
                        "coverUrl": "https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1539722614/duomo-church-architecture-sunset-florence-italy-FLORENCEITALY1018.jpg?itok=p9ytJcSJ",
                        "bgc": "orange"
                    }
                ],
                "groups": [{
                        "id": "EsVON",
                        "title": "Food",
                        "description": ""
                    },
                    {
                        "id": "qrqOH",
                        "title": "Snacks"
                    },
                    {
                        "id": "32Bn1",
                        "title": "dfgdfg"
                    },
                    {
                        "id": "nw6Nj",
                        "title": "sdfsdf"
                    },
                    {
                        "id": "GbkuG",
                        "title": "s"
                    }
                ]
            },
            {
                "id": "g102",
                "title": "Italian Food",
                "cards": [{
                        "id": "QN3gW",
                        "title": "Pizza",
                        "isCompleted": false,
                        "coverUrl": "https://www.youtube.com/embed/SY_Fcgktucw",
                        "bgc": "red",
                        "members": [{
                            "_id": "5f6dd413141ed9611ef10c1c",
                            "fullName": "tal ben shmuel",
                            "username": "tal",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                        }]
                    },
                    {
                        "id": "JgRkY",
                        "title": "Pasta",
                        "isCompleted": false,
                        "coverUrl": "https://www.youtube.com/embed/ziKxUIvO54M",
                        "bgc": "red"
                    },
                    {
                        "id": "T8dP1",
                        "title": "Mix",
                        "isCompleted": false,
                        "coverUrl": "https://www.youtube.com/embed/MyPKPRv0q7s",
                        "bgc": "red",
                        "members": [{
                            "_id": "5f6dd43f141ed9611ef10c1e",
                            "fullName": "sapir wolloch",
                            "username": "sapir",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
                        }]
                    }
                ],
                "style": {}
            },
            {
                "id": "FAsqb",
                "title": "Learn to speak italian",
                "cards": [{
                        "id": "U7V6j",
                        "title": "The Language",
                        "isCompleted": false,
                        "description": "https://en.wikipedia.org/wiki/Italian_language",
                        "coverColor": "orange",
                        "labels": [{
                            "id": "jnAdj",
                            "color": "red",
                            "title": "Important"
                        }]
                    },
                    {
                        "id": "dTuWQ",
                        "title": "10 common italian words",
                        "isCompleted": false,
                        "description": "Ciao. = Hello. ...\namore = love. Love is a universal feeling and we definitely had to talk about it here. ...\nfelicità = happiness. When there's love, there's definitely happiness. ...\ngatto = cat. ...\ncane = dog. ...\nsorridere = smile. ...\nitaliano = italian. ...\nSì.",
                        "checklist": {
                            "id": "FS8It",
                            "title": "Words",
                            "todos": [{
                                    "title": "Ciao. = Hello",
                                    "id": "bz9j2",
                                    "isDone": true
                                },
                                {
                                    "title": "amore = love",
                                    "id": "1OttR",
                                    "isDone": true
                                },
                                {
                                    "title": "felicità = happiness",
                                    "id": "dfVOt",
                                    "isDone": false
                                },
                                {
                                    "title": "gatto = cat",
                                    "id": "56vF1",
                                    "isDone": true
                                },
                                {
                                    "title": "cane = dog",
                                    "id": "VAzOC",
                                    "isDone": false
                                },
                                {
                                    "title": "sorridere = smile",
                                    "id": "s6e77",
                                    "isDone": true
                                },
                                {
                                    "title": "italiano = italian",
                                    "id": "g2egW",
                                    "isDone": false
                                },
                                {
                                    "title": "Sì = yes",
                                    "id": "L8hkH",
                                    "isDone": true
                                }
                            ],
                            "doneTodos": 5,
                            "totalTodos": 8
                        },
                        "labels": [{
                            "id": "jnAdj",
                            "color": "red",
                            "title": "Important"
                        }],
                        "coverColor": "yellow"
                    }
                ],
                "style": {}
            },
            {
                "id": "IZ7TB",
                "title": "Book flight and car",
                "cards": [{
                        "id": "DqR6D",
                        "title": "Top rated airline",
                        "isCompleted": true,
                        "coverUrl": "https://www.alitalia.com/content/dam/alitalia/assets/clientlibs-1/images/logo.png",
                        "labels": [{
                            "id": "2WmI3",
                            "color": "green",
                            "title": "Recommended"
                        }],
                        "members": [{
                            "_id": "5f6dd43f141ed9611ef10c1e",
                            "fullName": "sapir wolloch",
                            "username": "sapir",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
                        }]
                    },
                    {
                        "id": "Mutn1",
                        "title": "Find car rental company",
                        "isCompleted": false,
                        "coverUrl": "https://i.pinimg.com/originals/b4/a8/a4/b4a8a4625f6b8ef4418150efff833d04.gif",
                        "description": "Porsche? :)",
                        "members": [{
                            "email": "matan@appsus.com",
                            "fullName": "Matan Navon",
                            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035625/matan_k2pkae.jpg",
                            "username": "Matan Navon",
                            "_id": "5faba84c97a0ef90d52348c1"
                        }]
                    }
                ],
                "style": {}
            },
            {
                "id": "Fs6dq",
                "title": "Done",
                "cards": [{
                    "id": "SDqEb",
                    "title": "Book a hotel",
                    "isCompleted": true,
                    "members": [{
                        "_id": "5f6dd413141ed9611ef10c1c",
                        "fullName": "tal ben shmuel",
                        "username": "tal",
                        "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601034807/tal_lj0enj.jpg"
                    }]
                }],
                "style": {}
            }
        ],
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
    },
    {
        "_id": "5f6b77100f2d4a30fcfb81fw",
        "title": "Fresh",
        "style": {
            "coverUrls": [
                "https://infinitiliveaboard.com/public/images/Banner-img-12.jpg",
                "https://images.unsplash.com/photo-1547981607-6ea66fe762b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1515419114420-dbf6d24e2e98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1550847123-f400962ce5e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30",
                "https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODEyN30"
            ]
        },
        "createdBy": {
            "_id": "5f6dd43f141ed9611ef10c1e",
            "username": "sapir",
            "fullName": "sapir wolloch",
            "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035217/sapir.jpg"
        },
        "bgImgUrl": "https://res.cloudinary.com/talbs/image/upload/v1600783891/uzhcbl0sl0nqqjp1wkts.jpg",
        "members": [{
                "email": "matan@appsus.com",
                "fullName": "Matan Navon",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1601035625/matan_k2pkae.jpg",
                "username": "Matan Navon",
                "_id": "5faba84c97a0ef90d52348c1"
            },
            {
                "email": "yossi@appsus.com",
                "fullName": "Yossi Avrahami",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938424/yossi_wzcnxe.jpg",
                "username": "Yossi Avrahami",
                "_id": "5faba82297a0ef90d52348c0"
            },
            {
                "email": "gal@appsus.com",
                "fullName": "Gal Gadot",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938431/gal_njc5lo.jpg",
                "username": "Gal Gadot",
                "_id": "5faba7f897a0ef90d52348bf"
            },
            {
                "email": "ron@appsus.com",
                "fullName": "Ron Goldman",
                "imgUrl": "https://res.cloudinary.com/talbs/image/upload/v1604938435/ron_ovtsah.jpg",
                "username": "Ron Goldman",
                "_id": "5faba7da97a0ef90d52348be"
            }
        ],
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
]
var KEY = 'board'

function query() {
    const boards = JSON.parse(localStorage.getItem(KEY)) ||
        _save(gBoards)
    return Promise.resolve(boards);
}

async function get(boardId) {
    const boards = await query(KEY)
    const board = boards.find(board => board._id === boardId)
    return Promise.resolve(board)
}

async function post(newBoard) {
    newBoard._id = _makeId()
    let newBoards = await query(KEY)
    newBoards.unshift(newBoard)
    _save(newBoards)
    return newBoard;
}

async function put(editedBoard) {
    let boards = await query(KEY)
    boards = boards.map(board => {
        if (board._id === editedBoard._id) return editedBoard
        return board
    })
    return _save(boards);
}

async function remove(boardId) {
    let boards = await query(KEY)
    boards = boards.filter(board => board._id !== boardId)
    return _save(boards)
}

function _save(boards) {
    localStorage.setItem(KEY, JSON.stringify(boards))
    return boards
}

function _makeId(length = 5) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}