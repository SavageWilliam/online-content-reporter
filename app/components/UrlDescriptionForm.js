import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import ProgressBar from './ProgressBar'
import ConfirmationModal from './ConfirmationModal'
import Header from './Header'
import Footer from './Footer'
import SectionTitle from '../components/SectionTitle'
import '../scss/style.scss'
import axios from 'axios'

const styles = {
  errorStyle: {
    color: '#EB5857'
  }
}

class UrlDescriptionForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleUrlSubmit.bind(this)
  }

  handleUrlSubmit () {
    const { imageCriteria, url, description } = this.props
    var payload = { imageCriteria, url, description }
    return axios.post('/email', payload)
      .catch((error) => {
        console.log(error)
      })
  }

  renderRequiredMessage () {
    if (this.props.urlRequiredMessage) {
      return (
        <h2 className='required'>You can't proceed without sharing at least one url.</h2>
      )
    }
  }

  render () {
    return (
      <div>
        <Header />
        <ProgressBar form='2' />
        <SectionTitle
          heading='REPORT CONTENT WEB ADDRESS'
          subheading='Please include any info that you think may help us, such as:'
        />
        <div className='instruction-list'>
          <ul>
            <li>where you found the image or video</li>
            <li>if there's more than one website</li>
            <li>whether you need a username and password to gain access</li>
          </ul>
        </div>
        <div className='form-container'>
          <h3 className='section-title'>WEB ADDRESS</h3>
          <form>
            <div className='input-field col s6'>
              <TextField
                hintText='If there is more than one website, add these in the box below'
                floatingLabelText='url'
                value={this.props.url}
                errorText='This field is required'
                onChange={e => this.props.saveUrl(e.target.value)}
                errorStyle={styles.errorStyle}
              /><br />
              {this.renderRequiredMessage()}
              </div>
              <div className='input-field-2 input-field col s6 '>
                <TextField
                  hintText='Tell us about where you found the image'
                  floatingLabelText='Description'
                  multiLine={true}
                  rows={4}
                  value={this.props.description}
                  onChange={e => this.props.saveDescription(e.target.value)}
                /><br />
              </div>
              <div className='buttons'>
                <RaisedButton
                  label='Previous'
                  primary={true}
                  onClick={() => this.props.changeForm()}
                />
                <RaisedButton
                  label='Submit'
                  primary={true}
                  onClick={(e) => {
                    if (!this.props.url) {
                      this.props.showUrlRequiredMessage()
                    } else {
                      this.props.changeModal()
                      this.handleUrlSubmit()
                    }
                  }}
                  id='submit-url'
                />
              </div>
          </form>
        </div>
        <ConfirmationModal {...this.props} />
        <Footer />
      </div>
    )
  }
}

export default UrlDescriptionForm
