
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const reverseImageSearch = require('node-reverse-image-search')
const fileUpload = require("express-fileupload");
const fs = require("fs");
var cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dnh2hkbuf",
  api_key: "491874445585153",
  api_secret: "pgq6oDTwMgGPrXHa64bTMtidsOk"
});

app.use(bodyParser.json({ extended: true }));
app.use(fileUpload());
app.use(cors());
const hostname = "0.0.0.0";
//const port = 80;
const port = process.env.PORT || 3000;

// http status codes
const statusOK = 200;
const statusNotFound = 404;

// Handle GET (all) request (not neccessary but why not)
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "Hi! I don't know how you got here, but this is the special sauce dev only area! Pls get out or we'll hack ur computer. (jkjk) but still, pls get out." });
});
app.get("/", function (req, res) {
  //fs.unlinkSync("/sandbox/src/images/123.PNG");
  res.send("hello");
  res.statusCode = statusOK;
});
app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res
      .status(400)
      .redirect("https://Front-End.joshuaren.repl.co/html/nofile.html"); //redirects to an error page
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/images/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    //res.send("File uploaded!");
    console.log("File Uploaded");
    cloudinary.uploader.upload(
      __dirname + "/images/" + sampleFile.name,
      function (error, result) {
        console.log(error.url);
        fs.unlinkSync(__dirname + "/images/" + sampleFile.name);
        main();
        async function main() {
          var imageResult;
          const doSomething = (results) => {
            for (var i = 0; 0<results.length; i++){
            
            if (results[i] === undefined) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/error.html"
              );
              return;
            }
            
            console.log(results[i].title);
            imageResult = results[i].title;
            if (imageResult.toString().toLowerCase().includes("acne")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/acne.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("cold sore")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/cold_sore.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("blister")|| imageResult.toString().toLowerCase().includes("epidermolysis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/blisters.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("hive")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/hives.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("actinic")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/actinic_keratosis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("rosacea")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/rosacea.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("carbuncle")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/carbuncle.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("latex")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/latex.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("seborrheic")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/seborrheicegzma.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("eczema")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/eczema.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("psoriasis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/psoriasis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("cellulitis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/cellulitis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("measles")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/measles.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("basal")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/basal_cell_carcinoma.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("squamous")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/squamouscancer.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("melanoma")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/melanoma.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("lupus")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/lupus.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("dermatitis")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/contact_dermatitis.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("vitiligo")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/vitiligo.html"
              );
              return;
            } else if (imageResult.toString().toLowerCase().includes("wart")) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/wart.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("chicken")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/chickenpox.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("pilaris")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/keratosis_pilaris.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("ringworm")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/ringworm.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("melasma")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/melasma.html"
              );
              return;
            } else if (
              imageResult.toString().toLowerCase().includes("impetigo")
            ) {
              res.redirect(
                "https://front-end.joshuaren.repl.co/html/impetigo.html"
              );
              return;
            }
          };
          res.redirect(
                "https://front-end.joshuaren.repl.co/html/nomatches.html"
              );
          };
          reverseImageSearch(error.url, doSomething);
        }
      }
    );
  });
});
app.post("/beta", function (req, res) {
  let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res
      .status(400)
      .redirect("https://Front-End.joshuaren.repl.co/html/nofile.html"); //redirects to an error page
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/images/" + sampleFile.name;

  sampleFile.mv(uploadPath, function (err) {
    if (err){ fs.unlinkSync(__dirname + "/images/" + sampleFile.name); return res.status(500).send(err);}













var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 -------------------------------------------------------------
START OF ACTUAL THING
 -------------------------------------------------------------
 */
var tf = require("@tensorflow/tfjs-node");
var fs_1 = require("fs");
var ImageModel = /** @class */ (function () {
    function ImageModel(signaturePath) {
        var _a;
        this.outputKey = "Confidences";
        var signatureData = fs_1.readFileSync(signaturePath, "utf8");
        this.signature = JSON.parse(signatureData);
        this.modelPath = "file://../" + this.signature.filename;
        _a = this.signature.inputs.Image.shape.slice(1, 3), this.width = _a[0], this.height = _a[1];
        this.outputName = this.signature.outputs[this.outputKey].name;
        this.classes = this.signature.classes.Label;
    }
    ImageModel.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, tf.loadGraphModel(this.modelPath)];
                    case 1:
                        _a.model = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageModel.prototype.dispose = function () {
        if (this.model) {
            this.model.dispose();
        }
    };
    ImageModel.prototype.predict = function (image) {
        var _a, _b;
        /*
        Given an input image decoded by tensorflow as a tensor,
        preprocess the image into pixel values of [0,1], center crop to a square
        and resize to the image input size, then run the prediction!
         */
        if (!!this.model) {
            var _c = image.shape.slice(0, 2), imgHeight = _c[0], imgWidth = _c[1];
            // convert image to 0-1
            var normalizedImage = tf.div(image, tf.scalar(255));
            // make into a batch of 1 so it is shaped [1, height, width, 3]
            var reshapedImage = normalizedImage.reshape(__spreadArrays([1], normalizedImage.shape));
            // center crop and resize
            var top = 0;
            var left = 0;
            var bottom = 1;
            var right = 1;
            if (imgHeight != imgWidth) {
                // the crops are normalized 0-1 percentage of the image dimension
                var size = Math.min(imgHeight, imgWidth);
                left = (imgWidth - size) / 2 / imgWidth;
                top = (imgHeight - size) / 2 / imgHeight;
                right = (imgWidth + size) / 2 / imgWidth;
                bottom = (imgHeight + size) / 2 / imgHeight;
            }
            var croppedImage = tf.image.cropAndResize(reshapedImage, [[top, left, bottom, right]], [0], [this.height, this.width]);
            var results = this.model.execute((_a = {}, _a[this.signature.inputs.Image.name] = croppedImage, _a), this.outputName);
            var resultsArray_1 = results.dataSync();
            return _b = {},
                _b[this.outputKey] = this.classes.reduce(function (acc, class_, idx) {
                    var _a;
                    return __assign((_a = {}, _a[class_] = resultsArray_1[idx], _a), acc);
                }, {}),
                _b;
        }
        else {
            console.error("Model not loaded, please await this.load() first.");
        }
    };
    return ImageModel;
}());
function main(imgPath) {
    return __awaiter(this, void 0, void 0, function () {
        var image, decodedImage, model, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile(imgPath)];
                case 1:
                    image = _a.sent();
                    decodedImage = tf.node.decodeImage(image, 3);
                    model = new ImageModel('../signature.json');
                    return [4 /*yield*/, model.load()];
                case 2:
                    _a.sent();
                    results = model.predict(decodedImage);
                    console.log(results.Confidences);
                    //let arrResult = Object.values(results);
                    const getMax = object => {
                      return Object.keys(object).filter(x => {
                      return object[x] == Math.max.apply(null, 
                      Object.values(object));
                      });
                    };
                    console.log(getMax(results.Confidences))
                   let largest = getMax(results.Confidences)
                   if (largest[0].toLowerCase().includes("actinic")){
                   res.redirect("https://dynamicderma.joshuaren.repl.co/html/actinic_keratosis.html")
                   }else if (largest[0].toLowerCase().includes("acne")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/acne.html");
                   }else if (largest[0].toLowerCase().includes("basal")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/basal_cell_carcinoma.html");
                   }else if (largest[0].toLowerCase().includes("blister")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/blisters.html");
                   }else if (largest[0].toLowerCase().includes("cellulitis")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/cellulitis.html");
                   }else if (largest[0].toLowerCase().includes("chicken")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/chickenpox.html");
                   }else if (largest[0].toLowerCase().includes("cold")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/cold_sore.html");
                   }else if (largest[0].toLowerCase().includes("keratosis")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/keratosis_pilaris.html");
                   }else if (largest[0].toLowerCase().includes("lupus")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/lupus.html");
                   }else if (largest[0].toLowerCase().includes("measle")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/measles.html");
                   }else if (largest[0].toLowerCase().includes("ringworm")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/ringworm.html");
                   }else if (largest[0].toLowerCase().includes("melanoma")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/melanoma.html");
                   }else if (largest[0].toLowerCase().includes("melesma")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/melasma.html");
                   }else if (largest[0].toLowerCase().includes("psoriasis")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/psoriasis.html");
                   }else if (largest[0].toLowerCase().includes("rosacea")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/rosacea.html");
                   }else if (largest[0].toLowerCase().includes("vitiligo")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/vitiligo.html");
                   }else if (largest[0].toLowerCase().includes("normal")){
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/nomatches.html");
                   }else{
                      res.redirect("https://dynamicderma.joshuaren.repl.co/html/error.html");
                   }
                    // cleanup
                    model.dispose();
                    return [2 /*return*/];
            }
        });
    });
}
main(__dirname + "/images/" + sampleFile.name);









    
        fs.unlinkSync(__dirname + "/images/" + sampleFile.name);
  });
});
app.listen(port, hostname, function () {
  console.log(`Listening at http://${hostname}:${port}/...`);
});










