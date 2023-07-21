import * as React from "react";
interface IProps {
    match: any;
}
export default React.memo((props: IProps) => {
    console.log(props.match.params.name);
    return (
        <>
            <p style={{ width: '100%', textAlign: 'center', fontSize: '16px', color: 'red', marginTop: '300px' }}>{props.match.params.name}</p>
        </>
    )
})