import React, { useState, useEffect } from 'react'
import { unsplashService } from '../../services/unsplashService'
import { Loader } from '../Loader';

export function BoardBgImgs({ onUpdateBoard, board, closeSideBar }) {

    const [bgImgUrls, setBgImgUrls] = useState(null)
    useEffect(() => { loadImgUrls() }, []);

    const loadImgUrls = async () => {
        const bgImgUrl = await unsplashService.getCollection()
        setBgImgUrls(bgImgUrl)
    }

    const onSelectImg = bgImgUrl => {
        const updatedBoard = { ...board, bgImgUrl }
        onUpdateBoard(updatedBoard)
        closeSideBar()
    }

    if (!bgImgUrls) return (<Loader />)
    return (
        <section className="board-side-bar-bg-imgs-container">
            <div className="bg-imgs-content">
                {bgImgUrls.map(img =>
                    <img key={img.id} src={img.urls.small}
                        alt={img.alt_description}
                        onClick={() => onSelectImg(img.urls.full)}
                    >
                    </img>)}
            </div>
        </section>
    )
}


