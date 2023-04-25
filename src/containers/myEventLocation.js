import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import MyEventLocation from "../components/myEventLocation/myEventLocation";
import AddEditMyEventLocation from "../components/myEventLocation/addEdiMyEventLocationModal";
import {
  setSelectedFormValuesTour,
  deleteSelectedTour,
  setShowAddEditMyEventLocation,
  updateListAndResetValues,
} from "../store/slices/myEventLocationSlice";

const MyEventLocationContainer = () => {
  const dispatch = useDispatch();
  const { list, showAddEditMyEventLocation, defaultFormValues } = useSelector(
    (state) => state.myEventLocation
  );

  const onEdit = (id) => {
    const currentSelectedFormValue = list.find((item) => item.id === id);
    dispatch(setSelectedFormValuesTour(currentSelectedFormValue));
    dispatch(setShowAddEditMyEventLocation(true));
  };

  const onDelete = (id) => {
    dispatch(deleteSelectedTour(id));
  };

  const onSubmit = (e, formFields) => {
    e.preventDefault();
    dispatch(updateListAndResetValues(formFields));
  };

  return (
    <Container className="mt-5">
      <section className="d-flex justify-content-between">
        <h3 className="">Event location</h3>
        <Button
          className="bg-success"
          onClick={() => dispatch(setShowAddEditMyEventLocation(true))}
        >
          Add Event
        </Button>
      </section>
      <div className="mt-3">
        {showAddEditMyEventLocation && (
          <AddEditMyEventLocation
            defaultFormValues={defaultFormValues}
            show={showAddEditMyEventLocation}
            onHide={() => dispatch(setShowAddEditMyEventLocation(false))}
            onSubmit={onSubmit}
          />
        )}
        <MyEventLocation list={list} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </Container>
  );
};

export default MyEventLocationContainer
