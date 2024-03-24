import { config, graph } from '@grafbase/sdk'

export default config({
  graph: graph.Federated(),
})

