# Focus
A video codec, designed to be used in:
1. Video conferencing systems (like Skype, Google Meet, Zoom, etc.)
2. Streaming services (Twitch, YouTube)
# Table of contents
1. [Features](#features)
2. [Installation](#installation)
3. [Example](#example) 
4. [Focus API](#focus)
5. [License](#license)

## Features
1. Adapting to the Internet connection quality.
2. Easy WebRTC integration.
3. Content-awareness. In case of the low bandwidth, tries to allocate more bits to the most valuable 
   image parts.
## Installation
Using npm:  
```bash
$ npm install @chekushka/focus
```
Using yarn:
```bash
$ yarn add @chekushka/focus
```
## Example
### React app  
Consider the following video component:
```tsx
import React, { VideoHTMLAttributes, useEffect, useRef } from 'react';

type PropsType = VideoHTMLAttributes<HTMLVideoElement> & {
  srcObject?: MediaProvider | null;
};

export const Video = ({ srcObject, ...props }: PropsType) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.srcObject = srcObject ?? null;
  }, [srcObject]);

  return (
    <div className="Video">
      <video ref={videoRef} {...props} />
    </div>
  );
};
```
To forward webcam video stream, processed by the Focus, to the component, you can do the following:
```tsx
import React, { useEffect, useRef, useState } from 'react';
import { Video } from '../components/atoms';
import { decode, encode } from '@chekushka/focus';

export const Home = () => {
  const webcamStreamRef = useRef<MediaStream>();

  useEffect(() => {
    const constraints = { video: true, audio: false };

    const getWebcamStream = async () => {
      webcamStreamRef.current = await navigator.mediaDevices.getUserMedia(constraints);
    };

    getWebcamStream().then();
  });

  return (
    <div className="Home">
      <Video key="input-video" srcObject={webcamStreamRef.current} autoPlay />
      <Video key="encoded-video" srcObject={encode(webcamStreamRef.current)} autoPlay />
      <Video key="decoded-video" srcObject={decode(encode(webcamStreamRef.current))} autoPlay />
    </div>
  );
};
```
## Focus API
##### Focus.encode({stream, videoCodecConfiguration, connectionQuality})
##### Focus.decode({encodedStream})
## License