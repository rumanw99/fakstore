import React from 'react'

const BillingAddress = () => {
  return (
    <div className="col-lg-8">
    <div className="mb-4">
        <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
        <div className="row">
            <div className="col-md-6 form-group">
                <label>First Name</label>
                <input className="form-control" type="text" placeholder="John"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" placeholder="Doe"/>
            </div>
            <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input className="form-control" type="text" placeholder="example@email.com"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input className="form-control" type="text" placeholder="+123 456 789"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Address Line 1</label>
                <input className="form-control" type="text" placeholder="123 Street"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Address Line 2</label>
                <input className="form-control" type="text" placeholder="123 Street"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Country</label>
                <select defaultValue className="custom-select">
                    <option >United States</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                </select>
            </div>
            <div className="col-md-6 form-group">
                <label>City</label>
                <input className="form-control" type="text" placeholder="New York"/>
            </div>
            <div className="col-md-6 form-group">
                <label>State</label>
                <input className="form-control" type="text" placeholder="New York"/>
            </div>
            <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input className="form-control" type="text" placeholder="123"/>
            </div>
            <div className="col-md-12 form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" defaultChecked={false} id="newaccount"/>
                    <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                </div>
            </div>
            <div className="col-md-12 form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" defaultChecked={false} id="shipto"/>
                    <label className="custom-control-label" htmlFor="shipto"  data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                </div>
            </div>
        </div>
    </div>
    <div className="collapse mb-4" id="shipping-address">
        <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
        <div className="row">
            <div className="col-md-6 form-group">
                <label>First Name</label>
                <input className="form-control" type="text" placeholder="John"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" placeholder="Doe"/>
            </div>
            <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input className="form-control" type="text" placeholder="example@email.com"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input className="form-control" type="text" placeholder="+123 456 789"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Address Line 1</label>
                <input className="form-control" type="text" placeholder="123 Street"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Address Line 2</label>
                <input className="form-control" type="text" placeholder="123 Street"/>
            </div>
            <div className="col-md-6 form-group">
                <label>Country</label>
                <select defaultValue className="custom-select">
                    <option >United States</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                </select>
            </div>
            <div className="col-md-6 form-group">
                <label>City</label>
                <input className="form-control" type="text" placeholder="New York"/>
            </div>
            <div className="col-md-6 form-group">
                <label>State</label>
                <input className="form-control" type="text" placeholder="New York"/>
            </div>
            <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input className="form-control" type="text" placeholder="123"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default BillingAddress