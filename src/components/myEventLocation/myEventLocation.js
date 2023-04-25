import React from "react";
import Button from "react-bootstrap/Button";

const MyEventLocation = ({ list = [], onEdit, onDelete }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Events</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((listItem) => (
            <tr key={listItem.id}>
              <th scope="row">{listItem.name}</th>
              <td>{listItem.location}</td>
              <td>{listItem.events}</td>
              <td>
                <div className="d-flex gap-20">
                  <div>
                      <Button onClick={() => onEdit(listItem.id)} size="sm" clssName="mr-4 margin-right-20">
                        Edit
                      </Button>
                      <Button
                        onClick={() => onDelete(listItem.id)}
                        size="sm"
                        className="bg-danger"
                      >
                        Delete
                      </Button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          {!list.length && (
            <tr className="border-bottom" role="tr">
              <td role="td">No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyEventLocation;
