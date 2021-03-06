import React, { Component } from 'react'
import { SimpleList } from 'packlist-components/native'
import {observer, inject} from 'mobx-react/native'

@inject('listStore')
@observer
export default class ListItems extends Component {
  render () {
    return (
      <SimpleList
        value={[...this.props.listStore.allItems]}
      />
    )
  }
}
