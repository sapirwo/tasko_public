import React, { Component } from 'react'
import { CardPreview } from './CardPreview'

export class CardList extends Component {
    state = {
        lastCardRef: null,
    }

    componentDidMount() {
        const lastCard = React.createRef()
        this.setState({ lastCardRef: lastCard })
    }

    componentDidUpdate() {
        const { isScrolledDown } = this.props
        if (isScrolledDown) this.scrollToBottom()

    }

    scrollToBottom = () => {
        const { lastCardRef } = this.state
        const { onScrollDown } = this.props
        lastCardRef.current.scrollIntoView({ behavior: 'smooth' })
        onScrollDown()
    }

    render() {
        const { group, onCardDetails, isDragStart } = this.props
        const { lastCardRef } = this.state
        const containerStyle = isDragStart ? "cards-container no-scroll-y" : "cards-container scroll-y";
        return (
            <section className={containerStyle}>
                {
                    group.cards.map((card, idx) => {
                        return (
                            <div key={card.id}
                                className="card-container"
                                onClick={() => onCardDetails(card.id, group.id)}>
                                <CardPreview
                                    card={card}
                                    idx={idx}
                                    group={group}
                                />
                            </div>
                        )
                    })
                }
                < div ref={lastCardRef}></div>
            </section >
        )
    }
}
