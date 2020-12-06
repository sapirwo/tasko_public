import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Doughnut, Bar } from 'react-chartjs-2';
import utillsService from '../../services/utillsService';
import { alertRemove, alertError } from '../../services/alertService'

export function BoardSideBarDashboard({ board, removeBoard, closeSideBar }) {

    const [cardsPerMembers, setCardsPerMembers] = useState([])
    const boards = useSelector(state => state.board.boards)

    const getCardsPerMember = () => {
        const cards = getBoardCards()
        let cardsPerMember = []
        for (const card in cards) {
            const { members } = cards[card]
            if (members) for (const member in members) {
                const currMember = cards[card].members[member]
                const { isCompleted } = cards[card]
                if (!cardsPerMember.find(member => member._id === currMember._id)) {
                    const newMember = getNewMember(currMember, isCompleted)
                    cardsPerMember.push(newMember)
                } else cardsPerMember = updateMemberData(cardsPerMember, currMember, isCompleted)
            }
        }
        setCardsPerMembers(cardsPerMember)
    }

    useEffect(() => { getCardsPerMember() }, [board]);// eslint-disable-line react-hooks/exhaustive-deps

    const getNewMember = (currMember, isCompleted) => {
        const { _id, username } = currMember
        return {
            _id,
            username,
            data: {
                assignedCards: 1,
                isCompleted: isCompleted ? 1 : 0
            }
        }
    }

    const updateMemberData = (cardsPerMember, currMember, isCompleted) => {
        return cardsPerMember.map(member => {
            if (member._id === currMember._id) {
                return {
                    ...member, data: {
                        ...member.data, assignedCards: member.data.assignedCards + 1,
                        isCompleted: isCompleted ? member.data.isCompleted + 1 : member.data.isCompleted
                    }
                }
            }
            return member
        })
    }

    const getBoardCards = () => {
        const groups = board.groups.filter(group => group.cards.length)
        let cards = []
        for (const group in groups) {
            for (const card in groups[group].cards) {
                cards.push(groups[group].cards[card])
            }
        }
        return cards
    }

    const getDataForDisplay = type => {
        const usernames = cardsPerMembers.map(card => utillsService.toCapitalCase(card.username))
        const assignedCards = cardsPerMembers.map(card => card.data.assignedCards)
        const isCompleted = cardsPerMembers.map(card => card.data.isCompleted)
        const assignedBgc = (type === 'bar' && 'rgb(103, 186, 103)') || usernames.map(name => utillsService.getRandomColor())
        const completedBgc = (type === 'bar' && '#026ba7') || '#27575F'
        const chartData = {
            labels: usernames,
            datasets: [
                {
                    label: 'Cards',
                    backgroundColor: assignedBgc,
                    hoverBackgroundColor: 'rgb(69, 131, 69)',
                    data: assignedCards,
                },
                {
                    label: 'Completed',
                    backgroundColor: completedBgc,
                    hoverBackgroundColor: ' #1b5478',
                    data: isCompleted
                },
            ],
        };
        return chartData
    }

    const onRemoveBoard = async () => {
        if (!boards || boards.length <= 1) return alertError('Sorry, you must have at least one board.')
        try {
            await alertRemove('board')
            removeBoard(board._id)
            closeSideBar()
        } catch (err) {
            console.log(err)
        }
    }

    const barData = getDataForDisplay('bar')
    const doughnutData = getDataForDisplay('doughnut')
    return (
        <section className="board-side-bar-dashboard-container">
            {(cardsPerMembers.length === 0) ?
                <div className="alert">There are no cards with members.</div>
                :
                <div className="chart-container">
                    <Bar
                        data={barData}
                        options={{
                            scales: {
                                yAxes: [{ ticks: { beginAtZero: true, stepSize: 1 } }]
                            },
                            maintainAspectRatio: false,
                        }}
                    />
                </div>}
            <div className="chart-container doughnut-chart">
                {doughnutData.labels.length > 0 && <Doughnut data={doughnutData} />}
            </div>
            <button className="board-sidebar-remove-board" onClick={() => onRemoveBoard()}
            >Delete Board</button>
        </section>
    )
}


