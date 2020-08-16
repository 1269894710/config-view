export const flexData = {
  row: 3,
  span: 10,
  list: [
    {
      col: 3,
      span: 8,
      items: [
        {
          type: 'line'
        },
        {
          flex: 1,
          type: 'bar'
        },
        {
          flex: 1,
          type: 'pie'
        }
      ]
    },
    {
      col: 2,
      span: 16,
      items: [
        {
          flex: 3,
          type: 'line'
        },
        {
          flex: 4,
          type: 'bar'
        }
      ]
    },
    {
      col: 4,
      span: 10,
      items: [
        {
          flex: 6,
          type: 'line'
        },
        {
          flex: 6,
          type: 'bar'
        },
        {
          flex: 6,
          type: 'bar'
        },
        {
          flex: 6,
          type: 'bar'
        }
      ]
    }
  ]
}
