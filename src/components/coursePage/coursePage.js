import React from 'react';
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import swal from "sweetalert";
import colors from "../../GlobalTools/colors";
import uuid from "react-uuid";

function CoursePage(props) {
    const client = ZoomMtgEmbedded.createClient();

    var authEndpoint = 'http://localhost:4000';
    var sdkKey = 'r6GILtlSMOT4JZiP2bYw';
    var meetingNumber = '81290895599';
    var passWord = 'k47DGs';
    var role = 0;
    var userName = uuid();
    var userEmail = '';
    var registrantToken = '';
    var zakToken = '';

    function getSignature(e) {
        e.preventDefault();
        fetch(authEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                meetingNumber: meetingNumber,
                role: role,
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response.signature);
                startMeeting(response.signature);
            })
            .catch((error) => {
                console.error(error);
                swal("Oops!", "Something went wrong!", "error");
            });
    }
    async function startMeeting(signature) {
        let meetingSDKElement = document.getElementById("meetingSDKElement");

        await client
            .init({
                zoomAppRoot: meetingSDKElement,
                language: "en-US",
                customize: {
                    sharing: {
                        popper: {
                            disableDraggable: true,
                        },
                    },
                    video: {
                        isResizable: false,
                        popper: {
                            disableDraggable: true,
                        },
                    },
                },
            })
            .then(async () => {
                await client
                    .join({
                        signature: signature,
                        sdkKey: sdkKey,
                        meetingNumber: meetingNumber,
                        password: passWord,
                        userName: userName,
                        userEmail: userEmail,
                        tk: registrantToken,
                        zak: zakToken,
                    })
                    .then(() => {
                        console.log("joined succesfully");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <main
            className="mx-auto text-center h-fit"
            style={{
                height: "",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
            }}
        >
            <button onClick={getSignature} className="py-[10px] px-[40px] mt-[20px] text-white border-0 rounded-[10px] inline-block outline-0 cursor-pointer" style={{backgroundColor:colors.secondColor}}>Join Meeting</button>
            {/* For Component View */}
            <div
                id="meetingSDKElement"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    maxHeight: "100vh",
                    minHeight: "100vh",
                    width: "100%",
                }}
            >
                {/* Zoom Meeting SDK Component View Rendered Here */}
            </div>

        </main>
    );
}

export default CoursePage;