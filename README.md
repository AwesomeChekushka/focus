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
Encoding webcam MediaStream:
```ts
  const constraints = { video: true, audio: false }
  const userMedia = await navigator.mediaDevices.getUserMedia(constraints)

  const encodedVideoTrack = await Focus.encode({ getBandwidth }, userMedia.getVideoTracks()[0])
  const encodedUserMedia = new MediaStream([encodedVideoTrack, userMedia.getAudioTracks()])
```
## Focus API
##### Focus.config(newConfig?)
```ts
// interface
declare const config: (newConfig?: FocusConfig | undefined) => FocusConfig;

// get current configuration
Focus.config()

// set configuration
Focus.config({   
   canvas,
   video,
   exportRoi,
   controlRate,
})

// default configuration
{
   canvas: document.createElement('canvas'), // with canvas.style.width = '100%' and canvas.style.height = '100%'
   video: document.createElement('video'),
   exportRoi: getExportRoi(SegmentExportRoiLabel.Deeplab),
   controlRate: getControlRate(ControlRateLabel.NearestNeighbour),
}
```
##### Focus.decode(...)
Not implemented yet.  
Currently, returns the argument, provided to it
##### Focus.encode(params, videoTrack)
```ts
// interface
declare const encode: (params: EncodeParams, videoTrack: MediaStreamTrack) => Promise<MediaStreamTrack>;

// encode userMedia
const userMedia = await navigator.mediaDevices.getUserMedia(constraints)

const encodedVideoTrack = await Focus.encode({ getBandwidth }, userMedia.getVideoTracks()[0])
const encodedUserMedia = new MediaStream([encodedVideoTrack, ...userMedia.getAudioTracks()])
```
##### Focus.reset()
```ts
// interface
declare const reset: () => FocusConfig;

// reset current configuration to default
Focus.reset()
```
##### Focus.setControlRate(controlRate)

```ts
// interface
declare const setControlRate: (controlRate: ControlRateLabel | ControlRate) => Promise<FocusConfig>;

// set by label
Focus.setControlRate(ControlRateLabel.NearestNeighbour)

// set custom function
Focus.setControlRate((getBandwidth: GetBandwidth, input: ControlRateInput) => ControlRateOutput)
```

##### Focus.setExportRoi(exportRoi)

```ts
// interface
declare const setExportRoi: (exportRoi: ExportRoiLabel | ExportRoi) => Promise<FocusConfig>;

// set by label
Focus.setExportRoi(BboxExportRoiLabel.Coco)

// set custom function
Focus.setExportRoi((input: ExportRoiInput): Promise<ExportRoiOutput>)
```

## License
[MIT](LICENSE)