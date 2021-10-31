<template>
  <a-table :columns="columns" :data-source="dataSource" row-key="property">
  </a-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import tableProps from './tableProps.json'

const columnDef = [
  {
    align: 'center',
    ellipsis: false,
    dataIndex: 'property',
    fixed: false,
    key: 'property',
    title: 'Property',
    customRender: undefined,
    sorter: false,
    sortOrder: false,
    width: 150,
    customCell: undefined,
    slots: undefined,
    scopedSlots: undefined
  },
  {
    align: 'center',
    ellipsis: false,
    dataIndex: 'description',
    fixed: false,
    key: 'description',
    title: 'Description',
    customRender: undefined,
    sorter: false,
    sortOrder: false,
    width: 200,
    customCell: undefined,
    slots: undefined,
    scopedSlots: undefined
  }
]

@Component
export default class Table01 extends Vue {
  columns: Array<any> = columnDef
  dataSource: Array<any> = tableProps
}
</script>
