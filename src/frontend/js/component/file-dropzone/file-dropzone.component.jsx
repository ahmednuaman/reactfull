import autobind from 'autobind-decorator'
import classnames from 'classnames'
import React from 'react'

@autobind
class FileDropzone extends React.Component {
  fileInput = null
  formWrapper = null
  state = {
    hover: false
  }

  hovering (hover) {
    this.setState({ hover })
  }

  stopEvent (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  onClick () {
    this.fileInput.click()
  }

  onDrop (event) {
    this.stopEvent(event)
    this.hovering(false)

    this.props.onFiles(event.dataTransfer ? event.dataTransfer.files : event.target.files)
    this.formWrapper.reset()
  }

  onDragEnterOver (event) {
    this.stopEvent(event)
    this.hovering(true)
  }

  onDragEndLeave (event) {
    this.stopEvent(event)
    this.hovering(false)
  }

  render () {
    const inputAttrs = {
      accept: this.props.accept,
      type: 'file',
      style: {
        display: 'none'
      },
      multiple: this.props.multiple,
      onChange: this.onDrop,
      ref: (el) => {
        this.fileInput = el
      }
    }

    const formRef = (el) => {
      this.formWrapper = el
    }

    return (
      <div
        onClick={this.onClick}
        onDrop={this.onDrop}
        onDragEnter={this.onDragEnterOver}
        onDragOver={this.onDragEnterOver}
        onDragEnd={this.onDragEndLeave}
        onDragLeave={this.onDragEndLeave}
        className={
          classnames('file-dropzone', {
            hover: this.state.hover
          })
        }
      >
        <form ref={formRef}>
          <input {...inputAttrs} />
        </form>
        {this.props.children}
      </div>
    )
  }
}

export default FileDropzone
