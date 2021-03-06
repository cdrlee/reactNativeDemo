import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import Tabbar from '../Components/TabBar'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OrderListScreenStyle'

class OrderListScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView >
          <KeyboardAvoidingView behavior='position'>
            <Text>OrderListScreen</Text>
        </KeyboardAvoidingView>
        </ScrollView>
        <Tabbar navTo={navigate.bind(this)} initTab="OrderListScreen" />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListScreen)
