import { PureComponent } from "react"
import { createPortal } from "react-dom"

export default class Sandbox extends PureComponent {
    private container
    private iframe

    constructor(props) {
        super(props);
        if (process.browser)
            this.container = document.createElement("div");
    }

    render() {
        return (
            this.container ? <iframe title="sandbox" ref={el => (this.iframe = el)}>
                {createPortal(this.props.children, this.container)}
            </iframe> : ""
        );
    }

    componentDidMount() {
        this.iframe.contentDocument.body.appendChild(this.container);
    }
}
