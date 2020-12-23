import React, {useState} from 'react'

const Contact=()=>{
  const [data, setData] = useState({
    fullname:'',
    mobile:'',
    email:'',
    msg:''
  });

  const InputEvent=(event)=>{
    const {name, value} = event.target;
    setData((preVal)=>{
      return {
        ...preVal,
      [name]: value
      };
    });
  };

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`Your Name is ${data.fullname} `)
  }

return(
    <>
    <div className="my-5">
      <h1 className="text-center">
        Contact Us
      </h1>
    </div>

    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">

                  <form onSubmit={formSubmit}>

          <div className="form-group">
            <label for="exampleFormControlInput1">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"
            name="fullname"
            value={data.fullname}
            onChange={InputEvent}
            placeholder="Your Full Name" />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Mobile No</label>
            <input type="number" className="form-control" id="exampleFormControlInput1"
            name="mobile"
            value={data.mobile}
            onChange={InputEvent}
            placeholder="Your Mobile No" />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"
            name="email"
            value={data.email}
            onChange={InputEvent}
            placeholder="name@example.com" />
          </div>
          
        
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
            name="msg"
            value={data.msg}
            onChange={InputEvent}
            ></textarea>
          </div>

          <button type="submit" class="btn btn-outline-primary">Submit</button>

        </form>
   
        </div>
      </div>
    </div>



    </>
  )
}

export default Contact;