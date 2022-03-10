import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLine } from 'victory';


class Graph extends React.Component {
  constructor() {
    super()
    this.state = {
      difficulty: true,
      fun: true,
      isButtonClicked: true
    }

    this.showDifficulty = this.showDifficulty.bind(this)
    this.showLineGraph = this.showLineGraph.bind(this)
  }

  showDifficulty() {
    this.setState({ difficulty: !this.state.difficulty })
  }

  showFun() {
    this.setState({ fun: !this.state.fun })
  }

  showLineGraph() {
    this.setState({ isButtonClicked: !this.state.isButtonClicked })
  }

  render() {
    const graphData = this.props.averageData
    return (
      <div className='graph'>
        <div className='graphbutton'>
          <button onClick={() => this.showDifficulty()}>
            {this.state.difficulty ? 'Hide Difficultylevel' : 'Show Difficultylevel'}
          </button>
          <button onClick={() => this.showFun(this.state.fun)}>
            {this.state.fun ? 'Hide Funfactor' : 'Show Funfactor'}
          </button>
          <button onClick={() => this.showLineGraph(this.state.difficulty)}>
            {this.state.isButtonClicked ? 'Display Line-Graph' : 'Display Bar-Graph'}
          </button>
        </div><div className="legend">
          <div className="difficulty" />
          <p>Difficultylevel</p>
          <div className="fun" />
          <p>Funfactor</p>
        </div>
        <VictoryChart
          height={175}
          maxDomain={{ x: 57 }}
          padding={{ left: 25, top: 25, right: 10, bottom: 70 }}

        >
          <VictoryAxis
            dependentAxis
            domain={{ y: [0, 5] }}
            style={{
              grid: { stroke: 'grey', strokeWidth: 0.5 },
              tickLabels: {
                fontSize: 5
              }
            }}
          />
          <VictoryAxis
            independentAxis
            style={{
              tickLabels: {
                fontSize: 4,
                textAnchor: 'end',
                angle: -35
              }
            }}
          />
          {this.state.isButtonClicked ? (
            <VictoryGroup offset={4} style={{ data: { width: 8 } }}>
              {this.state.difficulty ? (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={graphData}
                  x='name'
                  y='level'
                  barWidth={3}
                  style={{ data: { fill: '#4a90e1' } }}
                />
              ) : (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={graphData}
                  x='name'
                  y='level'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
              {this.state.fun ? (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={graphData}
                  x='name'
                  y='fun'
                  barWidth={3}
                  style={{ data: { fill: 'white' } }}
                />
              ) : (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={graphData}
                  x='name'
                  y='fun'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
            </VictoryGroup>
          ) : (
            <VictoryGroup
              colorScale={['#4a90e1', '#ffffff']}
              offset={4}
              style={{ data: { width: 8 } }}
            >
              {this.state.difficulty ? (
                <VictoryLine animate={{ duration: 1000 }} data={graphData} x='name' y='level' barWidth={3} />
              ) : (
                <VictoryLine
                  data={graphData}
                  x='name'
                  y='level'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
              {this.state.fun ? (
                <VictoryLine animate={{ duration: 1000 }} data={graphData} x='name' y='fun' barWidth={3} />
              ) : (
                <VictoryLine
                  data={graphData}
                  x='name'
                  y='fun'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
            </VictoryGroup>
          )}
        </VictoryChart>
      </div>
    )
  }
};

export default Graph;
