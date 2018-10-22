import React, { Component } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

const rows = [
  {id: 0, text: 'Encrypt Storage'},
  {id: 1, text: 'Secure Enclave'},
  {id: 2, text: 'Get Help'},
  {id: 3, text: 'Currency'},
  {id: 4, text: 'About'},
]

const extractKey = ({id}) => id

export default class settings extends Component {

  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
  },
})
