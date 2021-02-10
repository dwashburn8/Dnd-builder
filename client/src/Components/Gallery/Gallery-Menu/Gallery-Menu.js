import React, { Component } from "react";
import "./Gallery-Menu.css"
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from '../../../utils';

class GalleryMenu extends Component {
    constructor() {
        super();

        this.state = {
            items1: generateItems(4, (i) => ({ id: '1' + i, data: `Gallery-${i}` })),
        }
    }

    render() {

        return (
            <>
                    <div id="collapseFour" className="collapse" aria-labelledby="galleryOne" data-parent="#accordionGallery">
                        <Container id="ContactMenu" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" groupName="1" behaviour="copy" getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}
                            dropPlaceholder={{
                                animationDuration: 150,
                                showOnTop: true,
                                className: 'drop-preview'
                            }}
                            dropPlaceholderAnimationDuration={200}>
                            {
                                this.state.items1.map((p, i) => {
                                    console.log(i);
                                    return (
                                        <Draggable key={i} >
                                            <div className="text-center data-title">{p.data}</div>
                                            <div id={p.data}  className="draggable-item">

                                            </div>
                                        </Draggable>
                                    );
                                })
                            }
                        </Container>
                    </div>

            </>
        )
    }
}

export default GalleryMenu