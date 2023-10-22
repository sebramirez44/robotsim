import { Unity, useUnityContext } from "react-unity-webgl";
import React, { Fragment, useState, useEffect } from "react"; 


export default function Unitysim() {
    const { unityProvider, sendMessage } = useUnityContext({
      loaderUrl: "/Build/public.loader.js",
      dataUrl: "/Build/public.data",
      frameworkUrl: "/Build/public.framework.js",
      codeUrl: "/Build/public.wasm",
    });
  
    function moveRover() {
      sendMessage("Rover", "movetarget2", "");
    }
    const [devicePixelRatio, setDevicePixelRatio] = useState(
        window.devicePixelRatio
    );

    useEffect(
        function () {
          // A function which will update the device pixel ratio of the Unity
          // Appli cation to match the device pixel ratio of the browser.
          const updateDevicePixelRatio = function () {
            setDevicePixelRatio(window.devicePixelRatio);
          };
          // A media matcher which watches for changes in the device pixel ratio.
          const mediaMatcher = window.matchMedia(
            `screen and (resolution: ${devicePixelRatio}dppx)`
          );
          // Adding an event listener to the media matcher which will update the
          // device pixel ratio of the Unity Application when the device pixel
          // ratio changes.
          mediaMatcher.addEventListener("change", updateDevicePixelRatio);
          return function () {
            // Remo`ving the event listener when the component unmounts.
            mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
          };
        },
        [devicePixelRatio]
    );

    return (
    <Fragment>
     <Unity 
        unityProvider={unityProvider} 
        style={{ width: 800, height: 600 }}
        devicePixelRatio={devicePixelRatio}
        />
      <button onClick={moveRover}>Move Rover</button>
      </Fragment>
    );
}