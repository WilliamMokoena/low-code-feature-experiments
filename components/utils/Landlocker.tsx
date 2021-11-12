import DOMPurify from "dompurify"

export default function Landlocker({ unsafeHtml }: any) {
    // const saferHtml = DOMPurify.sanitize(unsafeHtml)
    return (<div dangerouslySetInnerHTML={{ __html: unsafeHtml }} />)
}