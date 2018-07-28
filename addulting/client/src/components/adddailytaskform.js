
  state = {
    name: "",
    subject:"",
    priority:"",
    estTime: "",
    recurring:"",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newdailyTask = {
            name: this.state.task,
            subject:this.state.subject,
            priority: this.state.priority,
            estTime: this.state.estTime,
            recurring: this.state.recurring,
            
            

        }
    }
<form>
<FormGroup controlId="formBasicText" />
    <ControlLabel>"New Task"</ControlLabel>
    <FormControl
    type="text"
    value={this.state.value}
    placeholder="New Task"
    onChange={this.handleInputChange} 
    />
<FormGroup controlId="formControlSelect" />
    <ControlLabel>Subject</ControlLabel>
    <FormControl componentClass="select" placeholder="Subject">
    <option value='1'>Option1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
    </FormControl>
<FormGroup controlId="formControlSelect" />
    <ControlLabel>Priority</ControlLabel>
    <FormControl componentClass="select" placeholder="Priority">
    <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
</FormControl>
<FormGroup controlId="formControlSelect" />
    <ControlLabel>Subject</ControlLabel>
<FormControl componentClass="select" placeholder="Recurring">
        <option value='yes'>No</option>
        <option value='no'>No</option>
</FormControl>
<FormGroup controlId="formBasicText" />
<ControlLabel>Estimated Time</ControlLabel>
<FormControl
    type="number"
    value={this.state.value}
    placeholder="Est.Time"
    onChange={this.handleInputChange} />
</form>



