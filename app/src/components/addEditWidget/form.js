import React from "react";

const Form = ({data, onSubmit, onChange, onCheckChange}) => (
    <div className="row">
        <div className="col-lg-12">
            <div className="widget">
                <div className="widget-body">
                    <form className="form-horizontal" onSubmit={onSubmit}>
                        <legend>{data.id ? "Update" : "Create"} Widget</legend>
                        <div className="controls">
                            Name
                            <input id="widget-name" name="name" type="text" placeholder="foo-bar" className="input-medium" value={data.name} onChange={onChange}/>
                        </div>

                        <div className="controls">
                            <div className="input-prepend">
                                Price
                                <span className="add-on">$</span>
                                <input id="widget-price" name="price" className="input-medium" placeholder="0.00" type="text" value={data.price} onChange={onChange}/>
                            </div>
                        </div>

                        <div className="controls">
                            Color
                            <select id="widget-color" name="color" className="input-large" value={data.color} onChange={onChange}>
                                <option value="">Please select a color</option>
                                <option value="red">red</option>
                                <option value="purple">purple</option>
                                <option value="black">black</option>
                                <option value="green">green</option>
                                <option value="magenta">magenta</option>
                                <option value="white">white</option>
                                <option value="depends on the viewing angle">depends on the viewing angle</option>
                            </select>
                        </div>

                        <div className="controls">
                            Melts
                            <input type="checkbox" name="melts" id="widget-properties-0" checked={data.melts} onChange={onCheckChange}/>
                        </div>

                        <div className="controls">
                            Inventory
                            <input id="widget-count" name="inventory" type="text" placeholder="#?" className="input-small" value={data.inventory} onChange={onChange}/>
                        </div>
                        <div className="controls">
                            <button className="btn btn-sm btn-info" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Form;