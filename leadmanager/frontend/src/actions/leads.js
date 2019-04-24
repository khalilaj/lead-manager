import axios from "axios";

import { createMessage, returnErrors } from "./messages";

import {
  GET_LEADS,
  DELETE_LEAD,
  ADD_LEAD,
  PUT_LEAD,
  GET_ERRORS
} from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE LEAD
export const deleteLeads = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//PUT LEAD
export const putLead = (lead, id) => dispatch => {
  axios
    .put(`/api/leads/${id}/`, lead)
    .then(res => {
      dispatch({
        type: PUT_LEAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//ADD LEAD
export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
