import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { getLeads, deleteLeads } from "../../actions/leads";

class Leads extends Component {
  static PropPropTypesTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <div>
        <h2>Leads</h2>
        <table className="table table-striped table-responsive ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-secondary btn-sm"> Edit</button>
                </td>
                <td>
                  <button
                    onClick={this.props.deleteLeads.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLeads }
)(Leads);
