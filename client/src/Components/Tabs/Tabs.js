import React, { Component } from 'react';
import "./Tabs.css"
import { Tabs, TabLink, TabContent } from "react-tabs-redux"
import Container1 from "../Container/Container"
import Container2 from "../Container2/Container2"
import Container3 from "../Container3/Container3"
import Container4 from "../Container4/Container4"
import Container5 from "../Container5/Container5"
import Container6 from "../Container6/Container6"
import Container7 from "../Container7/Container7"
import Modal from "../Modal/Modal"
import Header1 from "../Headers/Header1/Header1"
import { applyDrag, generateItems } from '../../utils';
import PDFGenerate from "../PDF-Generate/PDF-Generate"
var pageTitles = ["Home Page"]
let header1 = document.getElementById("Header-0");

const styles = {
    activeLinkStyle: {
        backgroundColor: "#323232",
        color: "#F97B82"
    }
}


class ContainerTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {

            userName: this.props.name,
            userEmail: this.props.email,
            items2: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 2 - ${i}` })),
            items3: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 3 - ${i}` })),
            items4: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 4 - ${i}` })),
            items5: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 5 - ${i}` })),
            items6: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 6 - ${i}` })),
            items7: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 7 - ${i}` })),
            items8: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 8 - ${i}` })),
            pageName2: "+",
            pageName3: "+",
            pageName4: "+",
            pageName5: "+",
            pageName6: "+",
            pageName7: "+",
            isHidden1:true,
            isHidden2:true,
            isHidden3:true,
            isHidden4:true,
            isHidden5:true,
            isHidden6:true,

        }
    }


    // Handles the form inside modal and disperses text to the corresponding page 

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        var modalBackground = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(modalBackground);
        if(modalBackground.id === "modal1"){
            this.setState({
                pageName2:value
            });
        }
        if(modalBackground.id === "modal2"){
            this.setState({
                pageName3:value
            });
        }
        if(modalBackground.id === "modal3"){
            this.setState({
                pageName4:value
            });
        }
        if(modalBackground.id === "modal4"){
            this.setState({
                pageName5:value
            });
        }
        if(modalBackground.id === "modal5"){
            this.setState({
                pageName6:value
            });
        }
        if(modalBackground.id === "modal6"){
            this.setState({
                pageName7:value
            });
        }

    }

    // Handles the submit button on the modal 
    handleSubmit = (event) => {
        
        // Pushes page titles to pdf doc

        var modal = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
        console.log(modal);
        // this.modalClose();
        if(this.state.pageName2.length > 1){
            pageTitles.push(this.state.pageName2)
            
        }

        if(this.state.pageName3.length > 1){
            pageTitles.push(this.state.pageName3)
        }

        if(this.state.pageName4.length > 1){
            pageTitles.push(this.state.pageName4)
        }

        if(this.state.pageName5.length > 1){
            pageTitles.push(this.state.pageName5)
        }

        if(this.state.pageName6.length > 1){
            pageTitles.push(this.state.pageName6)
        }

        if(this.state.pageName7.length > 1){
            pageTitles.push(this.state.pageName7)
        }

        //  Shows the next tab after the one before it has been used

        var divId = event.target.parentElement;
        var divParent = divId.parentElement
        var divGrandparent = divParent.parentElement
        var lastOne = divGrandparent.parentElement
        var oneINeed = lastOne.parentElement.parentElement
        console.log(oneINeed);


        if (oneINeed.id == "tab-tab2" && oneINeed.dataset.clicks == 1) {
            var link3 = document.getElementById("link-3")
            link3.style.visibility = "visible"

        }

        if (oneINeed.id == "tab-tab3" && oneINeed.dataset.clicks == 1) {
            var link4 = document.getElementById("link-4")
            link4.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab4" && oneINeed.dataset.clicks == 1) {
            var link5 = document.getElementById("link-5")
            link5.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab5" && oneINeed.dataset.clicks == 1) {
            var link6 = document.getElementById("link-6")
            link6.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab6" && oneINeed.dataset.clicks == 1) {
            var link7 = document.getElementById("link-7")
            link7.style.visibility = "visible"
        }


        // Closes the corresponding modal //


        var modalName = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(modalName);

        if(modalName.id === "modal1"){
            this.setState({isHidden1:true})
            modalName.remove()
        }
        if(modalName.id === "modal2"){
            this.setState({isHidden2:true})
            modalName.remove()
        }
        if(modalName.id === "modal3"){
            this.setState({isHidden3:true})
            modalName.remove()
        }
        if(modalName.id === "modal4"){
            this.setState({isHidden4:true})
            modalName.remove()
        }
        if(modalName.id === "modal5"){
            this.setState({isHidden5:true})
            modalName.remove()
        }
        if(modalName.id === "modal6"){
            this.setState({isHidden6:true})
            modalName.remove()
        }
    }

    //  Opens the modal for corresponding tab 

    modalOpen = (event) => {

        // this.toggleHidden();
        var element = event.target
        var parent = element.parentElement;
        console.log(parent);
        if(parent.id === "tab-tab2" && parent.dataset.clicks === "0"){
            parent.setAttribute("data-clicks", 1)
            this.setState({isHidden1:false})
        }
        if(parent.id === "tab-tab3" && parent.dataset.clicks === "0"){
            parent.setAttribute("data-clicks", 1)
            this.setState({isHidden2:false})
        }
        if(parent.id === "tab-tab4" && parent.dataset.clicks === "0"){
            parent.setAttribute("data-clicks", 1)
            this.setState({isHidden3:false})
        }
        if(parent.id === "tab-tab5" && parent.dataset.clicks === "0"){
            parent.setAttribute("data-clicks", 1)
            this.setState({isHidden4:false})
        }
        if(parent.id === "tab-tab6" && parent.dataset.clicks === "0"){
            parent.setAttribute("data-clicks", 1)
            this.setState({isHidden5:false})
        }
        if(parent.id === "tab-tab7" && parent.dataset.clicks === "0"){
            parent.setAttribute("data-clicks", 1)
            this.setState({isHidden6:false})
        }
        
    }


    // Removes Element from Tab-1
    removeElement1 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items2];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items2: array })
        }
    }

    // Duplicates Element from Tab-1
    duplicateElement1 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items2];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        var element = array.map(function (x) {
            console.log(x)
            return x
        })
        console.log(element);
        console.log(this.state.items2);

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items2: array })
    }

    // Recieves Element's data when dropped into Tab-1
    getChildPayload1 = (i) => {
        return (
            this.state.items2[i]
        )
    }

    getHTML = () => {
        console.log(this.state.items2);
        var comps = this.state.items2
        for (let i = 0; i < comps.length; i++) {
            const element = comps[i];
            console.log(element.data);
            if (element.data === "Header-0") {

            }
        }


    }

    // Recieves Element when dropped on Tab-1 and Places Element in its correct index 
    onDrop1 = (e) => {
        this.setState({ items2: applyDrag(this.state.items2, e) })
    }

    // Removes Element from Tab-2
    removeElement2 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items3];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items3: array })
        }
    }

    // Duplicates Element from Tab-2
    duplicateElement2 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items3];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        var element = array.map(function (x) {
            console.log(x)
            return x
        })
        console.log(element);
        console.log(this.state.items3);

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items3: array })
    }

    // Recieves Element's data when dropped into Tab-2
    getChildPayload2 = (i) => {
        return (
            this.state.items3[i]
        )
    }

    // Recieves Element when dropped on Tab-2 and Places Element in its correct index 
    onDrop2 = (e) => {
        this.setState({ items3: applyDrag(this.state.items3, e) })
    }

    // Removes Element from Tab-3
    removeElement3 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items4];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items4: array })
        }
    }

    // Duplicates Element from Tab-3
    duplicateElement3 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items4];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        var element = array.map(function (x) {
            console.log(x)
            return x
        })
        console.log(element);
        console.log(this.state.items4);

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items4: array })
    }

    // Recieves Element's data when dropped into Tab-3
    getChildPayload3 = (i) => {
        return (
            this.state.items4[i]
        )
    }

    // Recieves Element when dropped on Tab-3 and Places Element in its correct index 
    onDrop3 = (e) => {
        this.setState({ items4: applyDrag(this.state.items4, e) })
    }

    // Removes Element from Tab-4
    removeElement4 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items5];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items5: array })
        }
    }

    // Duplicates Element from Tab-4
    duplicateElement4 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items5];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        var element = array.map(function (x) {
            console.log(x)
            return x
        })
        console.log(element);
        console.log(this.state.items5);

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items5: array })
    }

    // Recieves Element's data when dropped into Tab-4
    getChildPayload4 = (i) => {
        return (
            this.state.items5[i]
        )
    }

    // Recieves Element when dropped on Tab-4 and Places Element in its correct index 
    onDrop4 = (e) => {
        this.setState({ items5: applyDrag(this.state.items5, e) })
    }

    // Removes Element from Tab-5
    removeElement5 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items6];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items6: array })
        }
    }

    // Duplicates Element from Tab-5
    duplicateElement5 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items6];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        var element = array.map(function (x) {
            console.log(x)
            return x
        })
        console.log(element);
        console.log(this.state.items6);

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items6: array })
    }

    // Recieves Element's data when dropped into Tab-5
    getChildPayload5 = (i) => {
        return (
            this.state.items6[i]
        )
    }

    // Recieves Element when dropped on Tab-5 and Places Element in its correct index 
    onDrop5 = (e) => {
        this.setState({ items6: applyDrag(this.state.items6, e) })
    }

    // Removes Element from Tab-6
    removeElement6 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items7];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items7: array })
        }
    }

    // Duplicates Element from Tab-6
    duplicateElement6 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items7];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        var element = array.map(function (x) {
            console.log(x)
            return x
        })
        console.log(element);
        console.log(this.state.items7);

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items7: array })
    }

    // Recieves Element's data when dropped into Tab-6
    getChildPayload6 = (i) => {
        return (
            this.state.items7[i]
        )
    }

    // Recieves Element when dropped on Tab-6 and Places Element in its correct index 
    onDrop6 = (e) => {
        this.setState({ items7: applyDrag(this.state.items7, e) })
    }

    // Removes Element from Tab-7
    removeElement7 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items8];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items8: array })
        }
    }

    // Duplicates Element from Tab-7
    duplicateElement7 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement;
        var array = [...this.state.items8];
        var elementPosition = array.map(function (x) {
            console.log(x.data)
            return x.data
        }).indexOf(grandparent.id);
        console.log(grandparent.id);
        var element = array.map(function (x) {
            console.log(x)
            return x
        })
        console.log(element);
        console.log(this.state.items8);

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items8: array })
    }

    // Recieves Element's data when dropped into Tab-7
    getChildPayload7 = (i) => {
        return (
            this.state.items8[i]
        )
    }

    // Recieves Element when dropped on Tab-7 and Places Element in its correct index 
    onDrop7 = (e) => {
        this.setState({ items8: applyDrag(this.state.items8, e) })
    }



    render() {
        return (
            <>
                <div id="tabsContainer">
                    <div id="webBox"></div>
                    <PDFGenerate
                        userName={this.state.userName}
                        userEmail={this.state.userEmail}
                        dataFromContainer1={this.state.items2}
                        dataFromContainer2={this.state.items3}
                        dataFromContainer3={this.state.items4}
                        dataFromContainer4={this.state.items5}
                        dataFromContainer5={this.state.items6}
                        dataFromContainer6={this.state.items7}
                        dataFromContainer7={this.state.items8}
                        pageTitles={pageTitles} />
                    <br />
                    <Tabs
                        activeLinkStyle={styles.activeLinkStyle}
                    >
                        <ul id="homePage">
                            <li className="nav-item" >
                                <TabLink to="tab1"><span id="firstPage">Home Page</span></TabLink>
                            </li>
                            <li className="nav-item" id="link-2">
                                <TabLink data-clicks={0}  to="tab2">
                                    <span onClick={this.modalOpen}>{this.state.pageName2} </span>
                                    
                                    <div id="modal1" className={this.state.isHidden1 ? "hidden" : "visible"}>
                                    <Modal  modalClose={this.modalClose}>
                                        <div className="form-group">
                                            <label>Enter Page Name:</label>
                                            <input
                                                type="text"
                                                name ={this.state.pageName2}
                                                onChange={e => this.handleChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                Save
                                            </span>
                                        </div>
                                    </Modal>
                                    </div>
                                </TabLink>
                            </li>
                            <li className="nav-item" id="link-3" >
                            <TabLink data-clicks={0} onClick={this.modalOpen} to="tab3">
                            <span onClick={this.modalOpen}>{this.state.pageName3}</span>
                                    
                                    <div id="modal2" className={this.state.isHidden2 ? "hidden" : "visible"}>
                                    <Modal   modalClose={this.modalClose}>
                                        <div className="form-group">
                                            <label>Enter Page Name:</label>
                                            <input
                                                type="text"
                                                name ={this.state.pageName3}
                                                onChange={e => this.handleChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                Save
                                            </span>
                                        </div>
                                    </Modal>
                                    </div>
                                </TabLink>
                            </li>
                            <li className="nav-item" id="link-4" >
                            <TabLink data-clicks={0} onClick={this.modalOpen} to="tab4">
                            <span onClick={this.modalOpen}>{this.state.pageName4}</span>
                                    
                                    <div id="modal3" className={this.state.isHidden3 ? "hidden" : "visible"}>
                                    <Modal  modalClose={this.modalClose}>
                                        <div className="form-group">
                                            <label>Enter Page Name:</label>
                                            <input
                                                type="text"
                                                name ={this.state.pageName3}
                                                onChange={e => this.handleChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                Save
                                            </span>
                                        </div>
                                    </Modal>
                                  
                                    </div>
                                </TabLink>
                            </li>
                            <li className="nav-item" id="link-5">
                            <TabLink data-clicks={0} onClick={this.modalOpen} to="tab5">
                            <span onClick={this.modalOpen}>{this.state.pageName5}</span>
                                    
                                    <div id="modal4" className={this.state.isHidden4 ? "hidden" : "visible"}>
                                    <Modal  modalClose={this.modalClose}>
                                        <div className="form-group">
                                            <label>Enter Page Name:</label>
                                            <input
                                                type="text"
                                                name ={this.state.pageName3}
                                                onChange={e => this.handleChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                Save
                                            </span>
                                        </div>
                                    </Modal>
                                    </div>
                                </TabLink>
                            </li>
                            <li className="nav-item" id="link-6" >
                            <TabLink data-clicks={0} onClick={this.modalOpen} to="tab6">
                            <span onClick={this.modalOpen}>{this.state.pageName6}</span>
                                    
                                    <div  id="modal5" className={this.state.isHidden5 ? "hidden" : "visible"}>
                                    <Modal  modalClose={this.modalClose}>
                                        <div className="form-group">
                                            <label>Enter Page Name:</label>
                                            <input
                                                type="text"
                                                name ={this.state.pageName3}
                                                onChange={e => this.handleChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                Save
                                            </span>
                                        </div>
                                    </Modal>
                                    </div>
                                </TabLink>
                            </li>
                            <li className="nav-item" id="link-7">
                            <TabLink data-clicks={0} onClick={this.modalOpen} to="tab7">
                            <span onClick={this.modalOpen}>{this.state.pageName7}</span>
                                    
                                    <div id="modal6" className={this.state.isHidden6 ? "hidden" : "visible"}>
                                    <Modal  modalClose={this.modalClose}>
                                        <div className="form-group">
                                            <label>Enter Page Name:</label>
                                            <input
                                                type="text"
                                                name ={this.state.pageName3}
                                                onChange={e => this.handleChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                Save
                                            </span>
                                        </div>
                                    </Modal>
                                    </div>
                                </TabLink>
                            </li>
                        </ul>



                        <TabContent for="tab1">
                            <Container1
                                onDrop={this.onDrop1}
                                getChildPayload={this.getChildPayload1}
                                generateItems={this.state.items2}
                                removeElement={this.removeElement1}
                                duplicateElement={this.duplicateElement1}
                            />
                        </TabContent>
                        <TabContent for="tab2">
                            <Container2
                                onDrop={this.onDrop2}
                                getChildPayload={this.getChildPayload2}
                                generateItems={this.state.items3}
                                removeElement={this.removeElement2}
                                duplicateElement={this.duplicateElement2}
                            />
                        </TabContent>
                        <TabContent for="tab3">
                            <Container3
                                onDrop={this.onDrop3}
                                getChildPayload={this.getChildPayload3}
                                generateItems={this.state.items4}
                                removeElement={this.removeElement3}
                                duplicateElement={this.duplicateElement3}
                            />
                        </TabContent>
                        <TabContent for="tab4">
                            <Container4
                                onDrop={this.onDrop4}
                                getChildPayload={this.getChildPayload4}
                                generateItems={this.state.items5}
                                removeElement={this.removeElement4}
                                duplicateElement={this.duplicateElement4}
                            />
                        </TabContent>
                        <TabContent for="tab5">
                            <Container5
                                onDrop={this.onDrop5}
                                getChildPayload={this.getChildPayload5}
                                generateItems={this.state.items6}
                                removeElement={this.removeElement5}
                                duplicateElement={this.duplicateElement5}
                            />
                        </TabContent>
                        <TabContent for="tab6">
                            <Container6
                                onDrop={this.onDrop}
                                getChildPayload={this.getChildPayload6}
                                generateItems={this.state.items7}
                                removeElement={this.removeElement6}
                                duplicateElement={this.duplicateElement6}
                            />
                        </TabContent>
                        <TabContent for="tab7">
                            <Container7
                                onDrop={this.onDrop7}
                                getChildPayload={this.getChildPayload7}
                                generateItems={this.state.items8}
                                removeElement={this.removeElement7}
                                duplicateElement={this.duplicateElement7}
                            />
                        </TabContent>
                    </Tabs>


                </div>
            </>
        );
    }
}

export default ContainerTabs;




