import React, { useState } from "react"

let count = 0
export default function InputField () {
    const [formData, setFormData] = useState({
        title: '',
        name: ''
    })
    // count++
    // console.log('Rerendering count:', count)

    const handleChange = (e) => {
        const {name, value} = e.target
    //     console.log(e.target.name)
    //     if (name == 'title') {
    //         setTitle(value)
    //     } else if (name == 'name') {
    //         setName(value)
    //     }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('formData', formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input type="text" name="title" value={formData.title} onChange={handleChange}/>
                </label>
                <label>
                    Name
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>

                <div>
                    Form Data: {JSON.stringify(formData)}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// Same functionalities with class copmonent

// export default class InputField extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             formData: {
//                 title: '',
//                 name: ''
//             }
//         }
//     }

//     handleChange = (e) => {
//         const {name, value} = e.target
//         console.log(name, value)
//         this.setState((prevData) => ({
//             formData: {
//                 ...prevData,
//                 [name]: value,
//             }
//         }))
//     }

//     handleSubmit = (e) => {
//         console.log('FomData:', this.state.formData)
//     }

//     render () {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Title
//                         <input type="text" name="title" value={this.state.formData.title} onChange={this.handleChange}/>
//                     </label>
//                     <label>
//                         Name
//                         <input type="text" name="name" value={this.state.formData.name} onChange={this.handleChange}/>
//                     </label>
    
//                     <div>
//                         Form Data: 
//                         Title: {this.state.formData.title}
//                         Name: {this.state.formData.name}
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

