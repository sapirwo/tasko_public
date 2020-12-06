import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { alertRemove } from '../../services/alertService'
import OutsideAlerter from '../OutsideAlerter'

export function GroupHeaderModal({ onRemoveGroup, toggleHeaderModal, groupId }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        prevOpen.current && !open && anchorRef.current.focus();
        prevOpen.current = open;
    }, [open]);

    const handleClose = ({ target }) => {
        if (anchorRef.current?.contains(target)) return;
        setOpen(false);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const removeGroup = async (id) => {
        try {
            await alertRemove('group')
            onRemoveGroup(id)
        } catch (err) {
            console.log(err)
            toggleHeaderModal()
        } finally {
        }
    }

    return (
        <section className="group-header-modal-container flex">
            <OutsideAlerter onClose={toggleHeaderModal} btnToPrevent="btnToPrevent">
                <section>
                    <Paper className="group-header-modal-content">
                        <MenuList>
                            <MenuItem onClick={() => removeGroup(groupId)}>Delete</MenuItem>
                        </MenuList>
                    </Paper>
                    <div>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={() => removeGroup(groupId)}>Delete</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </section>
            </OutsideAlerter>
        </section>
    );
}
