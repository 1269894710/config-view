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
          id: '1',
          flex: 4,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'pictorialBar'
            }
          }
        },
        {
          id: '2',
          flex: 2,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试1'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'continuousBar'
            }
          }
        },
        {
          id: '3',
          flex: 4,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试2'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'graphBar'
            }
          }
        },
        {
          id: '4',
          flex: 2,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试3'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'continuousBar'
            }
          }
        }
      ]
    },
    {
      flex: 5,
      col: 2,
      span: 16,
      items: [
        {
          id: '5',
          flex: 6,
          card: {
            cardType: '',
            cardContent: {
              type: 'charts',
              chartsType: 'map'
            }
          }
        },
        {
          id: '6',
          flex: 2,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试5'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'threedBar'
            }
          }
        }
      ]
    },
    {
      flex: 3,
      col: 4,
      span: 10,
      items: [
        {
          id: '7',
          flex: 4,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试6'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'bar'
            }
          }
        },
        {
          id: '8',
          flex: 2,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试7'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'continuousBar'
            }
          }
        },
        {
          id: '9',
          flex: 4,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试8'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'bar'
            }
          }
        },
        {
          id: '10',
          flex: 2,
          card: {
            cardType: 'borderCard',
            cardHeader: {
              title: '测试9'
            },
            cardContent: {
              type: 'charts',
              chartsType: 'continuousBar'
            }
          }
        }
      ]
    }
  ]
}
