export const flexData = {
  direction: 'row', // column
  row: 3,
  span: 15,
  list: [
    {
      flex: 3,
      col: 4,
      span: 8,
      items: [
        {
          flex: 4,
          type: 'line'
        },
        {
          flex: 2,
          type: 'bar'
        },
        {
          flex: 4,
          type: 'pie'
        },
        {
          flex: 2,
          type: 'pie'
        }
      ]
    },
    {
      flex: 5,
      col: 2,
      span: 16,
      items: [
        {
          flex: 6,
          type: 'line'
        },
        {
          flex: 2,
          type: 'bar'
        }
      ]
    },
    {
      flex: 3,
      col: 4,
      span: 10,
      items: [
        {
          flex: 4,
          type: 'line'
        },
        {
          flex: 2,
          type: 'bar'
        },
        {
          flex: 4,
          type: 'bar'
        },
        {
          flex: 2,
          type: 'bar'
        }
      ]
    }
  ]
}
