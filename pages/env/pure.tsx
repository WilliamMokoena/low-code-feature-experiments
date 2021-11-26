export default function PureCSS() {
    return (
        <html lang="en">

            <head>
                <meta charSet="utf-8"></meta>
                <title>PureCSS Sandbox</title>
                <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"></link>
                <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css"
                    integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossOrigin="anonymous"></link>
            </head>

            <body onClick={e => console.log(e.target)}>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Honda</td>
                            <td>Accord</td>
                            <td>2009</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Toyota</td>
                            <td>Camry</td>
                            <td>2012</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Hyundai</td>
                            <td>Elantra</td>
                            <td>2010</td>
                        </tr>
                    </tbody>
                </table>

            </body>
        </html>

    )
}

