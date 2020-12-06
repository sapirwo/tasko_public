import React from 'react'
import { useSelector } from 'react-redux';
import OutsideAlerter from '../../OutsideAlerter'
export function CardCover({ setUploadedImg, onToggleCardCoverModal, onSetCardCover }) {
    const { currBoard } = useSelector(state => state.board)
    return (
        <section className="modal-select-cover-container">
            <OutsideAlerter onClose={onToggleCardCoverModal} btnToPrevent="btnToPrevent">
                <section>
                    <h2>Cover</h2>
                    <section className="modal-select-cover-close-btn"
                        title="close"
                        onClick={onToggleCardCoverModal}
                    >
                    </section>
                    <h3>COLORS</h3>
                    <section className="modal-select-cover-colors-container">
                        <div >
                            <div onClick={() => onSetCardCover('color', 'red')} className="red-cover">red</div>
                            <div onClick={() => onSetCardCover('color', 'green')} className="green-cover">green</div>
                            <div onClick={() => onSetCardCover('color', 'blue')} className="blue-cover">blue</div>
                        </div>
                        <div >
                            <div onClick={() => onSetCardCover('color', 'purple')} className="purple-cover">purple</div>
                            <div onClick={() => onSetCardCover('color', 'yellow')} className="yellow-cover">yellow</div>
                            <div onClick={() => onSetCardCover('color', 'orange')} className="orange-cover">orange</div>
                        </div>
                    </section>
                    <h3>UPLOAD</h3>
                    <section className="modal-select-cover-input-container">
                        <label htmlFor="input-upload-cover-img">Upload Cover Image</label>
                        <input
                            id="input-upload-cover-img"
                            type="file"
                            onChange={(ev) => setUploadedImg(ev)}
                        />
                    </section>
                    <h3>PHOTOS</h3>
                    <section className="modal-select-cover-imgs-container">
                        {currBoard.style?.coverUrls?.map((url, idx) => <img key={`img-0${idx}`} onClick={onSetCardCover} src={url} alt="cover-img" />)}
                    </section>
                </section>
            </OutsideAlerter>
        </section>
    )
}
