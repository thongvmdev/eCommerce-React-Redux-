import { connect } from 'react-redux'
import App from '../components/index'
import { addToCart, updateCart } from '../../lib/actions'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (item, quantity) => dispatch(addToCart(item, quantity)),
        onUpdateCart: (item, quantity) => dispatch(updateCart(item, quantity))
    }   
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


