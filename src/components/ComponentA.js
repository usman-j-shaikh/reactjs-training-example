import ComponentB from "./ComponentB";

export default function ComponentA (props) {
    props.onGetData('Test')
    return (
        <ComponentB />
    )
}