import * as types from '../../constants/action-types.js'

export const addQr = (qrSvg) => {
  return {
    type: types.ADD_QR_CODE,
    qrSvg,
    haveQr: true
  }
}

export const setUpForMobile = (href) => {
  return {
    type: types.SET_UP_FOR_MOBILE,
    href,
    target: '_self'
  }
}

export const sagaTest = (tester) => {
  return {
    type: types.TEST,
    tester
  }
}
