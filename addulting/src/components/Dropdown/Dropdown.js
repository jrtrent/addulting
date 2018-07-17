import React, {Component} from "react";


const options = [
    'High', 'Medium',"Low"
]

class Priority extends Component {
    constructor (props) {
        super (props)
        this.state = {
            selected:options[0]
        }
        this._onSelect =this.onSelect.bind(this)
    }

    _onSelect (option) {
        console.log(option.label)
        this.setState({selected: option})
    }

    render () {
        const defaultOption=this.state.selected
        const placeHolderValue=typeof this.state.select ==='string' ? this.state.selected : this.state.selected.label

        return (
            <section>
                <h4>What is the Priority of this Task</h4>
                <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an Option" />
                <div className='result'>
                    {placeHolderValue}
                </div>

            <section>
                <h4> Options: </h4>
                <div className='code'>
                    <pre>
                        {`
                        const options = [
                            'High', 'Medium', 'Low']
                            `}
                        </pre>
                    </div>
                </section>
            </section>
        )
    }
}

export default Priority
                

    