/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, userInfo, shortName, contact) => {
  userInfo = userInfo || {};
  call(url, userInfo, shortName, contact);
}
JitsiMeetModule.audioCall = (url, userInfo, shortName, contact) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo, shortName, contact);
}
export default JitsiMeetModule;


