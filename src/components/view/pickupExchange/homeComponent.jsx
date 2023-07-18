
import React, { useEffect } from 'react';
import './style.css';
// https://codepen.io/yguo/pen/OyYGxQ
// https://github.com/szimek/signature_pad/tree/master
// https://www.npmjs.com/package/react-signature-canvas
//https://codesandbox.io/s/react-signature-canvas-example-o4unp?file=/src/index.js:587-596

function Home() {
    useEffect(()=>{
        (function() {
            window.requestAnimFrame = (function(callback) {
              return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimaitonFrame ||
                function(callback) {
                  window.setTimeout(callback, 1000 / 60);
                };
            })();
          
            var canvas = document.getElementById("sig-canvas");
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = "#222222";
            ctx.lineWidth = 4;
          
            var drawing = false;
            var mousePos = {
              x: 0,
              y: 0
            };
            var lastPos = mousePos;
          
            canvas.addEventListener("mousedown", function(e) {
              drawing = true;
              lastPos = getMousePos(canvas, e);
            }, false);
          
            canvas.addEventListener("mouseup", function(e) {
              drawing = false;
            }, false);
          
            canvas.addEventListener("mousemove", function(e) {
              mousePos = getMousePos(canvas, e);
            }, false);
          
            // Add touch event support for mobile
            canvas.addEventListener("touchstart", function(e) {
          
            }, false);
          
            canvas.addEventListener("touchmove", function(e) {
              var touch = e.touches[0];
              var me = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
              });
              canvas.dispatchEvent(me);
            }, false);
          
            canvas.addEventListener("touchstart", function(e) {
              mousePos = getTouchPos(canvas, e);
              var touch = e.touches[0];
              var me = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
              });
              canvas.dispatchEvent(me);
            }, false);
          
            canvas.addEventListener("touchend", function(e) {
              var me = new MouseEvent("mouseup", {});
              canvas.dispatchEvent(me);
            }, false);
          
            function getMousePos(canvasDom, mouseEvent) {
              var rect = canvasDom.getBoundingClientRect();
              return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top
              }
            }
          
            function getTouchPos(canvasDom, touchEvent) {
              var rect = canvasDom.getBoundingClientRect();
              return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top
              }
            }
          
            function renderCanvas() {
              if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
              }
            }
          
            // Prevent scrolling when touching the canvas
            document.body.addEventListener("touchstart", function(e) {
              if (e.target == canvas) {
                e.preventDefault();
              }
            }, false);
            document.body.addEventListener("touchend", function(e) {
              if (e.target == canvas) {
                e.preventDefault();
              }
            }, false);
            document.body.addEventListener("touchmove", function(e) {
              if (e.target == canvas) {
                e.preventDefault();
              }
            }, false);
          
            (function drawLoop() {
              requestAnimFrame(drawLoop);
              renderCanvas();
            })();
          
            function clearCanvas() {
              canvas.width = canvas.width;
            }
          
            // Set up the UI
            var sigText = document.getElementById("sig-dataUrl");
            var sigImage = document.getElementById("sig-image");
            var clearBtn = document.getElementById("sig-clearBtn");
            var submitBtn = document.getElementById("sig-submitBtn");
            clearBtn.addEventListener("click", function(e) {
              clearCanvas();
              sigText.innerHTML = "Data URL for your signature will go here!";
              sigImage.setAttribute("src", "");
            }, false);
            submitBtn.addEventListener("click", function(e) {
              var dataUrl = canvas.toDataURL();
              sigText.innerHTML = dataUrl;
              sigImage.setAttribute("src", dataUrl);
            }, false);
          
          })();
    },[])
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Signeture</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-0'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Vertical Form</h5>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <h1>E-Signature</h1>
                                                            <p>Sign in the canvas below and save your signature as an image!</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <canvas id="sig-canvas" width="620" height="160">
                                                                Get a better browser, bro.
                                                            </canvas>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-primary" id="sig-submitBtn">Submit Signature</button>
                                                            <button className="btn btn-default" id="sig-clearBtn">Clear Signature</button>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <textarea id="sig-dataUrl" className="form-control" rows="5">Data URL for your signature will go here!</textarea>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img id="sig-image" src="" alt="Your signature will go here!" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home