import { expect } from 'chai'
import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import Home from '../../../app/containers/Home'

let state= {
  yoti: {
    isMobile: false,
    target: '_blank',
    haveQr: false,
    showQr: false,
    isAgeVerified: false,
    isUnder18: false,
    isOver18: false,
    href: null,
    buttonLabelStyle: { fontSize: '1.1rem', textTransform: 'none', fontFamily: 'childline' },
    buttonStyle: { padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem' }
  },
  forms: {
    modalIsOpen: false,
    firstForm: true,
    imageCriteria: [],
    url: '',
    description: '',
    criteriaRequiredMessage: false,
    urlRequiredMessage: false,
    validEmail: true,
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false
  }
}

describe('example shallowWithStore', () => {
  describe('state', () => {
    const mapStateToProps = (state) => ({
      yoti :state.yoti
    });
    const ConnectedComponent = connect(mapStateToProps)(Home)
    const component = shallowWithStore(<ConnectedComponent />, createMockStore(state))
    it('initialize pop.yoti.haveQr to be false', () => {
      expect(component.props().yoti.haveQr).to.equal(false)
    })
    it('initialize pop.yoti.isMobile to be false', () => {
      expect(component.props().yoti.isMobile).to.equal(false)
    })
    it('initialize pop.yoti.showQr to be false', () => {
      expect(component.props().yoti.showQr).to.equal(false)
    })
    it('initialize pop.yoti.isAgeVerified to be false', () => {
      expect(component.props().yoti.isAgeVerified).to.equal(false)
    })
    it('initialize pop.yoti.isUnder18 to be false', () => {
      expect(component.props().yoti.isUnder18).to.equal(false)
    })
    it('initialize pop.yoti.isOver18 to be false', () => {
      expect(component.props().yoti.isOver18).to.equal(false)
    })
    it('initialize pop.yoti.href to be null', () => {
      expect(component.props().yoti.href).to.equal(null)
    })
    it('initialize pop.yoti.buttonLabelStyle', () => {
      expect(component.props().yoti.buttonLabelStyle).to.deep.equal({ fontSize: '1.1rem', textTransform: 'none', fontFamily: 'childline' })
    })
    it('initialize pop.yoti.buttonStyle', () => {
      expect(component.props().yoti.buttonStyle).to.deep.equal({ padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem' })
    })
  })
})

/*import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../../app/containers/Home'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
//
 describe('<Home /> ', () => {
/*     const wrapper = shallow(<Home />)
     expect(wrapper.find('.home-header')).to.have.length(1)
   })*/
//    it('<Home /> should render a <RaisedButton/> element', () => {
//     const wrapper = shallow(<Home />)
//     expect(wrapper.find(RaisedButton)).to.have.length(1)
//   })
//   it('<Home /> should render a <Link /> element', () => {
//    const wrapper = shallow(<Home />)
//    expect(wrapper.find(Link)).to.have.length(1) // update the test when we remove the other link
//  })
//
// })
// describe('<Home /> children node tests', () => {
//   it('<Home /> should render an element with className home-title', () => {
//     const wrapper = shallow(<Home />)
//     expect(wrapper.find('.home-title')).to.have.length(1)
//   })
//   it('<Home /> should render an element with className home-info', () => {
//     const wrapper = shallow(<Home />)
//     expect(wrapper.find('.home-info')).to.have.length(1)
//   })
//   it('<Home /> should render an element with className section-title', () => {
//     const wrapper = shallow(<Home />)
//     expect(wrapper.find('.section-title')).to.have.length(1)
//   })
 //})
