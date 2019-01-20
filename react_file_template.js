'use strict'
const React = require('react')
const ipfsClient = require('ipfs-http-client')

const fileReaderPullStream = require('pull-file-reader')

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      added_file_hash: null
    }
    this.ipfs = ipfsClient('localhost', '5001')

    this.captureFile = this.captureFile.bind(this)
    this.saveToIpfs = this.saveToIpfs.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  captureFile (event) {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    this.saveToIpfs(file)
  }

  saveToIpfs (file) {
    let ipfsId
    const fileStream = fileReaderPullStream(file)
    this.ipfs.add(fileStream, { progress: (prog) => console.log(`received: ${prog}`) })
      .then((response) => {
        console.log(response)
        ipfsId = response[0].hash
        console.log(ipfsId)
        this.setState({added_file_hash: ipfsId})
      }).catch((err) => {
        console.error(err)
      })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <form id='captureMedia' onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.captureFile} /><br/>
          <label htmlFor='keepFilename'><input type='checkbox' id='keepFilename' name='keepFilename' /> keep filename</label>
        </form>
        <div>
          <a target='_blank'
            href={'https://ipfs.io/ipfs/' + this.state.added_file_hash}>
            {this.state.added_file_hash}
          </a>
        </div>
      </div>
    )
  }
}
module.exports = App