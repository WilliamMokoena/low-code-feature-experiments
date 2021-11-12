import Landlocker from "./Landlocker"

import { exampleHtml } from "../../data/example.html"

export default function Sandbox() {
    return (
        <div>
            <Landlocker unsafeHtml={exampleHtml}/>
        </div>
    )
}