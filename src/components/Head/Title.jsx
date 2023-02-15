import Head from 'next/head'

export default function Title(props) {
    return (
        <>
            <Head>
                <title>
                    {props.name} • A7x Import's
                </title>
            </Head>
        </>
    )
}