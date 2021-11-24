import React from 'react';

class Display extends React.Component {
    async startCapture(displayMediaOptions: DisplayMediaStreamConstraints) {
        let captureStream = null;

        try { 
            captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        } catch (err) {
            console.log('Error:', err);
        }

        return captureStream;
    }

    componentDidMount() {
        const canvas = this.refs.canvas;

        // @ts-ignore
        const stream = canvas?.captureStream(25);
        let recordedChunks: any[] = [];

        console.log(stream);

        const options = { mimeType: 'video/webm; codecs=vp9'};
        let mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.ondataavailable = handleDataAvaliable

        function handleDataAvaliable(event: any) {
            console.log('data-avaliable');
    
            if(event.data.size > 0) {
                recordedChunks.push(event.data);
                console.log(recordedChunks);
                download()
            }
            
        }

        function download() {
            const blob = new Blob(recordedChunks, { type: 'video/webm'});

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            document.body.appendChild(a);

            // @ts-ignore
            a.style = 'display: none';
            a.href = url;
            a.download = 'test.webm';
            a.click();

            window.URL.revokeObjectURL(url);
        }

        setTimeout(event => {
            console.log('stop');

            mediaRecorder.stop();
            
        }, 9000);
    }
    render() {

        return <div className="display">
            <canvas ref="canvas"></canvas>
        </div>
    }
}

export default Display;
