import * as React from 'react';
import Svg, { G, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={'100%'} height={260} viewBox="0 0 366 260" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G filter="url(#filter0_d_3397_42077)">
        <Circle cx={180} cy={51} r={51} fill="#5150A2" />
        <Circle cx={180} cy={51} r={51} fill="#4030A5" />
      </G>
      <Path
        d="M167.351 28h1.82v-2.938c0-.832-.169-2.275-.273-3.107h.052l.676 2.21 1.131 3.12h1.144l1.144-3.12.702-2.21h.052c-.104.832-.273 2.275-.273 3.107V28h1.833v-8.463h-2.21l-1.287 3.679c-.169.494-.299 1.001-.455 1.534h-.052c-.156-.533-.299-1.04-.455-1.534l-1.339-3.679h-2.21V28zm12.787.156c2.301 0 3.874-1.651 3.874-4.42s-1.573-4.355-3.874-4.355-3.874 1.573-3.874 4.355c0 2.769 1.573 4.42 3.874 4.42zm0-1.742c-1.105 0-1.807-1.04-1.807-2.678 0-1.651.702-2.613 1.807-2.613 1.118 0 1.807.962 1.807 2.613 0 1.638-.689 2.678-1.807 2.678zM184.929 28h1.924v-2.847c0-1.014-.156-2.184-.26-3.12h.052c.26.663.533 1.339.819 1.911L189.557 28h2.08v-8.463h-1.911v2.847c0 1.001.156 2.21.26 3.12h-.052c-.26-.663-.533-1.339-.832-1.911l-2.08-4.056h-2.093V28zm-51.335 19h5.486v-1.69h-3.458v-1.807h2.847v-1.69h-2.847v-1.586h3.328v-1.69h-5.356V47zm6.497 0h1.924v-2.847c0-1.014-.156-2.184-.26-3.12h.052c.26.663.533 1.339.819 1.911L144.719 47h2.08v-8.463h-1.911v2.847c0 1.001.156 2.21.26 3.12h-.052c-.26-.663-.533-1.339-.832-1.911l-2.08-4.056h-2.093V47zm9.425 0h2.431l2.587-8.463h-2.054l-1.014 3.861c-.234.923-.416 1.781-.663 2.704h-.052c-.247-.923-.429-1.781-.663-2.704l-.923-3.861h-2.132L149.516 47zm5.233 0h2.028v-8.463h-2.028V47zm3.324 0h2.028v-2.977h.988l1.56 2.977h2.262l-1.885-3.354c.871-.416 1.456-1.209 1.456-2.444 0-2.041-1.508-2.665-3.302-2.665h-3.107V47zm2.028-4.576v-2.288h.923c.962 0 1.482.26 1.482 1.066s-.52 1.222-1.482 1.222h-.923zm8.842 4.732c2.301 0 3.874-1.651 3.874-4.42s-1.573-4.355-3.874-4.355-3.874 1.573-3.874 4.355c0 2.769 1.573 4.42 3.874 4.42zm0-1.742c-1.105 0-1.807-1.04-1.807-2.678 0-1.651.702-2.613 1.807-2.613 1.118 0 1.807.962 1.807 2.613 0 1.638-.689 2.678-1.807 2.678zM173.734 47h1.924v-2.847c0-1.014-.156-2.184-.26-3.12h.052c.26.663.533 1.339.819 1.911L178.362 47h2.08v-8.463h-1.911v2.847c0 1.001.156 2.21.26 3.12h-.052c-.26-.663-.533-1.339-.832-1.911l-2.08-4.056h-2.093V47zm8.021 0h1.924v-2.847c0-1.014-.156-2.184-.26-3.12h.052c.26.663.533 1.339.819 1.911L186.383 47h2.08v-8.463h-1.911v2.847c0 1.001.156 2.21.26 3.12h-.052c-.26-.663-.533-1.339-.832-1.911l-2.08-4.056h-2.093V47zm8.021 0h5.486v-1.69h-3.458v-1.807h2.847v-1.69h-2.847v-1.586h3.328v-1.69h-5.356V47zm6.497 0h1.82v-2.938c0-.832-.169-2.275-.273-3.107h.052l.676 2.21 1.131 3.12h1.144l1.144-3.12.702-2.21h.052c-.104.832-.273 2.275-.273 3.107V47h1.833v-8.463h-2.21l-1.287 3.679c-.169.494-.299 1.001-.455 1.534h-.052c-.156-.533-.299-1.04-.455-1.534l-1.339-3.679h-2.21V47zm9.303 0h5.486v-1.69h-3.458v-1.807h2.847v-1.69h-2.847v-1.586h3.328v-1.69h-5.356V47zm6.498 0h1.924v-2.847c0-1.014-.156-2.184-.26-3.12h.052c.26.663.533 1.339.819 1.911L216.702 47h2.08v-8.463h-1.911v2.847c0 1.001.156 2.21.26 3.12h-.052c-.26-.663-.533-1.339-.832-1.911l-2.08-4.056h-2.093V47zm9.672 0h2.015v-6.773h2.301v-1.69h-6.617v1.69h2.301V47z"
        fill="#F9F9F9"
      />
      <G filter="url(#filter1_d_3397_42077)">
        <Circle cx={53} cy={201} r={51} fill="#5150A2" />
        <Circle cx={53} cy={201} r={51} fill="#EE7738" />
      </G>
      <Path
        d="M40.457 177h1.96v-3.164c0-.896-.182-2.45-.294-3.346h.056l.728 2.38 1.218 3.36h1.232l1.232-3.36.756-2.38h.056c-.112.896-.294 2.45-.294 3.346V177h1.974v-9.114h-2.38l-1.386 3.962c-.182.532-.322 1.078-.49 1.652h-.056c-.168-.574-.322-1.12-.49-1.652l-1.442-3.962h-2.38V177zm13.771.168c2.478 0 4.172-1.778 4.172-4.76 0-2.982-1.694-4.69-4.172-4.69-2.478 0-4.172 1.694-4.172 4.69 0 2.982 1.694 4.76 4.172 4.76zm0-1.876c-1.19 0-1.946-1.12-1.946-2.884 0-1.778.756-2.814 1.946-2.814 1.204 0 1.946 1.036 1.946 2.814 0 1.764-.742 2.884-1.946 2.884zm5.16 1.708h2.184v-9.114h-2.184V177zm3.145-2.786h3.458v-1.526h-3.458v1.526zM36.684 197h1.96v-3.164c0-.896-.182-2.45-.294-3.346h.056l.728 2.38 1.218 3.36h1.232l1.232-3.36.756-2.38h.056c-.112.896-.294 2.45-.294 3.346V197h1.974v-9.114h-2.38l-1.386 3.962c-.182.532-.322 1.078-.49 1.652h-.056c-.168-.574-.322-1.12-.49-1.652l-1.442-3.962h-2.38V197zm10.019 0h5.908v-1.82h-3.724v-1.946h3.066v-1.82h-3.066v-1.708h3.584v-1.82h-5.768V197zm1.54-9.576l1.442-1.148h.056l1.442 1.148.938-.56-1.232-1.554h-2.352l-1.232 1.554.938.56zM53.7 197h1.96v-3.164c0-.896-.182-2.45-.294-3.346h.056l.728 2.38 1.218 3.36H58.6l1.232-3.36.756-2.38h.056c-.112.896-.294 2.45-.294 3.346V197h1.974v-9.114h-2.38l-1.386 3.962c-.182.532-.322 1.078-.49 1.652h-.056c-.168-.574-.322-1.12-.49-1.652l-1.442-3.962H53.7V197zm10.019 0h5.908v-1.82h-3.724v-1.946h3.066v-1.82h-3.066v-1.708h3.584v-1.82h-5.768V197z"
        fill="#F9F9F9"
      />
      <G filter="url(#filter2_d_3397_42077)">
        <Circle cx={309} cy={198} r={51} fill="#5150A2" />
        <Circle cx={309} cy={198} r={51} fill="#20B55C" />
      </G>
      <Path
        d="M301.578 178h1.82v-2.938c0-.832-.169-2.275-.273-3.107h.052l.676 2.21 1.131 3.12h1.144l1.144-3.12.702-2.21h.052c-.104.832-.273 2.275-.273 3.107V178h1.833v-8.463h-2.21l-1.287 3.679c-.169.494-.299 1.001-.455 1.534h-.052c-.156-.533-.299-1.04-.455-1.534l-1.339-3.679h-2.21V178zm11.357-4.238c.221-.832.442-1.833.65-2.717h.052c.221.884.442 1.885.663 2.717l.182.728h-1.729l.182-.728zM309.802 178h2.067l.494-1.95h2.509l.494 1.95h2.132l-2.639-8.463h-2.418L309.802 178zm-40.716 19.156c1.066 0 2.002-.403 2.743-1.248l-1.053-1.196a2.151 2.151 0 01-1.625.702c-1.183 0-1.976-.975-1.976-2.665 0-1.638.897-2.626 2.015-2.626.598 0 1.04.195 1.456.585l1.066-1.222a3.543 3.543 0 00-2.574-1.105c-2.132 0-4.03 1.625-4.03 4.446 0 2.86 1.82 4.329 3.978 4.329zm6.33 0c2.301 0 3.874-1.651 3.874-4.42s-1.573-4.355-3.874-4.355-3.874 1.573-3.874 4.355c0 2.769 1.573 4.42 3.874 4.42zm0-1.742c-1.105 0-1.807-1.04-1.807-2.678 0-1.651.702-2.613 1.807-2.613 1.118 0 1.807.962 1.807 2.613 0 1.638-.689 2.678-1.807 2.678zm4.791 1.586h1.924v-2.847c0-1.014-.156-2.184-.26-3.12h.052c.26.663.533 1.339.819 1.911l2.093 4.056h2.08v-8.463h-1.911v2.847c0 1.001.156 2.21.26 3.12h-.052c-.26-.663-.533-1.339-.832-1.911l-2.08-4.056h-2.093V197zm10.647.156c2.041 0 3.224-1.235 3.224-2.652 0-1.183-.624-1.885-1.677-2.301l-1.053-.429c-.754-.299-1.287-.468-1.287-.962 0-.442.403-.689 1.027-.689.533 0 1.118.221 1.69.624l1.053-1.313c-.728-.676-1.729-1.053-2.743-1.053-1.794 0-3.068 1.144-3.068 2.561 0 1.222.819 1.963 1.716 2.314l1.079.468c.741.299 1.196.455 1.196.949 0 .455-.351.741-1.118.741a3.378 3.378 0 01-2.132-.806l-1.066 1.313c.884.845 2.015 1.235 3.159 1.235zm7.457 0c2.301 0 3.874-1.651 3.874-4.42s-1.573-4.355-3.874-4.355-3.874 1.573-3.874 4.355c0 2.769 1.573 4.42 3.874 4.42zm0-1.742c-1.105 0-1.807-1.04-1.807-2.678 0-1.651.702-2.613 1.807-2.613 1.118 0 1.807.962 1.807 2.613 0 1.638-.689 2.678-1.807 2.678zm4.791 1.586h1.82v-2.938c0-.832-.169-2.275-.273-3.107h.052l.676 2.21 1.131 3.12h1.144l1.144-3.12.702-2.21h.052c-.104.832-.273 2.275-.273 3.107V197h1.833v-8.463h-2.21l-1.287 3.679c-.169.494-.299 1.001-.455 1.534h-.052c-.156-.533-.299-1.04-.455-1.534l-1.339-3.679h-2.21V197zm9.303 0h1.82v-2.938c0-.832-.169-2.275-.273-3.107h.052l.676 2.21 1.131 3.12h1.144l1.144-3.12.702-2.21h.052c-.104.832-.273 2.275-.273 3.107V197h1.833v-8.463h-2.21l-1.287 3.679c-.169.494-.299 1.001-.455 1.534h-.052c-.156-.533-.299-1.04-.455-1.534l-1.339-3.679h-2.21V197zm11.357-4.238c.221-.832.442-1.833.65-2.717h.052c.221.884.442 1.885.663 2.717l.182.728h-1.729l.182-.728zM320.629 197h2.067l.494-1.95h2.509l.494 1.95h2.132l-2.639-8.463h-2.418L320.629 197zm8.593 0h2.015v-6.773h2.301v-1.69h-6.617v1.69h2.301V197zm4.96 0h2.028v-8.463h-2.028V197zm6.808.156c2.301 0 3.874-1.651 3.874-4.42s-1.573-4.355-3.874-4.355-3.874 1.573-3.874 4.355c0 2.769 1.573 4.42 3.874 4.42zm0-1.742c-1.105 0-1.807-1.04-1.807-2.678 0-1.651.702-2.613 1.807-2.613 1.118 0 1.807.962 1.807 2.613 0 1.638-.689 2.678-1.807 2.678zm4.791 1.586h1.924v-2.847c0-1.014-.156-2.184-.26-3.12h.052c.26.663.533 1.339.819 1.911l2.093 4.056h2.08v-8.463h-1.911v2.847c0 1.001.156 2.21.26 3.12h-.052c-.26-.663-.533-1.339-.832-1.911l-2.08-4.056h-2.093V197z"
        fill="#F9F9F9"
      />
      <Path
        d="M81.25 151c0 .414.336.75.75.75h6.75a.75.75 0 000-1.5h-6v-6a.75.75 0 00-1.5 0V151zm61.5-60a.75.75 0 00-.75-.75h-6.75a.75.75 0 000 1.5h6v6a.75.75 0 001.5 0V91zm-60.22 60.53l60-60-1.06-1.06-60 60 1.06 1.06z"
        fill="url(#paint0_linear_3397_42077)"
      />
      <Path
        d="M217 90.25a.75.75 0 00-.75.75v6.75a.75.75 0 001.5 0v-6h6a.75.75 0 000-1.5H217zm60 61.5a.75.75 0 00.75-.75v-6.75a.75.75 0 00-1.5 0v6h-6a.75.75 0 000 1.5H277zm-60.53-60.22l60 60 1.06-1.06-60-60-1.06 1.06z"
        fill="url(#paint1_linear_3397_42077)"
      />
      <Path
        d="M252.53 196.53a.749.749 0 000-1.06l-4.773-4.773a.749.749 0 10-1.06 1.06l4.242 4.243-4.242 4.243a.749.749 0 101.06 1.06l4.773-4.773zm-144.06-1.06a.749.749 0 000 1.06l4.773 4.773a.749.749 0 101.06-1.06L110.061 196l4.242-4.243a.749.749 0 10-1.06-1.06l-4.773 4.773zm143.53-.22H109v1.5h143v-1.5z"
        fill="url(#paint2_linear_3397_42077)"
      />
      <Path
        d="M13.636 212h3.88v-.71h-3.04v-2.38h2.48v-.71h-2.48v-2.05h2.94v-.71h-3.78V212zm1.44-6.97l1.86-1.15-.39-.56-1.79 1.3.32.41zm4.706 6.97h.97l1.72-4.86h-.82l-.91 2.75c-.15.48-.31.97-.45 1.44h-.04c-.15-.47-.3-.96-.45-1.44l-.91-2.75h-.86l1.75 4.86zm5.549.12c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm4.5 2.85h.83v-3.52c.48-.49.83-.74 1.32-.74.64 0 .92.38.92 1.29V212h.83v-3.08c0-1.24-.46-1.9-1.49-1.9-.67 0-1.17.36-1.63.82h-.03l-.07-.7h-.68V212zm7.43.12c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm4.5 2.85h.83v-3.52c.45-.5.85-.74 1.21-.74.62 0 .9.38.9 1.29V212h.83v-3.52c.45-.5.84-.74 1.22-.74.61 0 .9.38.9 1.29V212h.83v-3.08c0-1.24-.48-1.9-1.48-1.9-.59 0-1.1.38-1.6.92-.2-.57-.6-.92-1.35-.92-.58 0-1.08.36-1.51.82h-.03l-.07-.7h-.68V212zm10.251.12c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm4.501 2.85h.83v-3.52c.48-.49.83-.74 1.32-.74.64 0 .92.38.92 1.29V212h.83v-3.08c0-1.24-.46-1.9-1.49-1.9-.67 0-1.17.36-1.63.82h-.03l-.07-.7h-.68V212zm7 .12c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm3.03 0c1.15 0 1.78-.66 1.78-1.45 0-.88-.73-1.21-1.49-1.48-.61-.21-1.03-.39-1.03-.83 0-.36.27-.7.89-.7.43 0 .78.14 1.12.39l.38-.48c-.38-.32-.9-.55-1.51-.55-1.06 0-1.68.6-1.68 1.38 0 .8.7 1.15 1.43 1.41.55.2 1.09.41 1.09.91 0 .42-.31.75-.95.75-.6 0-1.04-.18-1.46-.53l-.38.48c.45.44 1.1.7 1.81.7zm6.581 0c.57 0 1.09-.32 1.47-.69h.03l.07.57h.68v-7.12h-.83v1.87l.04.83c-.43-.35-.8-.56-1.36-.56-1.11 0-2.11.98-2.11 2.56 0 1.62.79 2.54 2.01 2.54zm.18-.7c-.85 0-1.33-.69-1.33-1.85 0-1.11.62-1.85 1.39-1.85.4 0 .77.13 1.18.5v2.54c-.4.44-.79.66-1.24.66zm5.667.7c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm7.553 2.85h.97l1.72-4.86h-.82l-.91 2.75c-.15.48-.31.97-.45 1.44h-.04c-.15-.47-.3-.96-.45-1.44l-.91-2.75h-.86l1.75 4.86zm3.628 0h.83v-4.86h-.83V212zm.42-5.86c.32 0 .55-.21.55-.54 0-.32-.23-.54-.55-.54-.32 0-.55.22-.55.54 0 .33.23.54.55.54zm4.01 5.98c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm4.352 4.55c.82-.33 1.32-1.01 1.32-1.87 0-.61-.26-.98-.7-.98-.33 0-.61.22-.61.58 0 .38.27.58.59.58.04 0 .07 0 .11-.01 0 .53-.34.97-.91 1.22l.2.48zm-58.23 14.54c1.51 0 2.46-.78 2.46-1.69 0-.8-.57-1.16-1.7-1.16h-.94c-.65 0-.85-.22-.85-.52 0-.27.13-.43.31-.58.22.11.48.17.72.17.99 0 1.78-.65 1.78-1.69 0-.41-.16-.77-.39-.99h.99v-.64h-1.69a1.94 1.94 0 00-.69-.12c-.99 0-1.83.67-1.83 1.73 0 .58.31 1.05.63 1.31v.04c-.25.17-.53.49-.53.9 0 .38.19.64.43.79v.04c-.44.3-.71.69-.71 1.1 0 .84.82 1.31 2.01 1.31zm0-4.34c-.56 0-1.03-.44-1.03-1.15s.46-1.13 1.03-1.13c.57 0 1.03.43 1.03 1.13 0 .71-.47 1.15-1.03 1.15zm.12 3.76c-.88 0-1.41-.32-1.41-.84 0-.28.15-.57.5-.82.21.06.44.08.63.08h.83c.64 0 .98.15.98.6 0 .5-.61.98-1.53.98zm5.112-1.54c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm.93-2.88l1.79-1.53-.51-.55-1.7 1.66.42.42zm3.571 5.73h.83v-3.52c.48-.49.83-.74 1.32-.74.64 0 .92.38.92 1.29V226h.83v-3.08c0-1.24-.46-1.9-1.49-1.9-.67 0-1.17.36-1.63.82h-.03l-.07-.7h-.68V226zm7.429.12c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm.93-2.88l1.79-1.53-.51-.55-1.7 1.66.42.42zm5.003 5.85c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm1.859-.12h.83v-4.86h-.83V226zm.42-5.86c.32 0 .55-.21.55-.54 0-.32-.23-.54-.55-.54-.32 0-.55.22-.55.54 0 .33.23.54.55.54zm5.13 7.91h.83v-6.91h-.66l-.08.46h-.03c-.43-.38-.82-.58-1.38-.58-1.11 0-2.11.98-2.11 2.56 0 1.62.79 2.54 2.01 2.54.56 0 1.07-.3 1.46-.68l-.04.88v1.73zm-1.24-2.63c-.85 0-1.33-.69-1.33-1.85 0-1.11.62-1.85 1.39-1.85.4 0 .77.13 1.18.5v2.54c-.4.44-.79.66-1.24.66zm5.127.7c.67 0 1.15-.35 1.6-.88h.03l.07.76h.68v-4.86h-.83v3.44c-.45.57-.8.82-1.29.82-.64 0-.92-.39-.92-1.29v-2.97h-.83v3.08c0 1.24.46 1.9 1.49 1.9zm5.98 0c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm4.35 4.55c.82-.33 1.32-1.01 1.32-1.87 0-.61-.26-.98-.7-.98-.33 0-.61.22-.61.58 0 .38.27.58.59.58.04 0 .07 0 .11-.01 0 .53-.34.97-.91 1.22l.2.48zm-36.079 12.42c.58 0 1.13-.22 1.57-.62l-.36-.53c-.29.26-.69.46-1.14.46-.89 0-1.49-.74-1.49-1.85 0-1.12.64-1.87 1.52-1.87.39 0 .7.15.97.4l.41-.52c-.34-.32-.78-.57-1.42-.57-1.25 0-2.34.93-2.34 2.56 0 1.61.99 2.54 2.28 2.54zm3.663 0c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm3.69.56h.83v-3.12c.33-.82.82-1.11 1.23-1.11.19 0 .3.02.44.06l.18-.71c-.15-.07-.3-.1-.52-.1-.54 0-1.04.39-1.38 1h-.03l-.07-.88h-.68V240zm4.352.12c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm5.609.68c.58 0 1.13-.22 1.57-.62l-.36-.53c-.29.26-.69.46-1.14.46-.89 0-1.49-.74-1.49-1.85 0-1.12.64-1.87 1.52-1.87.39 0 .7.15.97.4l.41-.52c-.34-.32-.78-.57-1.42-.57-1.25 0-2.34.93-2.34 2.56 0 1.61.99 2.54 2.28 2.54zm4.073 0c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm3.682 0c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm1.79-2.88l.42-.42-1.7-1.66-.51.55 1.79 1.53zm2.71 5.73h.83v-3.12c.33-.82.82-1.11 1.23-1.11.19 0 .3.02.44.06l.18-.71c-.15-.07-.3-.1-.52-.1-.54 0-1.04.39-1.38 1h-.03l-.07-.88h-.68V240zm5.34.12c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zM275.385 212h3.88v-.71h-3.04v-2.38h2.48v-.71h-2.48v-2.05h2.94v-.71h-3.78V212zm8.184 0h.83v-4.19h1.03v-.67h-1.03v-.76c0-.63.23-.95.68-.95.18 0 .37.04.55.13l.18-.64c-.22-.09-.51-.16-.81-.16-.98 0-1.43.63-1.43 1.62v.76h-2.02v-.62c0-.64.27-.99.75-.99.25 0 .44.04.65.14l.18-.63c-.25-.11-.57-.18-.9-.18-1.01 0-1.51.63-1.51 1.64v.64l-.66.05v.62h.66V212h.83v-4.19h2.02V212zm4.653.12c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm5.934 2.97c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm3.031 0c1.15 0 1.78-.66 1.78-1.45 0-.88-.73-1.21-1.49-1.48-.61-.21-1.03-.39-1.03-.83 0-.36.27-.7.89-.7.43 0 .78.14 1.12.39l.38-.48c-.38-.32-.9-.55-1.51-.55-1.06 0-1.68.6-1.68 1.38 0 .8.7 1.15 1.43 1.41.55.2 1.09.41 1.09.91 0 .42-.31.75-.95.75-.6 0-1.04-.18-1.46-.53l-.38.48c.45.44 1.1.7 1.81.7zm6.581 0c.57 0 1.09-.32 1.47-.69h.03l.07.57h.68v-7.12h-.83v1.87l.04.83c-.43-.35-.8-.56-1.36-.56-1.11 0-2.11.98-2.11 2.56 0 1.62.79 2.54 2.01 2.54zm.18-.7c-.85 0-1.33-.69-1.33-1.85 0-1.11.62-1.85 1.39-1.85.4 0 .77.13 1.18.5v2.54c-.4.44-.79.66-1.24.66zm5.667.7c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm7.373 2.97c.21 0 .36-.03.48-.09l-.11-.62c-.08.02-.12.02-.17.02-.13 0-.24-.09-.24-.35v-6.2h-.83v6.14c0 .7.25 1.1.87 1.1zm1.719-4.42c.7-.4 1.07-.98 1.07-1.78 0-.58-.23-.91-.63-.91-.31 0-.53.21-.53.56 0 .33.25.51.53.51.03 0 .06 0 .09-.01 0 .56-.26.91-.76 1.24l.23.39zm2.925 4.42c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm4.559.68c.21 0 .36-.03.48-.09l-.11-.62c-.08.02-.12.02-.17.02-.13 0-.24-.09-.24-.35v-6.2h-.83v6.14c0 .7.25 1.1.87 1.1zm3.599 0c.58 0 1.13-.22 1.57-.62l-.36-.53c-.29.26-.69.46-1.14.46-.89 0-1.49-.74-1.49-1.85 0-1.12.64-1.87 1.52-1.87.39 0 .7.15.97.4l.41-.52c-.34-.32-.78-.57-1.42-.57-1.25 0-2.34.93-2.34 2.56 0 1.61.99 2.54 2.28 2.54zm4.316 0c1.19 0 2.26-.93 2.26-2.54 0-1.63-1.07-2.56-2.26-2.56-1.19 0-2.25.93-2.25 2.56 0 1.61 1.06 2.54 2.25 2.54zm0-.69c-.83 0-1.39-.74-1.39-1.85 0-1.12.56-1.87 1.39-1.87.84 0 1.4.75 1.4 1.87 0 1.11-.56 1.85-1.4 1.85zm5.42.69c1.19 0 2.26-.93 2.26-2.54 0-1.63-1.07-2.56-2.26-2.56-1.19 0-2.25.93-2.25 2.56 0 1.61 1.06 2.54 2.25 2.54zm0-.69c-.83 0-1.39-.74-1.39-1.85 0-1.12.56-1.87 1.39-1.87.84 0 1.4.75 1.4 1.87 0 1.11-.56 1.85-1.4 1.85zm4.4.69c.21 0 .36-.03.48-.09l-.11-.62c-.08.02-.12.02-.17.02-.13 0-.24-.09-.24-.35v-6.2h-.83v6.14c0 .7.25 1.1.87 1.1zm1.529 1.58c.82-.33 1.32-1.01 1.32-1.87 0-.61-.26-.98-.7-.98-.33 0-.61.22-.61.58 0 .38.27.58.59.58.04 0 .07 0 .11-.01 0 .53-.34.97-.91 1.22l.2.48zm-60.224 12.42c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm5.109.68c.67 0 1.15-.35 1.6-.88h.03l.07.76h.68v-4.86h-.83v3.44c-.45.57-.8.82-1.29.82-.64 0-.92-.39-.92-1.29v-2.97h-.83v3.08c0 1.24.46 1.9 1.49 1.9zm5.549 0c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm1.859-.12h.83v-3.12c.33-.82.82-1.11 1.23-1.11.19 0 .3.02.44.06l.18-.71c-.15-.07-.3-.1-.52-.1-.54 0-1.04.39-1.38 1h-.03l-.07-.88h-.68V226zm5.339.12c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm6.502 4.9h.83v-1.64l-.02-.85c.44.35.9.56 1.34.56 1.11 0 2.11-.97 2.11-2.62 0-1.51-.68-2.48-1.93-2.48-.56 0-1.11.31-1.55.68h-.03l-.07-.56h-.68v6.91zm2.01-2.63c-.32 0-.74-.13-1.18-.5v-2.54c.47-.44.88-.66 1.29-.66.91 0 1.28.71 1.28 1.78 0 1.2-.59 1.92-1.39 1.92zm3.537.58h.83v-3.12c.33-.82.82-1.11 1.23-1.11.19 0 .3.02.44.06l.18-.71c-.15-.07-.3-.1-.52-.1-.54 0-1.04.39-1.38 1h-.03l-.07-.88h-.68V226zm5.269.12c1.19 0 2.26-.93 2.26-2.54 0-1.63-1.07-2.56-2.26-2.56-1.19 0-2.25.93-2.25 2.56 0 1.61 1.06 2.54 2.25 2.54zm0-.69c-.83 0-1.39-.74-1.39-1.85 0-1.12.56-1.87 1.39-1.87.84 0 1.4.75 1.4 1.87 0 1.11-.56 1.85-1.4 1.85zm5.19.69c.57 0 1.09-.32 1.47-.69h.03l.07.57h.68v-7.12h-.83v1.87l.04.83c-.43-.35-.8-.56-1.36-.56-1.11 0-2.11.98-2.11 2.56 0 1.62.79 2.54 2.01 2.54zm.18-.7c-.85 0-1.33-.69-1.33-1.85 0-1.11.62-1.85 1.39-1.85.4 0 .77.13 1.18.5v2.54c-.4.44-.79.66-1.24.66zm5.127.7c.67 0 1.15-.35 1.6-.88h.03l.07.76h.68v-4.86h-.83v3.44c-.45.57-.8.82-1.29.82-.64 0-.92-.39-.92-1.29v-2.97h-.83v3.08c0 1.24.46 1.9 1.49 1.9zm4.02-.12h.83v-4.86h-.83V226zm.42-5.86c.32 0 .55-.21.55-.54 0-.32-.23-.54-.55-.54-.32 0-.55.22-.55.54 0 .33.23.54.55.54zm3.58 5.98c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm1.767 1.58c.82-.33 1.32-1.01 1.32-1.87 0-.61-.26-.98-.7-.98-.33 0-.61.22-.61.58 0 .38.27.58.59.58.04 0 .07 0 .11-.01 0 .53-.34.97-.91 1.22l.2.48zm-39.2 14.35h.83v-1.64l-.02-.85c.44.35.9.56 1.34.56 1.11 0 2.11-.97 2.11-2.62 0-1.51-.68-2.48-1.93-2.48-.56 0-1.11.31-1.55.68h-.03l-.07-.56h-.68v6.91zm2.01-2.63c-.32 0-.74-.13-1.18-.5v-2.54c.47-.44.88-.66 1.29-.66.91 0 1.28.71 1.28 1.78 0 1.2-.59 1.92-1.39 1.92zm4.407.7c.21 0 .36-.03.48-.09l-.11-.62c-.08.02-.12.02-.17.02-.13 0-.24-.09-.24-.35v-6.2h-.83v6.14c0 .7.25 1.1.87 1.1zm2.799 0c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm3.689.56h.83v-4.86h-.83V240zm.42-5.86c.32 0 .55-.21.55-.54 0-.32-.23-.54-.55-.54-.32 0-.55.22-.55.54 0 .33.23.54.55.54zm3.32 5.98c1.15 0 1.78-.66 1.78-1.45 0-.88-.73-1.21-1.49-1.48-.61-.21-1.03-.39-1.03-.83 0-.36.27-.7.89-.7.43 0 .78.14 1.12.39l.38-.48c-.38-.32-.9-.55-1.51-.55-1.06 0-1.68.6-1.68 1.38 0 .8.7 1.15 1.43 1.41.55.2 1.09.41 1.09.91 0 .42-.31.75-.95.75-.6 0-1.04-.18-1.46-.53l-.38.48c.45.44 1.1.7 1.81.7zm2.92-.12h.83v-4.86h-.83V240zm.42-5.86c.32 0 .55-.21.55-.54 0-.32-.23-.54-.55-.54-.32 0-.55.22-.55.54 0 .33.23.54.55.54zm2.051 5.86h.83v-3.12c.33-.82.82-1.11 1.23-1.11.19 0 .3.02.44.06l.18-.71c-.15-.07-.3-.1-.52-.1-.54 0-1.04.39-1.38 1h-.03l-.07-.88h-.68V240zM157.602 63h.84v-3.08h3.04V63h.84v-6.56h-.84v2.74h-3.04v-2.74h-.84V63zm7.564.12c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm5.839.68c1.11 0 2.11-.97 2.11-2.63 0-1.5-.68-2.47-1.93-2.47-.54 0-1.08.29-1.53.67l.03-.87v-1.94h-.83V63h.66l.08-.5h.03c.43.39.93.62 1.38.62zm-.14-.7c-.32 0-.76-.13-1.18-.5v-2.54c.46-.44.88-.66 1.29-.66.91 0 1.28.71 1.28 1.78 0 1.2-.59 1.92-1.39 1.92zm3.527.58h.83v-4.86h-.83V63zm.42-5.86c.32 0 .55-.21.55-.54 0-.32-.23-.54-.55-.54-.32 0-.55.22-.55.54 0 .33.23.54.55.54zm3.58 5.98c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm3.279 0c.67 0 1.15-.35 1.6-.88h.03l.07.76h.68v-4.86h-.83v3.44c-.45.57-.8.82-1.29.82-.64 0-.92-.39-.92-1.29v-2.97h-.83v3.08c0 1.24.46 1.9 1.49 1.9zm5.68 0c.57 0 1.09-.32 1.47-.69h.03l.07.57h.68v-7.12h-.83v1.87l.04.83c-.43-.35-.8-.56-1.36-.56-1.11 0-2.11.98-2.11 2.56 0 1.62.79 2.54 2.01 2.54zm.18-.7c-.85 0-1.33-.69-1.33-1.85 0-1.11.62-1.85 1.39-1.85.4 0 .77.13 1.18.5v2.54c-.4.44-.79.66-1.24.66zm5.666.7c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm5.771 2.97c1.15 0 1.78-.66 1.78-1.45 0-.88-.73-1.21-1.49-1.48-.61-.21-1.03-.39-1.03-.83 0-.36.27-.7.89-.7.43 0 .78.14 1.12.39l.38-.48c-.38-.32-.9-.55-1.51-.55-1.06 0-1.68.6-1.68 1.38 0 .8.7 1.15 1.43 1.41.55.2 1.09.41 1.09.91 0 .42-.31.75-.95.75-.6 0-1.04-.18-1.46-.53l-.38.48c.45.44 1.1.7 1.81.7zm2.77 1.58c.82-.33 1.32-1.01 1.32-1.87 0-.61-.26-.98-.7-.98-.33 0-.61.22-.61.58 0 .38.27.58.59.58.04 0 .07 0 .11-.01 0 .53-.34.97-.91 1.22l.2.48zm-40.781 12.42c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm4.501 2.85h.83v-3.52c.48-.49.83-.74 1.32-.74.64 0 .92.38.92 1.29V77h.83v-3.08c0-1.24-.46-1.9-1.49-1.9-.67 0-1.17.36-1.63.82h-.03l-.07-.7h-.68V77zm6.999.12c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm3.612 0c1.19 0 2.26-.93 2.26-2.54 0-1.63-1.07-2.56-2.26-2.56-1.19 0-2.25.93-2.25 2.56 0 1.61 1.06 2.54 2.25 2.54zm0-.69c-.83 0-1.39-.74-1.39-1.85 0-1.12.56-1.87 1.39-1.87.84 0 1.4.75 1.4 1.87 0 1.11-.56 1.85-1.4 1.85zm4.95.69c.67 0 1.15-.35 1.6-.88h.03l.07.76h.68v-4.86h-.83v3.44c-.45.57-.8.82-1.29.82-.64 0-.92-.39-.92-1.29v-2.97h-.83v3.08c0 1.24.46 1.9 1.49 1.9zm4.019-.12h.83v-3.12c.33-.82.82-1.11 1.23-1.11.19 0 .3.02.44.06l.18-.71c-.15-.07-.3-.1-.52-.1-.54 0-1.04.39-1.38 1h-.03l-.07-.88h-.68V77zm4.353.12c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm5.329 2.8c1.51 0 2.46-.78 2.46-1.69 0-.8-.57-1.16-1.7-1.16H192c-.65 0-.85-.22-.85-.52 0-.27.13-.43.31-.58.22.11.48.17.72.17.99 0 1.78-.65 1.78-1.69 0-.41-.16-.77-.39-.99h.99v-.64h-1.69a1.94 1.94 0 00-.69-.12c-.99 0-1.83.67-1.83 1.73 0 .58.31 1.05.63 1.31v.04c-.25.17-.53.49-.53.9 0 .38.19.64.43.79v.04c-.44.3-.71.69-.71 1.1 0 .84.82 1.31 2.01 1.31zm0-4.34c-.56 0-1.03-.44-1.03-1.15s.46-1.13 1.03-1.13c.57 0 1.03.43 1.03 1.13 0 .71-.47 1.15-1.03 1.15zm.12 3.76c-.88 0-1.41-.32-1.41-.84 0-.28.15-.57.5-.82.21.06.44.08.63.08h.83c.64 0 .98.15.98.6 0 .5-.61.98-1.53.98zm5.112-1.54c.67 0 1.19-.2 1.61-.5l-.29-.53c-.34.23-.75.36-1.22.36-.92 0-1.53-.66-1.6-1.66h3.27c.03-.16.04-.31.04-.49 0-1.4-.71-2.28-1.95-2.28-1.11 0-2.18.97-2.18 2.55 0 1.61 1.02 2.55 2.32 2.55zm-1.5-2.97c.1-.93.7-1.47 1.38-1.47.74 0 1.19.51 1.19 1.47h-2.57zm4.351 4.55c.82-.33 1.32-1.01 1.32-1.87 0-.61-.26-.98-.7-.98-.33 0-.61.22-.61.58 0 .38.27.58.59.58.04 0 .07 0 .11-.01 0 .53-.34.97-.91 1.22l.2.48zm-31.514 12.42c.33 0 .66-.09.92-.21l-.17-.59c-.2.09-.38.12-.56.12-.55 0-.75-.34-.75-.93v-2.7h1.32v-.67h-1.32v-1.56h-.69l-.1 1.56-.76.05v.62h.72v2.68c0 .97.35 1.63 1.39 1.63zm1.859-.12h.83v-3.12c.33-.82.82-1.11 1.23-1.11.19 0 .3.02.44.06l.18-.71c-.15-.07-.3-.1-.52-.1-.54 0-1.04.39-1.38 1h-.03l-.07-.88h-.68V91zm4.353.12c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm4.739.56h.97l1.72-4.86h-.82l-.91 2.75c-.15.48-.31.97-.45 1.44h-.04c-.15-.47-.3-.96-.45-1.44l-.91-2.75h-.86l1.75 4.86zm4.552.12c.61 0 1.14-.31 1.6-.7h.03l.08.58h.68v-2.99c0-1.2-.51-1.99-1.69-1.99-.78 0-1.46.33-1.91.63l.32.56c.38-.25.89-.5 1.45-.5.79 0 .99.59 1 1.2-2.08.23-2.98.75-2.98 1.83 0 .88.61 1.38 1.42 1.38zm.23-.68c-.47 0-.84-.21-.84-.75 0-.63.53-1 2.17-1.19v1.32c-.47.41-.86.62-1.33.62zm3.689.56h.83v-4.86h-.83V91zm.42-5.86c.32 0 .55-.21.55-.54 0-.32-.23-.54-.55-.54-.32 0-.55.22-.55.54 0 .33.23.54.55.54zm2.921 5.98c.21 0 .36-.03.48-.09l-.11-.62c-.08.02-.12.02-.17.02-.13 0-.24-.09-.24-.35v-6.2h-.83v6.14c0 .7.25 1.1.87 1.1z"
        fill="#fff"
      />
      <Path
        d="M154.529 188v-6.54h1.31l1.16 3.2c.074.207.144.42.21.64.074.213.144.427.21.64h.04c.074-.213.144-.427.21-.64.067-.22.134-.433.2-.64l1.13-3.2h1.32V188h-1.07v-2.99c0-.207.007-.43.02-.67l.06-.74c.027-.247.05-.47.07-.67h-.04l-.53 1.52-1.07 2.94h-.69l-1.08-2.94-.52-1.52h-.04c.02.2.04.423.06.67.027.247.047.493.06.74.02.24.03.463.03.67V188h-1.05zm8.541.12c-.426 0-.776-.133-1.05-.4-.266-.267-.4-.613-.4-1.04 0-.527.23-.933.69-1.22.46-.293 1.194-.493 2.2-.6a1.167 1.167 0 00-.21-.67c-.126-.193-.356-.29-.69-.29-.24 0-.476.047-.71.14-.226.093-.45.207-.67.34l-.42-.77c.274-.173.58-.323.92-.45.347-.127.714-.19 1.1-.19.614 0 1.07.183 1.37.55.307.36.46.883.46 1.57V188h-.95l-.08-.54h-.04c-.22.187-.456.343-.71.47-.246.127-.516.19-.81.19zm.37-.9c.2 0 .38-.047.54-.14.167-.1.344-.233.53-.4v-1.1c-.666.087-1.13.217-1.39.39-.26.167-.39.373-.39.62 0 .22.067.38.2.48.134.1.304.15.51.15zm5.599.78v-4.91h.95l.08.67h.04c.206-.22.43-.407.67-.56a1.54 1.54 0 01.83-.23c.36 0 .646.08.86.24.22.153.386.367.5.64.233-.253.476-.463.73-.63.26-.167.543-.25.85-.25.52 0 .903.17 1.15.51.246.34.37.82.37 1.44V188h-1.16v-2.93c0-.407-.064-.693-.19-.86-.12-.167-.307-.25-.56-.25-.307 0-.65.203-1.03.61V188h-1.15v-2.93c0-.407-.064-.693-.19-.86-.12-.167-.31-.25-.57-.25-.307 0-.65.203-1.03.61V188h-1.15zm10.437.12c-.406 0-.786-.1-1.14-.3-.353-.207-.64-.5-.86-.88-.22-.387-.33-.85-.33-1.39 0-.547.11-1.01.33-1.39.22-.387.507-.68.86-.88a2.22 2.22 0 011.14-.31c.414 0 .797.103 1.15.31.354.2.64.493.86.88.22.38.33.843.33 1.39 0 .54-.11 1.003-.33 1.39-.22.38-.506.673-.86.88-.353.2-.736.3-1.15.3zm0-.94c.36 0 .644-.15.85-.45.207-.3.31-.693.31-1.18 0-.493-.103-.89-.31-1.19a.978.978 0 00-.85-.45c-.36 0-.643.15-.85.45-.2.3-.3.697-.3 1.19 0 .487.1.88.3 1.18.207.3.49.45.85.45zm4.984.94c-.567 0-.97-.163-1.21-.49-.233-.333-.35-.763-.35-1.29V184h-.7v-.86l.76-.05.14-1.34h.96v1.34h1.25v.91h-1.25v2.34c0 .573.23.86.69.86.087 0 .177-.01.27-.03.093-.027.173-.053.24-.08l.2.85a3.18 3.18 0 01-.46.12c-.167.04-.347.06-.54.06zm1.883-.12v-4.91h1.15V188h-1.15zm.58-5.77a.699.699 0 01-.5-.18.633.633 0 01-.19-.48.62.62 0 01.19-.47.699.699 0 01.5-.18c.207 0 .374.06.5.18.127.12.19.277.19.47 0 .2-.063.36-.19.48a.695.695 0 01-.5.18zm3.137 5.77l-1.71-4.91h1.17l.78 2.55c.067.24.134.483.2.73.074.247.144.497.21.75h.04c.074-.253.144-.503.21-.75.074-.247.144-.49.21-.73l.78-2.55h1.11l-1.67 4.91h-1.33zm4.846.12c-.426 0-.776-.133-1.05-.4-.266-.267-.4-.613-.4-1.04 0-.527.23-.933.69-1.22.46-.293 1.194-.493 2.2-.6a1.167 1.167 0 00-.21-.67c-.126-.193-.356-.29-.69-.29-.24 0-.476.047-.71.14-.226.093-.45.207-.67.34l-.42-.77c.274-.173.58-.323.92-.45.347-.127.714-.19 1.1-.19.614 0 1.07.183 1.37.55.307.36.46.883.46 1.57V188h-.95l-.08-.54h-.04c-.22.187-.456.343-.71.47-.246.127-.516.19-.81.19zm.37-.9c.2 0 .38-.047.54-.14.167-.1.344-.233.53-.4v-1.1c-.666.087-1.13.217-1.39.39-.26.167-.39.373-.39.62 0 .22.067.38.2.48.134.1.304.15.51.15zm5.17.9c-.566 0-.97-.163-1.21-.49-.233-.333-.35-.763-.35-1.29V184h-.7v-.86l.76-.05.14-1.34h.96v1.34h1.25v.91h-1.25v2.34c0 .573.23.86.69.86.087 0 .177-.01.27-.03.094-.027.174-.053.24-.08l.2.85a3.147 3.147 0 01-.46.12c-.166.04-.346.06-.54.06zm1.884-.12v-4.91h1.15V188h-1.15zm.58-5.77a.695.695 0 01-.5-.18.629.629 0 01-.19-.48c0-.193.063-.35.19-.47a.695.695 0 01.5-.18c.206 0 .373.06.5.18a.62.62 0 01.19.47c0 .2-.064.36-.19.48a.699.699 0 01-.5.18zm4.047 5.89c-.407 0-.787-.1-1.14-.3-.354-.207-.64-.5-.86-.88-.22-.387-.33-.85-.33-1.39 0-.547.11-1.01.33-1.39.22-.387.506-.68.86-.88.353-.207.733-.31 1.14-.31.413 0 .796.103 1.15.31.353.2.64.493.86.88.22.38.33.843.33 1.39 0 .54-.11 1.003-.33 1.39-.22.38-.507.673-.86.88-.354.2-.737.3-1.15.3zm0-.94c.36 0 .643-.15.85-.45.206-.3.31-.693.31-1.18 0-.493-.104-.89-.31-1.19a.979.979 0 00-.85-.45c-.36 0-.644.15-.85.45-.2.3-.3.697-.3 1.19 0 .487.1.88.3 1.18.206.3.49.45.85.45zm3.478.82v-4.91h.95l.08.66h.04c.22-.213.46-.397.72-.55.26-.153.557-.23.89-.23.527 0 .91.17 1.15.51.24.34.36.82.36 1.44V188h-1.15v-2.93c0-.407-.06-.693-.18-.86-.12-.167-.317-.25-.59-.25-.213 0-.403.053-.57.16-.16.1-.343.25-.55.45V188h-1.15zM213.505 105h-2.329v4.667c0 .173.042.332.109.48l-5.026 4.7c-2.698-2.484-6.284-4.014-10.226-4.014-8.35 0-15.143 6.804-15.143 15.167 0 8.362 6.793 15.166 15.143 15.166 8.349 0 15.143-6.804 15.143-15.166 0-3.575-1.249-6.859-3.322-9.455l6.111-5.712H217V108.5h-3.495V105zm-4.659 21c0 7.076-5.748 12.833-12.813 12.833s-12.814-5.757-12.814-12.833c0-7.076 5.749-12.833 12.814-12.833 3.272 0 6.251 1.244 8.519 3.273l-1.706 1.595a10.423 10.423 0 00-6.813-2.535c-5.78 0-10.484 4.711-10.484 10.5s4.704 10.5 10.484 10.5 10.483-4.711 10.483-10.5c0-2.345-.781-4.507-2.083-6.256l1.711-1.599a12.774 12.774 0 012.702 7.855zm-4.659 0c0 4.503-3.658 8.166-8.154 8.166s-8.154-3.663-8.154-8.166 3.658-8.167 8.154-8.167c1.928 0 3.702.678 5.1 1.804l-1.734 1.619a5.779 5.779 0 00-3.366-1.09c-3.212 0-5.825 2.617-5.825 5.834 0 3.216 2.613 5.833 5.825 5.833 3.211 0 5.824-2.617 5.824-5.833 0-1.114-.33-2.147-.874-3.033l1.738-1.625a8.116 8.116 0 011.466 4.658zm-4.66 0c0 1.929-1.568 3.5-3.494 3.5a3.502 3.502 0 01-3.495-3.5c0-1.93 1.568-3.5 3.495-3.5.58 0 1.119.156 1.601.407l-2.396 2.24 1.589 1.706 2.405-2.25c.188.429.295.9.295 1.397zM148.418 159.508a4.088 4.088 0 00-.606 5.541 4.081 4.081 0 003.253 1.631c.967 0 1.914-.346 2.652-.981l5.8-4.978c.117-.102.214-.225.284-.364l4.241-8.497 2.344.587-1.648 3.3a3.822 3.822 0 00-.209 2.938 3.84 3.84 0 006.98.692l3.402-5.964c.15-.261.193-.569.119-.862l-1.165-4.666a1.165 1.165 0 00-.762-.824l-5.883-1.964 1.537-4.618 3.458 1.731c.385.193.847.156 1.198-.094l5.835-4.175a3.578 3.578 0 001.487-2.62 3.581 3.581 0 00-1.036-2.83 3.587 3.587 0 00-4.677-.332l-2.263 1.7-4.142-3.32a6.991 6.991 0 002.954-5.704c0-3.86-3.135-7-6.989-7-3.855 0-6.989 3.14-6.989 7 0 1.998.845 3.8 2.191 5.076l-8.425 3.164a1.162 1.162 0 00-.632.57l-3.353 6.715a3.505 3.505 0 00-.049 3.042 3.499 3.499 0 002.337 1.94 3.492 3.492 0 003.989-1.838l2.414-4.836 1.987-.497-2.717 7.253a1.18 1.18 0 00-.014.778l1.03 3.094-2.063 5.171-5.87 5.041zm16.163-39.339c2.57 0 4.66 2.093 4.66 4.666a4.668 4.668 0 01-4.66 4.667 4.668 4.668 0 010-9.333zm-8.236 35.432l2.329-5.833c.102-.257.111-.54.024-.803l-1.035-3.107 3.35-8.946a1.17 1.17 0 00-.221-1.187 1.162 1.162 0 00-1.152-.355l-4.659 1.166a1.17 1.17 0 00-.76.611l-2.653 5.315a1.173 1.173 0 01-1.341.617 1.174 1.174 0 01-.785-.652c-.15-.328-.145-.7.016-1.022l3.147-6.306 8.692-3.265h5.205l5.505 4.411c.413.333 1 .341 1.427.023l2.984-2.242a1.254 1.254 0 011.632.116c.264.265.393.615.361.988-.03.373-.214.697-.519.915l-5.265 3.767-4.032-2.019a1.167 1.167 0 00-1.626.674l-2.329 7a1.167 1.167 0 00.736 1.476l6.382 2.13.897 3.591-3.17 5.558a1.51 1.51 0 01-2.748-.273 1.508 1.508 0 01.083-1.156l2.297-4.602a1.166 1.166 0 00-.76-1.653l-4.66-1.166a1.168 1.168 0 00-1.324.61l-4.554 9.122-5.621 4.826a1.725 1.725 0 01-1.322.409 1.717 1.717 0 01-1.203-.687 1.746 1.746 0 01.26-2.369l6.087-5.225c.143-.128.255-.283.325-.457zM170.406 174.999v-5.834l1.398 1.867 1.864-1.4-3.495-4.667c-.439-.588-1.425-.588-1.864 0l-3.494 4.667 1.863 1.4 1.398-1.867v5.834h2.33zM182.287 156.797l-3.494 4.667 1.864 1.4 1.397-1.867v14h2.33v-14l1.398 1.867 1.864-1.4-3.495-4.667c-.439-.588-1.425-.588-1.864 0zM198.362 175v-23.333l1.398 1.867 1.864-1.4-3.495-4.667c-.438-.588-1.424-.588-1.863 0l-3.495 4.667 1.864 1.4 1.398-1.867V175h2.329z"
        fill="#DE285E"
      />
      <Defs>
        <LinearGradient id="paint0_linear_3397_42077" x1={142} y1={91} x2={82} y2={151} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#4030A5" />
          <Stop offset={1} stopColor="#EE7738" />
        </LinearGradient>
        <LinearGradient id="paint1_linear_3397_42077" x1={277} y1={151} x2={217} y2={91} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#20B55C" />
          <Stop offset={1} stopColor="#4030A5" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_3397_42077"
          x1={109}
          y1={196}
          x2={252}
          y2={196}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EE7738" />
          <Stop offset={1} stopColor="#20B55C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
