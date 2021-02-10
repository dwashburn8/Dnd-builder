import React from "react"
import jsPDF from 'jspdf'
// import API from "../../utils/API"
// import { useAuth0 } from '@auth0/auth0-react';
import Axios from "axios";
import Modal from "../Modal/Modal"
var data1 = [];

class PDFGenerate extends React.Component {
    // const { user } = useAuth0();    
    // const [values, setValues] = useState({ userName: props.userName, email: props.userEmail, projects: [] });
    // const [errors, setErrors] = useState({});
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    blobToFile = (theBlob, fileName) => {
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }

    passPdf = () => {
        const dataForm = new FormData()
        dataForm.append('file', this.state.selectedFile)

        Axios.post("http://localhost:3001/pdfUpload", dataForm, {
            // receive two    parameter endpoint url ,form data

        })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        console.log(value);
    }

    openModal = () => {
        var urlModal= document.getElementById("URLModal");
        urlModal.className="visible"
    }

    handleSubmit = (event) => {
       var input = document.getElementById("urlInput").value;
       console.log(input);
       var urlModal= document.getElementById("URLModal");
       urlModal.className="hidden"
         if (input != null) {
             data1.push(input)
         }

        this.generatePDF()

    }



    generatePDF = () => {

        data1.push(this.props.pageTitles[0])
        var dataFromContainer1 = this.props.dataFromContainer1
        console.log(dataFromContainer1);
        dataFromContainer1.map((element) => {
            console.log(element.data);
            data1.push(element.data)
            return data1
        })
        var data2 = [];
        if (this.props.pageTitles.length > 1) {

            data2.push(this.props.pageTitles[1])
        }
        var dataFromContainer2 = this.props.dataFromContainer2
        console.log(dataFromContainer2);
        dataFromContainer2.map((element) => {
            console.log(element.data);
            data2.push(element.data)
            return data2
        })
        var data3 = [];
        if (this.props.pageTitles.length > 2) {

            data3.push(this.props.pageTitles[2])
        }
        var dataFromContainer3 = this.props.dataFromContainer3
        console.log(dataFromContainer3);
        dataFromContainer3.map((element) => {
            console.log(element.data);
            data3.push(element.data)
            return data3
        })
        var data4 = [];
        if (this.props.pageTitles.length > 3) {

            data4.push(this.props.pageTitles[3])
        }
        var dataFromContainer4 = this.props.dataFromContainer4
        console.log(dataFromContainer4);
        dataFromContainer4.map((element) => {
            console.log(element.data);
            data4.push(element.data)
            return data4
        })
        var data5 = [];
        if (this.props.pageTitles.length > 4) {

            data5.push(this.props.pageTitles[4])
        }
        var dataFromContainer5 = this.props.dataFromContainer5
        console.log(dataFromContainer5);
        dataFromContainer5.map((element) => {
            console.log(element.data);
            data5.push(element.data)
            return data5
        })
        var data6 = [];
        if (this.props.pageTitles.length > 5) {

            data6.push(this.props.pageTitles[5])
        }
        var dataFromContainer6 = this.props.dataFromContainer6
        console.log(dataFromContainer6);
        dataFromContainer6.map((element) => {
            console.log(element.data);
            data6.push(element.data)
            return data6
        })
        var data7 = [];
        if (this.props.pageTitles.length > 6) {

            data7.push(this.props.pageTitles[6])
        }
        var dataFromContainer7 = this.props.dataFromContainer7
        console.log(dataFromContainer7);
        dataFromContainer7.map((element) => {
            console.log(element.data);
            data7.push(element.data);
            return data7
        })

        var doc = new jsPDF('p', 'pt');
        doc.text(20, 20, data1);
        if (data2.length > 0) {
            doc.addPage();
            doc.text(20, 20, data2);
        }
        if (data3.length > 0) {
            doc.addPage();
            doc.text(20, 20, data3);
        }
        if (data4.length > 0) {
            doc.addPage();
            doc.text(20, 20, data4);
        }
        if (data5.length > 0) {
            doc.addPage();
            doc.text(20, 20, data5);
        }
        if (data6.length > 0) {
            doc.addPage();
            doc.text(20, 20, data6);
        }
        if (data7.length > 0) {
            doc.addPage();
            doc.text(20, 20, data7);
        }
        doc.save('demo.pdf');
        var res = btoa(doc.output())
        console.log(res);

        Axios.post("http://localhost:3001/pdfUpload", res).then((res) => {
            if (res.status === 'ok') console.log("Yeah!");
            else console.log(":(");
        })


        // API.saveUser(values)
        // .then(() => {
        //     console.log(values);

        // })
        // .catch(err => console.log(err)
        // )

    }

    render() {
        return (
            <div className="btn-container">
                <button id="pdfBtn" className="btn" onClick={this.openModal} type="primary">PDF</button>
                <div id="URLModal" className="hidden">
                    <Modal>
                        <div className="form-group">
                            <label>Please enter the URL you would like to use for this template:</label>
                            <input
                                id="urlInput"
                                type="text"
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <span onClick={this.handleSubmit} className="btn form-btn text-center" type="button">
                                Save
                        </span>
                        </div>
                    </Modal>
                </div>
            </div>
        );

    }
}
export default PDFGenerate;



// var title1 = this.props.pageTitles;
// console.log(title1);
// // data1.push(title1)
// dataFromContainer1.map((element) => {
//     let elem = document.getElementById(element.data)
//     let ht = window.getComputedStyle(elem, null).getPropertyValue("background-image")
//     console.log(ht);
//     var mySubString = ht.substring(
//         ht.lastIndexOf('(') + 1,
//         ht.lastIndexOf(")")
//     );
//     var withoutQuotes = mySubString.replace(/^"(.+(?="$))"$/, '$1');
//     data1.push(withoutQuotes)

//     console.log(data1);




// var img = new Image()
// for (let i = 0; i < data1.length; i++) {
//     const picture = data1[i];

//     img.src=picture
//     doc.addImage(img, "png", 10,78,580,300);
//     doc.text(20,20," vcxvxcv")
// }