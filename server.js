const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const PORT = process.env.PORT || 3001;
const app = express();
var multer = require('multer')
var cors = require('cors');
const mongoose = require("mongoose");
const fs = require('fs');
var count = 1;



// Define middleware here

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, "image" + count++ + ".png")
  }

})

var pdfStorage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, "pdf")
  },
  filename: function (req, file, cb) {
    cb(null,"project.pdf")
  }
})

var upload = multer({ storage: storage }).array('file')
var upload2 = multer({ storage: pdfStorage }).single('file')



  app.post('/upload', function (req, res) {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)

  })
  setTimeout(sendEmail, 500)
});

// var pdf = []

app.post('/pdfUpload', function (req, res) {

  // var string = JSON.stringify(req.body)
console.log(req.body);

  // sendEmail(req.body, (res) => {
  //   res.status(200).json({"status": res ? 'ok' : 'error' });
  
  // })
});


// EMAIL SERVER CODE 



var nodemailer = require('nodemailer');


var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soldbydw@gmail.com',
      pass: 'Brodie22'
    }
  });


  
  eraseFolder = () => {
    const directory = './public';
    console.log("erasing folder......");
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
    
      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });

  }
  
  
  const sendEmail = (data, callback) => {

    fs.readdir("./public", (err, files) => {
      console.log(files.length);
      var fileLength = files.length;
      var attachments = [{}]
      if(fileLength === "undefined"){
        attachments = [
          {
            filename: 'attachment.pdf',
            content: data,
            path: data,
            contentType: 'application/pdf',
            encoding: 'base64' 
          }
        ]
      }
      if (fileLength > 0){
        attachments = [
        {
          path:"./public/image1.png"
        },
        {
          filename: 'attachment.pdf',
          content: data,
          path: data,
          contentType: 'application/pdf',
          encoding: 'base64' 
        }
      ]
      }
      if (fileLength > 1){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          }
      ]
      }
      if (fileLength > 2){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          }
      ]
      }
      if (fileLength > 3){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          }
      ]
      }
      if (fileLength > 4){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          }
      ]
      }
      if (fileLength > 5){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          }
      ]
      }
      if (fileLength > 6){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          }
      ]
      }
      if (fileLength > 7){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          },
          {
            path:"./public/image8.png"
          }
      ]
      }
      if (fileLength > 8){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          },
          {
            path:"./public/image8.png"
          },
          {
            path:"./public/image9.png"
          }
      ]
      }
      if (fileLength > 9){
        attachments = [
          {
            path:"./public/image1.png"
          },
          {
            path:"./public/image2.png"
          },
          {
            path:"./public/image3.png"
          },
          {
            path:"./public/image4.png"
          },
          {
            path:"./public/image5.png"
          },
          {
            path:"./public/image6.png"
          },
          {
            path:"./public/image7.png"
          },
          {
            path:"./public/image8.png"
          },
          {
            path:"./public/image9.png"
          },
          {
            path:"./public/image10.png"
          }
      ]
      }

      var mailOptions = {
        from: 'soldbydw@gmail.com',
        to: 'dallas@cybermark.com',
        subject: 'Email Sent From Cybermark Wireframe Builder',
        text: 'Project Images!',
        attachments: attachments
      };
    
    
      mail.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          callback(false)
        } else {
          console.log('Email sent: ' + info.response);
          eraseFolder();
          callback(true)
        }
      });


    })
  

  }


// Define API routes here

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api/index"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


