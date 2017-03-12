import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import addQr from '../actions'

const listenForToken = (proto, url) => {
  var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto
  var socket = new WebSocket(host)
  socket.onopen = () => {
    socket.send(JSON.stringify({subscription: proto}))
  }
  socket.onmessage = (msg) => {
    var data = JSON.parse(msg.data)
    switch (data.status) {
      case 'COMPLETED' : {
        this.yotiRedirect(data.token)
      }
    }
  }
}

export function * getQrCodeEffect (getQrAction) {
  const response = yield call(axios.get, '/get-qr')
  if (response.status === 200) {
    console.log(response.data)
    yield put(addQr(response.svg))
    yield call(listenForToken, response.proto, response.url)
  } else {
    console.log('ERRor in saga')
  }
}
